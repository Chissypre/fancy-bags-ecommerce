import './Header.styles.css'
import { Link } from 'react-router-dom';


import { ReactComponent as Logo } from "../images/hand-heart-love-svgrepo-com.svg";
import { ReactComponent as LogoHead } from "../images/LogoHead.svg";
const Header = () => {
  return (
    <>
       <Link  to='/'>
        <LogoHead style={{position:'absolute', marginTop:'15px'}} />
          <Logo  style={{  position:'absolute', marginLeft:'65px', marginTop:'15px' }}/>
        </Link>
        
      
    </>
  )
}

export default Header