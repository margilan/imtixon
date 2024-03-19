import React, { useState } from "react";
import kal from "../../assets/ADD.png";
import "./index.css";

function ADD() {
  const [quantity, setQuantity] = useState(1);
  const price = 4500;

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="wraper-all">
        <h1>ADD CART PAGE</h1>
      </div>
      <div className="container">
        <div className="img">
          <img src={kal} alt="kalonka" />
        </div>
        <div className="all-text">
          <div className="add-text">
            <h2>NEW PRODUCT</h2>
          </div>
          <div className="name">ZX9 <br />SPEAKER</div>
          <div className="desk">
            <h3>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </h3>
          </div>
          <div className="price">
            <h2>$ {price * quantity}</h2>
          </div>
          <div className="btns">
            <button className="price-btn">
              <button className="minus" onClick={handleMinusClick}>-</button> {quantity}{" "}
              <button className="plus" onClick={handlePlusClick}>+</button>
            </button>
            <button className="ADD-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ADD;
