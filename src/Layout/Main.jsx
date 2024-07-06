import { Outlet, useLocation } from 'react-router-dom'; 
import { useEffect } from 'react'; 
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

 

const Main = () => {

    const location = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0)
    },[location.pathname])

    return (
        <div className='container mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet> 
        <ToastContainer />
        <Footer></Footer>
        </div>
    );
};

export default Main;