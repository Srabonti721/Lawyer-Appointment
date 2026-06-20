import React from 'react';
import banner from '../assets/banner-img-1.png'
const Banner = () => {
  return (
    <div className="hero h-[500px] mb-10 rounded-xl"
      style={{ backgroundImage:`url(${banner})`,}}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="min-w-md">
          <h1 className="mb-5 text-xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
          <p className="mb-5">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;