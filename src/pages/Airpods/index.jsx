import React from 'react'
import kalonkaa from '../../assets/kalonka-ikki.png'
import kalonka from "../../assets/kal.png";
import air from "../../assets/airpods.png";
import boy from "../../assets/akaxo.png";
import insta from '../../assets/insta.svg'
import feec from '../../assets/feecbook.svg'
import twiter from '../../assets/twiter.svg'
import two from '../../assets/uch.png'
import airr from '../../assets/air.png'
import './index.css'
import { useNavigate } from 'react-router-dom';

function Airpods() {

  const navigate = useNavigate();

  function Clicer(){
    navigate("/ADD")
  }
  function handleNav(){
    navigate("/ADD")
  }
  return (
    <>
    <div className="Phones-wrapper">
      <div className="paragref">
      <h1>EARPHONES</h1>
      </div>
          <div className="two-cardss">
          <div className="texts-phone">
            <div className="text-one">
              <h3>NEW PRODUCT</h3>
            </div>
            <div className="text-two">
              <h1>YX1 WIRELESS <br />EARPHONES</h1>
            </div>
            <div className="text-three">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </div>
          </div>
          <div className="btnnn">
            <button onClick={Clicer}>See product</button>
          </div>  
          <div className="img">
          <img src={airr} alt="" />
          </div>
          </div>

      <div className="section">
        <div className="one-card">
          <img src={two} alt="img" />
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
    </div>
    
    </>
  )
}

export default Airpods