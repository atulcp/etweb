import React from 'react';
import {ETSVideo5} from '../imgs/ImgAssets'; 

const LandingPageFour = () => {
  return (
    <section id='Section' className="w-full h-[85vh]">
      <div id='LandingPage4 Big Div' className="relative overflow-hidden h-full">
        <video id='ETSVideo'
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src={ETSVideo5}
        />
        {/* Call to Action Button */}
        <div id='Get Started Btn Div' className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button id='Get Started Btn' className="bg-transparent font-oswald text-white text-xl font-bold py-2 px-4 border border-yellow-500 rounded">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPageFour;
