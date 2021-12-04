import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export const ProductDetails = ({ product }) => {
  const { imgSRC, title, desc, stock, price } = product;

  const [count, setCount] = useState();

  const { cartList, addToCart } = useCartContext();

  function onAdd(count) {
    setCount(count);
    addToCart({ ...product, count: count });
  }

  return (
    <div className="hor shop-detail-wrapper">
      <div className="ver shop-detail-img-container">
        <img className="detail-img" src={imgSRC} alt="dtl-img" />
      </div>
      <div className="ver shop-details-container">
        <h2 className="shop-detail-title">{title}</h2>
        <p className="shop-detail-text">{desc}</p>
        <p className="shop-detail-text">Items left: {stock} </p>
        <div className="hor shop-detail-price-container">
          <span className="shop-detail-price">${price}</span>
          <input
            className="shop-detail-input"
            defaultValue="1"
            min="1"
            max={stock}
            type="number"
            value={count}
            onInput={e => setCount(e.target.value)}
          />
          <button className="btn shop-item-btn" onClick={() => onAdd(count)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
