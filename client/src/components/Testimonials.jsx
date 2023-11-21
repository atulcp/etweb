import React from 'react'
import { PlacePortrait, PlacePortrait2, PlacePortrait3 } from '../imgs/ImgAssets'

const Testimonials = () => {
  return (
    <div>
      <section className="text-white h-screen pt-24 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={PlacePortrait2}/>
          <p className="leading-relaxed">"As a technology company,
           we're always on the lookout for innovative software solutions that can streamline our operations.
            Eternity Solutions has exceeded our expectations with their cutting-edge products and exceptional customer service.
             Their software has not only improved our workflow efficiency but also provided us with insightful data analytics.
           Working with Eternity Solutions has been a game-changer for us."</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Jordan Smith</h2>
          <p className="text-gray-500">CEO, TechForward</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={PlacePortrait}/>
          <p className="leading-relaxed"> "I am thoroughly impressed with the level of client support provided by Eternity Solutions.
           From the very first interaction, they have been incredibly responsive, helpful, and attentive to our needs.
            Their team went above and beyond to ensure that our team members' integration was seamless and efficient. It's rare to see such dedication and commitment to client satisfaction."

</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Emily Johnson</h2>
          <p className="text-gray-500">Operations Manager, GreenScape</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={PlacePortrait3}/>
          <p className="leading-relaxed">"Eternity Solutions stands out as a aiding leader in the tech industry. 
          Their commitment to leveraging the latest technology for practical and effective solutions is commendable. 
          We partnered with them for a major project,
           and their expertise in artificial intelligence and machine learning helped us achieve breakthrough results.
           Their team's innovative thinking, commitment to serving fellow businesses/individuals and technical proficiency make them a valuable partner."</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Michael Brown</h2>
          <p className="text-gray-500">CTO, Innovate, INC.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Testimonials
