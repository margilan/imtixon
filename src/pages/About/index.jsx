import React, { useState } from 'react';
import './inde.css';
import naushnik from '../../assets/aboutNa.png';

function About() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'XX99 MK II' },
    { id: 2, name: 'XX99 MK II' },
    { id: 3, name: 'XX99 MK II' },
    { id: 4, name: 'XX99 MK II' }
  ]);

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className="wraper-about">
        <div className="contaiiner">
          <div className="removee">
            <div className="con-text">
              <h2>Cart ( {cartItems.length} )</h2>
            </div>
            <div className="remove" onClick={handleRemoveAll}>
              <h3>Remove all</h3>
            </div>
          </div>
          {cartItems.map((item) => (
            <div className="cart-le" key={item.id}>
              <img src={naushnik} alt="" />
              <h3>{item.name}</h3>
              <button className='about-btn'>
                <button className='minuss'>-</button>
                1
                <button className='minuss'>+</button>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
