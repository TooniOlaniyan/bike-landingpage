import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Ebike from '../component/Ebike'
import OtherBikes from '../component/OtherBikes'
import HybridBike from '../component/HybridBike'
import Testimonies from '../component/Testimonies'
import Footer from '../component/Footer'
import { motion, useScroll } from 'framer-motion'


function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
    >
      <Header />
      <Hero />
      <Ebike />
      <OtherBikes />
      <HybridBike />
      <Testimonies />
      <Footer />
    </motion.div>
  )
}

export default Home