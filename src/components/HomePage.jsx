import { Link } from "react-router-dom";
import React from "react";

export const HomePage = () => {
  return (
    <section className="index-title-wrap">

        <h1 className="headline">ANYONE CAN MOVE</h1>

        <h2 className="subtitle">Anywhere. Anyway. Anytime.</h2>

        <Link to="/shop" className="home-btn btn">
          GET YOUR GEAR
        </Link>

    </section>
  );
};
