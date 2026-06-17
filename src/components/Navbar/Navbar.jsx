import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import './Nav.css'
const Navbar = () => {
  const links = <>
    <NavLink to='/'><a className='mr-4'>Home</a></NavLink>
    <NavLink to='/booking'><a className='mr-4'>My-Bookings</a></NavLink>
    <NavLink to='/blog'><a className='mr-4'>Blogs</a></NavLink>
    <NavLink to='*'><a className='mr-4'>Contact us</a></NavLink>
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <img src={logo} alt="lawyer" />
        <a className="text-xl font-semibold">Law.BD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-[#0EA106] rounded-full">Contact Now</a>
      </div>
    </div>
  );
};

export default Navbar;