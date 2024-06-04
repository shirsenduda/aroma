/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

import Layout from "../../component/Layout/Layout";
import "./Page1.css";
import Swiper from "../../component/Swiperjs/Swiper.jsx";
import Coffeeicon from "../../component/Coffeeicon/Coffeeicon.jsx";
import Write from "../../component/rotatecup/write.jsx";
import "./secondpart.css";
import "./thirdpart.css";
import Navbar from "../../component/Nav/Navbar.jsx";
import "remixicon/fonts/remixicon.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page4 from "../../component/allpages/Page4/Pagefour.jsx";
import Footer from "../../component/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import Pagetwo from "../../component/allpages/Page2/Pagetwo.jsx";
import Pagesix from "../../component/allpages/Page6/Pagesix.jsx";
import Offersection from "../../component/Offersection/Offer.jsx";
import "./recomendedsection.css";
const Pageone = ({ Addtocarti, cart, setProgress, userName }) => {
  const locomotiveScroll = new LocomotiveScroll();
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    const tll = gsap.timeline();
    const tlll = gsap.timeline();
    const tllll = gsap.timeline();
    const tlllll = gsap.timeline();

    // animation Part:-
    let animation = () => {
      tl.from(
        ".burger,.partonenav,.parttwonav,.partthreenav",
        {
          y: -10,
          duration: 2, // seconds
          delay: 0.5,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          ease: "power1.inOut",
        },
        { scope: container }
      );

      tll.from(
        ".h1,.circlediv,.onedes,.coffimg,.coffeeicon",
        {
          y: 35,
          duration: 2, // seconds
          delay: 0.5,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          ease: "power1.inOut",
        },
        { scope: container }
      );

      tlll.from(
        ".write,.offer,.Swiper,.parttwothird",
        {
          y: 40,
          duration: 2, // seconds
          delay: 1,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          scale: 0.4,
          ease: "power1.inOut",
        },
        { scope: container }
      );

      tllll.to(
        ".write",
        {
          duration: 1.5, // seconds
          delay: 0.5,
          width: 330,
          stagger: 0.3,
        },
        { scope: container }
      );
      tlllll.from(
        ".write",
        {
          duration: 150, // seconds
          delay: 0.5,
          stagger: 0.3,
          rotation: 1440,
          repeat: -1,
          z: -300,
        },
        { scope: container }
      );

      gsap.from(".page4", {
        y: 20,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.5,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".page4",
        },
      });

      gsap.from(".Swipertwo", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Swipertwo",
        },
      });

      gsap.from(".pagesixx", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".pagesixx",
        },
      });
      gsap.from(".recomendedsection", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".recomendedsection",
        },
      });
      gsap.from(".recomendedsectionn", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".recomendedsectionn",
        },
      });
      gsap.from(".Pageseven,.Testimonial,.Testimonialparttwo", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Pageseven,.Testimonial,.Testimonialparttwo",
        },
      });
      // gsap.from(".Menume", {
      //   y: 10,
      //   duration: 1, // seconds
      //   delay: 0.5,
      //   opacity: 0,
      //   stagger: 0.3,
      //   z: -300,
      //   ease: "power1.inOut",
      //   scrollTrigger: {
      //     trigger: ".Menume",
      //   },
      // });j
    };

    // call animaton function
    animation();
  });
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    console.log("Mountt");
  }, []);
  // Latest Offerings Data
  const Offering = [
    {
      key: 20,
      Productimage:
        "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/104905.webp",
      ProductName: "Mango Shake",
      ProductML: "TALL(354 ML) .392 kcal",
      ProductDescription:
        "Alphonso mango and milk are blended with ice and Java Chips to a fruity..",
      ProductPrice: "20",
    },
    {
      key: 21,
      Productimage:
        "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115283.webp",
      ProductName: "Cold Brew",
      ProductML: "TALL(354 ML) .192 kcal",
      ProductDescription:
        "A delicious double layered cold brew beverage with ginger ale. A pure delight for...",
      ProductPrice: "13",
    },
    {
      key: 22,
      Productimage:
        "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ProductName: "Vegan Burger",
      ProductML: "120gm/192 kcal",
      ProductDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dol",
      ProductPrice: "24",
    },
  ];
  const Offeringtw = [
    {
      key: 23,
      Productimage:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ProductName: "Masala Maggi",
      ProductML: "140gm/230 kcal",
      ProductDescription:
        "Masala Maggi and egg are blended with suace and vegetables ..",
      ProductPrice: "10",
    },
    {
      key: 24,
      Productimage:
        "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ProductName: "Grilled Sandwich",
      ProductML: "160gm/130 kcal",
      ProductDescription:
        "A delicious double layered hot sandwitch grilled with ginger ale. A pure veg for...",
      ProductPrice: "8",
    },
    {
      key: 25,
      Productimage:
        "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ProductName: "Steak Dinner",
      ProductML: "120gm/392 kcal",
      ProductDescription:
        "Lorem ipsum dolor sit amet, hniuinbgbi adipisicing elit. Recusandae dol",
      ProductPrice: "34",
    },
  ];

  // SearchItem
  const [searchItem, setsearchItem] = useState("");
  const [AllProducts, setAllProducts] = useState("");
  const handleSearchItem = (e) => {
    const query = e.target.value;
    setsearchItem(query);
    console.log(query);

    const searchProduct = Offering.filter((searchFilterItem) => {
      searchFilterItem.ProductName.includes(searchItem);
    });
    setAllProducts(searchProduct);
  };
  return (
    <Layout>
      <div className="Pageone" ref={container}>
        <div className="secondpart">
          <Navbar
            Cart={cart}
            userNami={userName}
            handleSearchItem={handleSearchItem}
            searchItem={searchItem}
          />
          <img src="./img/Group 21.png" alt="" />
          <div className="partone">
            <Coffeeicon />
            <div className="h1">
              Brewing Moments
              <br />
              Good Memories
            </div>

            <div className="partonesecond">
              <div className="onem">
                <div className="circlediv">
                  <div className="circle1">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="circle2">
                    <img
                      src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="circle3">
                    <img
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <h4>1M +</h4>
                </div>

                <div className="onedes">Satisfied Customer</div>
                <Coffeeicon />
              </div>
              <div className="coffimg">
                <img
                  src="https://images.unsplash.com/photo-1608613116093-669b66163a76?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="parttwo">
            <div className="parttwosecond">
              <div className="xyz">
                <Write />
                <div className="beans">
                  <Swiper />
                </div>
              </div>
              <div className="parttwosecondonee">
                <Coffeeicon />

                <Link to={"/aroma/Breakfast"} className="offer">
                  <div className="circle4">
                    <img
                      src="https://images.unsplash.com/photo-1530373239216-42518e6b4063?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <h6 className="Fra">Frappuccino</h6>

                  <div className="offer1">
                    <p className="fiftypercent"> Check Our Breakfast</p>
                  </div>
                  <div className="arroww">
                    <i className="ri-arrow-right-down-line"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div className="parttwothird">
              <div className="parttwosecondone">
                <i className="ri-instagram-line"></i>
              </div>
              <a href="https://github.com/shirsenduda" className="aa">
                <div className="parttwosecondtwo">
                  <i className="ri-github-fill"></i>
                </div>
              </a>

              <div className="parttwosecondthree">
                <i className="ri-discord-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="searchph">
          <div className="containerr">
            <input checked="" className="checkbox" type="checkbox" />
            <div className="mainbox">
              <div className="iconContainer">
                <svg
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search_icon"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
              </div>
              <input
                className="search_input"
                placeholder="search"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="recomendedsection">
          <div className="partonereco">
            <div className="barista">Latest Offers</div>
            <div className="baristas">
              <div className="Viewme"> View Menu</div>
              <div className="baristasimg">
                <img src="./img/greyleafright.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="partonerecoo">
            {/* Latest Offerings Card */}
            {Offering.map((item, key) => (
              <div className="cafrd" key={key}>
                {/*  */}
                <div className="imgsttr">
                  <img src={item.Productimage} alt="" />
                </div>
                <div className="cntent">
                  <a href="#">
                    <span className="ttle">{item.ProductName}</span>
                    <br />
                    <span className="ttcle">{item.ProductML}</span>
                  </a>

                  <p className="dsc">{item.ProductDescription}</p>
                  <span className="rupe">$ {item.ProductPrice}</span>
                  <a className="acion" onClick={() => Addtocarti(item)}>
                    Add item
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="recomendedsectionn">
          <div className="partonerecoo">
            {/* Latest Offerings Card */}
            {Offeringtw.map((item, key) => (
              <div className="cafrd" key={key}>
                <div className="imgsttr">
                  <img src={item.Productimage} alt="" />
                </div>
                <div className="cntent">
                  <a href="#">
                    <span className="ttle">{item.ProductName}</span>
                    <br />
                    <span className="ttcle">{item.ProductML}</span>
                  </a>

                  <p className="dsc">{item.ProductDescription}</p>
                  <span className="rupe">$ {item.ProductPrice}</span>
                  <a className="acion" onClick={() => Addtocarti(item)}>
                    Add item
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Page4 />
        <Pagetwo />
        <Pagesix />
      </div>
    </Layout>
  );
};

export default Pageone;
