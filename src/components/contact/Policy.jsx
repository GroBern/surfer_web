import { motion } from 'framer-motion';  // eslint-disable-line no-unused-vars
import { useTranslation } from 'react-i18next';

const Policy = () => {
  const { t, i18n } = useTranslation();
  const points = t('policy.points', { returnObjects: true }) || [];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12" dir={i18n.dir()}>
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-neutral-400 mb-8 md:mb-10 uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('policy.title')}
      </motion.h2>

      <motion.div
        className="space-y-6 text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {points.map((p, idx) => (
          <motion.p
            key={idx}
            className="text-xs sm:text-sm leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
            viewport={{ once: true }}
          >
            <strong className="font-semibold">{p.strong}</strong>{' '}
            {p.note && <span className="block sm:inline">{p.note}</span>}
          </motion.p>
        ))}

        <motion.p
          className="text-xs sm:text-sm leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {t('policy.contact')}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Policy;
