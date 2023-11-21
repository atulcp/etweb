import React from 'react';
import { BlogImg1, BlogImg2, BlogImg3 } from '../imgs/ImgAssets';

const AllBlogs = () => {
  return (
    <>
      <div id='All Blogs Big Div' className="text-gray-900 bg-black">
        <section id='All Blogs Section' className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
          <div id='All Blogs Header Div' className="flex flex-wrap items-center justify-between mb-8">
            <h2 id='All Blogs Header' className="mr-10 font-oswald text-4xl font-bold text-orange-500 leading-none md:text-5xl">
              Blogs
            </h2>
            <a id='See All Blogs' href="#" className="block pb-1 mt-2 text-base font-black font-oswald text-orange-600 uppercase border-b border-transparent hover:border-orange-600">
              See All Blogs 
            </a>
          </div>
          <div id='Blog Cards Div' className="flex flex-wrap -mx-4">
            {/* Card1 */}
            <div id='Blog Card1 Big Div' className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col">
              <img id='Blog Card1 Img' src={BlogImg1} alt="Card img" className="object-cover  object-center w-full h-48 rounded-md" />
              <div id='Blog Card1 Div' className="flex flex-grow">
                <div id='Blog Card1 Flex Div' className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 rounded-md">
                  <div id='Blog Card1 Descrip. Div'>
                    <a href="#" className="inline-block mb-4 text-sm font-oswald font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
                    <a href="/blogthree" className="block mb-4 font-oswald text-2xl text-center font-black leading-tight hover:underline hover:text-orange-600">
                      Pioneering Tech Innovations:<p>The Journey of Eternity Solutions</p> 
                    </a>
                    <p className="mb-4 font-oswald text-md text-center">
                      Eternity Solutions has consistently been at the forefront of technological innovation...
                    </p>
                  </div>
                  <div id='Blog Card1 Read More Div'>
                    <a href="/blogthree" className="inline-block pb-1 mt-2 text-base font-black text-orange-600 uppercase border-b border-transparent hover:border-orange-600">Read More -&gt;</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card2 */}
            <div id='Blog Card2 Big Div' className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col">
              <img id='Blog Card2 Img' src={BlogImg2} alt="Card img" className="object-cover object-center w-full h-48 rounded-md" />
              <div id='Blog Card2 Div' className="flex flex-grow">
                <div id='Blog Card2 Flex Div' className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 rounded-md">
                  <div id='Blog Card2 Descrip. Div'>
                    <a href="#" className="inline-block mb-4 text-xs font-oswald font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
                    <a href="/blogtwo" className="block mb-4 text-2xl font-oswald text-center font-black leading-tight hover:underline hover:text-orange-600">
                      Embracing a Greener Future: <p>Eternity Solutions' Sustainability Mission</p>
                    </a>
                    <p className="mb-4 font-oswald text-center">
                      At Eternity Solutions, we believe that technology should be a force for good, especially when it comes to environmental sustainability... 
                    </p>
                  </div>
                  <div>
                    <a id='Blog Card2 Read More Div' href="/blogtwo" className="inline-block pb-1 mt-2 text-base font-black text-orange-600 uppercase border-b border-transparent hover:border-orange-600">Read More -&gt;</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card3 */}
            <div id='Blog Card3 Big Div' className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col">
              <img id='Blog Card3 Img' src={BlogImg3} alt="Card img" className="object-cover object-center w-full h-48 rounded-md" />
              <div id='Blog Card3 Div' className="flex flex-grow">
                <div id='Blog Card3 Flex Div' className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 rounded-md">
                  <div id='Blog Card3 Descrip. Div'>
                    <a href="#" className="inline-block mb-4 text-xs font-oswald font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
                    <a href="/blogone" className="block mb-4 text-2xl text-center font-oswald font-black leading-tight hover:underline hover:text-orange-600">
                      Beyond Business: <p>Eternity Solutions' Community and Social Impact"</p>
                    </a>
                    <p className="mb-4 font-oswald text-center">
                      Eternity Solutions is deeply committed to making a positive impact beyond the business world....
                      
                    </p>
                  </div>
                  <div>
                    <a id='Blog Card2 Read More Div' href="/blogone" className="inline-block  pb-1 mt-2 text-base font-black text-orange-600 uppercase border-b border-transparent hover:border-orange-600">Read More -&gt;</a>
                  </div>
                </div>
              </div>
            </div>
                        {/* Card1 */}
                        <div id='Blog Card1 Big Div' className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col">
              <img id='Blog Card1 Img' src={BlogImg1} alt="Card img" className="object-cover  object-center w-full h-48 rounded-md" />
              <div id='Blog Card1 Div' className="flex flex-grow">
                <div id='Blog Card1 Flex Div' className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 rounded-md">
                  <div id='Blog Card1 Descrip. Div'>
                    <a href="#" className="inline-block mb-4 text-sm font-oswald font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
                    <a href="/blogthree" className="block mb-4 font-oswald text-2xl text-center font-black leading-tight hover:underline hover:text-orange-600">
                      Pioneering Tech Innovations:<p>The Journey of Eternity Solutions</p> 
                    </a>
                    <p className="mb-4 font-oswald text-md text-center">
                      Eternity Solutions has consistently been at the forefront of technological innovation...
                    </p>
                  </div>
                  <div id='Blog Card1 Read More Div'>
                    <a href="/blogthree" className="inline-block pb-1 mt-2 text-base font-black text-orange-600 uppercase border-b border-transparent hover:border-orange-600">Read More -&gt;</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card2 */}
            <div id='Blog Card2 Big Div' className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col">
              <img id='Blog Card2 Img' src={BlogImg2} alt="Card img" className="object-cover object-center w-full h-48 rounded-md" />
              <div id='Blog Card2 Div' className="flex flex-grow">
                <div id='Blog Card2 Flex Div' className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 rounded-md">
                  <div id='Blog Card2 Descrip. Div'>
                    <a href="#" className="inline-block mb-4 text-xs font-oswald font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
                    <a href="/blogtwo" className="block mb-4 text-2xl font-oswald text-center font-black leading-tight hover:underline hover:text-orange-600">
                      Embracing a Greener Future: <p>Eternity Solutions' Sustainability Mission</p>
                    </a>
                    <p className="mb-4 font-oswald text-center">
                      At Eternity Solutions, we believe that technology should be a force for good, especially when it comes to environmental sustainability... 
                    </p>
                  </div>
                  <div>
                    <a id='Blog Card2 Read More Div' href="/blogtwo" className="inline-block pb-1 mt-2 text-base font-black text-orange-600 uppercase border-b border-transparent hover:border-orange-600">Read More -&gt;</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card3 */}
            <div id='Blog Card3 Big Div' className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col">
              <img id='Blog Card3 Img' src={BlogImg3} alt="Card img" className="object-cover object-center w-full h-48 rounded-md" />
              <div id='Blog Card3 Div' className="flex flex-grow">
                <div id='Blog Card3 Flex Div' className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 rounded-md">
                  <div id='Blog Card3 Descrip. Div'>
                    <a href="#" className="inline-block mb-4 text-xs font-oswald font-bold capitalize border-b-2 border-orange-600 hover:text-orange-600">Atul Pandey</a>
                    <a href="/blogone" className="block mb-4 text-2xl text-center font-oswald font-black leading-tight hover:underline hover:text-orange-600">
                      Beyond Business: <p>Eternity Solutions' Community and Social Impact"</p>
                    </a>
                    <p className="mb-4 font-oswald text-center">
                      Eternity Solutions is deeply committed to making a positive impact beyond the business world....
                      
                    </p>
                  </div>
                  <div>
                    <a id='Blog Card2 Read More Div' href="/blogone" className="inline-block  pb-1 mt-2 text-base font-black text-orange-600 uppercase border-b border-transparent hover:border-orange-600">Read More -&gt;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllBlogs;
