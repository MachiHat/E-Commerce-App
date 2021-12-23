import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const ProductDetails = ({ product }) => {
  const { id, imgSRC, title, desc, stock, price } = product;

  const [count, setCount] = useState(1);

  const { cartList, addToCart } = useCartContext();

  function onAdd(count) { // ONADD FUNCTION - ADDS PRODUCTS TO CART. UPDATES TOTAL AND COUNTS ITEMS
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
            min="1"
            max={stock}
            type="number"
            value={count}
            onInput={(e) => setCount(e.target.value)}
          />
          {cartList.find((i) => i.id === id) ? ( // TRUE WHEN ITEM IS ON CART
            <div className="ver">
              <p>This item is already in the cart!</p>
              <Link className="btn shop-item-btn" to="/shop">KEEP SHOPPING</Link>
              <Link className="btn shop-item-btn" to="/cart">GO TO CART</Link>
            </div>
          ) : ( // TRUE WHEN ITEM IS NOT ON CART - READY TO ADD
            <div>
              <button
                className="btn shop-item-btn"
                onClick={() => onAdd(count, price)}
              >
                ADD TO CART
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
