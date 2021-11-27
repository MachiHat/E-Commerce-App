import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const ProductDetails = ({ itemList }) => {
  const [product, setProd] = useState({});
  const { id } = useParams();
  useEffect(() => {
    //Change for axios and use php or json format for itemList
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(itemList.find((o) => o.id === parseInt(id))),
        2000
      );
    });
    getProduct.then((response) => setProd(response));
  });
  return (
    <div>
      {product.length < 1 ? (
        <div className="ver loading-wrap">
          <h1 className="loading-logo">MM</h1>
          <span>Loading, please wait...</span>
        </div>
      ) : (
        <div className="hor shop-detail-wrapper">
          <div className="ver shop-detail-img-container">
            <img className="detail-img" src={product.imgSRC} alt="dtl-img" />
          </div>
          <div className="ver shop-details-container">
            <h2 className="shop-detail-title">{product.title}</h2>
            <p className="shop-detail-text">{product.desc}</p>
            <p className="shop-detail-text">Items left: {product.stock} </p>
            <div className="hor shop-detail-price-container">
              <span className="shop-detail-price">${product.price}</span>
              <input className="shop-detail-input" defaultValue="1" min="1" max={product.stock} type="number" />
              <button className="btn shop-item-btn">ADD TO CART</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//  onClick={() => setState([...state,item])}