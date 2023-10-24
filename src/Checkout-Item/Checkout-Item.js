import './Checkout-Item.styles.scss'
import { useContext , useEffect, useState} from 'react';

import { CartContext } from '../contexts/cart.context';
import { FiMinusSquare} from "react-icons/fi";
import { FiPlusSquare} from "react-icons/fi";

const CheckoutItem = ({ cartItem }) => {
  const { name, imgSrc, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

 
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
     {isMobile ? (
      <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imgSrc} alt={`${name}`} />
        <>
        <span className='name'> {name} 
      <br />
      ₦{price}
      </span>
        </>
      </div>
     
        <span className='arrow' onClick={removeItemHandler}>
        &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItemHandler}>
           &#10095;
        </span>
     
     {/*  <span className='price'> {price}</span> */}
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
     ):(
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imgSrc} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
    
        
        <span className='arrow' onClick={removeItemHandler}>
         <FiMinusSquare className='arrowsign'/>
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItemHandler}>
          <FiPlusSquare className='arrowsign'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
     
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
    )}
    </>
  );
};

export default CheckoutItem;