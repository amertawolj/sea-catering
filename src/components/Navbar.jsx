import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#000000]'>
      <h1 className='w-full text-3xl font-bold text-[#41521F]'>SEA CATERING</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Menu</li>
        <li className='p-4'>Subscription</li>
        <li className='p-4'>Sign-In</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#C9D6EA] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#41521F]'>SEA CATERING</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Menu</li>
          <li className='p-4 border-b border-gray-600'>Subscription</li>
          <li className='p-4 border-b border-gray-600'>Sign-In</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;