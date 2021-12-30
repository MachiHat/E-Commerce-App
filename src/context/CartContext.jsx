import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  
  const [cartList, setCartList] = useState([]); // SETS CART USESTATE

  const addToCart = (item) => { // ADD TO CART FUNCTION - ADDS ITEMS TO CARTLIST
    setCartList([...cartList, item]);
  };

  const clearCart = () => { //CLEAR CART FUNCTION - CLEARS ALL ITEMS FROM CARTLIST
    setCartList([]);
  };

  const deleteCartItem = (id) => { // DELETE FROM CART FUNCTION - DELETES A SINGLE ITEM FROM CARTLIST
    setCartList(cartList.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart, clearCart, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
