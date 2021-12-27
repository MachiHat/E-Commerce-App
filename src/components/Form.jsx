import { useState } from "react";
import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import React from "react";

export const Form = ({ cartList, totalPrice }) => {
  const [formData, setformData] = useState({ name: "", phone: "", mail: "" });

  const formEvent = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    let placedOrder = {};
    placedOrder.date = new serverTimestamp();
    placedOrder.buyer = formData;
    placedOrder.items = cartList.map((cartItem) => {
      const itemName = cartItem.title;
      const itemId = cartItem.id;
      const itemPrice = cartItem.price;
      return { itemName, itemId, itemPrice };
    });
    placedOrder.totalPrice = totalPrice;
    const db = getFirestore();
    const addOrder = async (placedOrder) => {
      const newOrder = await addDoc(collection(db, "orders"), {
        ...placedOrder,
      });
      return newOrder.id;
    };
    addOrder(placedOrder)
      .then((id) => alert(`YOUR ORDER NUMBER IS: ${id}`))
      .finally(setformData({ name: "", phone: "", mail: "" }));
  };

  return (
    <div>
      <form onSubmit={submitForm} onChange={formEvent}>
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          name="name"
          value={formData.name}
        />

        <input
          type="text"
          placeholder="ENTER YOUR PHONE NUMBER"
          name="phone"
          value={formData.phone}
        />

        <input
          type="text"
          placeholder="ENTER YOUR E-MAIL"
          name="mail"
          value={formData.mail}
        />

        <input type="text" placeholder="CONFIRM YOUR E-MAIL" name="mail2" />

        {formData.mail === formData.mail2 ? (
          <button className="finalizarCompra">FINALIZAR COMPRA</button>
        ) : (
          <p>Complete Correctamente sus Datos para Finalizar la Compra</p>
        )}
      </form>
    </div>
  );
};
