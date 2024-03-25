/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Fooditem.css'
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Smcard from '../smcard/Smcard'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsDot } from "react-icons/bs";
const Pageone = () => {
    const fooddata = [
        {
            id:0,
            foodimg : "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cartimg : "/img/cart.svg",
            foodname: "cappuccino",
            price : "$12"
        },
        {
            id:1,
            foodimg : "https://images.unsplash.com/photo-1498709112912-9be3173d30be?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cartimg : "/img/cart.svg",
            foodname: "Expresso",
            price : "$5"
        },
        {
            id:2,
            foodimg : "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cartimg : "/img/cart.svg",
            foodname: "Cold Coffee",
            price : "$21"
        },
        {
            id:3,
            foodimg : "https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cartimg : "/img/cart.svg",
            foodname: "Latte",
            price : "$12"
        },
        {
            id:4,
            foodimg : "https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?q=80&w=1775&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cartimg : "/img/cart.svg",
            foodname: "Cold Coffee",
            price : "$17"
        },
    ]
  return (
    <>
   
   
    <Swiper
        slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
        navigation= {{
            nextEl:".button-next-slide",
            prevEl:".button-prev-slide",
        }}
        //  pagination={{
        //      el: ".swiper-pagination",
        //      clickable: true,
        //      dynamicBullets: true,
            
        //      }}
             breakpoints={{
                0: {
                    slidesPerView:1,
                    spaceBetween:10
                  },
                480: {
                    slidesPerView:2,
                    spaceBetween:10
                  },
                1020: {
                    slidesPerView:4,
                    spaceBetween:10
                  },
                
                  
             }}
        // scrollbar={{ draggable: true }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay,]}
        
        // autoplay={{
        //   delay: 2800,
        //   disableOnInteraction: false,
        // }}
        className="Swiperthreeee"
        
      >
      {fooddata.map((itemmm)=>(
        <SwiperSlide>
            <Smcard fooddatapass={itemmm}/>
        </SwiperSlide>
      ))}
      
      
      <div className='button-next-slide'>
      <IoIosArrowForward />
      </div>
      <div className='button-prev-slide'>
      <IoIosArrowBack />
      </div>
      <div className='swiper-pagination'>
      <BsDot />
      </div>
      
      
      
     
    </Swiper>
    
    </>
  )
}

export default Pageone
