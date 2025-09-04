import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useTranslation, Trans } from 'react-i18next';

const Perfect = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className='flex flex-col items-center justify-center container mx-auto p-6 sm:p-8 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden'
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('beachCamp1.life.title')}
      </motion.h1>

      <motion.p
        className='text-xs sm:text-sm md:text-base leading-relaxed text-center max-w-8xl text-neutral-400 mt-4 px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Trans i18nKey="beachCamp1.life.body" components={{ br: <br /> }} />
      </motion.p>
    </motion.div>
  );
};

export default Perfect;
