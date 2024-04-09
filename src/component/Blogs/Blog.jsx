/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./Blog.css";
import Coffeecup from "../Coffeecupbl/Coffeecup";
import Coffeepercent from "../Coffeepercent/Coffeepercent";
import Coffeeicon from '../Coffeeicon/Coffeeicon'
const Swiperr = () => {
  const coffeecupdata = [
    { img: "./img/onee.svg" },
    { img: "./img/twee.svg" },
    { img: "./img/thee.svg" },
  ];
  const coffeecuppercent = [
    { img: "./img/50.png" },
    { img: "./img/75.png" },
    { img: "./img/100.png" },
    
  ];
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      freeMode={true}
      // navigation= {true}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      navigation={{
        nextEl: ".button-next-slideee",
        prevEl: ".button-prev-slide",
      }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      className="cheafpa"
    >
      <SwiperSlide className="cheafone">
        <div className="blogcard">
          <div className="parton">
            <div className="fis">how to make a great coffee</div>
          </div>
          <div className="parton">
            <div className="fiss">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident laudantium delectus, repudiandae soluta maxime explicabo
              mollitia temporibus praesentium ipsa aspernatur inventore.
            </div>
          </div>
          <div className="parton">
            <div className="fisss">
              {coffeecupdata.map((item) => {
                return <Coffeecup coffeecup={item} />;
              })}
            </div>
            <div className="fissss">
              <div className="onr">
                <div className="cir"></div>
                <p>Expresso</p>
              </div>
              <div className="onr">
                <div className="cir"></div>
                <p>steamed-milk</p>
              </div>
              <div className="onr">
                <div className="cir"></div>
                <p>milk-Foam</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cheafone">
        <div className="blogcard">
          <div className="parton">
            <div className="fis">Different types of coffee Explained</div>
          </div>
          <div className="parton">
            <div className="fiss">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident laudantium delectus, repudiandae soluta maxime explicabo
              mollitia temporibus praesentium ipsa aspernatur inventore.
            </div>
          </div>
          <div className="parton">
            <div className="fisss">
              {coffeecuppercent.map((iteem)=>{
                return(
                  <Coffeepercent percent={iteem}/>
                )
              })}
              
              
            </div>
            <div className="fissss">
              <div className="onr">
                
                <p className="fifty">50%</p>
              </div>
              <div className="onr">
                
                <p className="fifty">75%</p>
              </div>
              <div className="onr">
                
                <p className="fifty">100%</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cheafone">
        <div className="blogcard">
          <div className="parton">
            <div className="fis">Different types of coffee Explained</div>
          </div>
          <div className="parton">
            <div className="fiss">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident laudantium delectus, repudiandae soluta maxime explicabo
              mollitia temporibus praesentium ipsa aspernatur inventore.
            </div>
          </div>
          <div className="parton">
            <div className="fisss">
              <Coffeeicon/>
              <Coffeeicon/>
              <Coffeeicon/>
              <Coffeeicon/>
            </div>
            <div className="fissss">
              <div className="onr">
                
                <p className="fifty">Roasted Beans</p>
              </div>
              <div className="onr">
                
                <p className="fifty">Soluble cafe</p>
              </div>
              <div className="onr">
                
                <p className="fifty">Decafe Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cheafone">
        <div className="blogcard">
          <div className="parton">
            <div className="fis">Different types of coffee Explained</div>
          </div>
          <div className="parton">
            <div className="fiss">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident laudantium delectus, repudiandae soluta maxime explicabo
              mollitia temporibus praesentium ipsa aspernatur inventore.
            </div>
          </div>
          <div className="parton">
            <div className="fisss">
              <Coffeeicon/>
              <Coffeeicon/>
              <Coffeeicon/>
              <Coffeeicon/>
            </div>
            <div className="fissss">
              <div className="onr">
                
                <p className="fifty">Roasted Beans</p>
              </div>
              <div className="onr">
                
                <p className="fifty">Soluble cafe</p>
              </div>
              <div className="onr">
                
                <p className="fifty">Decafe Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div className="button-next-slideee">
        <IoIosArrowForward />
      </div>
      <div className="button-prev-slide">
        <IoIosArrowBack />
      </div>
    </Swiper>
  );
};

export default Swiperr;
