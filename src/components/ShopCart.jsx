import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import React from 'react'

export const ShopCart = () => {

  const { cartList, clearCart } = useCartContext();

  return (
    <div style={{marginTop: "8rem"}}>
      <p>ShopCart</p>
      {cartList.map(o => 
      <div key={o.id} className="shop-cart-item">
        <img src={o.imgSRC} alt="cartItemImg" className="shop-cart-img cart-grid-item" />
        <span className="shop-cart-title cart-grid-item">{o.title + " "}X{" " + o.count}</span>
        <span className="shop-cart-price cart-grid-item">${o.price * o.count}</span>
      </div>)}
      {(cartList.length === 0)
        ?
          <div>
            <h3>NO ITEMS IN CART YET!</h3>
            <Link className="btn" to="/shop">GO TO SHOP</Link>
          </div>
        :
          <div>
            <button className="btn" onClick={() => clearCart()}>CLEAR CART</button>
            <button className="btn">FINISH PURCHASE</button>
          </div>
      }
    </div>
  )
};

export default ShopCart;