import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = t("faq.items", { returnObjects: true });

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 * i,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className="py-12 px-2 sm:px-0 flex flex-col items-center min-h-screen bg-[#fafafa]">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-neutral-400 text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        FAQ
      </motion.h1>

      <div className="w-full max-w-6xl flex flex-col gap-5 mb-15">
        {faqData.map((item, idx) => (
          <motion.div
            key={idx}
            className={`bg-white shadow-lg border border-neutral-100 transition-all duration-300 ${
              openIndex === idx ? 'ring-2 ring-neutral-200' : ''
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={idx}
            viewport={{ once: true, amount: 0.4 }}
          >
            <button
              className={`w-full flex justify-between items-center px-6 py-5 focus:outline-none transition-all duration-200 ${
                openIndex === idx ? 'rounded-t-xl bg-neutral-50/40' : 'hover:bg-neutral-50'
              }`}
              onClick={() => handleToggle(idx)}
            >
              <span className="text-lg md:text-lg font-bold text-left text-neutral-700">
                {item.question}
              </span>
              <span className="text-3xl font-bold text-neutral-700">
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>
            {openIndex === idx && item.answer && (
              <div className="px-6 pb-6 text-base xl:text-[.875rem] text-neutral-700 animate-fadein">
                {item.answer.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0 leading-relaxed">{line}</p>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
