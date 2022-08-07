import React from 'react'
import Card from '../shared/Card'
import Lottie from 'lottie-react'
import bikeLottie from '../assets/lottie/bikeLottie.json'
import { ReactComponent as Vector } from '../assets/PNG/Vector.svg'
import {motion} from 'framer-motion'

function HybridBike() {
  const hybridVarient = {
    initial: {
      x: 300,
      opacity: 0,
    },
    final: {
      x: 0,
      opacity: 1,
    },
    transition: {
      bounce: 0.5,
      duration: 3,
      ease: [0.6, 0.25, 0.75, 0.75],
    },
  }
  const textVarient = {
    initial:{
      y:300,
      opacity:0
    },
    final:{
      y:0,
      opacity:1
    },
    transition:{
      bounce:0.1,
      duration:3

    }
  }
  return (
    <main className='flex justify-center   overflow-auto items-center gap-[4rem] flex-col mt-[5rem] lg:flex-row lg:gap-[4rem] lg:mt-[10rem] '>
      <motion.div
        animate={{ x: [-1000, 0] }}
        viewport={{ once: false }}
        className=' flex justify-center gap-5 items-center flex-col rounded-md  shadow-md bg-white p-3 w-[80vw] h-[350px]  lg:w-[25vw] lg:h-[380px] lg:gap-5'
      >
        <Vector className='hidden lg:inline absolute top-[100rem] opacity-60 right-[0rem] z-[-1]' />
        <Lottie className='lg:w-[243px] h-[204px]' animationData={bikeLottie} />
        <div className='h-[1.5px] w-[95%] bg-[#C2CFE0] mb-3'></div>
        <div className='flex justify-center items-center gap-[6rem]'>
          <div className='flex flex-col '>
            <p>Price</p>
            <p className='font-bold'>$750.00</p>
          </div>
          <button className=' bg-gradient-to-b from-[#ffbc3794] to-[#ffbc37] px-6 py-1 rounded-[100px]'>
            Order
          </button>
        </div>
      </motion.div>

      <motion.article
        transition={{
          staggerChildren: 0.3,
          staggerDelay: 2,
          delay: 2,
          ease: [0.25, 0.25, 0.75, 0.75],
        }}
        initial='initial'
        whileInView={'final'}
        viewport={{ once: false, amount: 0.1 }}
        className='flex justify-center  gap-[2rem]  items-center flex-col lg:gap-[2rem] lg:items-start'
      >
        <motion.h2
          variants={hybridVarient}
          className='text-[30px] text-[#233348] font-bold overflow-hidden'
        >
          Hybrid Bikes
        </motion.h2>
        <motion.p
          variants={textVarient}
          className='w-[80vw] text-[#7D7987] text-[18px] lg:w-[450px] overflow-hidden'
        >
          Dummy Text progressive, and affordable healthcare, accessible on
          mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </motion.p>
        <motion.button
          variants={textVarient}
          className=' border-[1.3px] border-[#FCB72B] px-[3rem] py-3 rounded-[55px] text-[18px] text-[#FCB72B] overflow-hidden'
        >
          Learn more
        </motion.button>
      </motion.article>
    </main>
  )
}

export default HybridBike