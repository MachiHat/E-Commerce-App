import wipIMG from "../img/hackerman.jpg";
import React from "react";

export const HomePage = () => {
  return (
    <div className="ver wippage">
      <img src={wipIMG} alt="" />
      <h2>THIS AMAZING HOMEPAGE PAGE IS:</h2>
      <h1>WORK IN PROGRESS</h1>
      <p>move along, nothing to see here...</p>
      <div className="hor cprght">
        <p id="foot-copy">©2021</p>
        <p id="foot-name">MATIMOVEMENT</p>
      </div>
    </div>
  );
};
