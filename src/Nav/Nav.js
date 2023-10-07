import './Nav.styles.css'
import { Link } from 'react-router-dom';

const Nav = () => {
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
          <Link  to="/AddCart">
            AddCart
          </Link>
          <Link to="/SignIn">
            SignIn
          </Link>
        </nav>
        </>

  )
}

export default Nav