import React from 'react'
import Card from '../shared/Card'
import Lottie from 'lottie-react'
import BikeLottie from '../assets/lottie/BikeLottie.json'

function HybridBike() {
  return (
    <main className='flex justify-center items-center gap-[4rem] flex-col mt-[5rem] lg:flex-row lg:gap-[4rem] lg:mt-[10rem] '>
      <div className=' flex justify-center gap-5 items-center flex-col rounded-md  shadow-md bg-white p-3 w-[80vw] h-[350px]  lg:w-[25vw] lg:h-[380px] lg:gap-5'>
        <Lottie className='lg:w-[243px] h-[204px]' animationData={BikeLottie} />
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
      </div>

      <article className='flex justify-center gap-[2rem] items-center flex-col lg:gap-[2rem] lg:items-start'>
        <h2 className='text-[30px] text-[#233348] font-bold'>Hybrid Bikes</h2>
        <p className='w-[80vw] text-[#7D7987] text-[18px] lg:w-[450px]'>
          Dummy Text progressive, and affordable healthcare, accessible on
          mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button className=' border-[1.3px] border-[#FCB72B] px-[3rem] py-3 rounded-[55px] text-[18px] text-[#FCB72B]'>
          Learn more
        </button>
      </article>
    </main>
  )
}

export default HybridBike