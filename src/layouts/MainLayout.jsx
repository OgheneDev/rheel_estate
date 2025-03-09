import React, {useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Scroll to top when the path changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout