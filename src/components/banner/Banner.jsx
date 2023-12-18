import React from "react";
import { useState } from "react";
import "./index.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src="./logo.svg" alt="" />
      <div className="banner__get">
        <h1>Esteja por dentro das notícias de todo Brasil, em tempo Real!</h1>
        <button>Fique por dentro!</button>
      </div>
    </div>
  );
};

export default Banner;
