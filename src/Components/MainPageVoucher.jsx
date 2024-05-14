import React from 'react'
import '../Components/MainPageVoucher.css';
import Orange_Voucher from '../images/Orange-Voucher.png';
import Yellow_Voucher from '../images/Yellow-Voucher.png';
import Red_Voucher from '../images/Red-Voucher.png';
import Blue_Voucher from '../images/Blue-Voucher.png';
import tweenty_five_off_Voucher from '../images/25-off-Voucher.png'
import thirthy_off_Voucher from '../images/30-off-Voucher.png'
import { BsTicketPerforated } from "react-icons/bs";

function MainPageVoucher() {
  return (
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
  )
}

export default MainPageVoucher
