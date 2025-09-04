import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const SurfingJourney = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className='flex flex-col items-center justify-center container mx-2 sm:mx-4 md:mx-auto w-full overflow-hidden mt-[-2rem] sm:mt-[-3rem]' 
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 
        className='text-base sm:text-lg md:text-xl lg:text-[1.2rem] xl:text-[1.5rem] font-bold mt-4 sm:mt-5 mb-2 sm:mb-3 text-center text-neutral-400 px-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('surfingJourney1.title')}
      </motion.h1>
      
      <motion.p 
        className='text-xs sm:text-sm md:text-base lg:text-[12px] xl:text-[14px] leading-relaxed sm:leading-normal text-center max-w-full sm:max-w-3xl md:max-w-4xl text-black px-3 sm:px-4 md:px-6'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t('surfingJourney1.body.l1')}<br />
        {t('surfingJourney1.body.l2')}
      </motion.p>

      <div className='flex justify-center w-full mt-4 sm:mt-6 mb-3 sm:mb-4'>
      </div>

      <div className='flex justify-center w-full mt-3 mb-2'> 
        <a
          className="px-2 py-1 text-sm font-medium border border-black rounded-full text-black hover:bg-gray-100 hover:scale-105 transition-transform duration-300" 
          href="https://main.d7z80586kqd0r.amplifyapp.com/" 
          target="_blank"
          rel="noreferrer"
        > 
          {t('surfingJourney1.bookNow')}
        </a> 
      </div>
    </motion.div>
  )
}

export default SurfingJourney
