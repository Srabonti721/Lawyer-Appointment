import React, { } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { AddToStoredLawyer } from '../../utilit/AddToStoredDB';
const LawyerDetails = () => {
const { id } = useParams();
const ConvertedId = parseInt(id);
const data = useLoaderData();
const lawyer = data.find(
  lawData => lawData.id === ConvertedId
);

if (!lawyer) {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-red-500">
        No Lawyer Found!
      </h1>
      <p className="mt-4 text-gray-500">
        Invalid Lawyer ID
      </p>
    </div>
  );
}
    const handleAppointment = (id, name) => {
        AddToStoredLawyer(id, name);
    }
    const { name, image, speciality, experience, licenseNumber, consultationFee, availability } = lawyer;
    return (
        <div className='my-4'>
            <div className='text-center bg-gray-100 border border-gray-300 rounded-xl p-8 '>
                <h1 className='text-2xl font-semibold'>Lawyer’s Profile Details</h1>
                <p>A lawyer (also known as an attorney, barrister, or advocate) is a licensed professional qualified to offer legal advice, draft legal documents, and represent individuals, businesses, or governments in legal matters</p>
            </div>
            <div className='flex border border-gray-300 rounded-2xl p-4 my-4'>
                <img className='w-[150px] h-[150px] object-cover rounded-2xl' src={image} alt="" />
                <div className=' ml-10 space-y-1'>
                    <span className=' text-blue-400 bg-blue-100 rounded-full p-1 text-sm'>{experience}</span>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <div className='flex gap-4'>
                        <h2 className='text-gray-400'>{speciality}</h2>
                        <p className='text-gray-400' >License No: {licenseNumber}</p>
                    </div>
                    <div>
                        Availability :
                        {
                            availability.map((day, index) => <span key={index} className=' text-[#FFA000] border mx-2 bg-orange-100 rounded-full p-1 text-sm'> {day}</span>)
                        }
                    </div>
                    <h2>Consultation Fee : <span className='text-green-600 font-semibold'>Taka:{consultationFee}</span></h2>
                </div>
            </div>
            <div className='text-center bg-gray-100 border border-gray-300 rounded-xl p-8 '>
                <h1 className='text-2xl font-semibold'>Book an Appointment</h1>
                <div className='border-b-2 border-gray-300 border-dashed my-2'></div>
                <div className='flex justify-between'>
                    <h3>Availability </h3>
                    <p className=' text-[#09982F] border mx-2 bg-green-100 rounded-full p-1 text-sm'>Lawyer Available Today</p>
                </div>
                <Link to={`/booking/${id}`}>
                    <button onClick={() => handleAppointment(id, name)} className='mt-4 btn btn-block text-white bg-[#0EA106] rounded-full'>Book Appointment Now</button>
                </Link>

            </div>
        </div>
    );
};

export default LawyerDetails;