// Assuming you have a src/App.js file
import React from 'react';
import LandingPageOne from './LandingPageOne';
import { DoorTheme } from '../imgs/ImgAssets';


const LandingPageTwo = () => {
  
        return (
          <div className="relative text-center text-white shadow-4 carousel-text-shadow lg:py-48" style={{ backgroundImage: `url(${DoorTheme})`, backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
            <div className="z-10 relative container mx-auto px-6 lg:px-12">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Who are you?
 <br /> What matters to you?
              </h1>
              <p className="mt-4 text-xl lg:text-2xl">You're always welcome</p>
              {/* Include additional elements such as buttons here */}
            </div>
          </div>
        );
      };
      
      export default LandingPageTwo ;
