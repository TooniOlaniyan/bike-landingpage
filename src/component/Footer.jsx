import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center items-center mt-[5rem] bg-[#FCB72B]  w-[100vw] py-[6rem]'>
      <article className='flex justify-between items-center flex-col-reverse gap-[8rem] lg:flex-row'>
        <div className='flex justify-center items-center flex-col gap-[1rem] lg:items-start'>
        <div className='flex justify-center items-center gap-3'>
          <p className='font-bold text-[24px] rounded-full h-4 w-4 bg-[#fff] text-[#FCB72B] p-4 flex justify-center items-center'>B</p>
          <p className='text-[#fff] text-[18px] font-bold'>eBike</p>
        </div>
        <p className='text-[#fff] w-[80vw] lg:w-[22vw] md:w-[50vw]'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <p className='text-[#fff]'>©eBike 2021. All rights reserved</p>
        </div>
        <div className='flex justify-center items-center gap-[6rem] lg:gap-[4rem]'>
          <div className='flex flex-col gap-[0.8rem]'>
            <h1 className='text-[#fff] text-[18px] font-bold'>Company</h1>
            <p className='text-[#fff] text-[14px]'>Product</p>
            <p className='text-[#fff] text-[14px]'>Bike Type</p>
            <p className='text-[#fff] text-[14px]'>About us</p>
            <p className='text-[#fff] text-[14px]'>Contact</p>
          </div>
          <div className='flex flex-col gap-[0.8rem]'>
            <h1 className='text-[#fff] text-[18px] font-bold'>Help</h1>
            <p className='text-[#fff] text-[14px]'>Help center</p>
            <p className='text-[#fff] text-[14px]'>Contact support</p>
            <p className='text-[#fff] text-[14px]'>Instructions</p>
            <p className='text-[#fff] text-[14px]'>How it works</p>
          </div>

        </div>

      </article>
    </div>
  )
}

export default Footer