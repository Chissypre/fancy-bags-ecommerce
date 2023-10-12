
import { useContext } from 'react';

import ProductCard from '../ProductCard/ProductCard';

import { CollectionsContext } from '../contexts/collections.context';

import './Shop.styles.css';

const Shop = () => {
  const { collectionsMap} = useContext(CollectionsContext);

  return (
    <>
    {
      Object.keys(collectionsMap).map((title) => (
        <>
        <div className='products'>
 {collectionsMap[title].map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
        
      ))} 
    </div>
        </>
      ))}

    </>
  );
};

export default Shop;