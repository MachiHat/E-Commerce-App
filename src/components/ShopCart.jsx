import React, { useState, useEffect }  from 'react'

export const ShopCart = ({ state, setState }) => {
  const [render, setRender] = useState(true)
  useEffect(() => {
    if (!render) setRender(true);
  }, [render])
  return (
    <div>
      {state.map((o, index) => {
        const handleChange = value => {
          state[index] = {...o, quantity:value};
          setState(state);
          setRender(false)
        }
        return ( 
        <div key={o.id + 100} className="shop-cart-item">
          <img src={o.imgSRC} alt="cartItemImg" className="shop-cart-img cart-grid-item" />
          <span className="shop-cart-title cart-grid-item">{o.title}</span>
          <span className="shop-cart-price cart-grid-item">${o.price * o.quantity}</span>
          <input className="shop-cart-input cart-grid-item" type="number" min="1" max="9" value={o.quantity} onChange={e => handleChange(e.target.value)} />
          <button className="btn shop-cart-btn cart-grid-item">REMOVE</button>
        </div>
      )})}
    </div>
  )
}



