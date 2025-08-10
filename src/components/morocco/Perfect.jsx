import React from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars

const Perfect = () => {
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
        className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Why Morocco Is Perfect for Surfers
      </motion.h1>
      <motion.p
        className='text-xs sm:text-sm md:text-base leading-relaxed text-center max-w-8xl text-neutral-400 mt-4 px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Morocco is one of the most diverse surf destinations in the world,
        offering consistent Atlantic swells, warm hospitality, and rich cultural
        immersion. From world-class point breaks to beginner-friendly beach breaks,
        this coast is a playground for surfers of all levels.<br /> <br />

        Taghazout and its surrounding areas have become a surf haven thanks to perfect waves,
        laid-back lifestyle, and breathtaking desert-meets-ocean views. You’ll enjoy sunny skies,
        welcoming locals, vibrant souks, and that magical Moroccan energy that makes every surf
        session feel like an adventure.<br /> <br />

        Even though our camp is just a short walk from the beach, you’re never far from the action.
        We believe the best surf journeys happen when you balance ocean time with exploration,
        relaxation, and unforgettable cultural experiences.
        <br /> <br />
      </motion.p>
    </motion.div>
  )
}

export default Perfect