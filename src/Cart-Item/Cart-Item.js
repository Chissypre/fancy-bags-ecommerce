import './Cart-item.styles.scss'
const CartItem = ({ cartItem }) => {
    const {id, price, name, imgSrc, quantity, } = cartItem;

    return (
      <div className='cart-item-container'>
       <img  key={id} src={imgSrc} alt={name} /> 
       
        <div className='item-details'>
          <span className='name'>{name}</span>
          <span className='price'>
            {quantity} x ₦{price}
          </span>
        </div>
      </div>
    );
  };
  
  export default CartItem;