import React from 'react';

const services = [
  {
    title: 'Software House Directory',
    description: 'Search and browse verified IT companies across Peshawar.',
    icon: '🔍',
  },
  {
    title: 'Company Profiles',
    description: 'Detailed company pages with services, contact info, and more.',
    icon: '🧾',
  },
  {
    title: 'Job Postings',
    description: 'Browse job opportunities posted by listed companies.',
    icon: '💼',
  }
];

function Services() {
  return (
    <section className="bg-[#E1EEBC] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#328E6E] mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-4 text-[#328E6E]">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#328E6E] mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
