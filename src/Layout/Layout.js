import Herosection from '../Herosection/Herosection';
import './Layout.styles.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';


  
const Layout = () => {
  const location = useLocation();
  return (
    <div className="layout">
      <div className="navigation">
      <Header />
      <Nav/>
      </div>
      {location.pathname === '/' && <Herosection />}
      <Outlet/>
      <Footer />
      </div>
  )
}

export default Layout