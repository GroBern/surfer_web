import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    img: '/b1.jpg',
    text: '5 health benefits of surfing that are just out of this world',
  },
  {
    img: '/blog-2.jpg',
    text: 'Surf Ethics—5 rules that every beginner needs to know about ',
  },
  {
    img: '/blog-3.jpg',
    text: 'The Surfer—Brace Yourself for an Ultimate Surfing and Yoga Experience',
  },
  {
    img: '/b4.jpg',
    text: '5 BASIC SURFING TIPS FOR BEGINNERS',
  },
  {
    img: '/b5.jpg',
    text: 'WHAT ARE SURFBOARD FINS?—HOW MANY TYPES ARE THERE?',
  },
  {
    img: '/b6.jpg',
    text: 'CURRENT SITUATION IN SRI LANKA',
  },
];

const Blogs = () => {
  return (
    <div className="py-12 px-2 sm:px-0 flex flex-col items-center min-h-screen bg-[#fafafa]">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-neutral-400 text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        BLOGS
      </motion.h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg overflow-hidden flex flex-col group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
              <motion.img
                src={blog.img}
                alt="Blog"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              />
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white-200 transition-all duration-300"></div>
            </div>
            <div className="p-5 flex-1 flex items-center justify-center">
              <p className="text-center text-base md:text-lg text-neutral-700 font-medium leading-tight">
                {blog.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
