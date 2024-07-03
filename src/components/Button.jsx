import React from 'react';

const Button = ({ btnType, title, handleClick }) => {
  return (
    <button
      type={btnType}
      className="w-32 h-14 border border-gray-300 rounded flex items-center justify-start text-white font-inter font-bold text-base leading-5 text-center pl-8 bg-[#00732F] cursor-pointer"
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
