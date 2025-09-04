import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LifeAtSurfCamp = () => {
  const { t } = useTranslation();

  return (
    <Motion.div
      className="flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-12"
      id="Journey"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      aria-label={t('lifeTs2.aria.section')}
    >
      <Motion.h1
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-6 font-bold text-center text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('lifeTs2.title')}
      </Motion.h1>

      <Motion.p
        className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-5xl text-neutral-400 px-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('lifeTs2.intro')}
      </Motion.p>

      <Motion.h3
        className="text-base sm:text-sm md:text-md lg:text-lg font-bold mt-5 mb-4 text-center text-neutral-400 px-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('lifeTs2.diffTitle')}
      </Motion.h3>

      <Motion.div
        className="text-xs sm:text-xs md:text-sm lg:text-md leading-relaxed text-center max-w-5xl text-neutral-400 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <ul className="list-disc list-inside space-y-2 text-left">
          {t('lifeTs2.points', { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Motion.div>
    </Motion.div>
  );
};

export default LifeAtSurfCamp;
