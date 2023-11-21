import React from 'react'
import { BlogImg3 } from '../../imgs/ImgAssets'

const BlogComp1 = () => {
  return (
    <div className="flex justify-center font-etsfont3 items-center h-screen"> 
      {/* Card3 */}
      <div className="w-full h-screen flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img src={BlogImg3} alt="Card img" className="object-cover object-center w-full h-full" />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between p-6 bg-white border border-gray-400 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
          <div>
            <a href="#" className="inline-block mb-4 text-sm lg:text-base font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
            <a href="#" className="block mb-4 text-xl font-etsfont4 lg:text-3xl text-center font-black leading-tight hover:underline hover:text-orange-600">
              "Beyond Business: <p>Eternity Solutions' Community and Social Impact"</p>
            </a>
            <p className="text-center pr-16 border-y py-4 font-etsfont3 text-sm lg:text-base">
              Eternity Solutions is deeply committed to making a positive impact beyond the business world. Our community engagement programs and social responsibility initiatives have become a cornerstone of our corporate identity. 
                       From local community projects to global partnerships for social change, we're dedicated to making a meaningful difference.
                        Join us in this detailed look at our various programs, the lives we've touched, and the lasting changes we're striving 
                        to make in communities around the globe."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogComp1
