import './AddCart.styles.css'
import { BsCart2 } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const AddCart = () => {
  const { /* isCartOpen, setIsCartOpen */toggleCart, cartCount} = useContext(CartContext);
 /*  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); */
  return (
    <div className="cartquant" onClick={toggleCart}>
            <BsCart2 className='cart-icon'
            />
             <span style={{ marginLeft: '0.5rem', color: 'red' }} className='quantity'>{cartCount}</span>
             </div> 
  )
}

export default AddCart