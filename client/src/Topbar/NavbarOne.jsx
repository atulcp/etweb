import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ETSLOGO } from '../imgs/ImgAssets'; 

const DropdownMenu = ({ items }) => {
  return (
    <div id='DropDownMenu Big Div' className="absolute hidden group-hover:block font-oswald bg-black rounded-lg text-md text-white pt-6 pb-2 z-50">
      {items.map((item, index) => (
        <Link to={item.href} key={index} className="block px-2 py-2 hover:orange-500">
          {item.title}
        </Link>
      ))}
    </div>
  );
};

const NavbarOne = () => {
  const [isHomeDropdownVisible, setIsHomeDropdownVisible] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);
  const [isAboutDropdownVisible, setIsAboutDropdownVisible] = useState(false);
  const [isContactDropdownVisible, setIsContactDropdownVisible] = useState(false);
  const [isBlogDropdownVisible, setIsBlogDropdownVisible] = useState(false);

  const blogTimeoutRef = useRef();
  const homeTimeoutRef = useRef();
  const servicesTimeoutRef = useRef();
  const aboutTimeoutRef = useRef();
  const contactTimeoutRef = useRef();

  const handleMouseEnter = (setVisible) => {
    setVisible(true);
  };

  const handleMouseLeave = (setVisible, timeoutRef) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 300); // 300ms delay
  };

  // Dropdown items for each section
  const homeItems = [
  
  ];

  const serviceItems = [
    { title: 'For Individuals', href: '/for-individuals' },
    { title: 'For Organizations', href: '/for-organizations' },
    // ... add more items here
  ];

  const aboutItems = [
    { title: 'Contact Us', href: '/contact-us' },
    { title: 'Our Contributions', href: '/our-contributions' },
    // { title: 'Our Mission', href: '/our-mission' },
    // ... add more items here
  ];

  const getStartedItems = [
    { title: 'Process', href: '/process' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Testimonials', href: '/testimonials' },
    // ... add more items here
  ];
  const blogItems = [
    { title: 'Blog', href: '/blog' },
   

    // more blog related links
  ];
  return (
    <nav id='Navigation' className="w-full font-oswald text-white relative bg-black py-2">
      <div id='Navigation Big Div' className="container mx-auto flex items-center justify-between">
        <div id='ETS Logo Div' className="font-bold text-xl">
          <Link to="/"><img id='ETS Logo' className="h-[100px] w-[100px]" src={ETSLOGO} alt="ETS Logo"/></Link>
        </div>
        <div id='Navigation Div' className="hidden md:flex text-xl space-x-10 ">
          <div id='Home Div' className="relative group"
               onMouseEnter={() => handleMouseEnter(setIsHomeDropdownVisible)}
               onMouseLeave={() => handleMouseLeave(setIsHomeDropdownVisible, homeTimeoutRef)}>
            <Link to="/" className="hover:underline font-oswald hover:text-orange-500 px-3 py-2 rounded-md">Home</Link>
            {isHomeDropdownVisible && <DropdownMenu items={homeItems} />}
          </div>
          <div id='Services Div' className="relative group"
               onMouseEnter={() => handleMouseEnter(setIsServicesDropdownVisible)}
               onMouseLeave={() => handleMouseLeave(setIsServicesDropdownVisible, servicesTimeoutRef)}>
            <a href="/services" className="hover:underline font-oswald hover:text-orange-500 px-3 py-2 rounded-md">Services</a>
            {isServicesDropdownVisible && <DropdownMenu items={serviceItems} />}
          </div>
          <div id='About Div' className="relative group"
               onMouseEnter={() => handleMouseEnter(setIsAboutDropdownVisible)}
               onMouseLeave={() => handleMouseLeave(setIsAboutDropdownVisible, aboutTimeoutRef)}>
            <a href="/about" className="hover:underline font-oswald hover:text-orange-500 px-3 py-2 rounded-md">About</a>
            {isAboutDropdownVisible && <DropdownMenu items={aboutItems} />}
          </div>
          <div id='Get Started Div' className="relative group"
               onMouseEnter={() => handleMouseEnter(setIsContactDropdownVisible)}
               onMouseLeave={() => handleMouseLeave(setIsContactDropdownVisible, contactTimeoutRef)}>
            <a href="/getstarted" className="hover:underline font-oswald hover:text-orange-500 px-3 py-2 rounded-md">Get Started</a>
            {isContactDropdownVisible && <DropdownMenu items={getStartedItems} />}
          </div>
          <div id='Blog Div' className="relative group"
              onMouseEnter={() => handleMouseEnter(setIsBlogDropdownVisible)}
              onMouseLeave={() => handleMouseLeave(setIsBlogDropdownVisible, blogTimeoutRef)}>
            <a href="/blog" className="hover:underline font-oswald hover:text-orange-500 px-3 py-2 rounded-md">Blog</a>
            {isBlogDropdownVisible && <DropdownMenu items={blogItems} />}
          </div>
        </div>
        <div id='Mobile View Div' className="md:hidden">
          <button id='Mobile View' className="focus:outline-none">
            {/* Icon for mobile menu */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOne;
