import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter basename='/fancy-bags-ecommerce'>
  <UserProvider>
        <ProductsProvider>
        <CartProvider>
          <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
  </BrowserRouter>
</React.StrictMode>
);


