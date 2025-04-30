import React from 'react';

const steps = [
  {
    title: '1. Find',
    description:
      'Search and filter through a wide directory of verified software houses in Peshawar by service, location, or name.',
    icon: '🔎',
  },
  {
    title: '2. Connect',
    description:
      'View detailed company profiles, contact information, and service offerings to connect with the right team.',
    icon: '🔗',
  },
  {
    title: '3. Apply',
    description:
      'Explore job openings or internship opportunities posted by software houses and apply directly.',
    icon: '📄',
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#E1EEBC] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#328E6E] mb-12">How DevHub Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <div className="text-4xl mb-4 text-[#328E6E]">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#328E6E] mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
