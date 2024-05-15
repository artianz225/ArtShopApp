import React from 'react'
import '../Components/MainPageCategories.css';
import Mobile_Category from '../images/mobile-category.png';
import T_Shirt_Category from '../images/t-shirt-category.png';
import Toys_Category from '../images/toys-category.png';
import Beauty_Category from '../images/beauty-category.png';
import Sports_Category from '../images/sports-category.png';
import Motor_Parts_Category from '../images/motor-parts-category.png';
import { BiCategoryAlt } from "react-icons/bi";

function MainPageCategories() {
  return (
      <div className="categories-container">
          <div className="category-title-wrapper">
            <h3>Categories</h3>
            <p>View All <BiCategoryAlt className='icon' /></p>
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
  )
}

export default MainPageCategories
