import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const images = [
  "/f1.jpg",
  "/f2.jpg",
  "/f3.jpg",
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
];

const MasonryGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 md:py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-white-50">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-400 tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {t('follow.title')}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <a
            href="https://www.instagram.com/thesurfer_srilanka/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label={t('follow.aria.instagram')}
          >
            {t('follow.cta')} <Instagram className="inline-block ml-1" />
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
          {images.map((src, i) => {
            // Utility to build consistent tile classes
            const baseTile =
              "group relative overflow-hidden";
            const square = "aspect-square";
            const wide = "col-span-2 aspect-[2/1]";
            const tileClass =
              i < 4 ? `${baseTile} ${square}` : `${baseTile} ${wide}`;

            return (
              <motion.div
                key={src}
                className={tileClass}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: i < 4 ? 1.05 : 1.02, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={src}
                  alt={t('follow.galleryAlt', { num: i + 1 })}
                  className={`w-full h-full object-cover shadow-lg transform transition-all duration-500 ${i < 4 ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
                />
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white-300 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default MasonryGrid;
