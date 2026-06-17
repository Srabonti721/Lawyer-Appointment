import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className='w-2/3 mx-auto my-10' src="https://seocom.agency/_astro/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.Dl4Z4dox.jpg" alt="" />
            <div className='text-center space-y-2'>
                <h2 className='text-red-500 font-bold text-3xl'>404 - Page Not Found</h2>
                <p className='font-semibold'>Oops! the page you're looking for doesn't exist</p>
                <Link to={'/'} className='btn text-white bg-[#0EA106]'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;