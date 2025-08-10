import React, { useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Form = () => {
  const [formData, setFormData] = useState({
    inquiryReason: '',
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    country: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <motion.h2 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Send Your Inquiries / Bookings
      </motion.h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="w-full">
          <select
            name="inquiryReason"
            value={formData.inquiryReason}
            onChange={handleChange}
            className="w-full p-4 border border-gray-200 text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 appearance-none"
            required
          >
            <option value="">Inquiry Reason:</option>
            <option value="booking">Booking</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="support">Support</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-5 space-y-0">
          <div className="flex-1">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-4 border border-gray-200 text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-4 border border-gray-200 text-base bg-white font-bold shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 space-y-0">
          <div className="flex-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-4 border border-gray-200 font-bold text-base bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              placeholder="Confirm your email"
              className="w-full p-4 border border-gray-200 font-bold text-base bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 space-y-0">
          <div className="flex-1">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-4 border border-gray-200 text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country:"
              className="w-full p-4 border border-gray-200 text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message:"
            className="w-full p-4 border border-gray-200 text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400 resize-y min-h-[120px] font-inherit"
            rows="6"
            required
          />
        </div>

        <div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white border-none py-3 px-6 text-base cursor-pointer transition-all duration-300 font-semibold shadow-md hover:bg-blue-700 active:transform active:translate-y-0.5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
