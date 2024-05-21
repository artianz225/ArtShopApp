import React from 'react'
import '../Components/Nav.css';
import { BsGrid1X2, BsThreeDotsVertical, BsInfoCircle, BsFillBox2HeartFill } from "react-icons/bs";
import { FaHouse, FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag, FaHistory, FaQuestionCircle  } from "react-icons/fa";
import { RiCustomerServiceFill, RiAccountPinCircleFill } from "react-icons/ri";
import { IoNotificationsSharp, IoSettings, IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Nav({ toggleSidebar, openSidebar, setOpenSidebar, addedToCartProductItems, completeOrderStatus }) {

  const navigate = useNavigate();

  const handleSidebarChanges = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <nav>
      <div className="nav-main-container">

        <div className="nav-sidebar-btn-icon">
          <BsGrid1X2 onClick={toggleSidebar}/>
        </div>
        <div className="nav-profile-and-setting-wrapper">
          <div className="profile-contents-wrapper">
            <p className='profile-name'>Arthur John Philipps Epiz</p>
            <p><span>( 100 Points ) </span><BsInfoCircle /></p>
          </div>
          <img src="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg" alt="" />
          <BsThreeDotsVertical className='nav-setting-icon' />
        </div>

        <div onClick={handleSidebarChanges} className={openSidebar ? 'nav-sidebar-main-container-on' : 'nav-sidebar-main-container-off'}>
          <div className={openSidebar ? 'nav-sidebar-main-wrapper-on' : 'nav-sidebar-main-wrapper-off'}>
          <div className="side-bar-header-section-container">
            <img src="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg" alt="" />
            <h3>Arthur John Philipps</h3>
            <p>(+63)912-345-6789</p>
          </div>

          <button onClick={toggleSidebar} className='nav-sidebar-close-btn'><IoClose /></button>

          <div className="side-bar-links-container">
            <ul>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('/')}><span><FaHouse /></span> Home</div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('/main-products')}><span><FaShoppingBag /></span> Shop Now</div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('/my-cart')}><span><FaCartShopping /></span> My Cart <p>{addedToCartProductItems.length}</p></div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('')}><span><BsFillBox2HeartFill /></span> Order Status <p>{completeOrderStatus.length}</p></div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('')}><span><FaHistory /></span> Order History</div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('')}><span><RiAccountPinCircleFill /></span> My Acount</div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('')}><span><IoNotificationsSharp /></span> Notification<p>0</p></div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('/faq')}><span><FaQuestionCircle /></span> FAQ's</div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('')}><span><RiCustomerServiceFill /></span> Help Center</div></li>
              <li onClick={handleSidebarChanges}><div className='icon-link-wrapper' onClick={() => navigate('')}><span><IoSettings /></span> Settings</div></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
