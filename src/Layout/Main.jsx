import { Outlet, useLocation } from 'react-router-dom'; 
import { useEffect } from 'react'; 
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
 

 

const Main = () => {

    const location = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0)
    },[location.pathname])

    return (
        <div className='container mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet> 
        <Footer></Footer>
        </div>
    );
};

export default Main;