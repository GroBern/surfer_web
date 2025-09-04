import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BlogCard = ({ item, index }) => {
  const isInternal = item.href?.startsWith('/');
  const Wrapper = isInternal ? Link : 'a';
  const wrapperProps = isInternal
    ? { to: item.href }
    : { href: item.href || '#', target: item.href ? '_blank' : undefined, rel: item.href ? 'noopener noreferrer' : undefined };

  return (
    <motion.article
      className="bg-white shadow-lg overflow-hidden flex flex-col group relative flex-1 min-w-0 h-[260px] md:h-[400px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Wrapper
        {...wrapperProps}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        aria-label={item.ariaLabel}
      >
        <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden flex-shrink-0">
          <motion.img
            src={item.img}
            alt={item.alt || item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            initial={{ scale: 1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          />
          <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white/30 transition-all duration-300" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        <div className="p-5 flex-1 flex items-center justify-center">
          <h3 className="text-center text-base md:text-lg text-neutral-700 font-medium leading-tight">
            {item.title}
          </h3>
        </div>
      </Wrapper>
    </motion.article>
  );
};

const Blogs = () => {
  const { t } = useTranslation();
  const items = t('blogs.items', { returnObjects: true });
  const heading = t('blogs.heading');

  // Preserve your original “3 on first row, 2 on second” layout
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3);

  return (
    <div className="py-12 px-2 sm:px-0 flex flex-col items-center min-h-screen bg-[#fafafa]">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-neutral-400 text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {heading}
      </motion.h1>

      {/* First row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 md:gap-10 mb-6 md:mb-10">
        {firstRow.map((item, idx) => (
          <BlogCard key={idx} item={item} index={idx} />
        ))}
      </div>

      {/* Second row */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 md:gap-10">
        {secondRow.map((item, idx) => (
          <BlogCard key={idx} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
