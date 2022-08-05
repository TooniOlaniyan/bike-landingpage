import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Ebike from '../component/Ebike'
import OtherBikes from '../component/OtherBikes'
import HybridBike from '../component/HybridBike'
import Testimonies from '../component/Testimonies'
import Footer from '../component/Footer'



function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Ebike />
      <OtherBikes />
      <HybridBike />
      <Testimonies />
      <Footer />
    </div>
  )
}

export default Home