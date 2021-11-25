import { ShopList } from "./ShopList";
import { ShopCart } from "./ShopCart";
import paralletIMG from "../img/parallettesShopImg.jpg";
import parallelBarIMG from "../img/parallelBarsShopImg.jfif";
import pullUpBarIMG from "../img/pullUpBarShopImg.png";
import ringsIMG from "../img/ringsShopImg.jfif";
import resistBandsIMG from "../img/resistBandsShopImg.jpg";
import wristWrapIMG from "../img/wristWrapsShopImg.jpg";
import mmlogo from "../img/mmlogo.png";
// import { Routes, BrowserRouter as Router } from "react-router";
import React, { useState, useEffect } from "react";

export const ShopContainer = () => {
  const [cart, setCart] = useState([]);
  const [products, setProd] = useState([]);
  const itemList = [
    {
      id: 1,
      quantity: 1,
      stock: 5,
      title: "Parallets",
      price: 9.5,
      imgSRC: paralletIMG,
      desc: "description 1",
    },
    {
      id: 2,
      quantity: 1,
      stock: 5,
      title: "Parallel Bars",
      price: 14.0,
      imgSRC: parallelBarIMG,
      desc: "description 2",
    },
    {
      id: 3,
      quantity: 1,
      stock: 5,
      title: "Wall Mounted Pull-Up Bar",
      price: 19.0,
      imgSRC: pullUpBarIMG,
      desc: "description 3",
    },
    {
      id: 4,
      quantity: 1,
      stock: 5,
      title: "Acrobat Rings",
      price: 7.5,
      imgSRC: ringsIMG,
      desc: "description 4",
    },
    {
      id: 5,
      quantity: 1,
      stock: 5,
      title: "Resistance Bands Pack x3",
      price: 8.0,
      imgSRC: resistBandsIMG,
      desc: "description 5",
    },
    {
      id: 6,
      quantity: 1,
      stock: 5,
      title: "Wrist Wraps",
      price: 3.0,
      imgSRC: wristWrapIMG,
      desc: "description 6",
    },
  ];

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => resolve(itemList), 3000);
    });
    getProducts.then((response) => setProd(response));
  },);

  return (
    <section>
      {products.length < 1 ? (
        <div className="loading-wrap">
          <img src={mmlogo} alt="ellogo" className="logo" />
        </div> // TASK: Create loading screen
      ) : (
        <div>
          <ShopList products={products}  />
          <ShopCart state={cart} setState={setCart} />
        </div>
      )}
    </section>
  );
};
