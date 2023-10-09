import './Nav.styles.css'
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";

const Nav = () => {
  const quantity = 0;
  return (
    <>
    <nav className="navbar">
          <Link className='active' to="/">
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
          </nav>
          <div className="navbar" style={{ justifyContent:"flex-end" }} >
          <Link  to="/AddCart">
            <div className="cartquant">
            <BsCart2 className='cart-icon'
            />
             <span style={{ marginLeft: '0.5rem', color: 'red' }} className='quantity'>{quantity}</span>
             </div>
          </Link>
          <Link to="/auth">
            SignIn
          </Link>
          </div>
        </>

  )
}

export default Nav