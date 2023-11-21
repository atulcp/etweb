import React from 'react';
import {WaterTheme} from '../imgs/ImgAssets'; // Adjust this line to the correct path of your image

const BlogThree = () => {
  return (
    <div>
      <div className="dark:bg-black h-screen dark:text-gray-50">
        <div className="container grid grid-cols-12 mx-auto">
          <div 
            className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto" 
            style={{ 
              backgroundImage: `url(${WaterTheme})`, // Use the imported image here
              backgroundPosition: 'center center', 
              backgroundBlendMode: 'multiply', 
              backgroundSize: 'cover' 
            }}
          >
            <div className="flex flex-col items-center  p-8 py-12 text-center">
              <span className="text-orange-500">14 Nov</span>
              <h1 className="py-4 text-5xl font-bold">Innovating for the Future with Eternity Solutions</h1>
              <p className="pb-6">Exploring the cutting-edge technologies and solutions that are shaping tomorrow.</p>
              {/* SVG Icon */}
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-700">
            <div className="pt-6 pb-4 space-y-2">
              <span>7 Nov</span>
              <h1 className="text-3xl font-bold">The Future of Technology at Eternity Solutions</h1>
              <p> Eternity Solutions has been at the forefront of technological innovation, pioneering new approaches in software development, artificial intelligence, and sustainable tech. Our recent projects have garnered significant attention in the tech community, sparking discussions on the future of industry and commerce.</p>
              <p>Read on to discover how Eternity Solutions is driving change and shaping the future of technology...</p>
              <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                <span>Read more</span>
                {/* SVG Icon */}
              </a>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>Oct 31</span>
              <h1 className="text-3xl font-bold">Sustainability Initiatives at Eternity Solutions</h1>
              <p>As a leader in the tech industry, Eternity Solutions is not just focused on advancing technology but also on ensuring that our progress is sustainable. Our latest initiative, GreenTech, aims to reduce carbon footprints and promote environmental sustainability in all our operations and products. This article delves into the details of our GreenTech initiative and its impact on the environment.</p>
              <p>Join us as we explore our journey towards a greater future...</p>
              <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                <span>Read more</span>
                {/* SVG Icon */}
              </a>
            </div>
            {/* Add more blog posts as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogThree;
