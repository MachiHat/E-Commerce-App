import { useState } from "react";
import { submitForm } from "../firebase/firebase";
import React from "react";

export const Form = ({ cartList, totalPrice }) => {
  const [formData, setformData] = useState({ name: "", phone: "", mail: "" }); //SAVES FORM DATA TO BE SENT

  const [OrderId, setOrderId] = useState(0); //SAVES ORDER ID NUMBER

  const [FinishedOrder, setFinishedOrder] = useState(false); //SHOWS ID AFTER PLACING ORDER

  const formEvent = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrap">
      <form
        className="form"
        onSubmit={submitForm({
          formData,
          setformData,
          setOrderId,
          cartList,
          totalPrice,
          setFinishedOrder,
        })}
        onChange={formEvent}
      >
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
        {FinishedOrder === true ? (
          <span className="ver center">
            THANK YOU FOR YOUR PURCHASE! <br /> This is your order ID code:{" "}
            <br /> <b>{OrderId}</b>{" "}
          </span>
        ) : (
          <div>
            {formData.mail === formData.mail2 ? (
              <div className="center ver">
                <p>Send data and finish purchase</p>
                <button className="btn form-button">SEND</button>
              </div>
            ) : (
              <p>Please complete the form correctly</p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};
