//NavbarTwo
import React, { useState } from 'react';

const NavbarTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white border-b-2 border-orange-600">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a className="font-bold text-xl" href="/">Eternity Solutions</a>
        <div className="hidden md:flex space-x-6">
          <a className="hover:text-gray-300" href="/">Home</a>
          <a className="hover:text-gray-300" href="/services">Services</a>
          <a className="hover:text-gray-300" href="/contact">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a className="block px-6 py-2 hover:bg-gray-700" href="/">Home</a>
        <a className="block px-6 py-2 hover:bg-gray-700" href="/services">Services</a>
        <a className="block px-6 py-2 hover:bg-gray-700" href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavbarTwo;
