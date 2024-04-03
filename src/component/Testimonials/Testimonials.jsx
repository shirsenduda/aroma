/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonials.css";
import Testimonialsingle from "../testimonialsingle/Testimonialsingle";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Swiperr = () => {
  const Testimonial = [
    {
      profileimage:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Names:"Jenny Roy",
      start: "/img/start.svg",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia eveniet ",

    },
  ]
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      freeMode={true}
      navigation= {{
        nextEl:".button-next-slide",
        prevEl:".button-prev-slide",
    }}
      pagination={{ clickable: true }}
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
          slidesPerView:3,
          spaceBetween:25
        },
      }}
      // scrollbar={{ draggable: true }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      className="Testimonials"
    >
      
      <SwiperSlide>
      <div className="Testimonialmain">
        <div className="partonetesti">
          <div className="circle1testi">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="parttwotesti">Jenny Roy</div>
        <div className="partthreetesti">
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
        </div>
        <div className="partfourtesti">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          maiores totam magnam.
        </div>
        <div className="partfivetesti">
          <div className="instatest">
            <i className="ri-instagram-line"></i>
          </div>
          <div className="instatest">
            <i className="ri-twitter-fill"></i>
          </div>
          <div className="instatest">
            <i className="ri-facebook-circle-fill"></i>
          </div>
        </div>
      </div>
      </SwiperSlide>

      
      <SwiperSlide>
      <div className="Testimonialmain">
        <div className="partonetesti">
          <div className="circle1testi">
            <img
              src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="parttwotesti">Harry Khan</div>
        <div className="partthreetesti">
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          
        </div>
        <div className="partfourtesti">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          maiores totam magnam.
        </div>
        <div className="partfivetesti">
          <div className="instatest">
            <i className="ri-instagram-line"></i>
          </div>
          <div className="instatest">
            <i className="ri-twitter-fill"></i>
          </div>
          <div className="instatest">
            <i className="ri-facebook-circle-fill"></i>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="Testimonialmain">
        <div className="partonetesti">
          <div className="circle1testi">
            <img
              src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="parttwotesti">Tailor Sheeran</div>
        <div className="partthreetesti">
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          
        </div>
        <div className="partfourtesti">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          maiores totam magnam.
        </div>
        <div className="partfivetesti">
          <div className="instatest">
            <i className="ri-instagram-line"></i>
          </div>
          <div className="instatest">
            <i className="ri-twitter-fill"></i>
          </div>
          <div className="instatest">
            <i className="ri-facebook-circle-fill"></i>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="Testimonialmain">
        <div className="partonetesti">
          <div className="circle1testi">
            <img
              src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="parttwotesti">Lisa Sharma</div>
        <div className="partthreetesti">
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/img/start.svg"  alt="" />
          </div>
          
        </div>
        <div className="partfourtesti">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          maiores totam magnam.
        </div>
        <div className="partfivetesti">
          <div className="instatest">
            <i className="ri-instagram-line"></i>
          </div>
          <div className="instatest">
            <i className="ri-twitter-fill"></i>
          </div>
          <div className="instatest">
            <i className="ri-facebook-circle-fill"></i>
          </div>
        </div>
      </div>
      </SwiperSlide>
      


      <div className='button-next-slide'>
      <IoIosArrowForward />
      </div>
      <div className='button-prev-slide'>
      <IoIosArrowBack />
      </div>
     
    </Swiper>
  );
};

export default Swiperr;
