/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Cart.css";
import Layout from "../../component/Layout/Layout";
import Navbar from "../../component/Nav/Navbar";
import toast, { Toaster } from "react-hot-toast";
import CartEmpty from '../../component/CartEmpty/CartEmpty'
const Cart = ({
  cartItem,
  handleInc,
  handleDec,
  handleDel,
  cart,
  getTotal,
  applyPromocode,
  promocode,
  setpromocode,
  invalidstate,
  setProgress,
  userName,
}) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    console.log("Mountt");
  }, []);

  // payment toggle
  const [togglepayment, settogglepayment] = useState(true);
  const togglepaymentFunction = () => {
    settogglepayment((i) => !i);
  };

  // userorder State
  const [UserOrder, setUserOrder] = useState({
    Name: "",
    PhoneNum: "",
    Address: "",
    pincode: "",
  });
  const FormHandler = (e) => {
    setUserOrder({ ...UserOrder, [e.target.id]: e.target.value });
    console.log(UserOrder);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      !UserOrder.Name ||
      !UserOrder.PhoneNum ||
      !UserOrder.Address ||
      !UserOrder.pincode
    ) {
      return toast.error("All Field are require");
    } else {
      toast.success("Order Successful");
      onCloseModal();
    }
  };
  const onCloseModal = () => {
    togglepaymentFunction();
    setUserOrder("");
  };
  return (
    <Layout>
      <Navbar userNami={userName} carticonnum={cartItem} Cart={cart} />
      {!cart?<CartEmpty/> :<div className="cartmain">
        <div className="cartit">
          <div className="cartboxmain">
            <div className="cartboxmainleft">
              <div className="itemsheasder">
                <div className="Shoppingtexx">Shopping Cart</div>
                <div className="itemdetail"></div>
                <div className="itemplus">
                  <div className="itemnumbers">{cartItem.length} item</div>
                </div>
              </div>

              {/* cartItem */}
              {cartItem.map((i, key) => (
                <div className="itemscart" key={i.key}>
                  <div className="itemimg">
                    <img src={i.Productimage} alt="" />
                  </div>
                  <div className="itemdetail">
                    <div className="itemname">{i.ProductName}</div>
                    <div className="itemnamee">{i.ProductDescription}</div>
                    <div className="itemnamee">{i.ProductML}</div>
                    <div className="itemname">
                      $ {i.ProductPrice * i.quantity}
                    </div>
                  </div>
                  <div className="itemplus">
                    <div className="itemplustw">
                      <div className="itemplusleft">
                        <div
                          className="muinus"
                          onClick={() => handleDec(i.key)}
                        >
                          <div className="storeplus">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M5 11V13H19V11H5Z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="itemplusmid">
                        <p>{i.quantity}</p>
                      </div>
                      <div
                        className="itemplusright"
                        onClick={() => handleInc(i.key)}
                      >
                        <div className="plus">
                          <div className="storeplus">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="deleteee" onClick={() => handleDel(i.key)}>
                      <i className="ri-delete-bin-line"></i>
                    </div>
                  </div>
                </div>
              ))}

              {/* cartItem */}
            </div>
            <div className="cartboxmainright">
              <div className="totalitems">
                <div className="priceinfo">Order Summary</div>
                <div className="price">
                  <div className="pricetotalleft">Total Item</div>

                  <div className="pricetotalright">$ {getTotal()}</div>
                </div>
                <div className="dicountcode">
                  <div className="pricetotalleftti">PROMO CODE</div>
                  <div className="pricetotalrightti">
                    <input
                      placeholder="Enter your code"
                      type="text"
                      className="textInput"
                      value={promocode}
                      onChange={(e) => setpromocode(e.target.value)}
                    />
                  </div>
                  {promocode && promocode !== "DISCOUNT10" ? (
                    <span className="invalid">{invalidstate}</span>
                  ) : (
                    <span className="invalidnon">Use DICOUNT10</span>
                  )}

                  <button className="apply" onClick={applyPromocode}>
                    APPLY
                  </button>
                </div>

                <div className="pricetotal">
                  <div className="pricetotalleft">Total Amount</div>
                  <div className="pricetotalright">$ {getTotal()}</div>
                </div>
                <button className="cartbutt" onClick={togglepaymentFunction}>
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
        {togglepayment === true ? (
          <div className="Paymentnon"></div>
        ) : (
          <div className="Payment">
            <section className="container">
              <div className="Delivery">
                <header>Delivery Information</header>
                <div className="cros" onClick={togglepaymentFunction}>
                  <i className="ri-close-fill"></i>
                </div>
              </div>
              <form className="form" action="#">
                <div className="input-box">
                  <label>Full Name</label>
                  <input
                    autoComplete="off"
                    required=""
                    placeholder="Enter full name"
                    type="text"
                    id="Name"
                    onChange={FormHandler}
                    value={UserOrder.Name}
                  />
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>Phone Number</label>
                    <input
                      autoComplete="off"
                      required=""
                      placeholder="Enter phone number"
                      type="number"
                      id="PhoneNum"
                      onChange={FormHandler}
                      value={UserOrder.PhoneNum}
                    />
                  </div>
                </div>

                <div className="input-box address">
                  <label>Address</label>
                  <input
                    autoComplete="off"
                    required=""
                    placeholder="Enter full address"
                    type="text"
                    id="Address"
                    onChange={FormHandler}
                    value={UserOrder.Address}
                  />
                  <div className="column">
                    <input
                      autoComplete="off"
                      required=""
                      placeholder="Enter pincode"
                      type="number"
                      id="pincode"
                      onChange={FormHandler}
                      value={UserOrder.pincode}
                    />
                  </div>
                </div>
                <button onClick={handleSumbit}>Order Now</button>
              </form>
            </section>
          </div>
        )}
      </div> }
      
    </Layout>
  );
};

export default Cart;
