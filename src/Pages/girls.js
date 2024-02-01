import React,{useEffect , useState} from 'react'
import './cards.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  selectAuth } from './../auth/actions/authSlice'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baby1 from './../Components/images/baby1.jpg'
import baby2 from './../Components/images/baby2.jpg'
import baby3 from './../Components/images/baby3.jpg'
import baby4 from './../Components/images/baby4.jpg'
import baby5 from './../Components/images/baby5.jpeg'
import baby6 from './../Components/images/baby6.jpg'
import baby7 from './../Components/images/baby7.jpg'
import baby8 from './../Components/images/baby8.jpg'
import baby9 from './../Components/images/baby9.jpg'
import boy1 from './../Components/images/boy1.jpg'
import boy2 from './../Components/images/boy2.jpg'
import boy5 from './../Components/images/boy5.jpeg'
import boy6 from './../Components/images/boy6.jpeg'
import boy7 from './../Components/images/boy7.jpeg'
import boy8 from './../Components/images/boy8.jpeg'
import boy9 from './../Components/images/boy9.jpeg'
import c1 from './../Components/images/c1.jpg'
import c2 from './../Components/images/c2.jpg'
import c3 from './../Components/images/c3.jpg'
import c4 from './../Components/images/c4.jpg'
import card1 from './../Components/images/card1.jpg'
import card2 from './../Components/images/card2.jpg'
import card3 from './../Components/images/card3.jpg'
import card4 from './../Components/images/card4.jpg'
import f1 from './../Components/images/f1.jpg'
import f2 from './../Components/images/f2.jpg'
import f3 from './../Components/images/f3.jpg'
import f4 from './../Components/images/f4.jpg'
import k1 from './../Components/images/k1.jpg'
import k3 from './../Components/images/k3.jpeg'
import k4 from './../Components/images/k4.jpg'
import m1 from './../Components/images/m1.jpg'
import m2 from './../Components/images/m2.jpg'
import m3 from './../Components/images/m3.jpg'
import mcard1 from './../Components/images/mcard1.jpeg'
import mcard2 from './../Components/images/mcard2.jpeg'
import mcard3 from './../Components/images/mcard3.jpeg'
import mp1 from './../Components/images/mp1.jpg'
import mp2 from './../Components/images/mp2.jpg'
import mp3 from './../Components/images/mp3.jpg'
import baby11 from './../Components/images/baby11.jpg'
import ms1 from './../Components/images/ms1.jpg'
import ms2 from './../Components/images/ms2.jpg'
import op2 from './../Components/images/op2.jpg'
import op3 from './../Components/images/op3.jpg'
import op4 from './../Components/images/op4.jpg'
import op5 from './../Components/images/op5.jpg'
import pcard1 from './../Components/images/pcard1.jpg'
import pcard2 from './../Components/images/pcard2.jpg'
import pcard3 from './../Components/images/pcard3.jpg'
import { HiOutlineClipboardCheck } from "react-icons/hi";
import s1 from './../Components/images/s1.jpg'
import s2 from './../Components/images/s2.jpg'
import s3 from './../Components/images/s3.jpg'
import w1 from './../Components/images/w1.jpg'
import w6 from './../Components/images/w6.jpg'
import w5 from './../Components/images/w5.jpg'

import Aos from 'aos'

import './../../node_modules/aos/dist/aos.css'

