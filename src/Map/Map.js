import React, { useState, useEffect } from 'react';
import './Map.styles.css'
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
import BagInfo from '../BagInfo/BagInfo'

const mapStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

const bagContainerStyles = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px',
  width: '250px',
};

const colorCircleStyles = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  display: 'inline-block',
  margin: '5px',
  cursor: 'pointer',
};

const Map = () => {
  const [bags, setBags] = useState([
      {
         id: 31,
         name: "Zara",
         price: 120.99,
         instock: 5,
         imgSrc:BAG1F1,
         color:'#639acb'
       },
       {
         id: 32,
         name: "Zara",
         price: 120.99,
         instock: 2,
         imgSrc:BAG1F2,
         color:'#9c4f59'
       },
       {
         id: 33,
         name: "Zara",
         price: 120.99,
         instock: 4,
         imgSrc:BAG1F3,
         color:'#de8bae'
       },
       {
         id: 34,
         name: "Zara",
         price: 120.99,
         instock: 5,
         imgSrc:BAG1F4,
         color:'#9c0e19'
       },
       {
         id: 35,
         name: "Zara",
         price: 120.99,
         instock: 3,
         imgSrc:BAG1F5,
         color:'#b1b0ad'
       },
       {
         id: 36,
         name: "Classic",
         price: 190.99,
         instock: 5,
         imgSrc:BAG2F1,
         color:'#262d49',
       },
       {
         id: 37,
         name: "Classic",
         price: 144.99,
         instock: 5,
         imgSrc:BAG2F2,
         color:'#916570',
       },
       {
         id: 38,
         name: "Classic",
         price: 120.99,
         instock: 2,
         imgSrc:BAG2F3,
         color:'#b1313d',
       },
       {
         id: 39,
         name: "Brandy",
         price: 130.99,
         instock: 5,
         imgSrc:BAG3F1,
         color:'#1c1c1b',
       },
       {
         id: 40,
         name: "Brandy",
         price: 120.99,
         instock: 9,
         imgSrc:BAG3F2,
         color:'#919599',
       },
       {
         id: 41,
         name: "Brandy",
         price: 160.99,
         instock: 7,
         imgSrc:BAG3F3,
         color:'#d3346f',
       },
     ]);
 

  // Create an object to store the initial selected bags by name
  const initialSelectedBags = {};

  // Populate initialSelectedBags with the first bag of each name
  bags.forEach((bag) => {
    if (!initialSelectedBags[bag.name]) {
      initialSelectedBags[bag.name] = bag;
    }
  });

  const [selectedBag, setSelectedBag] = useState(initialSelectedBags);

  const handleBagChange = (name, color) => {
    // Find the bag with the selected color
    const selected = bags.find(bag => bag.name === name && bag.color === color);
    
    // Update the selected bag in state
    setSelectedBag({ ...selectedBag, [name]: selected });
  };

  useEffect(() => {
    // Set the initial selected bags when the component mounts
    const initialBags = {};
    bags.forEach((bag) => {
      if (!initialBags[bag.name]) {
        initialBags[bag.name] = bag;
      }
    });
    setSelectedBag(initialBags);
  }, [bags]);

  return (
    <div style={mapStyles}>

      {Object.values(selectedBag).map((bag) => (
        <div key={bag.id} style={bagContainerStyles}>
          <img src={bag.imgSrc} alt={bag.name} />
          {bag.color.split(',').map((color) => (
              <div
                key={color}
                className="color-circle"
                style={{ ...colorCircleStyles, background: color }}
                onClick={() => handleBagChange(bag.name, color)}
              ></div>
            ))}
          <h2>{`${bag.name} ${bag.instock}`}</h2>
          <p>Current Color: {bag.color}</p>
          {/* Use the BagInfo component for the selected bag */}
          <BagInfo
            description={`A stylish ${bag.name} bag`}
            rating={4.5} // You can use the actual rating here
            price={bag.price} // You can use the actual price here
            onAddToCart={() => {
              // Implement your "Add to Cart" functionality here
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Map;