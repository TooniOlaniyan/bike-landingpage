import React from 'react'
import {BsArrowLeft , BsArrowRight} from 'react-icons/bs'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from '../shared/Card'
import Universal from '../assets/PNG/Universal.svg'
import Brampton from '../assets/PNG/Brampton.svg'
import {motion} from 'framer-motion'
SwiperCore.use([ Navigation , Pagination,Scrollbar , A11y])

function Ebike() {
  const EbikeVarient = {
    initial:{
      x:400,
      opacity:0
    },
    final:{
      x:0,
      opacity:1
    },
    transition:{
      bounce:0.5,
    }
  }
  return (
    <>
      <motion.div
        variants={EbikeVarient}
        initial='initial'
        animate={'final'}
        className=' w-[100vw] ml-0 lg:max-w-[1200px] mt-10 p-4  lg:ml-72  lg:mt-[8rem]'
      >
        <Swiper
          spaceBetween={10}
          className='mySwiper'
          rewind={true}
          watchSlidesVisibility={true}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-custom-navigation-prev',
            nextEl: '.swiper-custom-navigation-next',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Card
              heading={'Universal eBike Kit '}
              img={Universal}
              price={'Price'}
              priceDollar={'$750,00'}
              order={'Order'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              heading={'Brampton eBike Kit'}
              img={Brampton}
              price={'Price'}
              priceDollar={'$750,00'}
              order={'Order'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              className='opacity-10'
              heading={'Additional eBike Kit'}
              img={Universal}
              price={'Price'}
              priceDollar={'$250,00'}
              order={'Order'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              className='opacity-10'
              heading={'Additional eBike Kit'}
              img={Universal}
              price={'Price'}
              priceDollar={'$250,00'}
              order={'Order'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              className='opacity-10'
              heading={'Additional eBike Kit'}
              img={Universal}
              price={'Price'}
              priceDollar={'$250,00'}
              order={'Order'}
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <div className='flex justify-end gap-6 items-center mr-[15%] mt-[2rem] '>
        <div className='w-[48px] h-[48px] bg-gradient-to-b from-[#ffbc3794] to-[#ffbc37] rounded-full flex justify-center items-center cursor-pointer '>
          <BsArrowLeft
            className='swiper-custom-navigation swiper-custom-navigation-prev backNavigate'
            size={27}
            fill='#233348'
          />
        </div>
        <div className='w-[48px] h-[48px] bg-gradient-to-b from-[#ffbc3794] to-[#ffbc37] rounded-full flex justify-center items-center cursor-pointer '>
          <BsArrowRight
            className='swiper-custom-navigation swiper-custom-navigation-next frontNavigate'
            size={27}
            fill='#233348'
          />
        </div>
      </div>
    </>
  )
}

export default Ebike