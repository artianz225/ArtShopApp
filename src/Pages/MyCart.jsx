import React, { useEffect, useState } from 'react'
import '../Pages/MyCart.css';
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline, IoIosAddCircleOutline, IoIosArrowDropleft  } from "react-icons/io";
import { MdOutlineModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import gcashLogo from '../images/gcash.png';
import mayaLogo from '../images/maya.png';
import { BsTicketDetailedFill, BsTicketDetailed  } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

function MyCart({addedToCartProductItems, 
                 setAddedToCartProductItems, 
                 selectAllChecked, 
                 setSelectAllChecked,
                 setCompleteOrderStatus }) {

  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [totalCheckedLength, setTotalCheckedLength] = useState(0);
  const [placedOrderOpen, setPlacedOrderOpen] = useState(false);
  const [placedOrder, setPlacedOrder] = useState([]);
  const [cartEmptyMessage, setCartEmptyMessage] = useState(true);
  const [checkOutBtnIsClick, setCheckOutBtnIsClick] = useState(false);

  const [isNotCheckOrSelectedWrapper, setIsNotCheckOrSelectedWrapper] = useState(false);
  const [isNotCheckOrSelectedMessage, setIsNotCheckOrSelectedMessage] = useState('');

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
  }

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
    setPlacedOrder([]);
    setPlacedOrderOpen(!placedOrderOpen);
    setCheckOutBtnIsClick(!checkOutBtnIsClick); 
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
    setPlacedOrderOpen(!placedOrderOpen);
    setCheckOutBtnIsClick(!checkOutBtnIsClick);
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

  const handleCompleteOrder = () => {
    const completedItems = addedToCartProductItems.filter(item => item.isChecked);
    const remainingItems = addedToCartProductItems.filter(item => !item.isChecked);
    setCompleteOrderStatus(prevStatus => [...prevStatus, ...completedItems]);
    setAddedToCartProductItems(remainingItems);
    setSelectAllChecked(false);
    setShippingPrice(0);
    setTotalCheckedLength(0);
    calculateTotalPrice(remainingItems);
    placedOrderActive()
  };

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

          <div className="back-to-cart-and-header-container">
          <IoIosArrowDropleft onClick={placedOrderActive} className='back-to-cart-icon'/>
          <p>Order Summary</p>
          <IoIosAddCircleOutline className='add-delivert-inforamation-icon'/>
          </div>

          <div className="delivery-name-address-details-container">
             <h3>Arthur John Philipps Epiz</h3>
             <p>(+63)912-345-6789</p>
             <p>Primotech Drug Testing Center</p>
             <p>6J Buenviaje St. Brgy San Andres</p>
            <div className="delivery-name-address-detail-icons">
              <MdOutlineModeEditOutline className='order-summary-edit-icon' />
              <MdOutlineDeleteForever className='order-summary-remove-icon' />
            </div>
          </div>

          <div className="placed-order-product-items-container">
            {placedOrder.map((placedOrder, i) => (
              <div key={i} className='items-wrapper'>
                <div className="items-wrapper-img">
                <img src={placedOrder.thumbnail} alt="" />
                </div>
                <div className="items-contents-wrapper">
                  <p><span className='items-content-ulit-title'> {placedOrder.title}</span></p>
                  <p>Unit Price: <span className='items-content-unit-price'> ₱ {placedOrder.price}.00</span></p>
                  <p>Qty: <span className='items-content-unit-price'> {placedOrder.quantity}</span></p>
                  <p>Total Price: <span className='items-content-unit-total-price'> ₱ {placedOrder.price * placedOrder.quantity}.00</span></p>
                  </div>
              </div>
            ))}
          </div>

          <div className="delivery-option-container">
            <h3>Delivery option</h3>
            <div className="delivery-option-wrapper">
              <h4>Standard Delivery</h4>
              <p>Get by 30 Dec - 31 Dec</p>
              <h4 className='place-order-shipping-price'>₱38.00</h4>
            </div>
          </div>

          <div className="payment-option-container">
            <h3>Payment option</h3>
            <div className="payment-option-wrapper">
              <h4>Cash on Delivery</h4>
              <p>Pay when you received the order</p>
              <input type="radio" name="" id="payment" className='radio-btn' />
            </div>
            <div className="payment-option-wrapper">
              <h4>ShopNowPayLater</h4>
              <p>Pay using available credit limit</p>
              <input type="radio" name="" id="payment" className='radio-btn' />
            </div>
            <div className="payment-option-wrapper">
              <img src={gcashLogo} alt="" />
              <p>Pay using online E-wallet (GCash)</p>
              <input type="radio" name="" id="payment" className='radio-btn' />
            </div>
            <div className="payment-option-wrapper">
              <img src={mayaLogo} alt="" />
              <p>Pay using online E-wallet (Maya)</p>
              <input type="radio" name="" id="payment" className='radio-btn'/>
            </div>
          </div>

          <div className="merchant-subtotal-container">
            <div className='subtotatal-price-wrapper'>
              <h3>Merchant Subtotal <span>({placedOrder.length} Items)</span></h3>
              <h3>₱{totalPrice}.00</h3></div>

              <div className='vouchers-main-container'>
                <div className="vouchers-wrapper"><BsTicketDetailedFill className='merchant-voucher'/>  <p>Voucher</p> </div>
                <p>No Available</p>
              </div>

              <div className='vouchers-main-container'>
                <div className="vouchers-wrapper"><FaMoneyBillAlt className='points-voucher' />  <p>Points</p> </div>
                <p>₱100.00</p>
              </div>

              <div className='vouchers-main-container'>
                <div className="vouchers-wrapper"><BsTicketDetailed className='shipping-voucher' />  <p>Free shipping voucher</p> </div>
                <p>None</p>
              </div>

              <div className='vouchers-main-container'>
                <div className="vouchers-wrapper"><p>Shipping Fee</p></div>
                <p>₱{shippingPrice}.00</p>
              </div>
              
              <div className="grand-total-price-container">
                <h3>Total <span> VAT Included</span></h3>
                <h3>₱{totalPrice + shippingPrice}.00</h3>
              </div>
          </div>
          <div className={checkOutBtnIsClick ? 'placed-order-btn-container-on' : 'placed-order-btn-container-off'}>
          <p>Total: ₱{totalPrice + shippingPrice}.00</p><button onClick={handleCompleteOrder}>Place Order</button>
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
