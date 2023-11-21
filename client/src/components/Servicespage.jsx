import React from 'react';

const ServiceCard = ({ title, description, learnMoreLink }) => {
  return (
    <div id='ServiceCard Big Div'className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 id='Service Title' className="text-xl font-semibold mb-2">{title}</h3>
      <p id='Service Description' className="text-gray-700 font-oswald mb-4">{description}</p>
      <a id='Learn More' href={learnMoreLink} className="text-indigo-600 hover:text-indigo-800">Learn More</a>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: 'Strategic Planning',
      description: 'Comprehensive strategies to drive growth and innovation in your organization.',
      learnMoreLink: '/services/strategic-planning'
    },
    {
      title: 'Organizational Development',
      description: 'Tailored solutions to enhance your organizational structure and efficiency.',
      learnMoreLink: '/services/organizational-development'
    },
    {
      title: 'Employee Engagement',
      description: 'Programs and initiatives to boost employee morale and productivity.',
      learnMoreLink: '/services/employee-engagement'
    },
    // Add more services as needed
  ];

  return (
    <div id='ServicesPage Big Div' className="container mx-auto h-[1000px] p-6">
      <h2 id='ServicesPage Header' className="text-5xl text-orange-600 font-oswald font-semibold mb-6">
        Our Services
      </h2>
      <div id='ServiceCard Div' className="grid grid-cols-1 md:grid-cols-2 font-oswald border-b-2 border-red-500 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} learnMoreLink={service.learnMoreLink} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
