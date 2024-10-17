import React from "react";
import BannerLanding from "../../assets/media/Assets 2 (package)/fondosPages/RIWI.ESPACIOS_0088.jpg";
import "../Banner/Banner.scss";

const Banner: React.FC = () => {
    return (
      <section>
        <div className="BannerLanding">
          <div className="image-container">
            <img src={BannerLanding} alt="Banner Image" />
          </div>
          <div className="info-mS-SHOP">
            <h2>New Arrival</h2>
            <h1>Discover Our <br /> New Collection</h1> {/* Corregido el <br> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id a, sint deserunt nam illum! Laborum
            </p>
            <a href="./redirects/shopRiwi/shop.html">
              <button className="BTN-RED-SHOP">Buy now</button>
            </a>
          </div>
        </div>
      </section>
    );
  };
  

export default Banner;
