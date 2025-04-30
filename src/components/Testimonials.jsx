import React from 'react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Frontend Developer',
    feedback:
      'DevHub helped me quickly find top software houses hiring in Peshawar. It saved me time and gave me direct links to apply!',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Startup Founder',
    feedback:
      'Thanks to DevHub, I found a reliable IT partner for my startup project. This platform is a game-changer for the local tech scene.',
  },
  {
    name: 'Maria Javed',
    role: 'CS Student, UOP',
    feedback:
      'As a student, DevHub helped me explore local companies and understand their services. I even found a great internship through it!',
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#328E6E] mb-12">What People Say About DevHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((person, index) => (
            <div key={index} className="bg-[#E1EEBC] p-6 rounded-lg shadow hover:shadow-md transition text-left">
              <p className="text-gray-800 italic mb-4">"{person.feedback}"</p>
              <div className="border-t border-[#328E6E] pt-4">
                <h4 className="text-[#328E6E] font-semibold">{person.name}</h4>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
