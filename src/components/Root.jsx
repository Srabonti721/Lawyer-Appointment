import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <div className='container mx-auto'>
            <Navbar></Navbar>
            <ToastContainer/>
            <Outlet></Outlet>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default Root;