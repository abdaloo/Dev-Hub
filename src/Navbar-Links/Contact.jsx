import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Save to Local Storage
      const storedMessages = JSON.parse(localStorage.getItem('devhubMessages')) || [];
      storedMessages.push(formData);
      localStorage.setItem('devhubMessages', JSON.stringify(storedMessages));
  
      // alert('Message saved to local storage!');
      toast.success('Message sent successfully!');
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E1EEBC] to-[#E1EEBC] py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#2D3748] mb-6">
          Get in Touch with DevHub
        </h2>
        <p className="text-center text-[#4A5568] mb-10">
          Whether you have a question, feedback, or partnership idea — we’d love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#2D3748] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-[#328E6E] outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#2D3748] mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-[#328E6E] outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#2D3748] mb-1">
              Message
            </label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-[#328E6E] outline-none resize-none`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#328E6E] hover:bg-[#26775C] text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
