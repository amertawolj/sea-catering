import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // ⬅️ untuk cek path aktif

  const handleNav = () => setNav(!nav);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Sign In/Sign Up', path: '/signin' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const linkStyle = (path) =>
    `hover:opacity-80 transition-opacity font-medium ${
      location.pathname === path ? 'text-[#41521F] font-semibold underline underline-offset-4' : 'text-[#8A8A8A]'
    }`;

  return (
    <nav className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='flex justify-between items-center h-20 max-w-7xl mx-auto px-6'>
        {/* Logo */}
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 rounded-lg flex items-center justify-center' style={{ backgroundColor: '#FBED70' }}>
            <span className='font-bold text-lg' style={{ color: '#41521F' }}>SE</span>
          </div>
          <h1 className='text-2xl font-bold' style={{ color: '#41521F' }}>SEA Catering</h1>
        </div>

        {/* Desktop Nav */}
        <ul className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className={linkStyle(item.path)}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={24} color='#41521F' /> : <AiOutlineMenu size={24} color='#41521F' />}
        </div>

        {/* Mobile Menu Overlay */}
        <div className={nav ? 'fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-40' : 'hidden'} onClick={handleNav}>
          <ul
            className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-full bg-white shadow-xl ease-in-out duration-300 z-50' : 'ease-in-out duration-300 fixed left-[-100%] z-50'}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center space-x-3 p-6 border-b border-gray-100'>
              <div className='w-8 h-8 rounded flex items-center justify-center' style={{ backgroundColor: '#FBED70' }}>
                <span className='font-bold text-sm' style={{ color: '#41521F' }}>SE</span>
              </div>
              <h1 className='text-xl font-bold' style={{ color: '#41521F' }}>SEA Catering</h1>
            </div>
            {navItems.map((item) => (
              <li key={item.name} className='list-none'>
                <Link
                  to={item.path}
                  onClick={() => setNav(false)} // ⬅️ biar menu nutup pas klik
                  className={`block p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors font-medium ${
                    location.pathname === item.path ? 'text-[#41521F] font-semibold' : 'text-[#8A8A8A]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
