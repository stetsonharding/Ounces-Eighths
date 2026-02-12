import React from 'react'
import GoogleMap from "../assets/GoogleMap.jpg"
import "../css/OrderOnlinePickup.css"
import BackgroundBlob from './BackgroundBlob';
const OrderOnlinePickup = () => {
  return (
    <div className="pickup-container">

 <BackgroundBlob />
      <div className="pickup-card">
        <h1 className="title">Skip the line - Order Online.</h1>
        <h2 className="subtitle">Pick-up at</h2>

        <div className="map-wrapper">
          <img src={GoogleMap} alt="Location Map" className="map-image" />
        </div>

        <p className="address">7531 196th St SW </p>
        <p className="address"> Lynwood WA 98036</p>

        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
}

export default OrderOnlinePickup
