import React, { useEffect, useState } from 'react'
import '../Pages/MyCart.css';
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";

function MyCart({addedToCartProductItems, setAddedToCartProductItems }) {

  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [totalCheckedLength, setTotalCheckedLength] = useState(0);
  const [placedOrderOpen, setPlacedOrderOpen] = useState(false);
  const [placedOrder, setPlacedOrder] = useState([]);
  const [cartEmptyMessage, setCartEmptyMessage] = useState(true);

  const [isNotCheckOrSelectedWrapper, setIsNotCheckOrSelectedWrapper] = useState(false);
  const [isNotCheckOrSelectedMessage, setIsNotCheckOrSelectedMessage] = useState('')

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAllChecked(isChecked);
    const updatedCartItems = addedToCartProductItems.map(addedToCartItem => ({
      ...addedToCartItem,
      isChecked: isChecked,
    }));

    const checkedItemsLength = updatedCartItems.filter(addedToCartItem => addedToCartItem.isChecked).length;
    const shippingFee = checkedItemsLength > 0 ? 38 : 0;

    setShippingPrice(shippingFee);
    setTotalCheckedLength(checkedItemsLength)
    setAddedToCartProductItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const calculateTotalPrice = (addedToCartProductItems) => {
    const totalPrice = addedToCartProductItems.reduce((total, addedToCartProductItem) => {
      return addedToCartProductItem.isChecked ? total + parseInt(addedToCartProductItem.price) * addedToCartProductItem.quantity : total;
    }, 0);
    setTotalPrice(totalPrice);
  };

  const handleSubtractQuantity = (productId) => {
    const updatedCartItems = addedToCartProductItems.map(addedToCartProductItem =>
      addedToCartProductItem.id === productId ? { ...addedToCartProductItem, quantity: addedToCartProductItem.quantity - 1 } : addedToCartProductItem
    );
    const filteredCartItems = updatedCartItems.filter(addedToCartProductItem => addedToCartProductItem.quantity > 0);
    setAddedToCartProductItems(filteredCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const handleAddQuantity = (productId) => {
    const updatedCartItems = addedToCartProductItems.map(addedToCartProductItem =>
      addedToCartProductItem.id === productId ? { ...addedToCartProductItem, quantity: addedToCartProductItem.quantity + 1 } : addedToCartProductItem
    );
    setAddedToCartProductItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const handleCheckboxChange = (productId, isChecked) => {
    const updatedCartItems = addedToCartProductItems.map(addedToCartProductItem =>
      addedToCartProductItem.id === productId ? { ...addedToCartProductItem, isChecked } : addedToCartProductItem
    );

    const checkedItemsLength = updatedCartItems.filter(addedToCartItem => addedToCartItem.isChecked).length;
    const shippingFee = checkedItemsLength > 0 ? 38 : 0;

    setShippingPrice(shippingFee);
    setSelectAllChecked(false)
    setTotalCheckedLength(checkedItemsLength)
    setAddedToCartProductItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  const placedOrderActive = () => {
    setPlacedOrder([])
    setPlacedOrderOpen(!placedOrderOpen)
  }

  const handlePlacedOrder = () => {
    const checkedItems = addedToCartProductItems.filter(addedToCartItem => addedToCartItem.isChecked);

    if (addedToCartProductItems.length === 0) {
      setIsNotCheckOrSelectedWrapper(true);
      setIsNotCheckOrSelectedMessage('please add a product first');
    } else if (checkedItems.length === 0) {
      setIsNotCheckOrSelectedWrapper(true);
      setIsNotCheckOrSelectedMessage('please select a product first');
    } else {
    setPlacedOrder([...placedOrder, ...checkedItems]);
    setPlacedOrderOpen(!placedOrderOpen)
    }
  }

  useEffect(() => {
    if (addedToCartProductItems.length === 0) {
      setCartEmptyMessage(true)
    } else {
      setCartEmptyMessage(false)
    }
  }, [addedToCartProductItems.length])

  useEffect(() => {
    const timeOutMessage = setTimeout (() => {
      setIsNotCheckOrSelectedWrapper(false);
    }, 1000)
  }, [isNotCheckOrSelectedWrapper]);

  return (
    <div className="cart-wrapper">
      <div className="added-to-cart-product-items-container">

        <div className="added-to-cart-header-wrapper">
          <p>My Cart</p>
          <div className="added-to-cart-select-all-wrapper">
            <input type="checkbox" checked={selectAllChecked} onChange={handleSelectAllChange} id="selectAllCheckbox" /> Select All
          </div>
        </div>

        <div className={cartEmptyMessage ? "added-to-cart-empty-cart-message-on" : "added-to-cart-empty-cart-message-off"}>
          <p>--- Your cart is empty ---</p>
        </div>

        <div className="added-to-cart-product-items">
          {addedToCartProductItems.map((addedToCartItem, i) => (
            <div key={i} className='added-to-cart-items-wrapper'>
              <input type="checkbox" checked={addedToCartItem.isChecked || false} onChange={(e) => handleCheckboxChange(addedToCartItem.id, e.target.checked)} />
              <div className="added-to-cart-image-container">
                <img src={addedToCartItem.thumbnail} alt="" />
              </div>
              <div className="added-to-cart-product-item-content">
              <p>{addedToCartItem.title}</p>
              <p><span>{addedToCartItem.brand}</span></p>
              <p>₱{addedToCartItem.price}.00</p>
              <div className="added-to-cart-product-item-quantity-container">
                <IoMdRemoveCircleOutline onClick={() => handleSubtractQuantity(addedToCartItem.id)} className='minus-icon'/>
                <p><span>{addedToCartItem.quantity}</span></p>
                <IoMdAddCircleOutline onClick={() => handleAddQuantity(addedToCartItem.id)} className='add-icon' />
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className="added-to-cart-product-item-total-cart-container">
          <div className="added-to-cart-product-content">
            <p className='subtotal'>Subtotal: ₱{totalPrice}.00</p>
            <p className='shipping-fee'>Shipping Fee + <span>₱{shippingPrice}.00</span></p>
          </div>
          <button onClick={handlePlacedOrder} className='added-to-cart-place-order-btn'>Check Out({totalCheckedLength})</button>
        </div>

        <div className={placedOrderOpen ? 'placed-order-main-container-on' : 'placed-order-main-container-off'}>
          <button onClick={placedOrderActive}>back</button>
          <div className="placed-order-product-items-container">
            {placedOrder.map((placedOrder, i) => (
              <div key={i}>
                <p>{placedOrder.title}</p>
              </div>
            ))}
          </div>
        </div>

        {isNotCheckOrSelectedWrapper ? <div className="empty-or-uncheck-message">
          <p>{isNotCheckOrSelectedMessage}</p>
        </div> : ''}

      </div>
    </div>
  )
}

export default MyCart
