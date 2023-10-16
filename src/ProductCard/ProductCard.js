import './ProductCard.styles.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/cart.context';
import Button from '../Button/Button';
import RatingStars from '../RatingStars/RatingStars';

const ProductCard = ({ product }) => {
  const [rating, setRating] = useState(3.5);
  const { name, price, imgSrc } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="products-container">
    <>
    <Link to={`${product.id}`}>
    <div className="box">
     
       <img
          src={imgSrc}
          alt={` ${product.id}`}
        />
    
      <div className="content">
          <h3 className="productName">{name}</h3>
          <small>$</small><span className="price">{price}</span> <span className="past-price">$150.99</span>
          <div className="cardstyle">
               <RatingStars rating={rating}  />  
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