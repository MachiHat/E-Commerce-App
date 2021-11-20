import React from "react";

export const ShopItem = ({ item, setState, state }) => {
    const {title, price, imgSRC} = item;
    return (
        <li className="shop-item">
            <span className="shop-item-title">{title}</span>
            <img className="shop-item-image" alt="shopItemImg" src={imgSRC} />
            <div className="shop-item-details">
                <span className="shop-item-price"> ${price} </span>
                <button onClick={() => setState([...state,item])} className="btn shop-item-btn">ADD TO CART</button>
            </div>
        </li>
    )
}

