import { ProductDetails } from "./ProductDetails";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const ProductDetailsContainer = ({ itemList }) => {
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
      {product.id !== parseInt(id) ? (
        <div className="ver loading-wrap">
          <h1 className="loading-logo">MM</h1>
          <span>Loading, please wait...</span>
        </div>
      ) : (
        <div>
          <ProductDetails product={product} />
        </div>
      )}
    </div>
  );
};
//  onClick={() => setState([...state,item])}