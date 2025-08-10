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
        className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-6 font-bold text-center text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Life at TS2 Surf Camp
      </Motion.h1>

      <Motion.p
        className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-5xl text-neutral-400 px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
       Our TS2 Weligama surf camp located just 200 meters away from the other side of the bay in Weligama beach and 10 minutes walking away from the city center.
      </Motion.p>

      <Motion.h3
        className='text-base sm:text-sm md:text-md lg:text-lg font-bold mt-2 mb-4 text-center text-neutral-400 px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        What is the Difference between Beach Camp and TS2 Camp?
      </Motion.h3>

      <Motion.div
        className='text-xs sm:text-xs md:text-sm lg:text-md leading-relaxed text-center max-w-5xl text-neutral-400 px-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="mb-1">1) Main difference is the location and the room standard</p>
        <p className="mb-1">2) Beach camp is located right next to the beach with a swim pool.</p>
        <p className="mb-1">3) TS2 camp rooms are of basic standard, simple private rooms with a fan and a hot water ensuite bathroom.</p>
        <p className="mb-1">4) Beach camp rooms are Standard private rooms with air conditioning, an ensuite bathroom, and hot water</p>
        <p className="mb-1">5) TS2 camp is located 05 minutes' ride away from the beach camp. Even though you book TS2 Weligama, all your surf lessons, yoga, Breakfast, dinner, and all events will take place at the beach camp</p>
        <p className="mb-1">6) Transport will be paid at 1000 rupees per day per bed and per room to travel between the two camps as a travel compensation! No other surf camp in the area beats our TS2 package rates! You pay less, but still get the full beach camp experience. Sleep comfortably at TS2, best of both worlds, without the high price tag!</p>
      </Motion.div>
    </Motion.div>
  )
}

export default LifeAtSurfCamp;