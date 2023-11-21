import React from 'react';
import { FaceLessPlace, WaterTheme } from '../imgs/ImgAssets';

const FoundersSection = () => {
  return (
    <div className="flex w-screen justify-center items-center h-screen bg-black font-oswald">
      <div className="flex flex-col items-center p-6 bg-black w-screen h-screen rounded-lg shadow-lg">
        <img src={FaceLessPlace} alt="Founder" className="object-cover h-64 w-64 rounded-full mb-4" />
        <div className="text-center">
          <h2 className="text-4xl text-white font-semibold">Atul Pandey</h2>
          <span className="block pb-2 font-oswald text-sm text-orange-500">Founder of Eternity Solutions</span>
          <p className="text-white text-lg pt-8 px-24 ">
          <span className=" font-oswald pr-2">Atul Pandey,</span> 
          <span className="font-oswald">
            the founder of Eternity Solutions, stands as a paragon of innovation and community engagement in the tech world. With a passion deeply rooted in both technology and social change, Atul has tirelessly worked to create a unique space in the tech industry that goes beyond just business and profit.

From the outset of his career, Atul recognized the potential of technology as a powerful tool for social good. He envisioned a future where tech companies play a pivotal role in addressing societal challenges, rather than merely focusing on the bottom line. It was this vision that led to the birth of Eternity Solutions, a company that not only excels in delivering cutting-edge technological solutions but also places a strong emphasis on community service and ethical business practices.

Under Atul's leadership, Eternity Solutions has launched several initiatives aimed at leveraging technology for social impact. These range from community-based projects that foster digital literacy to collaborations with non-profits aimed at bridging the digital divide. His approach has always been inclusive, ensuring that the benefits of technology reach the most underserved communities.

A staunch advocate for diversity and inclusion in the tech industry, Atul has been instrumental in shaping a company culture that celebrates diversity and fosters an environment of equal opportunity. He believes that a diverse team not only enhances creativity and innovation but is also crucial in making technology accessible and relevant to a broader audience.

Atul's commitment to community service extends beyond his professional endeavors. He is actively involved in various local initiatives, often seen volunteering his time and resources to support educational programs and community development projects. His belief that every individual and organization has a role to play in making the world a better place is reflected in his dedication to these causes.

As a leader, Atul continues to inspire his team and peers alike, constantly pushing the boundaries of what is possible in the intersection of technology and social good. His vision for a tech-driven yet community-focused future continues to drive Eternity Solutions towards new heights, making an indelible mark in the industry and in the lives of those the company touches.
         </span> 
         </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
