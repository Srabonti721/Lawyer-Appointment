import React from 'react';
import { Link } from 'react-router';

const DynamicRoute = ({ id }) => {
    return (
        <div className='text-center my-10 space-y-4'>
            <h1>No Lawyer found !!</h1>
            <p>No lawyer found with this licensed no : <span className="font-bold">{id}</span></p>
            <Link to={'/'} className='btn bg-[#0EA106] text-white rounded-xl'>View All Lawyers</Link>
        </div>
    );
};

export default DynamicRoute;