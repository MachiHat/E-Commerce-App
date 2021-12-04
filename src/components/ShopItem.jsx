import { Link } from "react-router-dom";
import React from "react";

export const ShopItem = ({ item }) => {
  const { id, title, price, imgSRC } = item;
  return (

      <li className="ver shop-item">
        <span className="shop-item-title">{title}</span>
        <img className="shop-item-image" alt="shopItemImg" src={imgSRC} />
        <div className="shop-item-details">
          <span className="shop-item-price">${price} </span>
          <Link to={`/shop_detail/${id}`}><button className="btn shop-item-btn">SEE MORE</button></Link>
        </div>
      </li>
  );
};
//  onClick={() => setState([...state,item])}
