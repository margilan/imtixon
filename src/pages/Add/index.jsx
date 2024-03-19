import React, { useState } from "react";
import kal from "../../assets/ADD.png";
import "./index.css";
import boy from "../../assets/akaxo.png";
import insta from '../../assets/insta.svg'
import feec from '../../assets/feecbook.svg'
import twiter from '../../assets/twiter.svg'
import { useNavigate } from "react-router-dom";


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

    const navigate = useNavigate()
  function handleNAvigate(){
    navigate('/about')
  }

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
            <button className="ADD-btn" onClick ={handleNAvigate}>ADD TO CART</button>
          </div>
        </div>
   
      </div>
      <div className="big-card">
        <div className="big-card-texts">
          <div className="one-card-text">
            <h2>
              Bringing you the <br /> <span>best</span> audio gear
            </h2>
          </div>
          <div className="two-card-text">
            <h3>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </h3>
          </div>
        </div>
        <div className="images">
          <img src={boy} alt="" />
        </div>
      </div>

      <div className="footer-big">
        <div className="footer-big-texts">
          <div className="footer-big-texts-one">
            <h2>audiophile</h2>
          </div>
          <div className="footer-big-texts-two">
            <h3>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </h3>
          </div>
          <div className="footer-big-texts-three">
            <h3>Copyright 2021. All Rights Reserved</h3>
          </div>
        </div>
        <div className="logos">
          <div className="textts">
            <h1 className="Aboutt">Home</h1>
            <h1 className="Aboutt">HEADPHONES</h1>
            <h1 className="Aboutt">SPEAKERS</h1>
            <h1 className="Aboutt">EARPHONES</h1>
          </div>

              <div className="logo">
                <img src={feec} alt="" />
                <img src={twiter} alt="" />
                <img src={insta} alt="" />
              </div>
        </div>
      </div>
    </>
  );
}

export default ADD;
