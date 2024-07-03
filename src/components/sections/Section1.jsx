import React from 'react';
import Button from '../Button';
import Rectangle1 from '../../assets/Rectangle1.png'

const Section1 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${Rectangle1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center text-white mt-20 w-full">
        <h2 className="text-5xl font-bold font-inter leading-[66px] bg-clip-text">
          Are you a Supplier?
        </h2>
        <h2 className="text-5xl font-normal font-inter leading-[66px]  mb-4">
          Explore Matching Opportunities.
        </h2>
      </div>

      

    </div>
  );
}

export default Section1;
