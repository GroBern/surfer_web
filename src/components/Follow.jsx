import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const images = [
  '/f1.jpg',
  '/f2.jpg',
  '/f3.jpg',
  '/gallery-1.jpg',
  '/gallery-2.jpg',
  '/gallery-3.jpg',
];

const Tile = ({ src, alt, index, wide = false }) => (
  <motion.div
    className={`${wide ? 'col-span-2 aspect-[2/1]' : 'aspect-square'} group relative overflow-hidden`}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: wide ? 1.02 : 1.05, transition: { duration: 0.3 } }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover shadow-lg transform transition-all duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white/30 transition-all duration-300" />
  </motion.div>
);

const MasonryGrid = () => {
  const { t } = useTranslation();
  const heading = t('social.heading');
  const linkText = t('social.linkText');
  const aria = t('social.aria', { returnObjects: true });
  const alts = t('social.galleryAlts', { returnObjects: true }) || [];
  const fallbackAlt = (i) => t('social.defaultAlt', { index: i + 1 });

  return (
    <div
      className="py-10 md:py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-white/50"
      role="region"
      aria-label={aria?.section || heading}
    >
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-400 tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <a
            href="https://www.instagram.com/thesurfer_srilanka/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label={linkText}
          >
            {linkText} <Instagram className="inline-block ml-1" />
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
          <Tile src={images[0]} alt={alts[0] || fallbackAlt(0)} index={0} />
          <Tile src={images[1]} alt={alts[1] || fallbackAlt(1)} index={1} />
          <Tile src={images[2]} alt={alts[2] || fallbackAlt(2)} index={2} />
          <Tile src={images[3]} alt={alts[3] || fallbackAlt(3)} index={3} />
          <Tile src={images[4]} alt={alts[4] || fallbackAlt(4)} index={4} wide />
          <Tile src={images[5]} alt={alts[5] || fallbackAlt(5)} index={5} wide />
        </div>
      </motion.div>
    </div>
  );
};

export default MasonryGrid;
