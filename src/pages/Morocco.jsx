import React from 'react'
import Header from '../components/morocco/Header'
import Perfect from '../components/morocco/Perfect'
import ImageCard from '../components/country/ImageCard'
import ChooseSurfCamp from '../components/morocco/ChooseSurf'
import CountryCard from '../components/country/CountryCard'
import BeachCamp from '../components/country/BeachCamp'
import SurfStyle from '../components/morocco/SurfStyle'
import SurferCamp from '../components/country/SurferCamp'
import SurferWay from '../components/country/SurferWay'
import SurfPackageCard from '../components/morocco/Packages'
import Reviews from '../components/country/Reviews'
import StayInStyle from '../components/morocco/StayInStyle'
import Activities from '../components/country/Activities'
import Follow from '../components/country/Follow'
import {Footer} from '../components/Footer'

const Morocco = () => {
  return (
    <div>
        <Header />
        <Perfect />
        {/* <ImageCard /> */}
        <ChooseSurfCamp />
        <SurfStyle />
        {/* <SurferWay /> */}
        <SurfPackageCard />
        <Reviews />
        <StayInStyle />
        <Footer />
    </div>
  )
}

export default Morocco;