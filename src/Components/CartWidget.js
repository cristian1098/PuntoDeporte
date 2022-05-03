import React from "react";
import Cart from "../../src/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <img src={Cart} id="icon-carrito" />
    </>
  );
};

export default CartWidget;
