import Herosection from '../Herosection/Herosection';
import './Layout.styles.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';


  
const Layout = () => {
  const location = useLocation();
  return (
    <div className="layout">
      <Header />
      {location.pathname === '/' && <Herosection />}
      <Outlet/>
      <Footer />
      </div>
  )
}

export default Layout