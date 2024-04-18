/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Fooditemthree.css";
("use client");
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import Bevarage from "../Bevarge/Bevarage";
const Pageone = () => {
  const fooddata = [
    {
      id: 0,
      foodimg:
        "https://images.unsplash.com/photo-1628229200053-53b768c4d37b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "Mango Juice",
      price: "$13",
    },
    {
      id: 1,
      foodimg:
        "https://images.unsplash.com/photo-1629325288097-55f028c6a159?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "lemon Juice",
      price: "$12",
    },
    {
      id: 2,
      foodimg:
        "https://images.unsplash.com/photo-1592858167090-2473780d894d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "Orage Juice",
      price: "$7",
    },
    {
      id: 3,
      foodimg:
        "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "Cock",
      price: "$4",
    },
    {
      id: 4,
      foodimg:
        "https://images.unsplash.com/photo-1583898350903-99fa829dad3d?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "Srawberry Juice",
      price: "$16.1",
    },
  ];
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        //  pagination={{
        //      el: ".swiper-pagination",
        //      clickable: true,
        //      dynamicBullets: true,

        //      }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1020: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        // scrollbar={{ draggable: true }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        // autoplay={{
        //   delay: 2800,
        //   disableOnInteraction: false,
        // }}
        className="Swiperthreeee"
      >
        {fooddata.map((itemmm,key) => (
          <SwiperSlide>
            {/* <Smcardtwo fooddatapass={itemmm} /> */}
            <Bevarage fooddatapass={itemmm} Key={key} />
          </SwiperSlide>
        ))}

        <div className="button-next-slide">
          <IoIosArrowForward />
        </div>
        <div className="button-prev-slide">
          <IoIosArrowBack />
        </div>
        <div className="swiper-pagination">
          <BsDot />
        </div>
      </Swiper>
    </>
  );
};

export default Pageone;
