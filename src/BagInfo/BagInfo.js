import './BagInfo.styles.css'
const bagInfoStyles = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
  };
const BagInfo = ({ description, rating, price, onAddToCart }) => {
  return (
    <div  style={bagInfoStyles}>
      <h3>Description: {description}</h3>
      <p>Rating: {rating} stars</p>
      <p>Price: ${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default BagInfo;
