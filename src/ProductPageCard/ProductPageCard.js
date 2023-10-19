import './ProductPageCard.styles.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/cart.context';
import Button from '../Button/Button';
import RatingStars from '../RatingStars/RatingStars';

const ProductPageCard = ({ product }) => {
  const [rating, setRating] = useState(3.5);
  const navigate = useNavigate()
  const goToShopPage = () => {
    navigate('/product');
  };
  const goToCheckoutPage = () => {
    navigate('/Checkout');
  };

  const {name, price, imgSrc, imgSrc2, imgSrc3, imgSrc4, productd, instock} = product;
  const [mainImage, setMainImage] = useState(imgSrc);
  const handleSmallImageClick = (imgSrc) => {
    setMainImage(imgSrc);
  };
  const { addItemToCart, cartCount, } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
        <section  className="prodetails" >      
    <div className="single-pro-image"> 
    {<img className='single-pro-image'
            src={mainImage}
            alt={` ${product.id}`}
          />}
    <div className="small-img-group">
        <div className="small-img-col">
        <img className="small-pro-image"
            src={imgSrc2 || imgSrc}
            alt={` ${product.id}`}
            onClick={() => handleSmallImageClick(imgSrc2 || imgSrc)}
          />
        </div>
        <div className="small-img-col">
        <img
        className="small-pro-image"
            src={imgSrc3 || imgSrc}
            alt={` ${product.id}`}
            onClick={() => handleSmallImageClick(imgSrc3 || imgSrc)}
          />
        </div>
        
       { <div className="small-img-col">
        <img
        className="small-pro-image"
            src={imgSrc4 || imgSrc}
            alt={` ${product.id}`}
            onClick={() => handleSmallImageClick(imgSrc4 || imgSrc)}
          />
           </div>}
    </div> 
    </div>
    
    <div className="single-pro-details">
    <h4>{name}</h4>
        <span class="quantity">Quantity: {cartCount}</span>
        <br />
    <span class="quantity">Instock: {instock}</span>
  <br />
    <small>₦</small><span className="price">{price}</span> <span className="past-price">₦15000.99</span>
    
               <RatingStars rating={rating}  />  
              
    <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
    
    <h4>Product Details</h4>
    <span>
       {productd}
    </span>
    <div className='btnhs'>
    <Button onClick={goToCheckoutPage}>CHECKOUT</Button>
    <Button onClick={goToShopPage}> GO TO SHOP PAGE</Button>
    </div>
    </div>
    
</section>
  )
};

export default ProductPageCard;