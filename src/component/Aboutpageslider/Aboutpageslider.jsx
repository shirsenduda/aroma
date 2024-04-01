/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Aboutpageslider.css'
const Swiperr= () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={0}
        freeMode={true}
        // navigation= {true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="Swiperabout"
      >
      
      <SwiperSlide className="aboutslider">
        <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
      </SwiperSlide>
      <SwiperSlide className="aboutslider">
        <img src="https://images.unsplash.com/photo-1504627298434-2119d6928e93?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        {/* <h5 className="expressoo">Enjoy Our <br />Drinks</h5> */}
      </SwiperSlide>
    </Swiper>
  )
}

export default Swiperr
