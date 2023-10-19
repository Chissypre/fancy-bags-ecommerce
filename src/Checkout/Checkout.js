import './Checkout.styles.scss'
import { useContext, useEffect, useState } from 'react';

import { CartContext } from '../contexts/cart.context';

import CheckoutItem from '../Checkout-Item/Checkout-Item';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
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
   
    <div className='checkout-container'>
       {isMobile ? (
        <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span className='nbsp'>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
):(
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span className='nbsp'>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      )}
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ₦{cartTotal}</div>
    </div>
   
  );
};

export default Checkout;