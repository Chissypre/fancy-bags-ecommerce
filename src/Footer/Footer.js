import './Footer.styles.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  const today =new Date()
  return (
    <section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>quick links</h3>
            <Link to="/">
            Home
          </Link>
          <Link  to="/About">
            About
          </Link>
          <Link  to="/product">
            Shop
          </Link>
          <Link to="/Blogs">
            Blogs
          </Link>
          <Link  to="/Contact">
            Contact
          </Link>
          <Link  to="/AddCart">
            AddCart
          </Link>
          <Link to="/SignIn">
            SignIn
          </Link>
        </div>

        <div class="box">
            <h3>extra links</h3>
          <Link  to="/myaccount">
            My Account
          </Link>
          <Link  to="/orders">
            My Orders
          </Link>
          <Link to="/Newsletter">
            Newsletter
          </Link>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <Link to="/facebook">
           Facebook
          </Link>
          <Link to="/twitter">
            Twitter
          </Link>
          <Link to="/Instagram">
            Instagram
          </Link>
          <Link to="/LinkedIn">
            LinkedIn
          </Link>
        </div>

        <p className='credit'>Copyright {today.getFullYear()} Chizaram Precious</p>

    </div>

</section>
  )
}

export default Footer