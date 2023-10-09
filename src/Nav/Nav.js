import './Nav.styles.css'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import { signOutUser } from '../utils/firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";

const Nav = () => {
  const { currentUser } = useContext(UserContext);

  


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
          {currentUser ? (
            <Link onClick={signOutUser}>
              {' '}
              Sign Out{' '}
            </Link>
          ) : (
          <Link to="/auth">
            Sign In
          </Link>
             )}
          </div>
        </>

  )
}

export default Nav