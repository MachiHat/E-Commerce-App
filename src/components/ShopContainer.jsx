import { ShopItem } from "./ShopItem";
import { ShopCart } from "./ShopCart";
import paralletIMG from "../img/parallettesShopImg.jpg";
import parallelBarIMG from "../img/parallelBarsShopImg.jfif";
import pullUpBarIMG from "../img/pullUpBarShopImg.png";
import ringsIMG from "../img/ringsShopImg.jfif";
import resistBandsIMG from "../img/resistBandsShopImg.jpg";
import wristWrapIMG from "../img/wristWrapsShopImg.jpg";
import React, { useState, useEffect } from "react";

export const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProd] = useState([]);
  const itemList = [
    {
      id: "001",
      quantity: 1,
      stock: 5,
      title: "Parallets",
      price: 9.5,
      imgSRC: paralletIMG,
    },
    {
      id: "002",
      quantity: 1,
      stock: 5,
      title: "Parallel Bars",
      price: 14.0,
      imgSRC: parallelBarIMG,
    },
    {
      id: "003",
      quantity: 1,
      stock: 5,
      title: "Wall Mounted Pull-Up Bar",
      price: 19.0,
      imgSRC: pullUpBarIMG,
    },
    {
      id: "004",
      quantity: 1,
      stock: 5,
      title: "Acrobat Rings",
      price: 7.5,
      imgSRC: ringsIMG,
    },
    {
      id: "005",
      quantity: 1,
      stock: 5,
      title: "Resistance Bands Pack x3",
      price: 8.0,
      imgSRC: resistBandsIMG,
    },
    {
      id: "006",
      quantity: 1,
      stock: 5,
      title: "Wrist Wraps",
      price: 3.0,
      imgSRC: wristWrapIMG,
    },
  ];

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => resolve(itemList), 3000);
    });
    getProducts.then((response) => setProd(response));
  }, [itemList]);

  return (
    <section>
      {products.length < 1 ? (
        <div className="loading-wrap"> LOADING... </div>
      ) : (
        <div>
          <ul className="item-list-wrap">
            {products.map((o) => (
              <ShopItem
                id={o.id}
                key={o.id}
                item={o}
                setState={setCart}
                state={cart}
              />
            ))}
          </ul>
          <ShopCart state={cart} setState={setCart} />
          <div className="buy-btn-wrap">
            <span className="cart-buy-total"></span>
            {/* <button className="btn cart-buy-btn"></button> */}
          </div>
        </div>
      )}
    </section>
  );
};
