import React from 'react'
import HeroSection from './HeroSection'
import Award from './Award'
import Pricing from './Pricing'
import OpenAccount from '../OpenAccount'
import Explore from './Explore'
function HomePage() {
  return (
    <>    
      <HeroSection />
      <Award />
     <Explore />
      <Pricing />   
      <OpenAccount />
      </>
  )
}

export default HomePage