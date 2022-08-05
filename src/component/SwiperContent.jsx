import React from 'react'


function SwiperContent({img , name , job , testimonies}) {
  return (
    <article className='bg-gradient-to-t from-[#ffbc37ec] to-[#d08d06] w-[90vw] mx-auto gap-[1.5rem]  flex flex-col justify-center items-center rounded-[10px] p-10 lg:mx-auto lg:w-[100%] lg:h-[100%]'>
      <div className='flex justify-center items-center flex-col gap-1'>
        <h1 className='text-[#fff] font-bold text-[28px] text-center'>
          What our customer are saying
        </h1>
        <div className='w-[52px] h-[2px] bg-[#fff]'></div>
      </div>
      <section className='flex justify-center items-center flex-col gap-[1.5rem] lg:flex-row lg:gap-[3rem] text-left'>
        <div className='flex justify-center items-center flex-col'>
          <img
            className='rounded-full border-[4px] border-[#fff] h-[150px] w-[150px]'
            src={img}
            alt=''
          />
          <p className='text-[#fff] text-[22px] font-bold'>{name}</p>
          <p className='text-[#fff] text-[22px] font-normal'>{job}</p>
        </div>
        <div>
          <p className='text-[#fff] text-[16px] font-normal text-center w-[80vw] lg:w-[25vw] lg:text-[18px]'>
            {testimonies}
          </p>
        </div>
      </section>
    </article>
  )
}

export default SwiperContent