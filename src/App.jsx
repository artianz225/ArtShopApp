import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import MainPage from './Pages/MainPage';
import MainProduct from './Pages/MainProducts';
import MyCart from './Pages/MyCart';

function App() {

  const [openSidebar, setOpenSidebar] = useState(false);
  const [addedToCartProductItems, setAddedToCartProductItems] = useState([]); 
  
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  console.log(addedToCartProductItems)

  return (
    <BrowserRouter>

    <Nav toggleSidebar={toggleSidebar} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/main-products' element={<MainProduct addedToCartProductItems={addedToCartProductItems} setAddedToCartProductItems={setAddedToCartProductItems} />} />
        <Route path='/my-cart' element={<MyCart addedToCartProductItems={addedToCartProductItems} setAddedToCartProductItems={setAddedToCartProductItems} />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
