import React from 'react';

const GetStarted = () => {
  return (
    <div id='Get Started Big Div' className="h-screen w-full font-oswald bg-black flex items-center justify-center">
      {/* Increased max-width and added padding for overall layout */}
      <div id='Get Started Div' className="bg-white bg-opacity-10 backdrop-blur-lg p-12 rounded-xl shadow-2xl max-w-2xl mx-4">
        <h2 id='Get Started Header' className="text-3xl text-white font-bold mb-8 text-center">
          Get Started with Us
        </h2>
        <p id='Get Started Descrip.' className="font-oswald text-white text-lg mb-8">
          Discover how becoming a member of the Eternity family can empower you or your organization with our wide array of services and solutions. Begin your journey towards excellence and innovation today.
        </p>
        <div id='Get Started Options Div' className="flex flex-col space-y-4">
          <a href="/for-individuals" className="block bg-orange-500 text-white text-center px-6 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            For Individuals
          </a>
          <a href="/for-organizations" className="block bg-yellow-500 text-white text-center px-6 py-4 rounded-lg hover:bg-yellow-600 transition-colors">
            For Organizations
          </a>
          <a href="/contact" className="block bg-gray-500 text-white text-center px-6 py-4 rounded-lg hover:bg-gray-600 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
