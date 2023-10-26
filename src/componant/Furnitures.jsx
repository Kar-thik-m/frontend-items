
import React from 'react';
import additem from "../assets/furnitures.jpg"
import { useState,useEffect } from 'react';
import { backendUrl } from '../../config';
import Furstyles from "./Furnitures.module.css"

const FashionModelPage = () => {
  const [show, showData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${backendUrl}/furnitures`);
    const data = await response.json();
    showData(data);
  };

  useEffect(() => {
    fetchData();
    
  }, []);
  return (
  <div>
      <div className={Furstyles.fashionmodel}>
     


      <img src={additem} class="img-fluid" alt=""  className={Furstyles .modelimage}></img>
      <p>Furnitures Items</p>
    </div>
    <div className={Furstyles.electronicscontainer}>
      {show.map((data) => (
        <div className={Furstyles.card} key={data.itemName}>
          <img src={data.imageUrl} alt={data.itemName} />
          <div className={Furstyles .cardbody}>
            <p className={Furstyles .cardtext}>{`Type: ${data.itemType}`}</p>
          </div>
          <div className={Furstyles.cardfooter}>
            <small className={Furstyles .textmuted}>{`Price: ${data.price}`}</small>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default FashionModelPage;
