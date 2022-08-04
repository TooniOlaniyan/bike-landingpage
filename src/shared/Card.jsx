import React from 'react'

function Card({heading , img , price , priceDollar , order}) {
  return (
    <div>
        <div className='flex justify-center  items-center mx-auto mt-10'>
      <div className=' flex justify-center items-center flex-col  shadow-md bg-white w-[80vw] h-[300px]rounded-md p-4 xl:w-[25vw]'>
          <h2 className='text-[20px] text-[#233348] font-bold xl:mr-[8rem]'>{heading}</h2>
          <img className='h-[229px]' src={img} alt="" />
          <div className='h-[1.5px] w-[80%] bg-[#C2CFE0] mb-3'></div>
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