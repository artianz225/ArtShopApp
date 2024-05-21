import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import MainPage from './Pages/MainPage';
import MainProduct from './Pages/MainProducts';
import MyCart from './Pages/MyCart';
import Footer from './Pages/Footer';

function App() {

  const [openSidebar, setOpenSidebar] = useState(false);
  const [addedToCartProductItems, setAddedToCartProductItems] = useState([]);
  const [productsItems, setProductItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [completeOrderStatus, setCompleteOrderStatus] = useState([]);
  
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  return (
    <BrowserRouter>

      <Nav
        toggleSidebar={toggleSidebar}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        addedToCartProductItems={addedToCartProductItems}
        completeOrderStatus={completeOrderStatus}
      />

      <Routes>

        <Route 
          path="/" 
          element={<MainPage />} 
        />

        <Route 
          path="/main-products" 
          element={<MainProduct 
          addedToCartProductItems={addedToCartProductItems} 
          setAddedToCartProductItems={setAddedToCartProductItems}
          productsItems={productsItems}
          setProductItems={setProductItems} />} 
        />

        <Route 
          path="/my-cart" 
          element={<MyCart 
          addedToCartProductItems={addedToCartProductItems} 
          setAddedToCartProductItems={setAddedToCartProductItems}
          selectAllChecked={selectAllChecked}
          setSelectAllChecked={setSelectAllChecked}
          productsItems={productsItems}
          setProductItems={setProductItems}
          setCompleteOrderStatus={setCompleteOrderStatus} />} 
        />

        <Route path='/faq' element={<Footer />} />

        <Route 
          path="*" 
          element={<Navigate to="/" replace />} 
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
