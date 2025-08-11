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
        Life At The Surfer Beach Camp
      </Motion.h1>

      <Motion.p
        className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-5xl text-black px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Located right on the golden shores of Weligama, The Surfer Beach Camp blends epic waves, tropical living, and good energy
        into one unforgettable experience. With over ten years of surf hospitality and six consecutive Tripadvisor Travelers’ Choice Awards,
        this is more than just a surf camp—it’s a home away from home.
        <br />  <br />
        Every day is shaped by the rhythm of the ocean. Wake up to the sound of waves, join like-minded travelers for surf sessions led by
         International Surfing Association (ISA) certified local and foreign surf instructors, and unwind with sunset yoga or live music nights on the rooftop. Whether you’re here to catch your first wave or take your skills
          to the next level, you’ll find the perfect balance of adventure, relaxation, and community.
        <br />  <br />
        From the warm staff and oceanfront views to the strong surf culture and social vibe, The Surfer Beach Camp is where new surfers are made and 
        lifelong memories are born. <br />
        
      </Motion.p>
    </Motion.div>
  )
}

export default LifeAtSurfCamp;