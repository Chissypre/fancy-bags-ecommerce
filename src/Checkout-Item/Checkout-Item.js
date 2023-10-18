import './Checkout-Item.styles.scss'
import { useContext } from 'react';

import { CartContext } from '../contexts/cart.context';
import { FiMinusSquare} from "react-icons/fi";
import { FiPlusSquare} from "react-icons/fi";

const CheckoutItem = ({ cartItem }) => {
  const { name, imgSrc, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imgSrc} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
     {/*  <div className='quantity'> */}
        
        <span className='arrow' onClick={removeItemHandler}>
         <FiMinusSquare className='arrowsign'/>
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItemHandler}>
          <FiPlusSquare className='arrowsign'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      {/* </div> */}
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;