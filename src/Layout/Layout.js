 
import './Layout.styles.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav'
import Herosection from '../Herosection/Herosection'; 
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';


  
const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    
    <div className="layout">
      <Header />
     <Nav/>
     
      {isHomePage && <Herosection />}
      <Outlet/>
      <Footer />
     
      </div>
  )
}

export default Layout