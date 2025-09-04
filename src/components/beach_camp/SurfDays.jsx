import React from 'react'
import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const SurfDays = () => {
  const { t } = useTranslation();

  const title = t('surfDays.title');
  const sections = t('surfDays.sections', { returnObjects: true });

  // Keep image paths in code; pair by index
  const images = [
    "/beach_camp/sunrise.jpg",
    "/beach_camp/surf_lesson.jpg",
    "/beach_camp/free_time.jpg",
    "/beach_camp/food_friends.jpg",
    "/beach_camp/DSC_5817.jpg"
  ];

  return (
    <Motion.div
      className="flex flex-col items-center justify-center container mx-auto w-full overflow-hidden my-16 px-4"
      id="SurfDays"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Motion.h1
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-8 font-bold text-center text-neutral-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </Motion.h1>

      <div className="w-full max-w-7xl space-y-12">
        {sections.map((sec, idx) => {
          const reverse = idx % 2 === 1; // alternate layout
          return (
            <Motion.div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} mb-22 ${idx === 0 ? 'mt-8' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Motion.div
                className="lg:w-1/3 w-full max-w-xs"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={images[idx]}
                  alt={sec.alt}
                  className="w-full h-40 lg:h-48 object-cover shadow-md"
                />
              </Motion.div>

              <Motion.div
                className="lg:w-2/3 w-full flex items-center flex-col text-center lg:text-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-700 mb-4">
                  {sec.heading}
                </h2>

                {/* Paragraphs */}
                <div className="text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left space-y-3">
                  {sec.body?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {/* Optional bullet list */}
                  {sec.list && sec.list.length > 0 && (
                    <ul className="list-disc list-inside">
                      {sec.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Motion.div>
            </Motion.div>
          );
        })}
      </div>
    </Motion.div>
  )
}

export default SurfDays
