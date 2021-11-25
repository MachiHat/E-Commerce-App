import React from "react";

export const ShopItem = ({ item, setState, state }) => {
    const {title, price, imgSRC} = item;
    return (
        <li className="shop-item">
            <span className="shop-item-title">{title}</span>
            <img className="shop-item-image" alt="shopItemImg" src={imgSRC} />
            <div className="shop-item-details">
                <span className="shop-item-price"> ${price} </span>
                <button className="btn shop-item-btn">MORE INFO</button>
            </div>
        </li>
    )
}

//  onClick={() => setState([...state,item])}

