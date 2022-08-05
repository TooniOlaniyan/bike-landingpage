import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import SwiperContent from './SwiperContent';
import person1 from '../assets/PNG/person1.png'

function Testimonies() {
  return (
    <>
      <div className='flex justify-center items-center w-[90vw] mt-[8rem] lg:w-[60vw] mx-auto '>
        <Swiper
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-custom-navigation-prev',
            nextEl: '.swiper-custom-navigation-next',
          }}
          className='mySwiper lg:h-[435px]'
        >
          <SwiperSlide>
            <SwiperContent
              img={person1}
              name='Olaniyan Tooni'
              job='Pro Rider'
              testimonies='Dummy Text patient engagement app and 
            web portal allow you to access information instantaneously (no tedeous form, long calls, 
            or administrative hassle) and securely”'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent
              img={person1}
              name='Mike Smith'
              job='Lead Engineer'
              testimonies='If you look at people who do get a head injury riding their bikes, 98 percent of them werent wearing a helmet when this happened. But if you do wear a helmet.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent
              img={person1}
              name='kamaru Usman'
              job='Product Manager'
              testimonies='"I actually fractured my femur, ended up in the hospital for a couple of days because of that, but I also smashed my head on the pavement, and the helmet did exactly what its supposed to do.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent
              img={person1}
              name='Isreal Adesanyan'
              job='Market strategist'
              testimonies='Biking is important to my family for many reasons.  It reduces our dependency on driving, and that makes the air cleaner for everyone, including my seven year-old who has asthma.'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='hidden lg:flex justify-center items-center gap-[9rem] mt-8 '>
        <BsArrowLeft
          className='swiper-custom-navigation swiper-custom-navigation-prev backNavigate opacity-30'
          size={35}
          fill='#FFBE3B'
        />
        <BsArrowRight
          className='swiper-custom-navigation swiper-custom-navigation-next frontNavigate'
          size={35}
          fill='#FFBE3B'
        />
      </div>
    </>
  )
}

export default Testimonies