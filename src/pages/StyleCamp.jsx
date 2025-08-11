import React from 'react'
import Header from '../components/style_camp/Header'
import LifeAtSurfCamp from '../components/style_camp/Life'
import ImageCard from '../components/style_camp/ImageCard'
import Packages from '../components/beach_camp/Packages'
import SurfDays from '../components/style_camp/SurfDays'
import ComfortableStays from '../components/style_camp/ComfortableStays'
// import ImageSlider from '../components/style_camp/ImageSlider'
import Package from '../components/style_camp/Package'
import {Footer} from '../components/Footer'

const StyleCamp = () => {
  return (
    <div>
      <Header />
      <LifeAtSurfCamp />
      <ImageCard />
      <Package />
      <SurfDays />
      <ComfortableStays />
      {/* <ImageSlider /> */}
      <Footer />
    </div>
  )
}

export default StyleCamp