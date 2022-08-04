import React from 'react'
import others from '../assets/PNG/others.png'

function OtherBikes() {
  return (
    <div className='flex justify-center items-center gap-[2rem] flex-col text-left  mt-[5rem]'>
      <h2 className='text-[20px] text-[#233348] font-bold'>Other Types Of Bikes</h2>
      <section className='flex justify-center  items-center flex-col'>
        <div className='flex justify-center gap-[1rem] items-center flex-col'>
        <div className='bg-white p-3 w-[80vw] h-[8rem] flex justify-center items-center shadow-md rounded-md '>
          <img className='w-[166px] h-[100px]' src={others} alt="" />
        </div>
          <p className='text[#233348] font-semibold'>Hybrid Bikes</p>  
        </div> 
      </section>

      {/* second */}
      <section className='flex justify-center  items-center flex-col'>
        <div className='flex justify-center gap-[1rem] items-center flex-col'>
        <div className='bg-white p-3 w-[80vw] h-[8rem] flex justify-center items-center shadow-md rounded-md '>
          <img className='w-[166px] h-[100px]' src={others} alt="" />
        </div>
          <p className='text[#233348] font-semibold'>Fixie Bikes</p>  
        </div> 
      </section>

      {/* third */}
      <section className='flex justify-center  items-center flex-col'>
        <div className='flex justify-center gap-[1rem] items-center flex-col'>
        <div className='bg-white p-3 w-[80vw] h-[8rem] flex justify-center items-center shadow-md rounded-md '>
          <img className='w-[166px] h-[100px]' src={others} alt="" />
        </div>
          <p className='text[#233348] font-semibold'>Folding Bikes</p>  
        </div> 
      </section>
    </div>
  )
}

export default OtherBikes