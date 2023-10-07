import './Nav.styles.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
    <nav className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/About">
            About
          </Link>
          <Link className="nav-link" to="/product">
            Shop
          </Link>
          <Link className="nav-link" to="/Blogs">
            Blogs
          </Link>
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
          <Link className="nav-link" to="/AddCart">
            AddCart
          </Link>
          <Link className="nav-link" to="/SignIn">
            SignIn
          </Link>
        </nav>
        </div>
  )
}

export default Nav