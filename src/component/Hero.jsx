import React from 'react'
import {CgSearch} from 'react-icons/cg'
import Lottie from 'lottie-react'
import headerLottie from '../assets/lottie/headerLottie.json'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center px-5 xl:flex-row '>
      <div>
        <h2 className='text-[48px] text-[#233348] font-bold leading-normal'>Your Bike Electric Update</h2>
        <p className='text-[21px] text-[#7D7987]'>Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <form className='flex gap-2 border-2 border-[#C2CFE0] justify-between items-center px-2 py-1 rounded-[100px]'>
          <div className='flex justify-center items-center gap-1'>
          <CgSearch fill='#c2cfe0'/>
          <input className='border-white' type="text" placeholder='Search Bike or anything'/>
          </div>
          <button className='bg-[#FFBD37] px-4 py-1 rounded-[100px]'>Find</button>
        
        </form>
      </div>

      {/* Lottie */}
      <div>
        <Lottie className='xl:w-[50vw]' animationData={headerLottie}/>
      </div>

    </div>
  )
}

export default Hero