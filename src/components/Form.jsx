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
      .then((id) =>
        alert(`YOUR ORDER NUMBER IS: ${id}. ${(<br />)} THANKS FOR BUYING!`)
      )
      .finally(setformData({ name: "", phone: "", mail: "" }));
  };

  return (
    <div className="form-wrap">
      <form className="form" onSubmit={submitForm} onChange={formEvent}>
        <h2 className="form-title">FILL THE FORM TO PROCEED</h2>
        <div className="input-field">
        <i />
        <input
          className="shop-form-input"
          type="text"
          placeholder="ENTER YOUR NAME"
          name="name"
          value={formData.name}
          onChange={formEvent}
        />
        </div>

        <div className="input-field">
        <i />
        <input
          className="shop-form-input"
          type="text"
          placeholder="ENTER YOUR PHONE NUMBER"
          name="phone"
          value={formData.phone}
          onChange={formEvent}
        />
        </div>

        <div className="input-field">
        <i />
        <input
          className="shop-form-input"
          type="text"
          placeholder="ENTER YOUR E-MAIL"
          name="mail"
          value={formData.mail}
          onChange={formEvent}
        />
        </div>

        <div className="input-field">
        <i />
        <input
          className="shop-form-input"
          type="text"
          placeholder="CONFIRM YOUR E-MAIL"
          name="mail2"
          value={formData.mail2}
        />
        </div>

        {formData.mail === formData.mail2 ? (
          <div>
            <p>Send data and finish purchase</p>
            <button className="btn">SEND</button>
          </div>
        ) : (
          <p>Please complete the form correctly</p>
        )}
      </form>
    </div>
  );
};
