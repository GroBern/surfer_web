import React from 'react'
import { motion } from 'framer-motion'

const SurfingJourney = () => {
  return (
    <motion.div 
      className='hidden flex flex-col items-center justify-center container mx-20 w-full overflow-hidden mt-[-4rem] lg:flex xl:flex' 
      id='Journey'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 
        className='text-sm sm:text-base md:text-lg lg:text-[1.2rem] xl:text-[1.7rem] font-bold mt-5 mb-3 text-center text-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Difference between Beach Camp And Ts2 Camp
      </motion.h1>
      
      <motion.p 
        className='text-[8px] sm:text-[10px] md:text-xs lg:text-[12px] xl:text-[14px] leading-tight text-center max-w-2xl text-black px-1'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Main difference is the location and the room Standard !<br />
        Beach camp located right next to the beach With swim pool, TS2 camp rooms are With Basic standard simple private rooms With Fan and
        hot water ensuite bathroom Beach camp rooms are Standard private rooms with air conditioning, ensuite bathroom and hot water ! TS2
        camp located 05 minutes ride away from the beach camp, even though you book TS2 weligama , all your surf lessons, Yoga, dinner and all
        events Will be taken place at the beach camp ! 1000 rupees per day will be paid per room and per dormitory as a transport compensation
        to travel between the camps! You can basically spend all ur day at the beach camp and just go for sleep at TS2 camp !      
      </motion.p>

        <div className='flex justify-center w-full mt-3 mb-2'>
          <a
          className="px-2 py-1 text-sm font-medium border border-black rounded-full text-black hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
          href="https://main.d7z80586kqd0r.amplifyapp.com/"
          target="_blank"
        >
          Book Now
        </a>
        </div>
    </motion.div>
  )
}

export default SurfingJourney