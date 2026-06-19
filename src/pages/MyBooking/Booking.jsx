import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router';
import BookedLaw from './BookedLaw';
import { GetStoredLawyer, RemoveToStored } from '../../utilit/AddToStoredDB';
import TriangleBar from './Chart';
  import { toast } from 'react-toastify';
const Booking = () => {
    const [booking, setBooking] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        const storedLawyerData = GetStoredLawyer();
        const convertedStoredLawyerData = storedLawyerData.map(id => parseInt(id));
        const myBooking = data.filter(booked => convertedStoredLawyerData.includes(booked.id));
        setBooking(myBooking);
    }, [data])

    const handleCancel = (id) => {
        RemoveToStored(id);
        const remainingBookings = booking.filter(
            item => item.id !== id
        );
        setBooking(remainingBookings);
        toast.error('Appointment Cancelled !', {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    };

    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <TriangleBar booking={booking}></TriangleBar>
            </div>
            <div className='text-center my-4'>
                <h1 className='font-bold text-2xl'>My Today Appointments</h1>
                <p className='text-gray-400'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            {
                booking.map(data => <BookedLaw key={data.id} data={data} handleCancel={handleCancel}></BookedLaw>)
            }

        </div>
    );
};

export default Booking;