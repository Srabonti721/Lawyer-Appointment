import React from 'react';

const Lawyer = ({ lawyer }) => {
    console.log(lawyer);
    const { name, id, image, speciality, experience, licenseNumber, available } = lawyer;
    return (
        <div className='flex border border-gray-300 rounded-2xl p-4'>
                <img className='w-[150px] h-[150px] object-cover rounded-2xl' src={image} alt="" />
            <div className=' ml-10 space-y-1'>
                <div className='flex'>
                    <h4 className='mr-10 text-green-400 bg-green-100 rounded-full px-2 text-sm'>{available}</h4>
                    <h4 className=' text-blue-400 bg-blue-100 rounded-full px-2 text-sm'>{experience}</h4>
                </div>
                <h1 className='text-xl font-bold'>{name}</h1>
                <h2 className='text-gray-400'>{speciality}</h2>
                <p className='text-gray-400' >License No: {licenseNumber}</p>
                    <button className='btn btn-block text-sm text-blue-400 rounded-full'>View Details</button>
            </div>
        </div>
    );
};

export default Lawyer;