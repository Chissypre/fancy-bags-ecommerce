import './Nav.styles.css'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import { CartContext } from '../contexts/cart.context';
import { signOutUser } from '../utils/firebase/firebase.utils';
import { Link } from 'react-router-dom';
import AddCart from '../AddCart/AddCart';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';


const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
           <AddCart/>
          <div>
          {isCartOpen && <CartDropdown />}
          </div>
          </div>
        </>

  )
}

export default Nav