import React, { useState } from 'react'
import '../Pages/MainPage.css'

import shop_logo from '../images/shop-logo.png';
import Main_page_slider_one from '../images/main-page-slider-one.png';
import Main_page_slider_two from '../images/main-page-slider-two.png';
import Main_page_slider_three from '../images/main-page-slider-three.png';
import Orange_Voucher from '../images/Orange-Voucher.png';
import Yellow_Voucher from '../images/Yellow-Voucher.png';
import Red_Voucher from '../images/Red-Voucher.png';
import Blue_Voucher from '../images/Blue-Voucher.png';
import tweenty_five_off_Voucher from '../images/25-off-Voucher.png'
import thirthy_off_Voucher from '../images/30-off-Voucher.png'

import Mobile_Category from '../images/mobile-category.png'
import T_Shirt_Category from '../images/t-shirt-category.png'
import Toys_Category from '../images/toys-category.png'
import Beauty_Category from '../images/beauty-category.png'
import Sports_Category from '../images/sports-category.png'
import Motor_Parts_Category from '../images/motor-parts-category.png'

import { BsTicketPerforated } from "react-icons/bs";
import { FcElectricity, FcLikePlaceholder, FcInTransit, FcShop, FcCurrencyExchange } from "react-icons/fc";
import { BiSearchAlt, BiCategoryAlt, } from "react-icons/bi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function MainPage() {

  const [featuredSlides, setFeaturedSlides] = useState([
    {
      id: 1,
      img: Main_page_slider_one,
    },
    {
      id: 2,
      img: Main_page_slider_two,
    },
    {
      id: 3,
      img: Main_page_slider_three,
    },
  ])

  const [currentSlide, setCurrentSlide] = useState(1);

  const prevFeaturedImage = () => {
    setCurrentSlide(prev => prev -1)

    if (currentSlide <= 1) {
      setCurrentSlide(3)
    }
  }

  const nextFeaturedImage = () => {
    setCurrentSlide(prev => prev +1);

    if ( currentSlide >= 3) {
      setCurrentSlide(1)
    }
  }

  return (
    <div className='main-container'>
      
      <div className="main-page-contents-container">

        <div className="search-bar-container">
          <input type="search" placeholder='You can search your favorite items here...'/>
          <div className="search-bar-icon">
          <BiSearchAlt />
          </div>
        </div>

        <div className="featured-images-container">
          <div onClick={prevFeaturedImage} className='prev-btn'><MdArrowBackIosNew /></div>
          {featuredSlides.map((featured) => (
            <div key={featured.id} className={featured.id === currentSlide ? 'animated-slide active' : 'animated-slide'}>
            {featured.id === currentSlide && (
            <div className='featured-images-wrapper'>
            <img src={featured.img} alt=""/>
            </div>
            )}
            </div>
          ))}
          <div onClick={nextFeaturedImage} className='next-btn'><MdArrowForwardIos /></div>
        </div>

        <div className="circles-btn-container">

          <div className="circle-icons-wrapper active">
          <div className="circle-icon-bg-color-tomato"></div> 
            <p className='circle-p-font-size'>All</p>
          </div>

          <div className="circle-icons-wrapper">
          <div className="circle-icon-bg-color-yellow"><FcCurrencyExchange /></div> 
            <p className='circle-p-font-size'>Coins</p>
          </div>

          <div className="circle-icons-wrapper">
          <div className="circle-icon-bg-color-red"><FcLikePlaceholder /></div> 
            <p className='circle-p-font-size'>Popular</p>
          </div>

          <div className="circle-icons-wrapper">
          <div className="circle-icon-bg-color-blue"><FcInTransit /></div> 
            <p className='circle-p-font-size'>Shipping</p>
          </div>

          <div className="circle-icons-wrapper">
          <div className="circle-icon-bg-color-green"><FcShop /></div> 
            <p className='circle-p-font-size'>ShopMall</p>
          </div>

          <div className="circle-icons-wrapper">
          <div className="circle-icon-bg-color-brown"><FcElectricity /></div> 
            <p className='circle-p-font-size'>50% off</p>
          </div>

        </div>

        <div className="vouchers-container">

          <div className="voucher-title-and-link-wrapper">
            <h3>Get your voucher here</h3>
            <p>See All <BsTicketPerforated /></p>
          </div>

          <div className="voucher-tickets-wrapper">
            <img src={Orange_Voucher} alt="" />
            <img src={Yellow_Voucher} alt="" />
            <img src={Red_Voucher} alt="" />
            <img src={Blue_Voucher} alt="" />
            <img src={tweenty_five_off_Voucher} alt="" />
            <img src={thirthy_off_Voucher} alt="" />
          </div>
        </div>

        <div className="categories-container">
          <div className="category-title-wrapper">
            <h3>Categories</h3>
            <p>View All <BiCategoryAlt /></p>
          </div>

          <div className="categories-icon-and-title-container">
            
            <div className="image-and-title-wrapper">
              <img src={Mobile_Category} alt="" />
              <p>Mobiles</p>
            </div>
            
            <div className="image-and-title-wrapper">
              <img src={T_Shirt_Category} alt="" />
              <p>T-Shirts</p>
            </div>
            
            <div className="image-and-title-wrapper">
              <img src={Toys_Category} alt="" />
              <p>Toys</p>
            </div>
            
            <div className="image-and-title-wrapper">
              <img src={Beauty_Category} alt="" />
              <p>Health & Beauty</p>
            </div>
            
            <div className="image-and-title-wrapper">
              <img src={Sports_Category} alt="" />
              <p>Sports</p>
            </div>
            
            <div className="image-and-title-wrapper">
              <img src={Motor_Parts_Category} alt="" />
              <p>Motor Parts & Accessories</p>
            </div>

          </div>
        </div>
      </div>

      <button className='main-page-shop-now-btn'>Shop Now</button>
      
    </div>
  )
}

export default MainPage
