import React, { useState } from "react";
import "./ItemCount.css";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cont, setCont] = useState(initial);

/*   function decrement() {
    if (cont < 1) {
      alert("incremente por favor");
    }
    setCont(cont - 1);
  } */
  function count() {
    if (cont < stock) {
      setCont(cont + 1);
    } else {
      alert(" no hay stock");
    }
  }
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter</h1>
          <div className="my-5">
            <h2 className="my-5">{cont}</h2>
            <button className="btn btn-success mx-3" onClick={count}>
              Increment
            </button>
            <button className="btn btn-danger mx-3" onClick={()=> setCont(cont - 1)} disabled={cont=== 0}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
