import React from 'react'
import {CgSearch} from 'react-icons/cg'
import Lottie from 'lottie-react'
import headerLottie from '../assets/lottie/headerLottie.json'
import {motion} from 'framer-motion'

function Hero() {
  const BikeVarient = {
    initial:{
      x: 200,
      opacity:0
    },
    final:{
      x:0,
      opacity:1
    },
    transition:{ bounce: 0.4 , delay: 2 , staggerChildren:0.5}
  }
   const TextVarient = {
     initial: {
       x: -1000,
     },
     final: {
       x: 0,
     },
     transition: { type: 'spring', bounce: 0.4, duration:1 },
   }
   const AngelVarient = {
     initial: {
       y: 100,
       opacity: 0
     },
     final: {
       y: 0,
       opacity:1
     },
     transition: { type: 'spring', bounce: 0.9, duration: 2},
   }

  return (
    <div className='flex flex-col justify-center items-center px-5 xl:flex-row mt-[5rem] lg:items-end lg:justify-center lg:gap-[6rem]'>
      <motion.div
        transition={{ staggerChildren: 0.3 }}
        initial='initial'
        whileInView={'final'}
        viewport={{once:false , amount:0.1}}
        className='mt-6 w-[80vw] xl:w-[411px] outline-black lg:w-[411px] '
      >
        <motion.h2
          variants={TextVarient}
          className='text-[48px] text-[#233348] font-bold leading-none mb-5'
        >
          Your Bike Electric Update
        </motion.h2>
        <motion.p
          variants={AngelVarient}
          className='text-[21px] text-[#7D7987]'
        >
          Dummy text progressive, and affordable healthcare, accessible on
          mobile and online for everyone
        </motion.p>
        <motion.form
          variants={AngelVarient}
          className='flex relative gap-2 border-2 border-[#C2CFE0] justify-between items-center p-5  rounded-[100px] mt-6'
        >
          <div className='flex justify-center items-center gap-1'>
            <CgSearch fill='#c2cfe0' />
            <input
              className='border-none outline-none px-2 text-[13px]'
              type='text'
              placeholder='Search Bike or anything'
            />
          </div>
          <button className=' flex absolute right-[3px] top-[1/2] justify-center items-center bg-gradient-to-b from-[#ffbc3794] to-[#ffbc37] w-[15%] px-11 py-2 rounded-[100px] lg:px-14 lg:py-2.5'>
            Find
          </button>
        </motion.form>
      </motion.div>

      {/* Lottie */}
      <motion.div variants={BikeVarient} initial='initial' whileInView={'final'} viewport={{once:false , amount:0.1}} >
        <Lottie
          className=' w-[280px]  lg:w-[300px]'
          animationData={headerLottie}
        />
      </motion.div>
    </div>
  )
}

export default Hero