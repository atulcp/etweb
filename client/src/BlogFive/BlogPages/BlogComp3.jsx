import React from 'react'
import { BlogImg1, BlogImg3 } from '../../imgs/ImgAssets'

const BlogComp3 = () => {
  return (
    <div className="flex justify-center font-etsfont3 items-center h-screen"> 
      {/* Card3 */}
      <div className="w-full h-screen flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img src={BlogImg1} alt="Card img" className="object-cover object-center w-full h-full" />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between p-6 bg-white border border-gray-400 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
          <div>
            <a href="#" className="inline-block mb-4 text-sm lg:text-base font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
            <a href="#" className="block mb-4 text-xl lg:text-3xl text-center font-black leading-tight ">
            "Pioneering Tech Innovations:<p>The Journey of Eternity Solutions"</p> 
            </a>
            <p className="text-center pr-16 text-sm lg:text-base border-y py-4">
            Our journey began with a vision to revolutionize the way technology integrates into daily life.
             Today, we're proud to be pioneers in AI and software solutions, creating systems that not only enhance efficiency but also foster sustainable practices.
              Our latest project, SmartSync, is set to redefine data management with unparalleled security and user-friendly interfaces.
             This blog post explores the path we've taken to achieve these innovations and what the future holds for Eternity Solutions in the tech world."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogComp3
