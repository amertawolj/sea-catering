import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='flex justify-between items-center h-20 max-w-7xl mx-auto px-6'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 rounded-lg flex items-center justify-center' style={{backgroundColor: '#FBED70'}}>
            <span className='font-bold text-lg' style={{color: '#41521F'}}>SE</span>
          </div>
          <h1 className='text-2xl font-bold' style={{color: '#41521F'}}>SEA Catering</h1>
        </div>
        <ul className='hidden md:flex items-center space-x-8'>
          <li><a href='#' className='hover:opacity-80 transition-opacity font-medium' style={{color: '#8A8A8A'}}>Home</a></li>
          <li><a href='#' className='hover:opacity-80 transition-opacity font-medium' style={{color: '#8A8A8A'}}>Menu</a></li>
          <li><a href='#' className='hover:opacity-80 transition-opacity font-medium' style={{color: '#8A8A8A'}}>Subscription</a></li>
          <li><a href='#' className='hover:opacity-80 transition-opacity font-medium' style={{color: '#8A8A8A'}}>Sign In/Sign Up</a></li>
          <li><a href='#' className='hover:opacity-80 transition-opacity font-medium' style={{color: '#8A8A8A'}}>Contact Us</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={24} color='#41521F'/> : <AiOutlineMenu size={24} color='#41521F' />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-40' : 'hidden'} onClick={handleNav}>
          <ul className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-full bg-white shadow-xl ease-in-out duration-300 z-50' : 'ease-in-out duration-300 fixed left-[-100%] z-50'} onClick={(e) => e.stopPropagation()}>
            <div className='flex items-center space-x-3 p-6 border-b border-gray-100'>
              <div className='w-8 h-8 rounded flex items-center justify-center' style={{backgroundColor: '#FBED70'}}>
                <span className='font-bold text-sm' style={{color: '#41521F'}}>SE</span>
              </div>
              <h1 className='text-xl font-bold' style={{color: '#41521F'}}>SEA Catering</h1>
            </div>
            <li className='list-none'><a href='#' className='block p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors font-medium' style={{color: '#8A8A8A'}}>Home</a></li>
            <li className='list-none'><a href='#' className='block p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors font-medium' style={{color: '#8A8A8A'}}>Menu</a></li>
            <li className='list-none'><a href='#' className='block p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors font-medium' style={{color: '#8A8A8A'}}>Subscription</a></li>
            <li className='list-none'><a href='#' className='block p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors font-medium' style={{color: '#8A8A8A'}}>Sign In/Sign Up</a></li>
            <li className='list-none'><a href='#' className='block p-4 hover:bg-gray-50 transition-colors font-medium' style={{color: '#8A8A8A'}}>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;