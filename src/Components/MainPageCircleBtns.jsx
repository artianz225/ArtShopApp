import React from 'react'
import { FcElectricity, FcLikePlaceholder, FcInTransit, FcShop, FcCurrencyExchange } from "react-icons/fc";
import '../Components/MainPageCircleBtns.css';

function MainPageCircleBtns() {
  return (
    <div className="circles-btn-container">

      <div className="circle-icons-wrapper">
      <div className="circle-icon-bg-color-tomato active"></div> 
        <p className='circle-p-font-size'>All</p>
      </div>

      <div className="circle-icons-wrapper">
      <div className="circle-icon-bg-color-tomato"><FcCurrencyExchange /></div> 
        <p className='circle-p-font-size'>Coins</p>
      </div>

      <div className="circle-icons-wrapper">
      <div className="circle-icon-bg-color-tomato"><FcLikePlaceholder /></div> 
        <p className='circle-p-font-size'>Popular</p>
      </div>

      <div className="circle-icons-wrapper">
      <div className="circle-icon-bg-color-tomato"><FcInTransit /></div> 
        <p className='circle-p-font-size'>Shipping</p>
      </div>

      <div className="circle-icons-wrapper">
      <div className="circle-icon-bg-color-tomato"><FcShop /></div> 
        <p className='circle-p-font-size'>ShopMall</p>
      </div>

      <div className="circle-icons-wrapper">
      <div className="circle-icon-bg-color-tomato"><FcElectricity /></div> 
        <p className='circle-p-font-size'>50% off</p>
      </div>

    </div>
  )
}

export default MainPageCircleBtns
