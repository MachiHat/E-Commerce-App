import { Form } from "./Form";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ShopCart = () => {

  const { cartList, clearCart, deleteCartItem } = useCartContext();

  const [state, setState] = useState(false); //Show or hide Form

  return (
    <div style={{ marginTop: "3rem" }}>
      <p>ShopCart</p>
      {cartList.map((o) => (
        <div key={o.id} className="shop-cart-item">
          <img
            src={o.imgSRC}
            alt="cartItemImg"
            className="shop-cart-img cart-grid-item"
          />
          <span className="shop-cart-title cart-grid-item">
            {o.title + " "}X{" " + o.count}
          </span>
          <span className="shop-cart-price cart-grid-item">
            ${o.price * o.count}
          </span>
          <button onClick={() => deleteCartItem(o.id)} className="btn shop-cart-x cart-grid-item">X</button>
        </div>
      ))}
      {cartList.length === 0 ? (
        <div className="cart-warning ver">
          <h3>NO ITEMS IN CART YET!</h3>
          <Link className="btn" to="/shop">
            MOVE TO SHOP
          </Link>
        </div>
      ) : (
        <div>
          <div className="hor cart-bottom-line">
            <button
              className="btn clear-cart-btn"
              onClick={() => clearCart()}
            >
              CLEAR CART
            </button>
            <button className="btn shop-cart-btn" onClick={() => setState(true)}>PROCEED WITH PURCHASE</button>
            <span>
              Purchase total: <b>${cartList.reduce((acc, val) => acc + val.price * val.count, 0)}</b>
            </span>
          </div>
          { state ? <Form cartList={cartList} totalPrice={cartList.reduce((acc, val) => acc + val.price * val.count, 0)} /> : null }
        </div>
      )}
    </div>
  );
};

export default ShopCart;
