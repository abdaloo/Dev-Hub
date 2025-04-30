import React from 'react';

const benefits = [
  {
    audience: 'Clients',
    icon: '💼',
    description: 'Easily find the best software house in Peshawar based on services, location, and reputation.',
  },
  {
    audience: 'Job Seekers',
    icon: '👨‍💻',
    description: 'Browse job openings across the city and connect directly with companies hiring for tech roles.',
  },
  {
    audience: 'Students',
    icon: '🎓',
    description: 'Discover internship opportunities and learn about local companies to kickstart your career.',
  },
  {
    audience: 'Software Houses',
    icon: '🏢',
    description: 'Get listed, increase visibility, post jobs, and attract new clients through DevHub’s directory.',
  },
];

function Benefits() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#328E6E] mb-12">How You Can Benefit from Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#E1EEBC] p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <div className="text-4xl mb-4 text-[#328E6E]">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#328E6E] mb-2">{item.audience}</h3>
              <p className="text-gray-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
