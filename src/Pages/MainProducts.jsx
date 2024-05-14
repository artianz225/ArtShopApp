import React, { useEffect, useState } from 'react';
import '../Pages/MainProducts.css';
import { BiSearchAlt, } from "react-icons/bi";
import axios from 'axios';

import { BsCartPlus, BsInfoCircle } from "react-icons/bs";
import { FaShippingFast, FaStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TbSquareArrowLeft, TbSquareArrowRight } from "react-icons/tb";

function MainProducts({addedToCartProductItems, setAddedToCartProductItems }) {

  const bodyStyle = document.body.style
  const [productsItems, setProductItems] = useState([]);
  const [search, setSearch] = useState('')
  const [productDetails, setProductDetails] = useState([]);
  const [toggleProductDetailModal, setToggleProductDetailModal] = useState(false);
  const [scrollLock, setScrollLock] = useState(bodyStyle.overflowY === 'hidden');
  const [currentProductimage, setCurrentProductimage] = useState(0);
  const lengthOfEachImages = productDetails.map(details => details.images.length);

  useEffect(() => {
    bodyStyle.overflowY = scrollLock ? 'hidden' : 'auto' 
  }, [scrollLock, bodyStyle])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(res => setProductItems(res.data.products))
  }, [])

  const handleProductDetailsImagesPrevSlide = () => {
    setCurrentProductimage(prev => prev -1)

    if (currentProductimage <= 0) {
      setCurrentProductimage(lengthOfEachImages -1)
    }
  }

  const handleProductDetailsImagesNextSlide = () => {
    setCurrentProductimage(prev => prev +1)

    if (currentProductimage >= lengthOfEachImages -1) {
      setCurrentProductimage(0)
    }
  }

  const handleProductDetailsDisplay = (product) => {
    setProductDetails([...productDetails, product]);
    setToggleProductDetailModal(true)
    setScrollLock(true)
  }

  const handleCloseClearProductDetails = () => {
    setProductDetails([])
    setToggleProductDetailModal(false)
    setScrollLock(false)
  }

  const handleAddToCartProductItem = (product) => {

    const existingProduct = addedToCartProductItems.find(addedToCartProductItem => addedToCartProductItem.id === product.id);

    if (existingProduct) {
      const updatedCartItems = addedToCartProductItems.map(productItem =>
        productItem.id === product.id ? { ...productItem, quantity: productItem.quantity + 1 } : productItem
      );
      setAddedToCartProductItems(updatedCartItems);
    } else {
      setAddedToCartProductItems([...addedToCartProductItems, {...product, quantity: 1}]);
    }
  }

  return (
    <div className='main-products-main-container'>

      <div className="searchbar-container">
        <input type="search" placeholder='Search products name' onChange={(e) => setSearch(e.target.value)}/>
        <div className="search-icon-wrapper">
          <BiSearchAlt />
        </div>
      </div>
      <div className="product-items-main-container">
        {productsItems.filter((filterProducts) => {
          return search.toLowerCase() === '' ? 'No Item Found' : filterProducts.title.toLowerCase().includes(search.toLowerCase())
        }).map((product) => (
          <div key={product.id} className='product-items-wrapper'>
            <img src={product.thumbnail} alt="" className='product-image' />
            <h1>{product.title}</h1>
            <div className="product-prices-ratings-wrapper">
            <p className='price-p-tag'>Price: ₱ {product.price}.00</p>
            <p><FaStar className='star-icon' /><FaStar className='star-icon' /><FaStar className='star-icon' /><FaStar className='star-icon' />  {product.rating}%</p>
            </div>
            <div className="product-details-cart-btns-wrapper">
              <FaShippingFast className='truck-icon' />
              <p>4-7 Days</p>
              <span>|</span>
              <BsInfoCircle className='info-icon' onClick={() => handleProductDetailsDisplay(product)} />
              <BsCartPlus onClick={() => handleAddToCartProductItem(product)} className='cart-icon'/>
            </div>
          </div>
        ))}
      </div>

      <div className={toggleProductDetailModal ? 'product-details-modal-container-on' : 'product-details-modal-container-off'}>
        <div className="product-detail-modal-wrapper">
          <div className="product-detail-modal-close-btn">
          <IoCloseCircleOutline onClick={handleCloseClearProductDetails}/>
          </div>
          {productDetails.map((prodDetails, i) => (
            <div key={i} className='product-details'>
              <div className='product-details-thumbnails'>
                <div className='product-details-arrow-btns'>
                <TbSquareArrowLeft onClick={handleProductDetailsImagesPrevSlide} className='product-details-arrow-prev' />
                <TbSquareArrowRight onClick={handleProductDetailsImagesNextSlide} className='product-details-arrow-next' />
                </div>
                {prodDetails.images.map((image, i) => (
                  <div className={i === currentProductimage ? 'imageSlide active' : 'imageSlide' } key={i}>
                  {i === currentProductimage && (
                    <img src={image} alt=""  className='thumbnails-image'/>
                  )}
                  </div>
                ))}
              </div>
              <div className="product-details-contents">
                <p><span>Product:</span> {prodDetails.title}</p>
                <p><span>Brand:</span> {prodDetails.brand}</p>
                <p><span>Description:</span> {prodDetails.description}</p>
                <p><span>Price:</span> ₱{prodDetails.price}.00</p>
                <p><span>Stock:</span> ({prodDetails.stock}) pcs</p>
                <p><span>Product Ratings:</span> {prodDetails.rating}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default MainProducts
