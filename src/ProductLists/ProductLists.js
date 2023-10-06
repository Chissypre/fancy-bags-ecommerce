import './ProductLists.styles.css'
import ListProduct from '../ListProduct/ListProduct'

const ProductLists = ({products}) => {
  return (
    <div className='products'>
{products.map((product) => (
        <ListProduct
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductLists