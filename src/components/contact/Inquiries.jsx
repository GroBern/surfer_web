import React from 'react';
import { motion } from 'framer-motion';  // eslint-disable-line no-unused-vars

const Inquiries = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
      <motion.h2 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-neutral-400 mb-8 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        BOOKING INQUIRIES
      </motion.h2>

      <motion.div 
        className="space-y-6 text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">01)</span> WE WILL GET BACK TO YOU FOR ALL YOUR INQUIRIES WITHIN 24 HOURS
          </p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">02)</span> FEEL FREE TO CONTACT US WITH YOUR ANY SPECIFIC REQUIREMENT FOR YOUR STAY
          </p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">03)</span> A 25% NON REFUNDABLE DEPOSIT REQUIRED TO CONFIRM YOUR RESERVATION
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            TO STAY WITH US !
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Inquiries;
