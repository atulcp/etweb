import React from 'react';
import { chessFour,DoorTheme, WaterTheme } from '../imgs/ImgAssets'; // Make sure to use the correct path to your image

const LandingPageOne = () => {
  return (
    <div
      style={{ backgroundImage: `url(${WaterTheme})` }}
      className="min-h-screen bg-no-repeat  flex items-center text-right"
    >
      <div className=" text-black">
        <h1 className="text-5xl ml-[1200px] font-bold mb-6 drop-shadow-xl">Eternity Solutions</h1>
        <div className="text-xl mb-6 drop-shadow-lg">
          Explore the world of strategic insights and mindfulness
        </div>
        <button className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default LandingPageOne;
