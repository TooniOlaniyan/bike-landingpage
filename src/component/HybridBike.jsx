import React from 'react'
import Card from '../shared/Card'
import Lottie from 'lottie-react'
import headerLottie from '../assets/lottie/headerLottie.json'

function HybridBike() {
  return (
    <main className='flex justify-center items-center flex-col mt-[5rem] lg:flex-row'>
      <Card img={<Lottie animationData={headerLottie}/>} price={'Price'} priceDollar={'$750.00'} order={'Order'} />
      <article className='flex justify-center gap-4 items-center flex-col mt-[5rem] lg:w-[40vw]'>
        <h2 className='text-[30px] text-[#233348] font-bold'>Hybrid Bikes</h2>
        <p className='w-[80vw] text-[#7D7987] text-[18px]'>Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
        <button className=' border-[1.5px] border-[#FCB72B] px-8 py-2 rounded-[55px] text-[18px] text-[#FCB72B]'>Learn more</button>
      </article>


    </main>
  )
}

export default HybridBike