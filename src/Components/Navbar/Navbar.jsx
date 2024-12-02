import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Logo } from '../../assets';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className='container'>
<a href="#">        <img className='navbar-logo' src={Logo} alt="logo" /></a>
        <ul className="navbar-lists">
          <li className="navbar-list"><a href="#" className="navbar-link">Asosiy</a></li>
          <li className="navbar-list"><a href="#about" className="navbar-link">Biz haqimizda</a></li>
          <li className="navbar-list"><a href="#service" className="navbar-link">Xizmatlar</a></li>
        </ul>
        <button className='navbar-btn'>
          <a className='navbar-anchor' href="#contact">Bog'lanish</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
