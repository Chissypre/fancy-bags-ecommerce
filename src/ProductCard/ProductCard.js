import './ProductCard.styles.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
  const { name, price, imgSrc } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="products-container">
    <>
    <Link to={`product/${product.id}`}>
   
  
    <div className="box">
     
       <img
          src={imgSrc}
          alt={` ${product.id}`}
        />
    
      <div className="content">
          <h3 className="productName">{name}</h3>
          <small>$</small><span className="price">{price}</span> <span className="past-price">$150.99</span>
          <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
          </div> 
      </div>  
  </div> 
  </Link>
  <Button buttonType='inverted' onClick={addProductToCart}>add to cart</Button>
  </>
  </div>
  )
};

export default ProductCard;