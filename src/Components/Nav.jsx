import React from 'react'
import '../Components/Nav.css';
import { BsGrid1X2, BsThreeDotsVertical, BsInfoCircle } from "react-icons/bs";
import { FaHouse, FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag, FaShoppingBasket, FaHistory, FaQuestionCircle  } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoNotificationsSharp, IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Nav({ toggleSidebar, openSidebar, setOpenSidebar }) {

  const navigate = useNavigate();

  const handleSidebarChanges = () => {
    setOpenSidebar(!openSidebar)

  }
  return (
    <div>SiHomebridge

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
          <img onClick={toggleSidebar} src="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg" alt="" />
          <BsThreeDotsVertical className='nav-setting-icon' />
        </div>

        <div className={openSidebar ? 'nav-sidebar-main-container-on' : 'nav-sidebar-main-container-off'}>
          <div className="side-bar-header-section-container">
            <img src="" alt="" />
            <h3>Arthur John Philipps Epiz</h3>
            <p>(+63)931-121-8228</p>
          </div>

          <div className="side-bar-links-container">
            <ul>
              <li onClick={handleSidebarChanges}><div onClick={() => navigate('/')}><FaShoppingBag />Home</div></li>
              <li onClick={handleSidebarChanges}><div onClick={() => navigate('/main-products')}><FaShoppingBag />Shop Now</div></li>
              <li onClick={handleSidebarChanges}><div onClick={() => navigate('/my-cart')}><FaShoppingBag />My Cart</div></li>
              <li><FaShoppingBasket /><a href="#">My Order</a></li>
              <li><MdManageAccounts /><a href="#">My Acount</a></li>
              <li><FaHistory /><a href="#">Order History</a></li>
              <li><FaQuestionCircle /><a href="#">FAQ's</a></li>
              <li><RiCustomerServiceFill /><a href="#">Help Center</a></li>
              <li><IoNotificationsSharp /><a href="#">Notification</a></li>
              <li><IoSettings /><a href="#">Settings</a></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
      
    </div>
  )
}

export default Nav
