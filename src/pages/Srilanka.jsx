import React from 'react'
import Header from '../components/srilanka/Header'
import Perfect from '../components/country/Perfect'
import ImageCard from '../components/country/ImageCard'
import ChooseSurfCamp from '../components/country/ChooseSurf'
import CountryCard from '../components/country/CountryCard'
import BeachCamp from '../components/country/BeachCamp'
import TS2Camp from '../components/country/TS2Camp'
import SurferCamp from '../components/country/SurferCamp'
import SurferWay from '../components/country/SurferWay'
import SurfPackageCard from '../components/country/Packages'
import Reviews from '../components/country/Reviews'
import Activities from '../components/country/Activities'
import Follow from '../components/country/Follow'
import {Footer} from '../components/Footer'

const Srilanka = () => {
  return (
    <div>
        <Header />
        <Perfect />
        <ImageCard />
        <ChooseSurfCamp />
        <BeachCamp />
        <TS2Camp />
        <SurferCamp />
        {/* <SurferWay /> */}
        <SurfPackageCard />
        <Reviews />
        <Activities />
        <Follow />
        <Footer />
    </div>
  )
}

export default Srilanka;