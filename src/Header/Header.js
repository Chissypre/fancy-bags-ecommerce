import './Header.styles.css'
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { ReactComponent as Logo } from "../images/hand-heart-love-svgrepo-com.svg";
import { ReactComponent as LogoHead } from "../images/LogoHead.svg";
const Header = () => {
  return (
    <>
       <Link  to='/'>
        <LogoHead></LogoHead>
          <Logo className='logo' />
        </Link>
        <Nav/>
    </>
  )
}

export default Header