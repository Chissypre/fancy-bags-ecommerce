import './Nav.styles.css'
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";

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
          </nav>
          <div className="navbar" style={{ justifyContent:"flex-end" }} >
          <Link  to="/AddCart">
            <BsCart2
            style={{ fontSize: '2rem' }}
            />
          </Link>
          <Link to="/SignIn">
            SignIn
          </Link>
          </div>
        </>

  )
}

export default Nav