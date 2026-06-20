import React, { useState } from 'react';
import Lawyer from './Lawyer';
const Lawyers = ({ data }) => {
  const [cards, setCards] = useState(6);
  const lawyerData = data.slice(0, cards)
  const handleShowAllLawyers = () => {
    setCards(12);
  }
  return (
    <div>
      <div className='text-center my-4'>
        <h1 className='font-bold text-2xl'>Our Best Lawyers</h1>
        <p className='text-sm text-gray-400'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
        {
          lawyerData.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>)
        }
      </div>
      <div className=' text-center my-4 '>
        <button onClick={handleShowAllLawyers} className='btn rounded-full text-white bg-[#0EA106]'>Show All Lawyers</button>
      </div>

    </div>
  );
};

export default Lawyers;