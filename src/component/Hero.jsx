import React from 'react'
import {CgSearch} from 'react-icons/cg'
import Lottie from 'lottie-react'
import headerLottie from '../assets/lottie/headerLottie.json'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center px-5 xl:flex-row mt-[5rem] lg:items-end lg:justify-center lg:gap-[6rem]'>
      <div className='mt-6 w-[80vw] xl:w-[411px] outline-black lg:w-[411px] '>
        <h2 className='text-[48px] text-[#233348] font-bold leading-none mb-5'>Your Bike Electric Update</h2>
        <p className='text-[21px] text-[#7D7987]'>Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <form className='flex relative gap-2 border-2 border-[#C2CFE0] justify-between items-center p-5  rounded-[100px] mt-6'>
          <div className='flex justify-center items-center gap-1'>
          <CgSearch fill='#c2cfe0'/>
          <input className='border-none outline-none px-2 text-[13px]' type="text" placeholder='Search Bike or anything'/>
          </div>
          <button className=' flex absolute right-[3px] top-[1/2] justify-center items-center bg-gradient-to-b from-[#ffbc3794] to-[#ffbc37] w-[15%] px-11 py-2 rounded-[100px] lg:px-14 lg:py-2.5'>Find</button>
        </form>
      </div>

      {/* Lottie */}
      <div>
        <Lottie  className=' w-[280px]  lg:w-[300px]' animationData={headerLottie}/>
      </div>

    </div>
  )
}

export default Hero