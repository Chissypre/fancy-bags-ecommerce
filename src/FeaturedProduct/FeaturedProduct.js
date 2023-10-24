import './FeaturedProduct.styles.css'
import { useState, useContext } from 'react'
import { CartContext } from '../contexts/cart.context';
import Button from '../Button/Button';
import RatingStars from '../RatingStars/RatingStars'
import BAG1F1 from '../images/BAG_blue.png'
import BAG1F2 from '../images/BAG_peach.png'
import BAG1F3 from '../images/BAG_pink.png'
import BAG1F4 from '../images/BAG_red.png'
import BAG1F5 from '../images/BAG_silver.png'
import BAG2F1 from '../images/BAGS_blues.png'
import BAG2F2 from '../images/BAGS_purple.png'
import BAG2F3 from '../images/BAGS_reds.png'
import BAG3F1 from '../images/BAG3_black.png'
import BAG3F2 from '../images/BAG3_grey.png'
import BAG3F3 from '../images/BAG3_pinks.png'

const FeaturedProduct = () => {
  
  const [bags, setBags] = useState([
    {
      id: 31,
      name: "Zara",
      price: 12000.99,
      instock: 5,
      imgSrc:[BAG1F1, BAG1F2, BAG1F3, BAG1F4, BAG1F5],
      colors: ['#639acb', '#9c4f59', '#de8bae', '#9c0e19', '#b1b0ad'],
      selectedColor: '#639acb', 
    },
    {
      id: 36,
      name: "Classic",
      price: 11000.99,
      instock: 5,
      imgSrc:[BAG2F1, BAG2F2, BAG2F3],
      colors: ['#262d49', '#916570', '#b1313d'],
      selectedColor: '#262d49', 
    },
    {
      id: 39,
      name: "Brandy",
      price: 13000.99,
      instock: 5,
      imgSrc:[BAG3F1, BAG3F2, BAG3F3],
      colors: ['#1c1c1b', '#919599', '#d3346f'],
      selectedColor: '#1c1c1b', 
    },
  ]);
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = (bag) => {
    addItemToCart(bag);
  };


  const [rating, setRating] = useState(3.5);
  

  const handleColorClick = (bagIndex, color) => {
    // Update the selected color for the specified bag
    setBags((prevBags) => {
      const updatedBags = [...prevBags];
      updatedBags[bagIndex].selectedColor = color;
      return updatedBags;
    });
  };
  
  return (
    <section className="featured">
      <h1 className="heading">
        <span>featured</span> products
      </h1>

      {bags.map((bag, index) => (
        <div className="row" key={index}>
          <div className="big-image">
            <img src={getBagImage(bag)} alt={`BAG${bag.id}`} />
            
          </div>
          <div className="content">
            <h3>{bag.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              facilis praesentium odit voluptas illum iure libero quis fuga
              commodi. Autem.
            </p>
            <div className="color-content">
              <h3>select color</h3>
              <div className="color-groups">
                {bag.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className={`color ${
                      color === bag.selectedColor ? 'active-color' : ''
                    }`}
                    style={{ background: color }}
                    onClick={() => handleColorClick(index, color)}
                  ></div>
                ))}
              </div>
            </div>
            <RatingStars rating={rating} />
            <span className="price">₦{bag.price}</span>{' '}
            <span className="past-price">₦15000.99</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button style={{ margin:'20px 0'}} onClick={() => addProductToCart(bag)}>add to cart</Button>

          </div>
        </div>
      ))}
    </section>
  );

  function getBagImage(bag) {
    // Find the image corresponding to the selected color
    return {
      "Zara": {
        '#639acb': BAG1F1,
        '#9c4f59': BAG1F2,
        '#de8bae': BAG1F3,
        '#9c0e19': BAG1F4,
        '#b1b0ad': BAG1F5,
      },
      "Classic": {
        '#262d49': BAG2F1,
        '#916570': BAG2F2,
        '#b1313d': BAG2F3,
      },
      "Brandy": {
        '#1c1c1b': BAG3F1,
        '#919599': BAG3F2,
        '#d3346f': BAG3F3,
      },
    }[bag.name][bag.selectedColor];
    
  }
  
};

export default FeaturedProduct;
