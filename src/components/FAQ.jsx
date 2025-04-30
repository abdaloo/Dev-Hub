import React from 'react';

const faqs = [
  {
    question: 'What is DevHub?',
    answer:
      'DevHub is a centralized web platform that lists verified software houses in Peshawar, helping users discover IT companies, job opportunities, and more.',
  },
  {
    question: 'Is DevHub only for companies in Peshawar?',
    answer:
      'Yes, currently DevHub focuses on software houses located in Peshawar. We plan to expand to other cities in the future.',
  },
  {
    question: 'How can I list my software house on DevHub?',
    answer:
      'You can contact our admin team or use the listing request form available on the site to get your company added.',
  },
  {
    question: 'Is there any cost to use or register?',
    answer:
      'No, DevHub is completely free for users and software houses. Our goal is to support the local tech ecosystem.',
  },
  {
    question: 'Can I apply for jobs through DevHub?',
    answer:
      'Yes, if a software house posts a job, you can view details and apply directly using the contact information provided.',
  },
  {
    question: 'Is DevHub available on mobile devices?',
    answer:
      'Absolutely! DevHub is fully responsive and works seamlessly on smartphones and tablets.',
  },
];

function FAQ() {
  return (
    <section className="bg-[#E1EEBC] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#328E6E] text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-lg font-semibold text-[#328E6E] mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
