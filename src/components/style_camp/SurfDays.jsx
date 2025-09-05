import React from 'react'
import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const SurfDays = () => {
  const { t } = useTranslation();

  return (
    <Motion.div
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden my-16 px-4'
      id='SurfDays1'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Motion.h1
        className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-8 font-bold text-center text-neutral-400'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {t('surfDays1.title')}
      </Motion.h1>

      <div className='w-full max-w-7xl space-y-12'>

        {/* Section 1 */}
        <Motion.div
          className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:flex-row mb-22 mt-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Motion.div
            className='lg:w-1/3 w-full max-w-xs'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src="/morocco/moro-1.jpg"
              alt="Surf Day Image"
              className='w-full h-40 lg:h-48 object-cover shadow-md'
            />
          </Motion.div>

          <Motion.div
            className='lg:w-2/3 w-full flex items-center flex-col text-center lg:text-left'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-700 mb-4'>
              {t('surfDays1.sections.morning.title')}
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              {t('surfDays1.sections.morning.body')}
            </p>
          </Motion.div>
        </Motion.div>

        {/* Section 2 */}
        <Motion.div
          className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:flex-row-reverse mb-22'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Motion.div
            className='lg:w-1/3 w-full max-w-xs'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src="/morocco/moro-2.jpg"
              alt="Surf Day Image"
              className='w-full h-40 lg:h-48 object-cover shadow-md'
            />
          </Motion.div>

          <Motion.div
            className='lg:w-2/3 w-full flex items-center flex-col text-center lg:text-left'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-700 mb-4'>
              {t('surfDays1.sections.lesson.title')}
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              {t('surfDays1.sections.lesson.body')}
            </p>
          </Motion.div>
        </Motion.div>

        {/* Section 3 */}
        <Motion.div
          className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:flex-row mb-22'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Motion.div
            className='lg:w-1/3 w-full max-w-xs'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src="/morocco/moro-3.jpg"
              alt="Surf Day Image"
              className='w-full h-40 lg:h-48 object-cover shadow-md'
            />
          </Motion.div>

          <Motion.div
            className='lg:w-2/3 w-full flex items-center flex-col text-center lg:text-left'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-700 mb-4'>
              {t('surfDays1.sections.freeTime.title')}
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              {t('surfDays1.sections.freeTime.body')}
            </p>
            <br />
            <span className='font-semibold'>
              {t('surfDays1.sections.freeTime.activitiesLabel')}
            </span>
            <ul className='list-disc list-inside'>
              <li>{t('surfDays1.sections.freeTime.activities.0')}</li>
              <li>{t('surfDays1.sections.freeTime.activities.1')}</li>
              <li>{t('surfDays1.sections.freeTime.activities.2')}</li>
              <li>{t('surfDays1.sections.freeTime.activities.3')}</li>
            </ul>
          </Motion.div>
        </Motion.div>

        {/* Section 4 */}
        <Motion.div
          className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:flex-row-reverse mb-22'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Motion.div
            className='lg:w-1/3 w-full max-w-xs'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src="/morocco/morocco2.jpg"
              alt="Surf Day Image"
              className='w-full h-40 lg:h-48 object-cover shadow-md'
            />
          </Motion.div>

          <Motion.div
            className='lg:w-2/3 w-full flex items-center flex-col text-center lg:text-left'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-700 mb-4'>
              {t('surfDays1.sections.evening.title')}
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              {t('surfDays1.sections.evening.body')}
            </p>
          </Motion.div>
        </Motion.div>

        {/* Section 5 */}
        <Motion.div
          className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:flex-row'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Motion.div
            className='lg:w-1/3 w-full max-w-xs'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src="/morocco/morocco5.jpg"
              alt="Surf Day Image"
              className='w-full h-40 lg:h-48 object-cover shadow-md'
            />
          </Motion.div>

          <Motion.div
            className='lg:w-2/3 w-full flex items-center flex-col text-center lg:text-left'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-700 mb-4'>
              {t('surfDays1.sections.sleep.title')}
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              {t('surfDays1.sections.sleep.body')}
            </p>
          </Motion.div>
        </Motion.div>

      </div>
    </Motion.div>
  )
}

export default SurfDays
