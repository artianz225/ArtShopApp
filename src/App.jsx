import React from 'react'
import './App.css';
import { useState } from 'react';
import MainPage from './Pages/MainPage';
import Nav from './Components/Nav';
import Footer from './Pages/Footer';

function App() {

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  return (
    <div>



























      <Nav toggleSidebar={toggleSidebar} openSidebar={openSidebar} />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
