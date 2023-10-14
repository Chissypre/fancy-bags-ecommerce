import './ProductPage.styles.css'
import { useContext} from 'react';
import { useParams } from 'react-router-dom';

import ProductPageCard from '../ProductPageCard/ProductPageCard'
import { CollectionsContext } from '../contexts/collections.context';

const ProductPage = () => {
  const { id } = useParams();
  const { collectionsMap } = useContext(CollectionsContext);
  const product = collectionsMap.bags[id];
  return (
    <>
        {product &&
          
            <ProductPageCard key={product.id} product={product} />
        }
    </>
  );
};

export default ProductPage;