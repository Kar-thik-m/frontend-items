import React, { useState, useEffect } from "react";
import { backendUrl } from "../../config";
import elph from "../assets/el.jpg"
import elstyles from "./GetElectronics.module.css";

const GetElectronics = () => {
  const [show, showData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${backendUrl}/electronic`);
    const data = await response.json();
    showData(data);
  };

  useEffect(() => {
    fetchData();

  }, []);

  return (
    <div>
      <div>
        <div className={elstyles .fashionmodel}>
        

          <img src={elph} alt="Furnitures Model" className={elstyles .modelimage} />
  
        </div>
        <div className={elstyles.electronicscontainer}>
          {show.map((data) => (
            <div className={elstyles.card} key={data.itemName}>
              <img src={data.imageUrl} alt={data.itemName} />
              <div className={elstyles.cardbody}>
                <p className={elstyles.cardtext}>{`Type: ${data.itemType}`}</p>
              </div>
              <div className={elstyles.cardfooter}>
                <small className={elstyles.textmuted}>{`Price: ${data.price}`}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetElectronics;
