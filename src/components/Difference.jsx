import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SurfingJourney = () => {
  const { t } = useTranslation();
  const paragraphs = t('ts2Diff.paragraphs', { returnObjects: true });

  return (
    <motion.div
      className="flex flex-col items-center justify-center container mx-2 sm:mx-4 md:mx-auto w-full overflow-hidden mt-[-2rem] sm:mt-[-3rem]"
      id="Journey"
      aria-label={t('ts2Diff.aria.section')}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="text-base sm:text-lg md:text-xl lg:text-[1.2rem] xl:text-[1.5rem] font-bold mt-4 sm:mt-5 mb-2 sm:mb-3 text-center text-neutral-400 px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('ts2Diff.heading')}
      </motion.h1>

      <div className="px-3 sm:px-4 md:px-6 max-w-full sm:max-w-3xl md:max-w-4xl">
        {Array.isArray(paragraphs) &&
          paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className="text-xs sm:text-sm md:text-base lg:text-[12px] xl:text-[14px] leading-relaxed sm:leading-normal text-center text-black mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
      </div>

      <div className="flex justify-center w-full mt-2 mb-4">
        <motion.a
          href="/beach-camp"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 text-sm sm:text-base font-semibold"
          aria-label={t('ts2Diff.aria.cta')}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('ts2Diff.cta')}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default SurfingJourney;
