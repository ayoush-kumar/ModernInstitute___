import React from "react";
import "./UserCard.css";
import PRADUMAN from "./pictures/PRADUMAUMARPANDIT.jpeg";
import MD from "./pictures/MD.jpeg";
import Md_Aasif_Reza from "./pictures/Md_Aasif_Reza.jpeg";
import Zishan_Azam1 from "./pictures/Zishan_Azam1.jpeg";
import Zishan_Azam from "./pictures/ZishanAzam.jpeg";
import MariyaAhmad from "./pictures/MariyaAhmad.jpeg";
import VivekKumarSingh from "./pictures/VivekKumarSingh.jpeg";
import NAZNEEN_SULTANA from "./pictures/NAZNEEN_SULTANA.jpeg";
import NafeesaRoza from "./pictures/NafeesaRoza.jpeg";
import VandanaYadav from "./pictures/VandanaYadav.jpeg";

const UserCard = () => {
  return (
    <div className="main-box">
      <div className="card-container">
        <div className="item-1">
          <div className="card">
            <img src={PRADUMAN} alt="PRADUMAN" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">PRADUMAN KUMAR PANDIT</h3>
            </div>
          </div>
          <div className="card">
            <img src={MD} alt="MD" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">MD SHADAB ANSARI</h3>
            </div>
          </div>
          <div className="card">
            <img src={Md_Aasif_Reza} alt="Md_Aasif_Reza" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Md. Aasif Reza</h3>
            </div>
          </div>
          <div className="card">
            <img src={Zishan_Azam1} alt="ZishanAzam1" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Zishan Azam</h3>
            </div>
          </div>

          <div className="card">
            <img src={Zishan_Azam} alt="ZishanAzam" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Zishan Azam</h3>
            </div>
          </div>
        </div>

        <div className="item-2">
          <div className="card">
            <img src={MariyaAhmad} alt="MariyaAhmad" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Mariya Ahmad</h3>
            </div>
          </div>
          <div className="card">
            <img
              src={VivekKumarSingh}
              alt="VivekKumarSingh"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Vivek Kumar Singh</h3>
            </div>
          </div>
          <div className="card">
            <img
              src={NAZNEEN_SULTANA}
              alt="NAZNEEN_SULTANA"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">NAZNEEN SULTANA</h3>
            </div>
          </div>

          <div className="card">
            <img src={NafeesaRoza} alt="NafeesaRoza" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Nafeesa Roza</h3>
            </div>
          </div>
          <div className="card">
            <img src={VandanaYadav} alt="VandanaYadav" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Vandana Yadav</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
