import React, { useEffect } from 'react'
import Header from '../components/beach_camp/Header'
import LifeAtSurfCamp from '../components/beach_camp/Life'
import ImageCard from '../components/beach_camp/ImageCard'
import Packages from '../components/beach_camp/Packages'
import SurfDays from '../components/beach_camp/SurfDays'
import ComfortableStays from '../components/beach_camp/ComfortableStays'
import ImageSlider from '../components/beach_camp/ImageSlider'
import { Footer } from '../components/Footer'
import Package from '../components/beach_camp/Package'
import { motion as Motion } from 'framer-motion'

const BeachCamp = () => {

  useEffect(() => {
    document.title = "Beach Camp - The Surfer";
  }, []);

  return (
    <div>
      <Header />
      <LifeAtSurfCamp />
      <ImageCard />
      <Package />
      <ComfortableStays />
      <SurfDays />
      {/* <ImageSlider /> */}
      <Motion.div
        className='flex flex-col items-center justify-center mt-16 mb-16 px-4 py-12 bg-gradient-to-b from-blue-50 to-white'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Motion.div
          className='max-w-6xl w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <img
            src="ts2_camp/map.jpg"
            alt="TS2 Camp Location Map"
            className='w-full h-auto object-cover'
          />
        </Motion.div>
      </Motion.div>
      <Footer />
    </div>
  )
}

export default BeachCamp