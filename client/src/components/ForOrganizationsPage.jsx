import React from 'react';
import {WaterTheme} from '../imgs/ImgAssets';

const OrganizationServiceSection = ({ title, description }) => {
  const splitTitle = title.split('ON');
  return (
    <div id='Org Service Big Div' className="bg-white/80 shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">
        {splitTitle[0]}<span className="text-orange-600">ON</span>{splitTitle[1]}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ForOrganizationsPage = () => {
  const organizationServices = [
    {
      title: 'InvestigatiON',
      description: 'Customized training solutions to enhance team skills and business productivity.'
    },
    {
      title: 'ImplementatiON',
      description: 'Leadership workshops and coaching to cultivate high-performing leaders.'
    },
    {
      title: 'InductiON',
      description: 'Strategic consulting to help your organization achieve its long-term objectives.'
    },
    // Add more services or sections as needed
  ];

  return (
    <>
      <div id='For Orgs Big Div' className="relative h-screen w-full font-oswald">
        <img id='For Orgs Img' src={WaterTheme} alt="For Organizations" className="object-cover w-full h-full"/>
        <div id='For Orgs Img Opacity' className="absolute inset-0 bg-black opacity-60"></div>
        <div id='Org Services Div' className="absolute inset-0 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content-center">
          <div id='Org Services Header Div' className="col-span-full flex justify-center items-center">
            <h2 id='Org Services Header' className="text-3xl text-white font-semibold mb-6">Tailored Solutions for Organizations</h2>
          </div>
          {organizationServices.map((service, index) => (
            <OrganizationServiceSection key={index} title={service.title} description={service.description} />
          ))}
        </div>
        <div id='For Orgs Div' className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-orange-600 font-oswald font-semibold">
          For Organizations
        </div>
      </div>
    </>
  );
};

export default ForOrganizationsPage;
