/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Recipe.css";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AdvatiseSectiont from "../component/AdvatiseSectiontwo/AdvatiseSectiont";
import Navbar from "../component/Nav/Navbar";
import Layout from "../component/Layout/Layout";
import Recipescomponent from "../component/Recipescomponent/Recipescomponent";
import Recipescomponenttwo from "../component/Recipescomponenttwo/Recipescomponenttwo";
import Recipescomponentthree from "../component/Recipescomponentthree/Recipescomponentthree";
import Recipescomponentsand from "../component/Recipescomponentsand/Recipescomponentsand";
import Recipescomponentsandtwo from "../component/Recipescomponentsandtwo/Recipescomponentsandtwo";
import Recipescomponentsandthree from "../component/Recipescomponentsandthree/Recipescomponentsandthree";
import RecipescomponentCake from "../component/RecipescomponentCake/RecipescomponentCake";
import RecipescomponentCaketwo from "../component/RecipescomponentCaketwo/RecipescomponentCaketwo";
import RecipescomponentCakethree from "../component/RecipescomponentCakethree/RecipescomponentCakethree";
import Recipescomponentnonveg from "../component/Recipescomponentnonveg/Recipescomponentnonveg";
import Recipescomponentnonvegtwo from "../component/Recipescomponentnonvegtwo/Recipescomponentnonvegtwo";
import Recipescomponentnonvegthree from "../component/Recipescomponentnonvegthree/Recipescomponentnonvegthree";
import RecipescomponentDrinks from "../component/RecipescomponentDrinks/RecipescomponentDrinks";
import RecipescomponentDrinkstwo from "../component/RecipescomponentDrinkstwo/RecipescomponentDrinkstwo";
import RecipescomponentDrinksthree from "../component/RecipescomponentDrinksthree/RecipescomponentDrinksthree";
const Recipe = ({ cart, setProgress }) => {
  const receipedata = [
    {
      key: 0,
      imgrecipe:
        "https://images.unsplash.com/photo-1571328003758-4a3921661729?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipe: "Lorem ipsum dolor",
      namerecipe: "Cold Coffee",
      namerecipetwo: "with Chocolate",
    },
    {
      key: 1,
      imgrecipe:
        "https://www.nescafe.com/in/sites/default/files/styles/rlp_desktop/public/dalgona-coffee-recipe-grid-view-desktop.jpg?itok=ePFL4L3B",
      headingrecipe: "Lorem ipsum dolor",
      namerecipe: "Dalgona Coffee",
      namerecipetwo: "with Ice",
    },
  ];
  const receipedatatwo = [
    {
      key: 0,
      imgrecipetwo:
        "https://plus.unsplash.com/premium_photo-1671660015348-0bfcc2e0b8cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipetwo: "Lorem ipsum dolor",
      namerecipetwo: "Hot Cocoa",
      namerecipetwoo: "with candy",
    },
    {
      key: 1,
      imgrecipetwo:
        "https://images.unsplash.com/photo-1631885408212-4520b2a27a21?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipetwo: "Lorem ipsum dolor",
      namerecipetwo: "Cold Latte",
      namerecipetwoo: "with Chocolate",
    },
  ];
  const receipedatathree = [
    {
      key: 0,
      imgrecipethree:
        "https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethree: "Lorem ipsum dolor",
      namerecipethree: "Brownies",
      namerecipetwooo: "with Coffee",
    },
    {
      key: 1,
      imgrecipethree:
        "https://images.unsplash.com/photo-1542326237-94b1c5a538d4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethree: "Lorem ipsum dolor",
      namerecipethree: "Icecreame",
      namerecipetwooo: "with Cocoa",
    },
  ];
  const receipedatathreesandwitch = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1619860860774-1e2e17343432?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpdGNofGVufDB8fDB8fHww",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Sandwitch",
      namerecipetwooosand: "with cheese",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1523529738216-242467d60007?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Sandwitch",
      namerecipetwooosand: "with Salad",
    },
  ];
  const receipedatathreesandwitchtwo = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbmR3aXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Sandwitch",
      namerecipetwooosand: "with Ketchup",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1559466273-d95e72debaf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbmR3aXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Sandwitch",
      namerecipetwooosand: "with Paneer",
    },
  ];
  const receipedatathreesandwitchthree = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1645702352056-21846d31b13b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbmR3aXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Sandwitch",
      namerecipetwooosand: "with Chicken",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNhbmR3aXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Sandwitch",
      namerecipetwooosand: "with Flower",
    },
  ];
  const receipedatathreecake = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Cup Cake",
      namerecipetwooosand: "with Cheese",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Birthday Cake",
      namerecipetwooosand: "with Chocolate",
    },
  ];
  const receipedatathreecaketwo = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Fruit Cake",
      namerecipetwooosand: "with Cheese",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNha2V8ZW58MHx8MHx8fDA%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Blueberry Cake",
      namerecipetwooosand: "with Creame",
    },
  ];
  const Recipescomponentcakethree = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Black Forest",
      namerecipetwooosand: "with Cherry",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1575919361890-69028a013637?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "MixFruit Cake",
      namerecipetwooosand: "with cocoa",
    },
  ];
  const RecipescomponentNonveg = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1519996409144-56c88c9aa612?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Corn",
      namerecipetwooosand: "with Veggies",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://plus.unsplash.com/premium_photo-1664648005718-91b617643af5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Avacado",
      namerecipetwooosand: "with Veggies",
    },
  ];
  const RecipescomponentNonvegtwo = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1543668900-9124915a121f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Oat Meal",
      namerecipetwooosand: "with Fruits",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://plus.unsplash.com/premium_photo-1664648063565-f35db6c67a01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Vegan Burger",
      namerecipetwooosand: "with Veggies",
    },
  ];
  const RecipescomponentNonvegthree = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1614807140558-317ce70068cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Vegan bread",
      namerecipetwooosand: "with Berries",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1617742230327-b74fec2abfec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Vegan cake",
      namerecipetwooosand: "with coffee",
    },
  ];
  const Recipescomponentdrinks = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Cocktail drink",
      namerecipetwooosand: "with Berry",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Orange Juice",
      namerecipetwooosand: "with Wine",
    },
  ];
  const Recipescomponentdrinkstwo = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "Lime Juice",
      namerecipetwooosand: "with Melon",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1575650772417-e6b418b0d106?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Red Cocktain",
      namerecipetwooosand: "with Suger",
    },
  ];
  const Recipescomponentdrinksthree = [
    {
      key: 0,
      imgrecipethreesand:
        "https://images.unsplash.com/photo-1566704284379-0d6fdf3d229c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsum dolor",
      namerecipethreesand: "ice Late",
      namerecipetwooosand: "with Cocoa",
    },
    {
      key: 1,
      imgrecipethreesand:
        "https://plus.unsplash.com/premium_photo-1687977546889-68d4237b352a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethreesand: "Lorem ipsu dolor",
      namerecipethreesand: "Cherry Juice",
      namerecipetwooosand: "with Vania",
    },
  ];

  const locomotiveScroll = new LocomotiveScroll();
  // Gsap code write
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    const tll = gsap.timeline();
    const tlll = gsap.timeline();
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
        ".recipeadv,.Discover,.Discoverr,.Discoverrrone,.Discoverrrtwo,.Discoverrrthree",
        {
          y: 25,
          duration: 2, // seconds
          delay: 0.5,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          ease: "power1.inOut",
        },
        { scope: container }
      );
    };
    animation();
  });
  const [data, setdata] = useState(0);

  // changeRecipe condition
  const renderconditionRec = () => {
    if (data === 0) {
      return (
        <>
          <div className="recipystoreon">
            {receipedata.map((itemtwo, key) => (
              <Recipescomponent passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {receipedatatwo.map((itemtwo, key) => (
              <Recipescomponenttwo passrecipedatatwo={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {receipedatathree.map((itemtwo, key) => (
              <Recipescomponentthree passrecipedatathree={itemtwo} key={key} />
            ))}
          </div>
        </>
      );
    } else if (data === 1) {
      return (
        <>
          <div className="recipystoreon">
            {receipedatathreesandwitch.map((itemtwo, key) => (
              <Recipescomponentsand passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {receipedatathreesandwitchtwo.map((itemtwo, key) => (
              <Recipescomponentsandtwo passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {receipedatathreesandwitchthree.map((itemtwo, key) => (
              <Recipescomponentsandthree passrecipedata={itemtwo} key={key} />
            ))}
          </div>
        </>
      );
    } else if (data === 2) {
      return (
        <>
          <div className="recipystoreon">
            {receipedatathreecake.map((itemtwo, key) => (
              <RecipescomponentCake passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {receipedatathreecaketwo.map((itemtwo, key) => (
              <RecipescomponentCaketwo passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {Recipescomponentcakethree.map((itemtwo, key) => (
              <RecipescomponentCakethree passrecipedata={itemtwo} key={key} />
            ))}
          </div>
        </>
      );
    } else if (data === 3) {
      return (
        <>
          <div className="recipystoreon">
            {RecipescomponentNonveg.map((itemtwo, key) => (
              <Recipescomponentnonveg passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {RecipescomponentNonvegtwo.map((itemtwo, key) => (
              <Recipescomponentnonvegtwo passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {RecipescomponentNonvegthree.map((itemtwo, key) => (
              <Recipescomponentnonvegthree passrecipedata={itemtwo} key={key} />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="recipystoreon">
            {Recipescomponentdrinks.map((itemtwo, key) => (
              <RecipescomponentDrinks passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {Recipescomponentdrinkstwo.map((itemtwo, key) => (
              <RecipescomponentDrinkstwo passrecipedata={itemtwo} key={key} />
            ))}
          </div>
          <div className="recipystoreon">
            {Recipescomponentdrinksthree.map((itemtwo, key) => (
              <RecipescomponentDrinksthree passrecipedata={itemtwo} key={key} />
            ))}
          </div>
        </>
      );
    }
  };
  const setdatachange = () => {
    setdata(0);
    console.log("hello");
  };
  const setdatachangeone = () => {
    setdata(1);
  };
  const setdatachangetwo = () => {
    setdata(2);
  };
  const setdatachangethree = () => {
    setdata(3);
  };
  const setdatachangefour = () => {
    setdata(4);
  };
  const call = renderconditionRec();

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    console.log("Mountt");
  }, []);

  return (
    <Layout>
      <Navbar Cart={cart} />
      <div className="Recipe" ref={container}>
        <div className="Recipemain">
          <div className="recipecircle">
            <AdvatiseSectiont
              Recipee="Coffee Recipe"
              recipeimg="https://images.unsplash.com/photo-1586558284960-362f8577f94d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="recipecircletwo">
            <div className="recipecircletwoon">
              <div className="childrec">
                {/* <Recipechangecircle/> */}
                <div
                  className="recipecircletwooncircle"
                  onClick={setdatachange}
                >
                  <img
                    src="https://images.unsplash.com/photo-1514919224949-507c703a3a88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="0"
                  />
                </div>
                <div
                  className="recipecircletwooncircle"
                  onClick={setdatachangeone}
                >
                  <img
                    src="https://images.unsplash.com/photo-1619096252214-ef06c45683e3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="1"
                  />
                </div>
                <div
                  className="recipecircletwooncircle"
                  onClick={setdatachangetwo}
                >
                  <img
                    src="https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="2"
                  />
                </div>
                <div
                  className="recipecircletwooncircle"
                  onClick={setdatachangethree}
                >
                  <img
                    src="https://images.unsplash.com/photo-1628676825875-031ad212c31e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="3"
                  />
                </div>
                <div
                  className="recipecircletwooncircle"
                  onClick={setdatachangefour}
                >
                  <img
                    src="https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="4"
                  />
                </div>
              </div>
            </div>
            <div className="recipystore">OUR TOP RECIPES</div>
            {call}
            <div className="refreshdata">
              <div className="storerefresh">
                <i className="ri-refresh-line refreshicon"></i>
                <h5 className="refreshname">Refresh</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recipe;
