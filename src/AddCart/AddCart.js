import './AddCart.styles.css'
import { BsCart2 } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const AddCart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const quantity = 0;
  return (
    <div className="cartquant" onClick={toggleIsCartOpen}>
            <BsCart2 className='cart-icon'
            />
             <span style={{ marginLeft: '0.5rem', color: 'red' }} className='quantity'>{quantity}</span>
             </div> 
  )
}

export default AddCart