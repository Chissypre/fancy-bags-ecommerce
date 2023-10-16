 
import './Layout.styles.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav'
import Herosection from '../Herosection/Herosection'; 
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import Map from '../Map/Map';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';


  
const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    
    <div className="layout">
      <Header />
     <Nav/>
     <main>
      {isHomePage && <Herosection />}
      {isHomePage && <FeaturedProduct />}
      <Outlet/>
      <Footer />
      </main>
      </div>
  )
}

export default Layout