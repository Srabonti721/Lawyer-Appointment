import React, { } from 'react';
// import { RemoveToStored } from '../../utilit/AddToStoredDB';
const BookedLaw = ({ data }) => {
    console.log(data.id);
    // const remainingData = data.filter(item=>item.id !== id)
//     const handleCancel = (id) =>{
//         console.log(id);
        
//          const data = JSON.parse(localStorage.getItem("booking")) || [];
//            const remainingDoctors = data.filter(
//     doctor => doctor.id !== id);
//     localStorage.setItem(
//     "booking",
//     JSON.stringify(remainingDoctors)
//   );
        // localStorage.removeItem(id)
        // console.log("click", id)// 
          const {name,speciality, consultationFee } = data;
//     const handleCancel=(id)=>{
// RemoveToStored(id)
// console.log("do somthing");

    // }
  
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