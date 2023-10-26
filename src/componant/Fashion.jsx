// src/components/FashionModelPage.js

import React from 'react';
import { useState,useEffect } from 'react';
import { backendUrl } from '../../config';
import Fph from "../assets/fph.jpg"
import Fashionstyles from "./Fashion.module.css"

const FashionModelPage = () => {
  const [show, showData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${backendUrl}/fashion`);
    const data = await response.json();
    showData(data);
  };

  useEffect(() => {
    fetchData();
    
  }, []);
  return (
  <div>
      <div className={Fashionstyles.fashionmodel}>
     
      <img src={Fph} alt="Fashion Model" className={Fashionstyles.modelimage}/>
      <p> Fashion ITEMS</p>
    </div>
    <div className={Fashionstyles.fashioncontainer}>
      {show.map((data) => (
        <div className={Fashionstyles.card} key={data.itemName}>
          <img src={data.imageUrl} alt={data.itemName} />
          <div className={Fashionstyles.cardbody}>
            <p className={Fashionstyles.cardtext}>{`Type: ${data.itemType}`}</p>
          </div>
          <div className={Fashionstyles.cardfooter}>
            <small className={Fashionstyles.textmuted}>{`Price: ${data.price}`}</small>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default FashionModelPage;
