import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router';
import BookedLaw from './BookedLaw';
import { GetStoredLawyer } from '../../utilit/AddToStoredDB';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
const Booking = () => {
    const [booking, setBooking] = useState([])
    const data = useLoaderData();
    useEffect(() => {
        const storedLawyerData = GetStoredLawyer();
        const convertedStoredLawyerData = storedLawyerData.map(id => parseInt(id));
        const myBooking = data.filter(booked => convertedStoredLawyerData.includes(booked.id));
        setBooking(myBooking);
    }, [])

    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <BarChart width={600} height={300} data={booking}>
                    <XAxis dataKey={"name"}></XAxis>
                    <YAxis></YAxis>
                    <Bar fill="green" dataKey="consultationFee"></Bar>
                </BarChart>
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