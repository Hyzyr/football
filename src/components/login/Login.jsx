import React, { useEffect } from "react";
import Lander from "./Lander";
import Subscribe from "./Subscribe";

export default function Login() {
  useEffect(() => {
    let body = document.body;
    body.classList.add("gradient");

    return () => {
      body.classList.remove("gradient");
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="wrapper__bg">
          <img src={global.assetsFolder + "images/bg.png"} alt="bg" />
        </div>
        <Lander />
        <Subscribe />
      </div>
    </>
  );
}
