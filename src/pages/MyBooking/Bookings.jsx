import React from 'react';
import { Link } from 'react-router';

const Bookings = () => {
    return (
        <div className='text-center my-10 space-y-4'>
            <h1 className='text-3xl font-bold'>You Have not Booked any appointment yet</h1>
            <p className='text-sm text-gray-400'>Our platforms connects you with verified, experienced lawyers across various specialties -- all at you convenience </p>
            <Link to={'/'}>
            <button className='btn btn-primary'>Book and appointment</button>
            </Link>
            
        </div>
    );
};

export default Bookings;