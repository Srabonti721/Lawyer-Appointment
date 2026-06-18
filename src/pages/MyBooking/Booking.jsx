import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router';
import BookedLaw from './BookedLaw';
import { GetStoredLawyer } from '../../utilit/AddToStoredDB';

const Booking = () => {

      const [booking, setBooking] = useState([])
    const data = useLoaderData();
            useEffect(()=>{
        const storedLawyerData = GetStoredLawyer();
        const convertedStoredLawyerData = storedLawyerData.map(id=>parseInt(id));
        const myBooking = data.filter(booked => convertedStoredLawyerData.includes(booked.id));
        setBooking(myBooking);
        },[])
    
    return (
        <div>
            <div>

            </div>
            <div className='text-center my-4'>
                <h1 className='font-bold text-2xl'>My Today Appointments</h1>
                <p className='text-gray-400'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            {
                booking.map(data => <BookedLaw key={data.id} data={data}></BookedLaw>)
            }

        </div>
    );
};

export default Booking;