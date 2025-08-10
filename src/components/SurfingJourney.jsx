import React from 'react'
import { motion } from 'framer-motion'

const SurfingJourney = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center container mx-auto p-6 sm:p-8 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 
        className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Our Ultimate Surf Journey Around the World
      </motion.h1>
      
      <motion.p 
        className='text-sm sm:text-base md:text-md leading-relaxed text-center max-w-8xl text-neutral-400 px-2'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        From the sun-kissed beaches of Sri Lanka to the vibrant coastlines of Morocco, our surf camps in Sri Lanka and Morocco bring you world-class waves and unforgettable experiences. <br /> Located in two of the world's top surf spots, our surf camps in Sri Lanka and Morocco are all about good waves,<br /> good vibes, and good times. Whether you're chasing your first ride or looking to level up,<br /> we've got the perfect mix of adventure, chill, and surf progression. With epic beaches, world-class breaks, and a crew that feels like family,<br /> The Surfer surfcamp is your home on the water. Come ride with us and be part of a global surf tribe.
      </motion.p>

    </motion.div>
  )
}

export default SurfingJourney