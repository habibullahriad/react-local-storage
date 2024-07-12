import React from "react";
import "./Cosmetic.css";
import { addToDb, removeFromDb } from "../../utilies/fackdb";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
  };
  const removeFromCart = (id) => {
    removeFromDb(id);
  };
  return (
    <div className="product">
      <h2>Buy this:{name}</h2>
      <p>Only for:${price}</p>
      <p>It has id:{id}</p>
      <button onClick={() => addToCart(id)}>Add to Card</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
