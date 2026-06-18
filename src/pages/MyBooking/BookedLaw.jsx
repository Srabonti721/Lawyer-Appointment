import React, { } from 'react';
import { useParams } from 'react-router';

const BookedLaw = ({ data }) => {
    const {name,speciality, consultationFee } = data
    return (
        <div>
            <div className='border border-gray-300 rounded-lg my-4 p-4'>
                <h1 className='text-xl font-semibold my-2'>{name}</h1>
                <div className='flex justify-between  border-b-2 border-dashed border-gray-300'>
                     <h3>{speciality}</h3> 
                     <p>AppointmentFee : {consultationFee}</p> 
                </div>
                <button className='hover:text-white hover:bg-red-400 mt-4 btn btn-block text-[#FF0000] rounded-full border border-[#FF0000]'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default BookedLaw;