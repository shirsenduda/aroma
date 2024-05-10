/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Appcss from "./App.module.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/CartSectionn/Cart";
import Breakfast from "./Pages/BreakfastSection/Breakfast";
import Login from "./Pages/Login";
import Recipe from "./Pages/Recipe";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp"
import LoadingBar from "react-top-loading-bar";

// import Pageseven from "./component/allpages/Page7/Pageseven";
//hello
const App = () => {
  const [ramu, setramu] = useState("hi");
  const [cartt, setcart] = useState([]);
  const [invalidstate, setinvalidstate] = useState("INVALID PROMOCODE");
  const [validstate, setvalidstate] = useState("VALID PROMOCODE");
  const [promocode, setpromocode] = useState("");
  const [discount, setdiscount] = useState(0);
  const [progress, setProgress] = useState(0);

  const Addtocart = (prod) => {
    const isProductExist = cartt.find((findItem) => findItem.key === prod.key);
    if (isProductExist) {
      const upDateCart = cartt.map((i) =>
        i.key === prod.key ? { ...i, quantity: i.quantity + 1 } : i
      );
      setcart(upDateCart);
    } else {
      setcart([...cartt, { ...prod, quantity: 1 }]);
    }

    console.log(cartt);
  };

  // Increase quantity
  const handleInc = (key) => {
    const increaseQuantity = cartt.map((i) =>
      i.key === key ? { ...i, quantity: i.quantity + 1 } : i
    );
    setcart(increaseQuantity);
  };

  // Decrease quantity

  const handleDec = (key) => {
    const decreaseQuantity = cartt.map((i) =>
      i.key === key && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
    );
    setcart(decreaseQuantity);
  };

  // handle dlete

  const handleDel = (key) => {
    const updatefilter = cartt.filter((filterItem) => filterItem.key !== key);
    setcart(updatefilter);
  };

  // Calculate total
  const getTotal = () => {
    const totalPrice = cartt.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.ProductPrice * cartReduceItem.quantity;
    }, 0);
    return totalPrice - discount;
  };

  // Promo code

  const applyPromocode = () => {
    if (promocode === "DICOUNT10") {
      setdiscount(getTotal() * 0.1);
      setpromocode("");
      setinvalidstate("")
    } else {
      setinvalidstate(invalidstate);
    }
  };

  // Top Loader
  useEffect(() => {
    setProgress(progress + 10);
    setTimeout(() => {
      setProgress(progress + 30);
    }, 1000);
    setTimeout(() => {
      setProgress(1000);
    }, 2000);
  }, []);

  return (
    <>
      <div className={Appcss.main}>
      <LoadingBar
          color="#f4b84a"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <BrowserRouter>
          <Routes>
            <Route path="/aroma/" element={<Home  Addtocarti={Addtocart}  cart={cartt.length} />} />
            <Route
              path="/aroma/Cart"
              element={
                <Cart
                  cartItem={cartt}
                  handleInc={handleInc}
                  handleDec={handleDec}
                  handleDel={handleDel}
                  cart={cartt.length}
                  getTotal={getTotal}
                  applyPromocode={applyPromocode}
                  promocode={promocode}
                  setpromocode={setpromocode}
                  invalidstate={invalidstate}
                  validstate={validstate}
                />
              }
            />
            <Route
              path="/aroma/Breakfast"
              element={<Breakfast Addtocarti={Addtocart} cart={cartt.length} />}
            />
            <Route
              path="/aroma/Login"
              element={<Login cart={cartt.length} />}
            />
            <Route
              path="/aroma/SignUp"
              element={<SignUp cart={cartt.length} />}
            />
            <Route
              path="/aroma/Recipe"
              element={<Recipe cart={cartt.length} />}
            />
            <Route path="/aroma/Menu" element={<Menu cart={cartt.length} />} />
            <Route
              path="/aroma/about"
              element={<About cart={cartt.length} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
