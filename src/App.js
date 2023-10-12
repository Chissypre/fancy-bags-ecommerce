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
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Missing from './Missing/Missing';

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "BAG 1",
      price: 120.99,
      instock: 5,
      imgSrc:'https://firebasestorage.googleapis.com/v0/b/fancy-bags-ecommerce.appspot.com/o/images%2F1.png2da31c7a-ac04-4191-9268-50557984cf98?alt=media&token=df4d4226-6ac6-4ee5-b609-0c233b702e3d&_gl=1*y870l5*_ga*NDg3NzA0OTQ0LjE2OTUzMDIyNjE.*_ga_CW55HF8NVT*MTY5NzA2MTMxMS4yMi4xLjE2OTcwNjY4MTcuMTkuMC4w',
    },
    {
      id: 1,
      name: "BAG 2",
      price: 100.99,
      instock: 3,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/fancy-bags-ecommerce.appspot.com/o/images%2F1.png85c9d4b7-5c92-4669-a874-d141d11157d6?alt=media&token=e9ecee0f-7472-4f90-a3c8-6a3c982d93be&_gl=1*9j7b6b*_ga*NDg3NzA0OTQ0LjE2OTUzMDIyNjE.*_ga_CW55HF8NVT*MTY5NzA2MTMxMS4yMi4xLjE2OTcwNjY4NzAuMzIuMC4wz',
    },
    {
      id: 2,
      name: "BAG 3",
      price: 130.99,
      instock: 4,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/fancy-bags-ecommerce.appspot.com/o/images%2F2.png4871d754-e2e7-49d8-a228-844465322918?alt=media&token=396e46de-4fd5-4107-a26d-f3a22536dc9f&_gl=1*9seutr*_ga*NDg3NzA0OTQ0LjE2OTUzMDIyNjE.*_ga_CW55HF8NVT*MTY5NzA2MTMxMS4yMi4xLjE2OTcwNjY5MjAuNDYuMC4w',
    },
    {
      id: 3,
      name: "BAG 4",
      price: 140.99,
      instock: 7,
      imgSrc:'https://firebasestorage.googleapis.com/v0/b/fancy-bags-ecommerce.appspot.com/o/images%2F1.png67bde7d2-1a8f-4c35-98ee-07b59c304573?alt=media&token=c9a11a71-ce52-47db-816d-1da789969d8b&_gl=1*1tvzrou*_ga*NDg3NzA0OTQ0LjE2OTUzMDIyNjE.*_ga_CW55HF8NVT*MTY5NzA2MTMxMS4yMi4xLjE2OTcwNjc2MzkuNTYuMC4w',
    },
    {
      id: 4,
      name: "BAG 5",
      price: 135.99,
      instock: 43,
      imgSrc:'https://firebasestorage.googleapis.com/v0/b/fancy-bags-ecommerce.appspot.com/o/images%2F1.png4a6c8d1d-efc4-46c3-a532-dbe870eccdf0?alt=media&token=6e8d9b2b-2b59-4944-a500-3606f9df86b2&_gl=1*aqh23o*_ga*NDg3NzA0OTQ0LjE2OTUzMDIyNjE.*_ga_CW55HF8NVT*MTY5NzA2MTMxMS4yMi4xLjE2OTcwNjc1MzIuNDIuMC4w',
    },
    {
      id: 5,
      name: "BAG 6",
      price: 110.99,
      instock: 53,
      imgSrc:'https://firebasestorage.googleapis.com/v0/b/fancy-bags-ecommerce.appspot.com/o/images%2F2.png8c617d2d-720f-4da4-9688-87e24669e876?alt=media&token=d0c45df0-6da9-47cf-b6c1-7c0700606a49&_gl=1*5nz7dl*_ga*NDg3NzA0OTQ0LjE2OTUzMDIyNjE.*_ga_CW55HF8NVT*MTY5NzA2MTMxMS4yMi4xLjE2OTcwNjc4NjMuMzMuMC4w',
    },
    
  ])
  
  
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
