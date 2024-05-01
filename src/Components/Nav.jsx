import React from 'react'
import '../Components/Nav.css';
import { BsGrid1X2, BsThreeDotsVertical, BsInfoCircle } from "react-icons/bs";

function Nav({ toggleSidebar, openSidebar }) {
  return (
    <div>

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

        <div className={openSidebar ? 'nav-sidebar-main-container-on' : 'nav-sidebar-main-container-off'}>

        </div>
      </div>
    </nav>
      
    </div>
  )
}

export default Nav
