import React from 'react'
import { motion as Motion } from 'framer-motion'

const LifeAtSurfCamp = () => {
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
        Life At The Surfer SurfStyle Camp
      </Motion.h1>

      <Motion.p
        className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-5xl text-black px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Perched on the sun-kissed shores of Tamraght, The Surfer Style Camp blends world-class waves,
        laid-back coastal living, and vibrant community spirit into an unforgettable Moroccan escape.
        With years of surf hospitality and countless happy guests from around the globe, our
        camp isn’t just a place to stay — it’s your home by the ocean.
        <br />  <br />
        Each day flows with the rhythm of the tides. Begin your mornings with the scent of sea air and
        the call of the waves, then head out for surf sessions guided by experienced local and
        international instructors. Between surfs, stretch into a relaxing yoga session, soak up
        the sun on our rooftop, or explore the charm of Tamraght’s coastal paths and bustling
        markets. Evenings come alive with rooftop sunsets, shared meals, music, and the laughter of newfound friends.
        <br />  <br />
        From our welcoming team and panoramic sea views to the unique blend of surf culture and
        Moroccan hospitality, The Surfer Style Camp is where adventures are shared, skills are s
        harpened, and stories are written in the sand.
        <br />

      </Motion.p>
    </Motion.div>
  )
}

export default LifeAtSurfCamp;