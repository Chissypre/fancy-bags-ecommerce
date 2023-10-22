import './Nav.styles.css'
import { ReactComponent as Logo } from "../images/hand-heart-love-svgrepo-com.svg";
import { ReactComponent as LogoHead } from "../images/LogoHead.svg";
import { ReactComponent as Logo2 } from "../images/2nd hand-heart-love-svgrepo-com -.svg";
import { ReactComponent as LogoHead2 } from "../images/LogoHead2.svg";
import { useContext , useState, useEffect} from 'react';
import { UserContext } from '../contexts/user.context';
import { CartContext } from '../contexts/cart.context';
import { signOutUser } from '../utils/firebase/firebase.utils';
import { Link } from 'react-router-dom';
import AddCart from '../AddCart/AddCart';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import { HiX } from 'react-icons/hi';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';


const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#2D2D2D',
    transition: '0.3s ease',
    listStyle: 'none',
    padding: '0 10px',
    position: 'relative',
    zIndex: 999,
  };
  
  const linkStyleSign = {
    ...linkStyle,
    color: '#40867b',
  };
  

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 831);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 831);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const getFirstName = (displayName) => {
    if (displayName) {
      const parts = displayName.split(' ');
      return parts[0];
    }
    return '';
  };


  return (
    <>
     {isMobile ? (
        <div className={`mobile-nav ${open ? 'active' : ''}`}>
          
          
          
          {currentUser ? (
            <Link onClick={signOutUser} style={{textDecoration:"none", color:"#244d4d", alignItems:"center",fontWeight:"700", marginTop:'60px', marginLeft:'20px', fontSize:'1.1rem', padding:"10px"}}>
              {' '}
             Welcome, {getFirstName(currentUser.displayName)}!
            </Link>
            
          ) : (
          <Link to="/auth" style={{textDecoration:"none", color:"#244d4d", alignItems:"center", fontWeight:"700", marginLeft:'20px', marginTop:'60px', fontSize:'1.3rem'}}>
            Sign In
          </Link>
             )} 
           {currentUser &&<Link className="mobile-nav-link" onClick={signOutUser} >
             Sign out
            </Link>}
            <Link className="mobile-nav-link" to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link className="mobile-nav-link" to="/About" onClick={toggleMenu}>
              About
            </Link>
            <Link className="mobile-nav-link" to="/product" onClick={toggleMenu}>
            Shop
            </Link>
            <Link className="mobile-nav-link" to="/Blogs" onClick={toggleMenu}>
              Blogs
            </Link>
            <Link className="mobile-nav-link" to="/Contact" onClick={toggleMenu}>
              Contact
            </Link>
            
           
            
       <div className="mobilehead">
          <div className="mbheader">
            <Link to="/">
          <LogoHead2 />
           <Logo2 />
           </Link>
           
           </div>
          <div className="containbtn">
          
          <AddCart/>
          <div>
          {isCartOpen && <CartDropdown />}
          </div>
          <button className="navbar-toggle" onClick={toggleMenu}>
            {open ? <HiX size={35} /> : <HiMiniBars3CenterLeft size={35} />}
          </button>
          </div>
          
          
          </div>
        </div>
      ) : (
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

          {currentUser &&<Link  onClick={signOutUser} >
              Sign out
            </Link>}
          </div>

          {currentUser? (
            <Link onClick={signOutUser} style={linkStyleSign}>
              {' '}
              Welcome, {getFirstName(currentUser.displayName)}!
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
          )}
          
        </>

  )
}

export default Nav