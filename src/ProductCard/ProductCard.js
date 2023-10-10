import './ProductCard.styles.css';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';

const ProductCard = ({ product }) => {
  const { name, price, } = product;
  return (
    <Link to={`product/${product.id}`}>
    <div className="products-container">
  
    <div className="box">
     
       <img
          src={product.imgSrc}
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
          <Button buttonType='inverted'>add to cart</Button>
      </div>
  </div>
  </div>
  </Link>
  )
};

export default ProductCard;