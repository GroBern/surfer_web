import React from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react';

const images = [
  "/f1.jpg",
  "/f2.jpg",
  "/f3.jpg",
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
];

const MasonryGrid = () => {
  return (
    <div className="py-10 md:py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-white-50">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-400 tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          FOLLOW US
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <a href="https://www.instagram.com/thesurfer_srilanka/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Follow us on Instagram <Instagram className="inline-block ml-1" />
          </a>
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <motion.div
            className="aspect-square group relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={images[0]}
              alt="Gallery image 1"
              className="w-full h-full object-cover shadow-lg transform transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white-300 rounded-xl transition-all duration-300"></div>
          </motion.div>

          <motion.div
            className="aspect-square group relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={images[1]}
              alt="Gallery image 2"
              className="w-full h-full object-cover shadow-lg transform transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white-300 transition-all duration-300"></div>
          </motion.div>

          <motion.div
            className="aspect-square group relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={images[2]}
              alt="Gallery image 3"
              className="w-full h-full object-cover shadow-lg transform transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white-300 transition-all duration-300"></div>
          </motion.div>

          <motion.div
            className="aspect-square group relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={images[3]}
              alt="Gallery image 4"
              className="w-full h-full object-cover shadow-lg transform transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white-300 transition-all duration-300"></div>
          </motion.div>

          <motion.div
            className="col-span-2 aspect-[2/1] group relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={images[4]}
              alt="Gallery image 5"
              className="w-full h-full object-cover shadow-lg transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white-300 transition-all duration-300"></div>
          </motion.div>

          <motion.div
            className="col-span-2 aspect-[2/1] group relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={images[5]}
              alt="Gallery image 6"
              className="w-full h-full object-cover shadow-lg transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white-300 transition-all duration-300"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MasonryGrid;