import React from "react";
import "./index.css";
import naushnik from "../../assets/naush.png";
import kalonka from "../../assets/kal.png";
import air from "../../assets/airpods.png";
import kalonkaa from "../../assets/kalonka.png";
import boy from "../../assets/akaxo.png";
import insta from '../../assets/insta.svg'
import feec from '../../assets/feecbook.svg'
import twiter from '../../assets/twiter.svg'
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();

  function onBoard(){
    navigate('/ADD')
  }

  function handleNav(){
      navigate("/ADD")
  }

  return (
    <>
      <div className="wraper-all">
        <div className="wrapper">
          <div className="header">
            <div className="texts">
              <div className="one-text">
                <h3>NEW PRODUCT</h3>
              </div>
              <div className="two-text">
                <h2>XX99 Mark II Headphones</h2>
              </div>
              <div className="thre-text">
                <h4>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </h4>
              </div>
              <div className="btn">
         <button onClick={onBoard}>See product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="one-card">
          <img src={naushnik} alt="img" />
          <p>HEADPHONES</p>
          <h2>
          <h2 onClick={handleNav}>Shops </h2>
          </h2>{" "}
        </div>
        <div className="one-card">
          <img src={kalonka} alt="img" />
          <p>SPEAKRS</p>
          <h2>
          <h2 onClick={handleNav}>Shops </h2>
          </h2>{" "}
        </div>
        <div className="one-card">
          <img src={air} alt="img" />
          <p>AIRPODS</p>
          <h2>
          <h2 onClick={handleNav}>Shops </h2>
          </h2>
        </div>
      </div>
      <div className="footer">
        <img src={kalonkaa} alt="kalonka two" />
        <div className="textss">
          <div className="one-textx">
            <h1>
              ZX9 <br />
              SPEAKERS
            </h1>
          </div>
          <div className="two-texta">
            <h2>
              {" "}
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </h2>
          </div>
          <div className="btnn">
          <button onClick={onBoard}>See product</button>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <div className="footer-text">
          <h1>ZX7 SPEAKER</h1>
        </div>
        <div className="footer-btn">
        <button onClick={onBoard}>See product</button>
        </div>
      </div>
      <div className="iki-card">
        <div className="one-card-one"></div>
        <div className="two-card-one">
          <h1>YX1 EARPHONES</h1>
          <button onClick={onBoard}>See product</button>
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

export default Home;
