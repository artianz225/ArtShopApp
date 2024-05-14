import React, { useState } from 'react';
import '../Pages/MainPage.css';
import MainPageCarousel from '../Components/MainPageCarousel';
import MainPageCircleBtns from '../Components/MainPageCircleBtns';
import MainPageVoucher from '../Components/MainPageVoucher';
import MainPageCategories from '../Components/MainPageCategories';
import MainPageSearchBar from '../Components/MainPageSearchBar';
import { useNavigate } from 'react-router-dom';
 
function MainPage() {

  const navigate = useNavigate();

  return (
    <div className='main-container'>
      
      <div className="main-page-contents-container">
        <MainPageSearchBar />
        <MainPageCarousel />
        <MainPageCircleBtns />
        <MainPageVoucher />
        <MainPageCategories />

      </div>

      <button onClick={() => navigate('/main-products')} className='main-page-shop-now-btn'>Shop Now</button>
      
    </div>
  )
}

export default MainPage
