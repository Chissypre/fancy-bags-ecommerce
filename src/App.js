import { useState } from 'react';
import ProductLists from './ProductLists/ProductLists';
import bag1Image from './images/BAG 1/1.png';
import bag2Image from './images/BAG 2/2.png';
import bag3Image from './images/BAG 3/2.png';
import bag4Image from './images/BAG 4/1.png';
import bag5Image from './images/BAG 5/1.png';
import bag6Image from './images/BAG 6/1.png';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "BAG 1",
      price: 120.99,
      instock: 5,
      imgSrc:bag1Image,
    },
    {
      id: 1,
      name: "BAG 2",
      price: 100.99,
      instock: 3,
      imgSrc: bag2Image,
    },
    {
      id: 2,
      name: "BAG 3",
      price: 130.99,
      instock: 4,
      imgSrc: bag3Image,
    },
    {
      id: 3,
      name: "BAG 4",
      price: 140.99,
      instock: 7,
      imgSrc: bag4Image,
    },
    {
      id: 4,
      name: "BAG 5",
      price: 135.99,
      instock: 43,
      imgSrc: bag5Image,
    },
    {
      id: 5,
      name: "BAG 6",
      price: 110.99,
      instock: 53,
      imgSrc: bag6Image,
    },
  ])
  return (
    <div className="App">
     <ProductLists
     products={products}
     />
    </div>
  );
}

export default App;
