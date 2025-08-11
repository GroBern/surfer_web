import React from 'react'
import { motion as Motion } from 'framer-motion'

const SurfDays = () => {
 
  return (
    <Motion.div
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden my-16 px-4'
      id='SurfDays'
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
        What Your Surf Days Look Like
      </Motion.h1>

      <div className='w-full max-w-7xl space-y-12'>

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
              Sunrise to Soul – Energizing Mornings by the Ocean
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              Start your day with the gentle sound of Atlantic waves and the golden Moroccan sunrise. Enjoy a fresh, 
              healthy breakfast prepared to energize you for the adventures ahead. Some mornings begin with 
              relaxing yoga or gentle stretching, awakening your body and mind before heading to the surf.
            </p>
          </Motion.div>
        </Motion.div>

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
              Surf Lessons with Heart – Catch the Waves in Tamraght
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              Fuelled and ready, step onto the warm sand and meet our experienced surf instructors. Each lesson 
              is tailored to your skill level — whether you’re taking your very first lesson or refining advanced 
              techniques. With patient guidance, local knowledge, and world-class surf spots, every session 
              brings you closer to your surfing goals.
            </p>
          </Motion.div>
        </Motion.div>

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
              Free Time = Your Time – Explore Morocco or Unwind
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              When the surf session ends, the rest of the day is yours. Relax on the terrace, sip mint 
              tea by the ocean, or wander through Tamraght’s charming streets. Feeling adventurous? 
              <br /> <br />
              <span className='font-semibold'>Join optional activities such as: </span>
              <ul className='list-disc list-inside'>
                <li>Surf spot explorations along Morocco’s coastline</li>
                <li>Visits to local souks, villages, and cultural landmarks</li>
                <li>Excursions to hidden beaches and scenic viewpoints</li>
                <li>Authentic Moroccan cooking experiences</li>
              </ul>
            </p>
          </Motion.div>
        </Motion.div>

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
              Food, Friends & Firelight – Evenings Under Moroccan Skies
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              As night falls, our surf camp transforms into a hub of laughter and connection. Share stories 
              over a delicious Moroccan dinner, enjoy BBQ nights, and join in lively games or music sessions. 
              Under the glow of the stars, strangers become friends, and every evening feels unforgettable.
            </p>
          </Motion.div>
        </Motion.div>

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
              Rest, Recharge & Repeat – Sleep by the Sea
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              Drift off in a clean, comfortable room with the ocean breeze as your lullaby. Wake up 
              refreshed and ready for another day of surfing, adventure, and unforgettable moments in Morocco.
            </p>
          </Motion.div>
        </Motion.div>

      </div>
    </Motion.div>
  )
}

export default SurfDays
