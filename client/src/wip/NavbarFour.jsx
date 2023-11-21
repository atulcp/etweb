import React, { useState } from 'react';

const NavbarFour = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-700 h-16 w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              {/* Your Brand / Logo Here */}
            </div>
            <div className="hidden md:flex flex-grow">
              <div className="flex items-center justify-center space-x-4">
                {/* Navigation links for large screens */}
                <div className="text-lg font-normal text-white hover:text-gray-300">Home</div>
                <div className="text-lg font-normal text-white hover:text-gray-300">Calendar</div>
                <div className="text-lg font-normal text-white hover:text-gray-300">Bookings</div>
                <div className="text-lg font-normal text-white hover:text-gray-300">SEP</div>
                <div className="text-lg font-normal text-white hover:text-gray-300">Notes</div>
              </div>
            </div>
            <div className="hidden md:flex">
              {/* Profile / Settings links for large screens */}
              <div className="text-lg font-normal text-white pr-6">Profile</div>
              <div className="text-lg font-normal text-white hover:text-gray-300">Sign Up</div>
            </div>
            <div className="md:hidden">
              {/* Hamburger menu icon for small screens */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Home</a>
            <a href="/calendar" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Calendar</a>
            <a href="/bookings" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Bookings</a>
            <a href="/sep" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">SEP</a>
            <a href="/notes" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Notes</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                {/* User profile image */}
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">Profile</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a href="/signup" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300">Sign Up</a>
              {/* Additional mobile menu items */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarFour;

