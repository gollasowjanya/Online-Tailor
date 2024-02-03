import React, { useState } from 'react';
import './navbar.css';
import { useBag } from './../../Pages/BagContext';
import { GiSewingMachine } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectAuth } from './../../auth/actions/authSlice'; 
import { MdShoppingBag } from "react-icons/md";
const Navbar = () => {
  const { bag } = useBag();
  const [active, setActive] = useState('navBar');
  const {  user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const showNav = () => {
    setActive('navBar activeNavbar');
  }

  const removeNavbar = () => {
    setActive('navBar');
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <Link to='/' className='logo'> 
            <h1><GiSewingMachine className="icon" /> Online Tailor.</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
           
            <li className='navItem'>
              <Link to='/Home' className='navLink'>Home</Link>
            </li>
            <li className='navItem'>
              <Link to='/About' className='navLink'>About</Link>
            </li>
            <li className='navItem'>
              <Link to='/designs' className='navLink'>Designs</Link>
            </li>

            {user ? (
              <>
                {user && user.name && (
              <span className='welcomenote'><b>Welcome, {user.name}!</b></span>
            )}
                 <li className='navItem'>
                  <Link to='/bag' className='navLink'><MdShoppingBag  size={35}/>{bag.length}</Link>
                </li>
                <li className='navItem'>
                  <button className='logoutbtn' onClick={handleLogout}>
                    <MdLogout className='icon' />
                  </button>
                </li>
                
              </>
            ) : (
              <>
                <li className='navItem'>
                  <Link to='/login' className='navLink'>Login</Link>
                </li>
                <li className='navItem'>
                  <Link to='/register' className='navLink'><FaUserPlus /></Link>
                </li>
              </>
            )}
          </ul>

          <div onClick={removeNavbar} className='closeNavbar'>
            <IoMdCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  )
}

export default Navbar;

