import React from 'react'
import { BlogImg2 } from '../../imgs/ImgAssets'

const BlogComp2 = () => {
  return (
    <div className="flex justify-center items-center h-screen"> 
      {/* Card3 */}
      <div className="w-full h-screen flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img src={BlogImg2} alt="Card img" className="object-cover object-center w-full h-full" />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between p-6 bg-white border border-gray-400 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
          <div>
            <a href="#" className="inline-block mb-4 text-sm lg:text-base font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
            <a href="#" className="block mb-4 text-xl lg:text-3xl text-center font-black leading-tight hover:underline hover:text-orange-600">
            "Embracing a Greener Future: <p>Eternity Solutions' Sustainability Mission"</p>
            </a>
            <p className="text-center pr-16 font-etsfont3 text-sm lg:text-base border-y py-4">
            "At Eternity Solutions, we believe that technology should be a force for good, especially when it comes to environmental sustainability. Our GreenTech initiative is more than just a program; it's a commitment to a sustainable future. From reducing our carbon footprint to developing eco-friendly products, every step we take is guided by our dedication to the planet. In this article, we dive into the various facets of our sustainability efforts and how they're making a real difference in the fight against climate change."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogComp2
