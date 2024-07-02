import React from 'react';

const Header = () => {
  return (
    <header className=" text-black p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
      <img 
          src="/src/assets/logo.png" 
          alt="Logo" 
          className="w-[181px] h-[43px] sm:w-[181px] sm:h-[43px] md:w-[181px] md:h-[43px] lg:w-[181px] lg:h-[43px]"
        />
      </div>

    </header>
  );
};

export default Header;