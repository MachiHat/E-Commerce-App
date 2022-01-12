import { ProductDetails } from "./ProductDetails";
import { Loader } from "./Loader";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getOneDoc } from "../firebase/firebase";
import { useCartContext } from "../context/CartContext";

export const ProductDetailsContainer = () => {
  const [product, setProd] = useState({}); // PRODUCT USESTATE HOLDER

  const { cartList, addToCart, setCartList } = useCartContext();

  const [Loading, setLoading] = useState();

  const { id } = useParams(); // PRODUCT ID PARAM

  function onAdd(count, setCount, setAddedToCart) {
    // ONADD FUNCTION - ADDS PRODUCTS TO CART. UPDATES TOTAL AND COUNTS ITEMS
    setCount(count);
    const productFoundById = cartList.find((item) => item.id === Number(id));
    if (productFoundById) {
      if (parseInt(productFoundById.count) + parseInt(count) > product.stock) {
		return alert(
          "You can't add to cart the selected amount of products due to stock shortage"
        );
      }
      setCartList(
        cartList.map((item) => {
          return item.id === Number(id)
            ? { ...item, count: parseInt(item.count) + parseInt(count) }
            : item;
        })
      );
    } else {
      addToCart({ ...product, count: count });
    }
    setAddedToCart(true);
  }
  // FETCH PRODUCTS W/ FIND FUNCTION & SETS LOADING
  useEffect(() => {
    setLoading(true);
    getOneDoc(id)
      .then((response) => setProd(response))
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
