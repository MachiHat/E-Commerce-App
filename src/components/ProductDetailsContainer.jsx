import { ProductDetails } from "./ProductDetails";
import { Loader } from "./Loader";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getOneDoc } from "../firebase/firebase";
import { useCartContext } from "../context/CartContext";

export const ProductDetailsContainer = () => {
  const [product, setProd] = useState({}); // PRODUCT USESTATE HOLDER

  const [Loading, setLoading] = useState();

  const { id } = useParams(); // PRODUCT ID PARAM

  const { addToCart } = useCartContext();

  function onAdd(count, setCount) {
    // ONADD FUNCTION - ADDS PRODUCTS TO CART. UPDATES TOTAL AND COUNTS ITEMS
    setCount(count);
    addToCart({ ...product, count: count });
  }
  // FETCH PRODUCTS W/ FIND FUNCTION
  useEffect(() => {
    setLoading(true);
    getOneDoc(id)
      .then(response => setProd(response))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {Loading ? (
        <Loader />
      ) : (
        <div>
          <ProductDetails product={product} onAdd={onAdd} />
        </div>
      )}
    </div>
  );
};
