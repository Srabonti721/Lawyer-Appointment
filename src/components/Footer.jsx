import React from 'react';
import footerLogo from '../assets/logo-footer.png'
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    const links = <>
        <NavLink to='/'><a className='mr-4'>Home</a></NavLink>
        <NavLink to='/booking'><a className='mr-4'>My-Bookings</a></NavLink>
        <NavLink to='/blog'><a className='mr-4'>Blogs</a></NavLink>
        <NavLink to='*'><a className='mr-4'>Contact us</a></NavLink>
    </>
    return (
        <footer className="footer footer-horizontal bg-black
text-white footer-center  p-10">
            <aside>
                <div className='flex'>
                    <img src={footerLogo} alt="lawyer" />
                    <a className="text-xl font-semibold">Law.BD</a>
                </div>
                <div className='flex'>
                    {links}
                </div>

            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href="https://github.com/Srabonti721" target='_blank'><FaGithub /></a>
                    <a href="https://www.youtube.com/feed/you"  target='_blank'  className='bg-rose-500 rounded-sm '><FaSquareYoutube /></a>
                    <a href="" className='bg-blue-500 rounded-sm '><FaFacebookF /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;