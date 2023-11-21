import React from 'react'

const FaqSection = () => {
  return (
    <div id='FAQ Big Div'>
      <section id='FAQ Section' className="bg-black h-screen dark:text-gray-100">
        <div id='FAQ Div' className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 id='FAQ Header' className="text-5xl text-orange-600 font-oswald font-semibold">
            Frequently Asked Questions
          </h2> 
          <p id='FAQ Descrip.'className="mt-4 mb-8 dark:text-gray-200 text-xl">
            Here are some of our most common questions.
            Hopefully this may help with any concerns. 
            If not please leave us a contact message
            on our contact page and we will respond 
            as soon as we can!
          </p>
          <div id='FAQs' className="space-y-8">
            <details id='FAQ 1' className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What services/products does Eternity Solutions offer?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                "Eternity Solutions specializes in providing a wide range 
                of services including software development, artificial 
                intelligence solutions, and data analytics. We focus on 
                creating innovative and efficient solutions tailored to 
                meet the unique needs of our clients." 
              </p>
            </details>
            <details id='FAQ 2' className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How can I get a quote for my project?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                "To get a personalized quote for your project, please 
                visit our 'Contact Us' page and fill out the inquiry 
                form with your project details. Our team will review 
                your requirements and get back to you with a detailed 
                proposal and pricing." 
              </p>
            </details>
            <details id='FAQ 3' className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What is the typical timeline for a project?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 hover:cursor-pointer mt-4 dark:text-gray-400">
                "The timeline for each project varies depending on its complexity and scope.
                Generally, a project can take anywhere from a few weeks to several months.
                We strive to deliver quality solutions in the most efficient time frame 
                possible."
              </p>
            </details>
            <details id='FAQ 4' className="w-full border hover:cursor-pointer rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How does Eternity Solutions ensure the quality of its services/products?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 mt-4 dark:text-gray-400">
                "Quality is our top priority. We follow a rigorous 
                quality assurance process that includes thorough testing 
                and validation at every stage of development. Our team 
                of experts ensures that all products and services meet 
                the highest standards of excellence." 
              </p>
            </details>
            <details id='FAQ 5' className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Can Eternity Solutions provide ongoing support and maintenance?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                "Yes, we offer comprehensive support and maintenance 
                services post-project completion to ensure our solutions 
                continue to operate effectively and adapt to evolving 
                needs." 
              </p>
            </details>
            <details id='FAQ 6' className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What makes Eternity Solutions different from other tech companies?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                "Our commitment to innovation, customer-centric approach, 
                and expertise in cutting-edge technologies set us apart.
                We prioritize understanding our clients' needs and 
                delivering bespoke solutions that drive value and 
                efficiency." 
              </p>
            </details> 
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaqSection
