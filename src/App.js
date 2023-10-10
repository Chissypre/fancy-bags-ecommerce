import { useState } from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About'
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import AddCart from './AddCart/AddCart';
import Authentication from './Authentication/Authentication';
import ProductPage from './ProductPage/ProductPage';
import Shop from './Shop/Shop'
import Checkout from './Checkout/Checkout';
import bag1Image from './images/BAG 1/1.png';
import bag2Image from './images/BAG 2/2.png';
import bag3Image from './images/BAG 3/2.png';
import bag4Image from './images/BAG 4/1.png';
import bag5Image from './images/BAG 5/1.png';
import bag6Image from './images/BAG 6/1.png';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Missing from './Missing/Missing';

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
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home products={products} />}/> 
        <Route path="About" element={<About/>} />
        <Route path="product">
         {  <Route index element={<Shop
          />}/> }
        <Route path="/product/:id" element={<ProductPage
          />}/>
        </Route>     
        <Route path="Blogs" element={<Blogs/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="auth" element={<Authentication/>} />
        <Route path="AddCart" element={<AddCart/>} />
        <Route path="Checkout" element={<Checkout/>} />
        <Route path="*" element={<Missing/>} />
        </Route>
      </Routes>

    
    </div>
  );
}

export default App;
