import React, { useState } from 'react';
// Import your image here, replace 'YourImage' with your image file
import { Pathway } from '../imgs/ImgAssets';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your message has been sent!');
  };

  return (
    <div id='ContactPageContainer' className="relative h-screen w-full">
      <img id='ContactUsImg' src={Pathway} className="object-cover w-full h-full" alt="Contact Us" />
      <div id='ContactUsOverlay' className="absolute inset-0 bg-black opacity-60"></div>
      <div id='ContactUsTitle' className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-14 text-6xl text-orange-600 font-oswald font-semibold">
        Contact Us
      </div>
      <div id='ContactFormContainer' className="absolute inset-0 font-oswald flex items-center justify-center">
        <div id='ContactForm' className="container mx-auto p-6 bg-white bg-opacity-75 rounded-lg">
          <h2 id='ContactFormHeader' className="text-2xl font-semibold mb-5">Get in Touch</h2>
          <form id='ContactUsForm' onSubmit={handleSubmit} className="space-y-4">
            <div id='NameSection'>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div id='EmailSection'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div id='MessageSection'>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div id='SubmitSection'>
              <button id='SendMessageButton' type="submit" className="px-4 py-2 bg-orange-700 text-white rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
