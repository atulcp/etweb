import React from 'react';

const IndividualServiceCard = ({ title, description, learnMoreLink }) => {
  return (
    <div id='IndividualServiceCard Big Div' className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 id='IndividualServiceCard Title' className="text-xl font-semibold mb-2">{title}</h3>
      <p id='IndividualServiceCard Description' className="text-gray-700 font-oswald mb-4">{description}</p>
      <a id='Learn More' href={learnMoreLink} className="text-indigo-600 hover:text-indigo-800">Learn More</a>
    </div>
  );
};

const ForIndividualsPage = () => {
  const individualServices = [
    {
      title: 'Personal Development Programs',
      description: 'Customized programs designed to help you achieve personal growth and realize your full potential.'
    },
    {
      title: 'One-on-One Coaching',
      description: 'Personalized coaching sessions focusing on your unique goals and challenges, guiding you towards success.'
    },
    {
      title: 'Wellness and Health Initiatives',
      description: 'Initiatives aimed at improving your overall health and well-being, including stress management, fitness, and nutrition.'
    },
    // Add more individual-focused services as needed
  ];

  return (
    <div id='IndividualServicesPage Big Div' className="container mx-auto h-[1000px] p-6">
      <h2 id='IndividualServicesPage Header' className="text-5xl text-orange-600 font-oswald font-semibold mb-6">Services for Individuals</h2>
      <div id='IndividualServiceCard Div' className="grid grid-cols-1 md:grid-cols-2 font-oswald border-b-2 border-red-500 lg:grid-cols-3 gap-6">
        {individualServices.map((service, index) => (
          <IndividualServiceCard key={index} title={service.title} description={service.description} learnMoreLink={service.learnMoreLink} />
        ))}
      </div>
    </div>
  );
};

export default ForIndividualsPage;
