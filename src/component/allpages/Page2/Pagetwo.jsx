/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Page2.css"
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Pageone = () => {
  return (
    <>
   
    <Swiper
        slidesPerView={4}
        spaceBetween={15}
        freeMode={true}
        // navigation= {true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView:1,
            spaceBetween:30
          },
          480: {
            slidesPerView:1,
            spaceBetween:10
          },
        1020: {
            slidesPerView:4,
            spaceBetween:10
          },
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        
        className="Swipertwo"
      >
      
      <SwiperSlide className="brand">
        <h1 className='Black'>Black Coffee</h1>
        <div className="coffeeiconi"><img src="./img/coffeeicon.svg" alt="" /></div>
      </SwiperSlide>
      <SwiperSlide className="brand">
        <h1 className='Black'> Milk Coffee</h1>
        <div className="coffeeiconi"><img src="./img/coffeeicon.svg" alt="" /></div>
      </SwiperSlide>
      <SwiperSlide className="brand">
        <h1 className='Black'>Macha coffee</h1>
        <div className="coffeeiconi"><img src="./img/coffeeicon.svg" alt="" /></div>
      </SwiperSlide>
      <SwiperSlide className="brand">
        <h1 className='Black'>Cold Coffee</h1>
        <div className="coffeeiconi"><img src="./img/coffeeicon.svg" alt="" /></div>
      </SwiperSlide>
      <SwiperSlide className="brand">
        <h1 className='Black'>Latte coffee</h1>
        <div className="coffeeiconi"><img src="./img/coffeeicon.svg" alt="" /></div>
      </SwiperSlide>
      
      
     
    </Swiper>
    
    </>
  )
}

export default Pageone
