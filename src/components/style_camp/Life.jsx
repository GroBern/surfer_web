import React from 'react'
import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const LifeAtSurfCamp = () => {
  const { t } = useTranslation();

  return (
    <Motion.div
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-12'
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Motion.h1
        className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-2 font-bold text-center text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('lifeAtSurfStyle.title')}
      </Motion.h1>

      <Motion.p
        className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-5xl text-black px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('lifeAtSurfStyle.body.p1')}
        <br /> <br />
        {t('lifeAtSurfStyle.body.p2')}
        <br /> <br />
        {t('lifeAtSurfStyle.body.p3')}
        <br />
      </Motion.p>
    </Motion.div>
  )
}

export default LifeAtSurfCamp;
