import React from 'react'
import '../Components/MainPageSearchBar.css';
import { BiSearchAlt, } from "react-icons/bi";

function MainPageSearchBar() {

  return (
  <div className="search-bar-container">
      <input type="search" placeholder='You can search your favorite items here...'/>
      <div className="search-bar-icon">
      <BiSearchAlt />
    </div>
   </div>
  )
}

export default MainPageSearchBar
