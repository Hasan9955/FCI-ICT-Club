/* eslint-disable react/no-unknown-property */
import logo from '../../assets/ict-club logo.png'

const Footer = () => {
    return (
        <footer className="bg-base-200 text-black p-10">
            <div className="footer">
            <aside>
            <a href="/"  className="flex flex-col items-start gap-3">
                        <img className="size-20" src={logo} alt="" />
                        <p className="flex flex-col justify-center items-start "><span className="text-xl md:text-3xl  font-bold">FCI ICT ClUB</span> <span className="text-lg">Our Vision Your Future.</span></p></a>
            </aside>
            <nav className='font-sans'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='font-sans'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='font-sans'>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </div>
        <p className="text-center mt-5 font-sans">Copyright © 2024 - All right reserved by FCI ICT CLUB</p>
        <p className="text-center font-sans font-bold">Created by <a href='https://github.com/Hasan9955' className="hover:text-[#1c99ca] link">Hasan Bin Ali</a></p>
        </footer>
    );
};

export default Footer;