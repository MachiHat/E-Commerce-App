import React from 'react'

export const ProductDetails = ({ product }) => {
    const { imgSRC, title, desc, stock, price } = product;
    return (
        <div className="hor shop-detail-wrapper">
          <div className="ver shop-detail-img-container">
            <img className="detail-img" src={imgSRC} alt="dtl-img" />
          </div>
          <div className="ver shop-details-container">
            <h2 className="shop-detail-title">{title}</h2>
            <p className="shop-detail-text">{desc}</p>
            <p className="shop-detail-text">Items left: {stock} </p>
            <div className="hor shop-detail-price-container">
              <span className="shop-detail-price">${price}</span>
              <input className="shop-detail-input" defaultValue="1" min="1" max={stock} type="number" />
              <button className="btn shop-item-btn">ADD TO CART</button>
            </div>
          </div>
        </div>
    )
}
