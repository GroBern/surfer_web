import React from 'react'
import { motion as Motion } from 'framer-motion'
import RoomImageSlider from './RoomImageSlider'

const ComfortableStays = () => {
  const roomImages = {
    dormitory: [
      "/beach_camp/DORMROOM.jpg",
      "/beach_camp/bathroom01.jpg", 
      "/beach_camp/bathroom02.jpg",
      "/beach_camp/BATHROOM.jpg"
    ],
    singleRoom: [
      "/beach_camp/s5.jpg",
      "/beach_camp/bathroom01.jpg", 
      "/beach_camp/bathroom02.jpg",
      "/beach_camp/BATHROOM.jpg"
    ],
    doubleRoom: [
      "/beach_camp/DOUBLER.jpg",
      "/beach_camp/bathroom01.jpg", 
      "/beach_camp/bathroom02.jpg",
      "/beach_camp/BATHROOM.jpg"
    ],
    tripleRoom: [
      "/beach_camp/room_2.jpg",
      "/beach_camp/bathroom01.jpg", 
      "/beach_camp/bathroom02.jpg",
      "/beach_camp/BATHROOM.jpg"
    ]
  };

  return (
    <Motion.div
      className='flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-16 mb-16 px-4'
      id='ComfortableStays'
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
        Stay in Style, the Island Way
      </Motion.h1>

      <Motion.p
        className='text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed text-center max-w-5xl px-1 mb-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Whether you're a solo surfer, a beach-loving couple, or a group of wave-chasers — we've got
         the perfect spot for you. Think breezy rooms, tropical touches, and all the essentials for
          a chill stay just steps from the sea. Laid-back comfort meets island style — because everyone
           deserves to sleep easy after a day in the surf.
      </Motion.p>

      <div className='w-full max-w-8xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          <Motion.div
            className='flex flex-col overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <RoomImageSlider
                images={roomImages.dormitory}
                altText="Mixed Dormitory"
                className='w-full h-48 sm:h-52 lg:h-56 object-cover'
              />
            </Motion.div>

            <Motion.div
              className='p-4'
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                <strong>Mixed Dormitory</strong> – Great for solo travelers who love meeting people.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className='flex flex-col overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <RoomImageSlider
                images={roomImages.singleRoom}
                altText="Private Single Room Ensuite"
                className='w-full h-48 sm:h-52 lg:h-56 object-cover'
              />
            </Motion.div>

            <Motion.div
              className='p-4'
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                <strong>Private Single Room Ensuite</strong> – Your Personal Surf Haven Perfect for solo travelers craving privacy and comfort, for a peaceful night’s rest after a day riding the waves and soaking up the sun.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className='flex flex-col overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <RoomImageSlider
                images={roomImages.doubleRoom}
                altText="Private Double/Twin Room Ensuite"
                className='w-full h-48 sm:h-52 lg:h-56 object-cover'
              />
            </Motion.div>

            <Motion.div
              className='p-4'
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                <strong>Private Double / Twin Room Ensuite</strong> – For Solo, Couple or Friends want privacy with style for a good night sleep.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className='flex flex-col overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Motion.div
              className='w-full'
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <RoomImageSlider
                images={roomImages.tripleRoom}
                altText="Private Triple Room Ensuite"
                className='w-full h-48 sm:h-52 lg:h-56 object-cover'
              />
            </Motion.div>

            <Motion.div
              className='p-4'
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-xs sm:text-sm text-neutral-600 leading-relaxed text-center'>
                <strong>Private Triple  Room Ensuite</strong> – for a group of friends or a small family, our triple rooms are all about shared moments and smooth comfort. With plenty of space.
              </p>
            </Motion.div>
          </Motion.div>
        </div>

      </div>
    </Motion.div>
  )
}

export default ComfortableStays
