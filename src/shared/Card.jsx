import React from 'react'

function Card({heading , img , price , priceDollar , order}) {
  return (
    <div>
      <div className=' flex justify-center items-center overflow-hidden  shadow-lg bg-white w-[100vw] h-[386.23px] rounded-xl p-4 xl:w-[25vw]'>
          <div className="">
          <h2 className='text-[20px] text-[#233348] font-bold xl:mr-[8rem]'>{heading}</h2>
          <img src={img} alt="" />
          <div className='h-[1.5px] w-[95%] bg-[#C2CFE0] mb-3'></div>
          <div className='flex justify-center items-center gap-[6rem]'>
            <div className='flex flex-col '>
            <p>{price}</p>
            <p className='font-bold'>{priceDollar}</p>
            </div>
            <button className=' bg-gradient-to-b from-[#ffbc3794] to-[#ffbc37] px-6 py-1 rounded-[100px]'>{order}</button>
          </div>
          </div>
      </div>

    </div>
  )
}

export default Card