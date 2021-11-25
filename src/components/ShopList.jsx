import { ShopItem } from "./ShopItem";
import React from "react";

export const ShopList = ({ products, cart, setCart }) => {
  return (
    <div>
      <ul className="item-list-wrap">
        {products.map((o) => (
          <ShopItem
            id={o.id}
            key={o.id}
            item={o}
            setState={setCart}
            state={cart}
          />
        ))}
      </ul>
    </div>
  );
};
