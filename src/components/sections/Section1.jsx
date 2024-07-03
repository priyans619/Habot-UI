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

      <div className="flex flex-col sm:flex-row justify-center items-center mt-5 mb-5 gap-4 sm:w-full lg:w-4/5 xl:w-3/5">
        <input
          type="text"
          className="w-full sm:w-80 h-14 border border-gray-300 rounded-md px-4 text-gray-800 font-inter font-bold text-base text-center"
          placeholder="Search your required service here"
        />
        <input
          type="text"
          className="w-full sm:w-80 h-14 border border-gray-300 rounded-md px-4 text-gray-800 font-inter font-bold text-base text-center mt-4 sm:mt-0"
          placeholder="Search your desired location here"
        />
        <Button btnType="button" title="Search" />
      </div>


      <h2 className="text-xl text-white mt-2 mb-16 text-center">
        <span className="font-bold block">Are you a buyer?</span>
        <span className="underline font-normal block mt-2">Click here if you are looking to post a requirement</span>
      </h2>

    </div>
  );
}

export default Section1;
