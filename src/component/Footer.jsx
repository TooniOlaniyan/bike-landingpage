import React from 'react'
import {motion} from 'framer-motion'

function Footer() {
  const leftVarient = {
    initial: {
      x: -500,
      opacity: 0,
    },
    final: {
      x: 0,
      opacity: 1,
    },
    transition:{
      delay: 3,
      type: 'spring'
    }
  }
  const rightVarient = {
    initial: {
      x: 500,
      opacity: 0,
    },
    final: {
      x: 0,
      opacity: 1,
    },
    transition:{
      delay: 2,
      type: 'spring'
    }
  }
  return (
    <div className='flex justify-center items-center mt-[10rem] bg-[#FCB72B]  py-[6rem] overflow-hidden lg:mt-[8rem]'>
      <article className='flex justify-between items-center flex-col-reverse gap-[8rem] lg:flex-row overflow-hidden lg:gap-[20rem]'>
        <motion.div
          variants={leftVarient}
          initial='initial'
          animate='final'
          viewport={{once:false , amount: 0.1}}
          className='flex justify-center items-center flex-col gap-[1rem] lg:items-start'
        >
          <div className='flex justify-center items-center gap-3'>
            <p className='font-bold text-[26px] rounded-full h-4 w-4 bg-[#fff] text-[#FCB72B] p-4 flex justify-center items-center'>
              B
            </p>
            <p className='text-[#fff] text-[20px] font-bold'>eBike</p>
          </div>
          <p className='text-[#fff] text-[18px] w-[80vw] lg:w-[22vw] md:w-[50vw]'>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className='text-[#fff] text-[18px]'>
            ©eBike 2021. All rights reserved
          </p>
        </motion.div>
        <motion.div
          variants={rightVarient}
          initial='initial'
          animate={'final'}
          
          className='flex justify-center items-center gap-[6rem] lg:gap-[4rem]'
        >
          <div className='flex flex-col gap-[0.8rem]'>
            <h1 className='text-[#fff] text-[18px] font-bold lg:text-[20px]'>
              Company
            </h1>
            <p className='text-[#fff] text-[14px] lg:text-[18px]'>Product</p>
            <p className='text-[#fff] text-[14px] lg:text-[18px]'>Bike Type</p>
            <p className='text-[#fff] text-[14px] lg:text-[18px]'>About us</p>
            <p className='text-[#fff] text-[14px] lg:text-[18px]'>Contact</p>
          </div>
          <div className='flex flex-col gap-[0.8rem]'>
            <h1 className='text-[#fff] text-[18px] font-bold lg:text-[20px]'>
              Help
            </h1>
            <p className='text-[#fff] text-[14px] lg:text-[18px]'>
              Help center
            </p>
            <p className='text-[#fff] text-[14px] lg:text-[18px]'>
              Contact support
            </p>
            <p className='text-[#fff] text-[14px] lg:text-[18px]'>
              Instructions
            </p>
            <p className='text-[#fff] text-[14px] lg:text-[18px]'>
              How it works
            </p>
          </div>
        </motion.div>
      </article>
    </div>
  )
}

export default Footer