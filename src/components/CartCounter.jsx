import React from "react";
import { useCartContext } from "../context/CartContext";

export const CartCounter = () => {
  const { cartList } = useCartContext();
  if (cartList.length !== 0) {
    return <span>{cartList.reduce((acc,val) => acc + Number(val.count),0)}</span>;
  } else return null;
};

export default CartCounter;
