/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import "./Pagefive.css";
import Productoneopt from "../../allProductoption/Productoptionone/Productoptionone";
import Producttwoopt from "../../allProductoption/Productoptiontwoo/Productoptiontwo";
import Productthreeopt from "../../allProductoption/Productoptionthree/Productoptionthree";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Productitem from "../../Fooditems/Fooditem";
import Poductitemtwo from "../../Fooditems two/Fooditemtwo";
import Productitemthree from "../../Fooditems three/Fooditemthree";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import ProductDataMain from "../../ProductDataMain/ProductDataMain";
import ProductDataMaintwo from "../../ProductDataMaintwo/ProductDataMaintwo";
// import ProductDataMainthree from "../../ProductDataMainthree/ProductDataMainthree";
// import ProductDataMainfour from "../../ProductDataMainfour/ProductDataMainfour";
import ProductDataMainfive from "../../ProductDataMainfive/ProductDataMainfive";
import ProductDataMainsix from "../../ProductDataMainsix/ProductDataMainsix";
import ProductDataMainfour from "../../ProductDataMainfourr/ProductDataMainfour";
import ProductDataMainthree from "../../ProductDataMainthreee/ProductDataMainthree";
const Pagefive = ({ AddToCart }) => {
  const [data, setdata] = useState(0);

  const [promocode, setpromocode] = useState();

  const rendercondition = () => {
    if (data === 0) {
      return (
        <>
          <div className="productsparttt">
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              freeMode={true}
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
              }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1020: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              // autoplay={{
              //   delay: 2800,
              //   disableOnInteraction: false,
              // }}
              className="Swipcardone"
            >
              {ProductDataMaintwo.map((item, key) => (
                <SwiperSlide className="coffeecard" key={key}>
                  <div className="coffeecardtw">
                    <div className="productcar">
                      <div className="productcarr">
                        <div className="peoductimgpro">
                          <img src={item.Productimage} alt="" />
                        </div>
                      </div>
                      <div className="productcarrr">
                        <div className="pname">
                          <img src="./img/veglog.png" alt="" />
                        </div>
                        <div className="pnamee">{item.ProductName}</div>
                        <div className="pnamedesone">{item.ProductML}</div>
                        <div className="pnamedestwo">
                          {item.ProductDescription}
                        </div>
                      </div>
                    </div>
                    <div className="productdeta">
                      <div className="pnamerup">
                        <div className="rup">$ {item.ProductPrice}</div>
                        <button
                          className="buttoncard"
                          onClick={() => AddToCart(item)}
                        >
                          <svg
                            className="icon-cartti"
                            viewBox="0 0 24.38 30.52"
                            height="20.52"
                            width="10.38"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              transform="translate(-3.62 -0.85)"
                              d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                            ></path>
                          </svg>
                          <span className="lable">Add Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
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
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              freeMode={true}
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
              }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1020: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              // autoplay={{
              //   delay: 2800,
              //   disableOnInteraction: false,
              // }}
              className="Swipcardone"
            >
              {ProductDataMain.map((item, key) => (
                <SwiperSlide className="coffeecard" key={key}>
                  <div className="coffeecardtw">
                    <div className="productcar">
                      <div className="productcarr">
                        <div className="peoductimgpro">
                          <img src={item.Productimage} alt="" />
                        </div>
                      </div>
                      <div className="productcarrr">
                        <div className="pname">
                          <img src="./img/veglog.png" alt="" />
                        </div>
                        <div className="pnamee">{item.ProductName}</div>
                        <div className="pnamedesone">{item.ProductML}</div>
                        <div className="pnamedestwo">
                          {item.ProductDescription}
                        </div>
                      </div>
                    </div>
                    <div className="productdeta">
                      <div className="pnamerup">
                        <div className="rup">$ {item.ProductPrice}</div>
                        <button
                          className="buttoncard"
                          onClick={() => AddToCart(item)}
                        >
                          <svg
                            className="icon-cartti"
                            viewBox="0 0 24.38 30.52"
                            height="20.52"
                            width="10.38"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              transform="translate(-3.62 -0.85)"
                              d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                            ></path>
                          </svg>
                          <span className="lable">Add Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
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
          </div>
        </>
      );
    } else if (data === 1) {
      return (
        <>
          <div className="productsparttt">
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              freeMode={true}
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
              }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1020: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              // autoplay={{
              //   delay: 2800,
              //   disableOnInteraction: false,
              // }}
              className="Swipcardone"
            >
              {ProductDataMainthree.map((item, key) => (
                <SwiperSlide className="coffeecard" key={key}>
                  <div className="coffeecardtw">
                    <div className="productcar">
                      <div className="productcarr">
                        <div className="peoductimgpro">
                          <img src={item.Productimage} alt="" />
                        </div>
                      </div>
                      <div className="productcarrr">
                        <div className="pname">
                          <img src="./img/veglog.png" alt="" />
                        </div>
                        <div className="pnamee">{item.ProductName}</div>
                        <div className="pnamedesone">{item.ProductML}</div>
                        <div className="pnamedestwo">
                          {item.ProductDescription}
                        </div>
                      </div>
                    </div>
                    <div className="productdeta">
                      <div className="pnamerup">
                        <div className="rup">$ {item.ProductPrice}</div>
                        <button
                          className="buttoncard"
                          onClick={() => AddToCart(item)}
                        >
                          <svg
                            className="icon-cartti"
                            viewBox="0 0 24.38 30.52"
                            height="20.52"
                            width="10.38"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              transform="translate(-3.62 -0.85)"
                              d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                            ></path>
                          </svg>
                          <span className="lable">Add Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
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
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              freeMode={true}
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
              }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1020: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              // autoplay={{
              //   delay: 2800,
              //   disableOnInteraction: false,
              // }}
              className="Swipcardone"
            >
              {ProductDataMainfour.map((item, key) => (
                <SwiperSlide className="coffeecard" key={key}>
                  <div className="coffeecardtw">
                    <div className="productcar">
                      <div className="productcarr">
                        <div className="peoductimgpro">
                          <img src={item.Productimage} alt="" />
                        </div>
                      </div>
                      <div className="productcarrr">
                        <div className="pname">
                          <img src="./img/veglog.png" alt="" />
                        </div>
                        <div className="pnamee">{item.ProductName}</div>
                        <div className="pnamedesone">{item.ProductML}</div>
                        <div className="pnamedestwo">
                          {item.ProductDescription}
                        </div>
                      </div>
                    </div>
                    <div className="productdeta">
                      <div className="pnamerup">
                        <div className="rup">$ {item.ProductPrice}</div>
                        <button
                          className="buttoncard"
                          onClick={() => AddToCart(item)}
                        >
                          <svg
                            className="icon-cartti"
                            viewBox="0 0 24.38 30.52"
                            height="20.52"
                            width="10.38"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              transform="translate(-3.62 -0.85)"
                              d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                            ></path>
                          </svg>
                          <span className="lable">Add Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
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
          </div>
          ;
        </>
      );
    }
    return (
      <>
        <div className="productsparttt">
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            freeMode={true}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1020: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            // autoplay={{
            //   delay: 2800,
            //   disableOnInteraction: false,
            // }}
            className="Swipcardone"
          >
            {ProductDataMainfive.map((item, key) => (
              <SwiperSlide className="coffeecard" key={key}>
                <div className="coffeecardtw">
                  <div className="productcar">
                    <div className="productcarr">
                      <div className="peoductimgpro">
                        <img src={item.Productimage} alt="" />
                      </div>
                    </div>
                    <div className="productcarrr">
                      <div className="pname">
                        <img src="./img/veglog.png" alt="" />
                      </div>
                      <div className="pnamee">{item.ProductName}</div>
                      <div className="pnamedesone">{item.ProductML}</div>
                      <div className="pnamedestwo">
                        {item.ProductDescription}
                      </div>
                    </div>
                  </div>
                  <div className="productdeta">
                    <div className="pnamerup">
                      <div className="rup">$ {item.ProductPrice}</div>
                      <button
                        className="buttoncard"
                        onClick={() => AddToCart(item)}
                      >
                        <svg
                          className="icon-cartti"
                          viewBox="0 0 24.38 30.52"
                          height="20.52"
                          width="10.38"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            transform="translate(-3.62 -0.85)"
                            d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                          ></path>
                        </svg>
                        <span className="lable">Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
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
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            freeMode={true}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1020: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            // autoplay={{
            //   delay: 2800,
            //   disableOnInteraction: false,
            // }}
            className="Swipcardone"
          >
            {ProductDataMainsix.map((item, key) => (
              <SwiperSlide className="coffeecard" key={key}>
                <div className="coffeecardtw">
                  <div className="productcar">
                    <div className="productcarr">
                      <div className="peoductimgpro">
                        <img src={item.Productimage} alt="" />
                      </div>
                    </div>
                    <div className="productcarrr">
                      <div className="pname">
                        <img src="./img/veglog.png" alt="" />
                      </div>
                      <div className="pnamee">{item.ProductName}</div>
                      <div className="pnamedesone">{item.ProductML}</div>
                      <div className="pnamedestwo">
                        {item.ProductDescription}
                      </div>
                    </div>
                  </div>
                  <div className="productdeta">
                    <div className="pnamerup">
                      <div className="rup">$ {item.ProductPrice}</div>
                      <button
                        className="buttoncard"
                        onClick={() => AddToCart(item)}
                      >
                        <svg
                          className="icon-cartti"
                          viewBox="0 0 24.38 30.52"
                          height="20.52"
                          width="10.38"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            transform="translate(-3.62 -0.85)"
                            d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                          ></path>
                        </svg>
                        <span className="lable">Add Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
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
        </div>
      </>
    );
  };

  const call = rendercondition();

  const dataValueChange = () => {
    setdata(0);
  };
  const dataValueChangeAgain = () => {
    setdata(1);
  };
  const dataValueChangeAgainagain = () => {
    setdata(2);
  };
  useEffect(() => {
    console.log("Mount food items");
  }, []);

  return (
    <>
      <div className="Product">
        <div className="zerorow">
          <div className="fooditemm">-BreakFast Item-</div>
        </div>
        <div className="firstroww">
          <div className="productoption">
            <Productoneopt changedataAgain={dataValueChange} />
            <Producttwoopt changedata={dataValueChangeAgain} />
            <Productthreeopt changedatathree={dataValueChangeAgainagain} />
          </div>
        </div>
        <div className="line"></div>

        {/* Condition of changing fooditems data */}
        {call}
      </div>
    </>
  );
};

export default Pagefive;
