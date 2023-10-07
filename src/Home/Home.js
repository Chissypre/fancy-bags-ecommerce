import './Home.styles.css'

import ProductLists from '../ProductLists/ProductLists'

const Home = ({ products }) => {
    return (
        
        <main className="Home">
           
            {products.length ? (
                <ProductLists products={products} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No product to display.
                </p>
            )}
        </main>
    )
}

export default Home