const Data=[
  {
    id:1,
    imgSrc:baby1,
    'category':'Baby Girl',
    'model':'Frock',
    'price':'1200/-'
  },
  {
    id:2,
    imgSrc:baby2,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id:3,
    imgSrc:baby3,
    'category':'Baby Girl',
    'model':'kurta',
    'price':'600/-'
  },
  {
    id:4,
    imgSrc:baby4,
    'category':'Baby Girl',
    'model':'Frock',
    'price':'1500/-'
  },
  {
    id:5,
    imgSrc:baby5,
    'category':'Baby Girl',
    'model':'Frock',
    'price':'3500/-'
  },
  {
    id:6,
    imgSrc:baby6,
    'category':'Baby Girl',
    'model':'Traditional',
    'price':'500/-'
  },
  {
    id:7,
    imgSrc:baby7,
    'category':'Baby Girl',
    'model':'Traditional',
    'price':'2500/-'
  },
  {
    id:8,
    imgSrc:baby8,
    'category':'Baby Girl',
    'model':'Traditional',
    'price':'500/-'
  },
  {
    id:9,
    imgSrc:baby9,
    'category':'Baby Girl',
    'model':'Traditional',
    'price':'500/-'
  },
  
  {
    id:10,
    imgSrc:baby11,
    'category':'Baby Girl',
    'model':'Traditional',
    'price':'500/-'
  },
  {
    id:11,
    imgSrc:boy1,
    'category':'Boy',
    'model':'shirt',
    'price':'800/-'
  },
  {
    id:12,
    imgSrc:boy2,
    'category':'Boy',
    'model':'shirt',
    'price':'1500/-'
  },
  
 
  {
    id:13,
    imgSrc:boy5,
    'category':'Boy',
    'model':'shirt',
    'price':'500/-'
  },
  {
    id:14,
    imgSrc:boy6,
    'category':'Boy',
    'model':'kurta',
    'price':'500/-'
  }
  ,
  {
    id:15,
    imgSrc:boy7,
    'category':'Boy',
    'model':'shirt',
    'price':'250/-'
  },
  {
    id:16,
    imgSrc:boy8,
    'category':'Boy',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id:17,
    imgSrc:boy9,
    'category':'Boy',
    'model':'kurta',
    'price':'2500/-'
  }
  ,
  {
    id:18,
    imgSrc:c1,
    'category':'women',
    'model':'saree blouses',
    'price':'500/-'
  }
  ,
  {
    id:19,
    imgSrc:c2,
    'category':'women',
    'model':'saree blouses',
    'price':'250/-'
  },
  {
    id:20,
    imgSrc:c3,
    'category':'women',
    'model':'saree blouses',
    'price':'500/-'
  },
  {
    id:21,
    imgSrc:c4,
    'category':'women',
    'model':'saree blouses',
    'price':'2500/-'
  },
  {
    id:22,
    imgSrc:card1,
    'category':'women',
    'model':'saree blouses',
    'price':'500/-'
  }
  ,
  {
    id:23,
    imgSrc:card2,
    'category':'women',
    'model':'saree blouses',
    'price':'1250/-'
  },
  {
    id:24,
    imgSrc:card3,
    'category':'women',
    'model':'saree blouses',
    'price':'500/-'
  },
  {
    id:25,
    imgSrc:card4,
    'category':'women',
    'model':'Frock',
    'price':'3500/-'
  },
  {
    id:26,
    imgSrc:f1,
    'category':'women',
    'model':'Frock',
    'price':'2500/-'
  },
  {
     id:27,
    imgSrc:f2,
    'category':'women',
    'model':'Frock',
    'price':'500/-'
  }
  ,
  {
   id:28,
    imgSrc:f3,
    'category':'women',
    'model':'Frock',
    'price':'1250/-'
  },
  {
    id:29,
    imgSrc:f4,
    'category':'women',
    'model':'Frock',
    'price':'500/-'
  },
  {
    id:30,
    imgSrc:k1,
    'category':'women',
    'model':'kurta',
    'price':'200/-'
  },
  {
    id:31,
    imgSrc:k3,
    'category':'women',
    'model':'kurta',
    'price':'450/-'
  },
  {
    id:32,
    imgSrc:k4,
    'category':'women',
    'model':'kurta',
    'price':'500/-'
  }
  ,
  {
    id:33,
    imgSrc:m1,
    'category':'men',
    'model':'kurta',
    'price':'1250/-'
  },
  {
    id:34,
    imgSrc:m2,
    'category':'men',
    'model':'kurta',
    'price':'500/-'
  },
  {
    id: 35,
    imgSrc:m3,
    'category':'men',
    'model':'kurta',
    'price':'3500/-'
  },
  {
  id:36,
    imgSrc:mcard1,
    'category':'men',
    'model':'kurta',
    'price':'1450/-'
  },
  {
   id:37,
    imgSrc:mcard2,
    'category':'women',
    'model':'kurta',
    'price':'500/-'
  }
  ,
  {
    id:38,
    imgSrc:mcard3,
    'category':'men',
    'model':'kurta',
    'price':'3250/-'
  },
  {
    id: 39,
    imgSrc:mp1,
    'category':'men',
    'model':'pant',
    'price':'6500/-'
  },
  {
   id : 40,
    imgSrc:mp2,
    'category':'men',
    'model':'pant',
    'price':'3800/-'
  },
  {
  id : 41,
    imgSrc:mp3,
    'category':'men',
    'model':'pant',
    'price':'3250/-'
  },
  {
   id : 42,
    imgSrc:ms1,
    'category':'men',
    'model':'shirt',
    'price':'1500/-'
  },
  {
 id : 43,
    imgSrc:ms2,
    'category':'men',
    'model':'pant',
    'price':'3800/-'
  },
  {
   id : 44,
    imgSrc:op2,
    'category':'women',
    'model':'Frock',
    'price':'3800/-'
  },
  {
   id : 45,
    imgSrc:op3,
    'category':'women',
    'model':'one-piece',
    'price':'3250/-'
  },
  {
    id : 46,
    imgSrc:op4,
    'category':'women',
    'model':'one-piece',
    'price':'1500/-'
  },
  {
   id : 47,
    imgSrc:op5,
    'category':'women',
    'model':'one-piece',
    'price':'3800/-'
  },
  {
   id : 48,
    imgSrc:pcard1,
    'category':'men',
    'model':'pant',
    'price':'6500/-'
  },
  {
   id : 49,
    imgSrc:pcard2,
    'category':'men',
    'model':'pant',
    'price':'3800/-'
  },
  {
 id : 50,
    imgSrc:pcard3,
    'category':'men',
    'model':'pant',
    'price':'3250/-'
  },
  {
   id : 51,
    imgSrc:s1,
    'category':'women',
    'model':'saree blouses',
    'price':'1250/-'
  },
  {
  id : 52,
    imgSrc:s2,
    'category':'women',
    'model':'saree blouses',
    'price':'500/-'
  },
  {
    id : 53,
    imgSrc:s3,
    'category':'women',
    'model':'saree blouses',
    'price':'3500/-'
  },
  {
    id : 54,
    imgSrc:w1,
    'category':'women',
    'model':'saree blouses',
    'price':'1250/-'
  },
  {
    id : 55,
    imgSrc:w6,
    'category':'women',
    'model':'saree blouses',
    'price':'500/-'
  },
  {
    id: 56,
    imgSrc:w5,
    'category':'women',
    'model':'saree blouses',
    'price':'3500/-'
  },
];
const Girls = () => {
  const [filteredData, setFilteredData] = useState(Data);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedPrice, setSelectedPrice] = useState(priceRange);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleFiltersButtonClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('All');

    const uniqueSubcategories = new Set(
      Data.filter((item) => item.category === category).map((item) => item.model)
    );

    setSubcategories(Array.from(uniqueSubcategories));

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
    setPriceRange({ min: 0, max: 0 });
    setSelectedPrice({ min: 0, max: 5000 });
    filterData('All', 'All', { min: 0, max: 5000 });
  };

  const filterData = (category, subcategory, price) => {
    let filtered = Data;

    if (category !== 'All') {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (subcategory !== 'All') {
      filtered = filtered.filter((item) => item.model === subcategory);
    }

    filtered = filtered.filter((item) => {
      const itemPrice = Number(item.price.split('/')[0]);
      return itemPrice >= price.min && itemPrice <= price.max;
    });

    setFilteredData(filtered);
  };

  const navigate = useNavigate();
  const {isAuthenticated}= useSelector(selectAuth);
  const handleSelectDesign = () => {
    if (isAuthenticated) {
    navigate('/measurementspage');
    console.log("Navigating to measurementspage");
    }
    else{
      toast.error('You are not logged in. Please login to select this design.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false
      });
      navigate('/login')
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
              <button className='btn flex' onClick={handleSelectDesign}>
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
