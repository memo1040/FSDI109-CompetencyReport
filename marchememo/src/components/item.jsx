import React, { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import StoreContext from "../context/storeContext";

import "./item.css";

const Item = (props) => {
  // state
  const [quantity, setQuantity] = useState(props.data.minimum || 1);
  const addProd = useContext(StoreContext).addProductToCart;

  // functions
  const handleAdd = () => {
    let prodForCart = {
      ...props.data,
      quantity: quantity
    };
    addProd(prodForCart);
  };

  const onQuantityChange = (quantity) => {
    console.log("new qnty", quantity);
    setQuantity(quantity);
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  // return
  return (
    <div className="item">
      <img src={"/images/" + props.data.image} alt="product" />

      <h5>{props.data.title || "no title"}</h5>

      <label className="total">$ {getTotal()}</label>
      <label className="price">$ {props.data.price.toFixed(2)}</label>

      <div className="controls">
        <QuantityPicker
          minimum={props.data.minimum || 1}
          onChange={onQuantityChange}
        />

        <button onClick={handleAdd} className="btn btn-sm btn-dark">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Item;
