import React from 'react'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
        style={{ backgroundImage: "url('/beachcamp.jpg')" }} id='Header'>
        <Navbar />
        <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
          <h2 className='font-[montserrat] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
            The Surfer Beach Camp
          </h2>
          <p className='text-lg sm:text-xl font-[montserrat] font-semibold md:text-2xl lg:text-3xl mt-4'>
            Your ultimate beach surf camp experience
          </p>
        </div>
      </div>
  )
}

export default Header