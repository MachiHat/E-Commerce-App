import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    setCartList([...cartList, item]);
  };

  const clearCart = () => {
    setCartList([]);
  };

  const deleteCartItem = (id) => {
    setCartList(cartList.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart, clearCart, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
