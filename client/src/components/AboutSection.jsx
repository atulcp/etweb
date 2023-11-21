import React from 'react';
import {WaterTheme} from '../imgs/ImgAssets';

const AboutSection = () => {
  return (
    <div id='About Section Big Div' className="container h-screen mx-auto p-6">
      <div id='About Section Div' className="flex flex-col md:flex-row items-center">
        <img id='About Section Img' src={WaterTheme} className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-6 md:mb-0" />
        <div id='About Section' className="md:ml-6 font-oswald">
          <h2 id='About Section Header' className="text-4xl text-orange-500 font-oswald font-semibold mb-4">
            About Eternity
            <span id='About Section ETS TMLogo' className="text-lg p-2">
              Ⓡ
            </span>
          </h2>
          <p id='About Section Para1' className="text-gray-300 text-lg border-l-2 border-red-500 pl-4 mb-4">
            Welcome to Eternity Solutions, a beacon of innovation,integrity, and 
            forward-thinking. Our vision is to 
            <span className="text-orange-500 text-bold"> revolutionize the way businesses and individuals achieve their goals</span>, 
            setting new benchmarks in the industry.
          </p>
          <p id='About Section Para2' className="text-gray-300 text-lg border-l-2 border-red-500 pl-4 mb-4">
            At Eternity Solutions, we are committed to empowering
            our clients with cutting-edge solutions and services
            that drive growth and success.
            Our mission is to <span className="text-orange-500 text-bold"> unlock potential and foster sustainable progress</span>, 
            making a meaningful and lasting impact on every life and 
            organization we touch.
          </p>
          <p id='About Section Para3' className="text-gray-300 text-lg border-l-2 border-red-500 pl-4 mb-4">
            Eternity Solutions prides itself on offering a wide array
            of services that cater to the evolving needs of modern
            businesses and ambitious individuals. Our expertise 
            spans across critical areas such as Strategic Planning,
            Organizational Development, Employee Engagement,
            and Wellness Programs. We tailor our services to
            address the unique challenges of our clients, 
            employing innovative strategies and state-of-the-art tools.
            Our team, comprised of industry veterans, works tirelessly
            to ensure that our solutions not only meet but surpass the 
            expectations of those we serve.
          </p>
          <p id='About Section Para4' className="text-gray-300 text-lg border-l-2 border-red-500 pl-4 mb-4">
            Our dedication to excellence is at the core of everything 
            we do at Eternity Solutions. We believe in setting the standard,
            not just meeting it. Our approach is grounded in ethical practices,
            transparency, and a deep sense of responsibility towards our clients
            and the community.
            <span className="text-orange-500 text-bold"> We foster a collaborative environment, customizing our solutions to fit the distinct needs of each client. </span> 
            By continuously investing in research and embracing adaptive strategies, 
            we stay ahead of the curve, ensuring that Eternity Solutions remains 
            synonymous with innovation and long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
