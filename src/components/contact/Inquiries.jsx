import React from 'react';
import { motion } from 'framer-motion';  // eslint-disable-line no-unused-vars
import { useTranslation } from 'react-i18next';

const Inquiries = () => {
  const { t, i18n } = useTranslation();
  const items = t('inquiries.items', { returnObjects: true }) || [];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12" dir={i18n.dir()}>
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-neutral-400 mb-8 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('inquiries.title')}
      </motion.h2>

      <motion.div
        className="space-y-6 text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {items.map((it, idx) => {
          const num = String(idx + 1).padStart(2, '0'); // 01, 02, 03...
          return (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                <span className="font-semibold">{num})</span> {it.text}
              </p>
              {it.second && (
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                  {it.second}
                </p>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Inquiries;
