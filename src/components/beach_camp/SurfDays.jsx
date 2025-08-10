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
              src="/beach_camp/sunrise.jpg"
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
              Sunrise to Soul – Mornings That Move You
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              Your day starts with the sound of waves and the glow of the rising sun over Weligama Bay. You can
              join a <strong>gentle morning yoga session</strong> on our rooftop or garden deck to stretch
              and awaken your body before heading to breakfast. Our meals are freshly prepared, nutritious, and ideal
              for fueling up before hitting the water.
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
              src="/beach_camp/surf_lesson.jpg"
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
              Surf Lessons with Heart – Mid-Morning Action
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              After breakfast, it’s time to grab your board and walk straight to the beach. You'll join your
              small-group surf lesson led by our experienced, certified instructors. Whether you’re a complete
              beginner or progressing through intermediate skills, every session is personalized. We teach with
              patience, local knowledge, and the belief that anyone can surf with the right mindset and guidance.
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
              src="/beach_camp/free_time.jpg"
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
              Free Time = Your Time – Afternoons to Explore or Chill
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              After your session, rinse off, refresh, and settle into your afternoon however you choose.
              Want to relax? Chill at the pool, sunbathe with your new friends, or nap in a hammock. Want
              to explore? Walk through the colorful streets of Weligama, try out a local curry spot, or
              grab a coconut by the beach.
              <br /> <br />
              <span className='font-semibold'>We also organize optional activities like: </span>
              <ul className='list-disc list-inside'>
                <li>Tuk-tuk tours to secret beaches</li>
                <li>Cooking classes</li>
                <li>Excursions to Midigama and Mirissa</li>
                <li>Wildlife watching or stilt fisherman photo tours</li>
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
              src="/beach_camp/food_friends.jpg"
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
              Food, Friends & Firelight – Evenings to Remember
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              When the sun begins to set, the vibe at camp comes alive. We're bringing the fun with game nights, drinking games,
              quiz battles, karaoke sessions, theme dinners, movie nights, and epic night outs.
              Plus, enjoy soulful tunes from local acoustic artists and loads of daily social activities that’ll keep
              the good times rolling every evening. Whether you're here to chill, connect, or just vibe out – there’s
              always something happening!
              <br /> <br />
              This is where you bond with people from all over the world. Solo travelers become friends
              for life. Surf buddies become family. And every sunset feels a little more special than the last.
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
              src="/beach_camp/DSC_5817.jpg"
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
              Sleep Well. Surf Again.
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-justify lg:text-left'>
              When you return to your clean, cozy room, you’ll fall asleep to the distant sound of waves. No traffic.
              No stress. Just rest — because tomorrow is another day to surf, connect, and explore paradise.

            </p>
          </Motion.div>
        </Motion.div>

      </div>
    </Motion.div>
  )
}

export default SurfDays
