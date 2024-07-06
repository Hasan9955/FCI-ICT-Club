import { NavLink } from "react-router-dom";
import logo from '../../assets/ict-club logo.png'

const Navbar = () => {


    const links = <>
        <li className="lg:underline rounded-lg"><NavLink to='/'>Home</NavLink></li>
        <li className="lg:underline rounded-lg"><NavLink to='/faculties'>Faculties</NavLink></li>
        <li className="lg:underline rounded-lg"><NavLink to='/gallery'>Gallery</NavLink></li>
        <li className="lg:underline rounded-lg"><NavLink to='/aboutUs'>About US</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar fixed z-[10] bg-opacity-60 bg-black max-w-screen-xl text-white">
                <div className="md:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a href="/" className="flex items-center gap-2 md:gap-5 ">
                        <img className="size-12 md:size-20" src={logo} alt="" />
                        <p className="flex flex-col justify-center items-start"><span className="text-lg md:text-3xl  font-bold">FCI ICT ClUB</span> <span className="md:text-lg">Our Vision Your Future.</span></p></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold   items-center flex gap-3 px-1">
                        {links}
                    </ul>
                </div> 
            </div>
            <div className="h-[68px] md:h-20"></div>
        </div>
    );
};

export default Navbar;