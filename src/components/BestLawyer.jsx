import React from 'react';
import lawyer from '../assets/success-doctor.png';
import review from '../assets/success-review.png';
import initiated from '../assets/success-patients.png';
import stuff from '../assets/success-staffs.png';
import CountUp from 'react-countup';

const BestLawyer = () => {
    return (
        <div className='text-center my-4'>
            <div>
                <CountUp  end={1000} duration={5} />
            </div>
            <h1 className='text-2xl font-bold '>We Provide Best Law Services</h1>
            <p className='text-sm text-gray-300'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            <div className='flex my-8 justify-center gap-4'>
                <div className='border p-8 bg-gray-200 rounded-xl border-gray-300'>

                    <img className='w-[40px]' src={lawyer} alt="" />
                    <h1 className='font-bold'> </h1>
                    <p className='text-gray-400'>Total Lawyer</p>
                </div>
                <div className=' border p-8 bg-gray-200 rounded-xl border-gray-300'>
                    <img className='w-[40px]' src={review} alt="" />
                    <h1 className='font-bold'>467+</h1>
                    <p className='text-gray-400'>Total Reviews</p>
                </div>
                <div className='border p-8 bg-gray-200 rounded-xl border-gray-300'>
                    <img className='w-[40px]' src={initiated} alt="" />
                    <h1 className='font-bold'>467+</h1>
                    <p className='text-gray-400'>Cases Initiated</p>
                </div>
                <div className='border p-8 bg-gray-200 rounded-xl border-gray-300'>
                    <img className='w-[40px]' src={stuff} alt="" />
                    <h1 className='font-bold'>467+</h1>
                    <p className='text-gray-400'>Total Stuffs</p>
                </div>
            </div>

        </div>
    );
};

export default BestLawyer;