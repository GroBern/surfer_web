import React from 'react'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
        style={{ backgroundImage: "url('/ts2camp.jpg')" }} id='Header'>
        <Navbar />
        <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
          <h2 className='font-[montserrat] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
            Your Peaceful Surf Camp Experience in Weligama
          </h2>
        </div>
      </div>
  )
}

export default Header