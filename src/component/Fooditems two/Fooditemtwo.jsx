/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Fooditemtwo.css";
("use client");
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Smcardtwo from "../smcard two/smcardtwo";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsDot } from "react-icons/bs";
const Pageone = () => {
  const fooddata = [
    {
      id: 0,
      foodimg:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWR8ZW58MHx8MHx8fDA%3D",
      cartimg: "/img/cart.svg",
      foodname: "Multigrain Bread",
      price: "$11",
    },
    {
      id: 1,
      foodimg:
        "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "White Bread",
      price: "$2",
    },
    {
      id: 2,
      foodimg:
        "https://plus.unsplash.com/premium_photo-1677100463916-0c8f463d2738?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "challah bread",
      price: "$19",
    },
    {
      id: 3,
      foodimg:
        "https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "Roll with milk",
      price: "$12",
    },
    {
      id: 4,
      foodimg:
        "https://images.unsplash.com/photo-1582215669338-6cfdb76bca45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cartimg: "/img/cart.svg",
      foodname: "Swedish Fika",
      price: "$11.1",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
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
            <Smcardtwo fooddatapass={itemmm} Key={key} />
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
