import './ProductPage.styles.css'


const ProductPage = ({}) => {
   
  return (
    <>
        <section  id="prodetails" >      
    <div className="single-pro-image"> 
   {/*  <img
            src={product.imageSrc}
            alt={` ${product.id}`}
          /> */}
    <div className="small-img-group">
        <div className="small-img-col">
            {/* <img src="images/BAG 1/2.png" width="100%" class="small-img" alt="" > */}
        </div>
        <div className="small-img-col">
            {/* <img src="images/BAG 1/3.png" width="100%" class="small-img" alt="" > */}
        </div>
        <div className="small-img-col">
           {/*  <img src="images/BAG 1/4.png" width="100%" class="small-img" alt="" > */}
        </div>
        <div className="small-img-col">
           {/*  <img src="images/BAG 1/1.png" width="100%" class="small-img" alt="" > */}
           </div>
    </div> 
    </div>
    <div className="single-pro-details">
    <h6>{/* {product.name} */}</h6>
    <h4>Ladies Stylish Purple Bag</h4>
    <div className="quant" >
        <span class="quantity">1</span>
    </div>
    <small>$</small><span className="price">{/* {product.price} */}</span> <span className="past-price">150.99</span>
    <a  className="btn" >add to cart</a>
    
    <h4>Product Details</h4>
    <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in rerum ratione eaque aliquid dolor nam 
        fugit repellat incidunt, iusto, excepturi, labore recusandae inventore corporis quaerat provident facere eius 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium in, numquam commodi tempore expedita 
        quasi saepe nobis soluta at cumque ut ea, similique aliquam tempora quia voluptatem consectetur deleniti blanditiis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aut recusandae, atque, eum repellendus nisi iusto 
        necessitatibus exercitationem eligendi dolorum assumenda id autem blanditiis, nihil in harum obcaecati ipsam nulla.
    </span>
    
    </div>
    
</section>
</>
  )
}

export default ProductPage