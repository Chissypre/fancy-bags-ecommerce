import './Nav.styles.css'
import { ReactComponent as Logo } from "../images/hand-heart-love-svgrepo-com.svg";
import { ReactComponent as LogoHead } from "../images/LogoHead.svg";
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
  const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#2D2D2D',
    transition: '0.3s ease',
    listStyle: 'none',
    padding: '0 20px',
    position: 'relative',
    zIndex: 999,
  };
  
  const linkStyleSign = {
    ...linkStyle,
    color: '#40867b',
  };
  
  const linkStyleAfter = {
    content: '""',
    width: '30%',
    height: '2px',
    background: '#40867b',
    position: 'absolute',
    bottom: '-4px',
    left: '20px',
  };
  

  return (
    <>
    <nav className="navbar">
     <div className="nav">
      <div className='logodiv' >
     <Link  to='/'>
         <LogoHead className='logo' style={{ position:'fixed', left:0, right:0, zIndex:999,}} />  
        </Link>
        <Link>
        <Logo className='logo' style={{ position:'fixed', left:'70px', zIndex:999}}  /> 
        </Link>
        </div>
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
          </div>
          {currentUser ? (
            <Link onClick={signOutUser} style={linkStyleSign}>
              {' '}
              Sign Out{' '}
            </Link>
          ) : (
          <Link to="/auth" style={linkStyle}>
            Sign In
          </Link>
             )}
              
           <AddCart/>
          <div>
          {isCartOpen && <CartDropdown />}
          </div>
      
          </nav>
          
        </>

  )
}

export default Nav