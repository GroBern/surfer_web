import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const contact = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto p-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        
        <motion.div 
          className="bg-white shadow-lg p-6 text-center hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="text-lg font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            THE SURFER<br />BEACH CAMP
          </motion.h3>
          <motion.div 
            className="text-sm text-black font-semibold leading-relaxed mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p>NO 65, Wadana Watta,</p>
            <p>Pelena, Weligama</p>
            <p>Sri Lanka. 81700</p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "backOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div 
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="white" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white shadow-lg p-6 text-center hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="text-lg font-bold text-black mb-13"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            TS2 SURF CAMP
          </motion.h3>
          <motion.div 
            className="text-sm text-black font-semibold leading-relaxed mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p>NO 176/12, 3rd Lane,</p>
            <p>Main Street, Weligama</p>
            <p>Sri Lanka. 81700</p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "backOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div 
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="white" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white shadow-lg p-6 text-center hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="text-lg font-bold text-black mb-13"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            THE WAVE SURF CAMP
          </motion.h3>
          <motion.div 
            className="text-sm text-black font-semibold leading-relaxed mb-11"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p>Coming Soon</p>
            
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "backOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div 
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="white" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white shadow-lg p-6 text-center hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="text-lg font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            THE SURFER STYLE - MOROCCO
          </motion.h3>
          <motion.div 
            className="text-sm text-black font-semibold leading-relaxed mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p>Tamraght,</p>
            <p>Agadir 80023</p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "backOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div 
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="white" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white shadow-lg p-6 text-center hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="text-lg font-bold text-black mb-13"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            EMAIL
          </motion.h3>
          <motion.div 
            className="text-[12px] text-black font-semibold leading-relaxed mb-20"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p>info@thesurferweligama.com</p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7, ease: "backOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div 
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="white" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <motion.div 
                className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3, ease: "backOut" }}
                whileHover={{ scale: 1.2 }}
              >
                1
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default contact;
