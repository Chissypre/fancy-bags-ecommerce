import './Herosection.styles.css'
import { Link } from 'react-router-dom'





const Herosection = () => {
  

  return (
    <section class="home" >
        <div class="slide">
            <div class="content">
                <h3>"Stylish Ladies Bags for Every Occasion"</h3>
                <p>We offer an exquisite collection of stylish bags that will complement any outfit. whether it's a night out with the girls
                     or a formal event.
                  
                      Browse our extensive collection today and find the perfect bag to complement your personal style.
                      </p>

                      <div className="action">
                      <span>Shop now for a bag that's chic, versatile, and durable! </span>
                      </div>
                      
                      <Link  to="/product">
          <button className='button'>Shop Now </button> 
          </Link>
            </div>       
    </div>
    <div className="image">
<img src={'https://img.freepik.com/premium-photo/women-s-multicolored-leather-bags-stand-row_128442-2571.jpg?w=740'} alt="https://img.freepik.com/premium-photo/women-s-multicolored-leather-bags-stand-row_128442-2571.jpg?w=740" />
    </div>
</section>

  )
}

export default Herosection
