import { ShopList } from "./ShopList";
import React, { useState, useEffect } from "react";

export const ShopContainer = ( { itemList } ) => {

  const [products, setProd] = useState([]);
  
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => resolve(itemList), 3000);
    });
    getProducts.then((response) => setProd(response));
  },);

  return (
    <section>
      {products.length < 1 ? (
        <div className="ver loading-wrap">
          <h1 className="loading-logo">MM</h1>
          <span>Loading, please wait...</span>
        </div>
      ) : (
        <div>
          <ShopList products={products}  />
        </div>
      )}
    </section>
  );
};
