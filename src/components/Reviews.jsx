import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ReviewsCard = ({ img, name, date, description }) => (
  <motion.div
    className="w-full md:w-1/3 bg-white border-2 border-gray-300 pt-8 md:border-none p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 }
    }}
    role="article"
    aria-label={`Review by ${name}`}
  >
    <motion.div
      className="flex flex-col justify-left items-left mt-2 gap-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.img
        className="rounded-full w-1/4 shadow-lg border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300"
        src={img}
        alt={`${name} avatar`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
        decoding="async"
      />
      <motion.h3
        className="font-semibold ml-1 xl:text-[25px] bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.h3>
      <motion.p
        className="text-gray-500 ml-1 xl:text-[.875rem] font-semibold mt-[-0.5rem]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {date}
      </motion.p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-gray-600 xl:text-[.875rem] ml-1 leading-relaxed hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  </motion.div>
);

const Reviews = () => {
  const { t } = useTranslation();

  const heading = t('reviews1.heading');
  const items = t('reviews1.items', { returnObjects: true }) || [];
  const years = t('reviews1.badges.years', { returnObjects: true }) || [];
  const badgesHeading = t('reviews1.badges.heading');
  const badgeAlt = (y) => t('reviews1.badges.alt', { year: y });
  const googleKpi = t('reviews1.kpis.google');
  const taKpi = t('reviews1.kpis.tripadvisor');
  const awardNote = t('reviews1.awardNote');

  return (
    <div className="py-8 flex flex-col items-center justify-center px-5">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-400 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {heading}
      </motion.h1>

      {/* Testimonials */}
      <div className="flex flex-col md:flex-row gap-5 mt-5 max-w-6xl mx-auto">
        {items.map((review1) => (
          <ReviewsCard
            key={`${review1.name}-${review1.date}`}
            img={review1.img}
            name={review1.name}
            date={review1.date}
            description={review1.description}
          />
        ))}
      </div>

      {/* Badges & KPIs */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 mt-18 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-2 max-w-6xl mx-auto">
        {/* Tripadvisor badges */}
        <div className="flex flex-col items-center justify-center pb-3 lg:pb-0 px-4 py-1">
          <div className="flex flex-row gap-2 items-end justify-center whitespace-nowrap">
            {years.map((y) => (
              <div
                key={y}
                className="bg-white border-white-300 shadow-md flex flex-col items-center justify-center hover:border-white-500 transition-all duration-300"
              >
                <img
                  src={`/${y}.png`}
                  alt={badgeAlt(y)}
                  className="w-38 h-38 object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <h2 className="font-bold text-base xs:text-lg sm:text-xl md:text-2xl mt-3 mb-2 text-center text-neutral-400 leading-tight max-w-xs sm:max-w-md md:max-w-lg">
            {badgesHeading}
          </h2>
        </div>

        {/* Google & Tripadvisor KPIs */}
        <div className="flex flex-col gap-8 items-center justify-center max-w-xs min-w-[220px] mb-3 lg:mb-0">
          <div className="w-full bg-white-100 border-white-800 p-3 shadow-md flex items-center gap-3 rounded-lg hover:border-white-500 hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="/google.png"
              alt="Google"
              className="w-10 h-10 drop-shadow-md transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
            <span className="font-bold text-lg text-neutral-400">{googleKpi}</span>
          </div>
          <div className="w-full bg-white-100 border-white-800 p-3 shadow-md flex items-center gap-3 rounded-lg hover:border-white-500 hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="/tripadvisor.png"
              alt="Tripadvisor"
              className="w-10 h-10 drop-shadow-md transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
            <span className="font-bold text-lg text-neutral-400">{taKpi}</span>
          </div>
        </div>
      </div>

      {/* Award note */}
      <div className="mt-4 text-center">
        <p className="font-semibold text-base text-neutral-400 md:text-xl">{awardNote}</p>
      </div>
    </div>
  );
};

export default Reviews;
