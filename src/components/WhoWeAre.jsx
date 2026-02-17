import React from "react";
import "../css/WhoWeAre.css"

import GoogleMap from "../assets/GoogleMap.jpg"

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="who-we-are-inner">

        {/* LEFT SIDE */}
        <div className="left">
          <p className="eyebrow">WHO WE ARE?</p>

          <div className="map-card">
            <img
              title="Store Location Map"
              src={GoogleMap}
              loading="lazy"
            
            />
          </div>
                  <div className="cta-row">
  <a className="cta primary" href="#order">Order Online</a>
  <a className="cta ghost" href="#directions">Get Directions</a>
</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <h1 className="headline">
            <span>YOUR GO-TO</span>
            <span>SPOT FOR</span>
            <span>EVERYTHING</span>
            <span className="accent">CANNABIS</span>
          </h1>
  

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
