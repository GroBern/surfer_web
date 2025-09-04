import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useTranslation } from 'react-i18next';

const ReviewsCard = ({ img, name, date, description, lang }) => {
  // locale-aware date
  const formattedDate = new Date(date).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      className='w-full md:w-1/3 bg-gray-100 border-2 border-gray-300 pt-8 md:border-none p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className='flex flex-col justify-left items-left mt-2 gap-3'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.img
          className='rounded-full w-1/4 shadow-lg border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300'
          src={img}
          alt={`${name} avatar`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
        <motion.h1
          className='font-semibold ml-1 xl:text-[25px] bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {name}
        </motion.h1>
        <motion.p
          className='text-gray-500 ml-1 xl:text-[.875rem] font-semibold mt-[-0.5rem]'
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {formattedDate}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className='text-black-600 xl:text-[16px] ml-1 leading-relaxed hover:text-gray-800 transition-colors duration-300'>
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Reviews = () => {
  const { t, i18n } = useTranslation();
  const reviewsData = t('reviews.items', { returnObjects: true }) || [];
  const title = t('reviews.title');

  return (
    <div className='py-8 flex flex-col items-center justify-center px-5'>
      <motion.h1
        className='text-3xl md:text-4xl lg:text-5xl mb-8 font-bold text-neutral-400 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h1>

      <div className='flex flex-col md:flex-row gap-5 mt-5 max-w-6xl mx-auto'>
        {reviewsData.map((review, idx) => (
          <ReviewsCard
            key={idx}
            img={review.img}
            name={review.name}
            date={review.date}
            description={review.description}
            lang={i18n.language}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
