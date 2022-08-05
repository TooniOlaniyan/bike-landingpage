import React from 'react'
import others from '../assets/PNG/others.svg'
import OtherBikeCard from '../shared/OtherBikeCard'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {motion} from 'framer-motion'
SwiperCore.use([ Navigation , Pagination,Scrollbar , A11y])

function OtherBikes() {
  const EbikeVarient = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    final: {
      x: 0,
      opacity: 1,
    },
    transition: {
      bounce: 0.5,
    },
  }
  return (
    <div className=' mt-[5rem]'>
      <h2 className='text-[20px] text-[#233348]  lg:ml-72 font-bold mb-5 p-4'>Other Types Of Bikes</h2>
      <motion.section variants={EbikeVarient} initial='initial' animate={'final'}  className='lg:ml-72' >
      <Swiper
      spaceBetween={-25}
      slidesPerView={1}
      className='mySwiper'
      breakpoints={{
        640: {
          slidesPerView: 1,
        
        },
        768: {
          slidesPerView: 1,
          
        },
        1024: {
          slidesPerView: 5,
          
        },
      }}>

      <SwiperSlide>
        <OtherBikeCard img={others} bikeType='Hybrid bike' />
      </SwiperSlide>
      <SwiperSlide>
        <OtherBikeCard img={others} bikeType='Hybrid bike' />
      </SwiperSlide>
      <SwiperSlide>
        <OtherBikeCard img={others} bikeType='Hybrid bike' />
      </SwiperSlide>
      <SwiperSlide>
        <OtherBikeCard img={others} bikeType='Hybrid bike' />
      </SwiperSlide>
      <SwiperSlide className='opacity-25'>
        <OtherBikeCard img={others} bikeType='Hybrid bike' />
      </SwiperSlide>
    
    </Swiper>
 
      </motion.section>
    </div>
  )
}

export default OtherBikes