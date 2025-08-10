import { motion } from 'framer-motion';  // eslint-disable-line no-unused-vars

const Policy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
      <motion.h2 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-neutral-400 mb-8 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        CANCELLATION POLICY
      </motion.h2>

      <motion.div 
        className="space-y-6 text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-xs sm:text-sm leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <strong className="font-semibold">FULLY REFUND OF FREE MODIFY 21 DAYS BEFORE YOUR ARRIVAL DATE</strong> (THIS POLICY 
          NOT APPLICABLE FOR THE STAYING DATE PERIOD 20TH DECEMBER TO 5TH JANUARY.)
        </motion.p>

        <motion.p 
          className="text-xs sm:text-sm leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          PLEASE FEEL FREE TO CONTACT WITH ANY QUESTION YOU MAY HAVE. LET US KNOW 
          ANY SPECIFIC ASPIRATION OR ANY REQUIREMENT YOU MAY HAVE THEREFORE WE ARE 
          KEEN TO ANSWER ALL OF YOUR QUESTIONS WITHIN 24 HOURS.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Policy;
