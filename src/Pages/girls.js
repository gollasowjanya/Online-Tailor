import React, { useEffect, useState } from 'react';
import './cards.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from './../auth/actions/authSlice';
import { useBag } from './BagContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import axios from 'axios'; // Import axios for making HTTP requests
import Aos from 'aos';
import './../../node_modules/aos/dist/aos.css';

const Girls = () => {
  const [designs, setDesigns] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedPrice, setSelectedPrice] = useState({ min: 0, max: 5000 });
  const [subcategories, setSubcategories] = useState([]);
  const { addToBag } = useBag();
  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetchData(); 
  }, []);

  const handleFiltersButtonClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('All');
    filterData(category, selectedSubcategory, selectedPrice);
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    filterData(selectedCategory, subcategory, selectedPrice);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setSelectedPrice({ ...selectedPrice, [name]: parseInt(value, 10) });
  };

  const handleApplyFilter = () => {
    filterData(selectedCategory, selectedSubcategory, selectedPrice);
  };

  const handleResetFilter = () => {
    setSelectedCategory('All');
    setSelectedSubcategory('All');
    setSelectedPrice({ min: 0, max: 5000 });
    filterData('All', 'All', { min: 0, max: 5000 });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/gallery');
      setDesigns(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const filterData = () => {
    let filtered = designs;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (selectedSubcategory !== 'All') {
      filtered = filtered.filter((item) => item.model === selectedSubcategory);
    }

    filtered = filtered.filter((item) => {
      const itemPrice = Number(item.price.split('/')[0]);
      return itemPrice >= selectedPrice.min && itemPrice <= selectedPrice.max;
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
  }, [selectedCategory, selectedSubcategory, selectedPrice]);
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(selectAuth);
  const handleSelectDesign = (item) => {
    if (isAuthenticated) {
      addToBag(item);
      toast.success('Item added to bag');
      navigate('/measurementspage');
      console.log('Navigating to measurementspage');
    } else {
      toast.error('You are not logged in. Please login to select this design.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
      });
      navigate('/login');
    }
  };

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos='fade-up' className='title'>
          <span>Designs</span>
        </h3>
      </div>
      <div data-aos='fade-up' className='filter-section'>
        <div data-aos='fade-up' className='filter-category'>
          <label data-aos='fade-up'>Category:</label>
          <select
            data-aos='fade-up'
            className='filter-dropdown'
            value={selectedCategory}
            onChange={(e) => handleFiltersButtonClick(e.target.value)}
          >
            <option value='All'>All</option>
            <option value='Baby Girl'>Baby Girl</option>
            <option value='Boy'>Boy</option>
            <option value='women'>Women</option>
            <option value='men'>Men</option>
          </select>
        </div>
        {selectedCategory !== 'All' && (
          <div data-aos='fade-up' className='filter-category'>
            <label data-aos='fade-up'>Subcategory:</label>
            <select
              data-aos='fade-up'
              className='filter-dropdown'
              value={selectedSubcategory}
              onChange={(e) => handleSubcategoryChange(e.target.value)}
            >
              <option value='All'>All</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        )}
        <div data-aos='fade-up' className='filter-price'>
          <label data-aos='fade-up'>Price Range:</label>
          <div data-aos='fade-up'>
            <span>Min: {selectedPrice.min}</span>
            <input
              type='range'
              name='min'
              min='0'
              max='5000'
              value={selectedPrice.min}
              onChange={handlePriceChange}
            />
          </div>
          <span>-</span>
          <div data-aos='fade-up'>
            <span>Max: {selectedPrice.max}</span>
            <input
              type='range'
              name='max'
              min='0'
              max='5000'
              value={selectedPrice.max}
              onChange={handlePriceChange}
            />
          </div>
          <button data-aos='fade-up' className='apply-btn' onClick={handleApplyFilter}>
            Apply
          </button>
          <button data-aos='fade-up' className='reset-btn' onClick={handleResetFilter}>
            Reset
          </button>
        </div>
      </div>
      <div className='secContent grid'>
        {filteredData.map(({ id, imgSrc, category, model, price }) => (
          <div key={id} data-aos='fade-up' className='singleDesign'>
            <div className='imageDiv'>
              <img src={imgSrc} alt='design' />
            </div>
            <div className='cardInfo'>
              <h4 className='category'>{category}</h4>
              <div className='fees flex'>
                <div className='model'>
                  <span>{model}</span>
                </div>
                <div className='price'>
                  <h5>{price}</h5>
                </div>
              </div>
              <button
                className='btn flex'
                onClick={() => handleSelectDesign({ id, imgSrc, category, model, price })}
              >
                SELECT THIS DESIGN
                <HiOutlineClipboardCheck className='icon' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Girls;
