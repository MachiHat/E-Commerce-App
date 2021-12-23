import { ProductDetails } from "./ProductDetails";
import { Loader } from "./Loader";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const ProductDetailsContainer = ({ itemList }) => {
  const [product, setProd] = useState({});
  const { id } = useParams();
  // FETCH PRODUCTS VIA FIND FUNCTION
  useEffect(() => {
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => resolve(itemList.find((o) => o.id === parseInt(id))));
    });
    getProduct.then((response) => setProd(response));
  });
  return (
    <div>
      {product?.id !== parseInt(id) ? (
        <Loader />
      ) : (
        <div>
          <ProductDetails product={product} />
        </div>
      )}
    </div>
  );
};
