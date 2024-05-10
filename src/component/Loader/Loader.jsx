/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "@dotlottie/player-component/dist/dotlottie-player.mjs";
import "./Loader.css";
const MyLottieAnimation = () => {
  return (
    <>
      <div className="loaderparent">
        <dotlottie-player
          src="https://lottie.host/a6d5950b-f017-4f37-8ba1-bc41d8c8a422/TbA8hHQ12U.json"
          background="transparent"
          speed={3}
          style={{ width: "300px", height: "300px" }}
          direction={1}
          playMode="normal"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </>
  );
};

export default MyLottieAnimation;
