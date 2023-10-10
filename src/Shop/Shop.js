
import { useContext } from 'react';

import ProductCard from '../ProductCard/ProductCard';

import { ProductsContext } from '../contexts/products.context';

import './Shop.styles.css';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products'>
{products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Shop;