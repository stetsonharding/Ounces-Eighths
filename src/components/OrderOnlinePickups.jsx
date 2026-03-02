import React from 'react'
import GoogleMap from "../assets/GoogleMap.jpg"
import "../css/OrderOnlinePickup.css"

const OrderOnlinePickups = ({location, address, city}) => {
  return (
    

 
      <div className="pickup-card">
        <h1 className="title">Skip the line - Order Online.</h1>
        <h2 className="subtitle">{location} Location</h2>

        <div className="map-wrapper">
          <img src={GoogleMap} alt="Location Map" className="map-image" />
        </div>

        <p className="address">{address} </p>
        <p className="address"> {city}</p>

        <button className="shop-btn">Shop Now</button>
      </div>
   
  );
}

export default OrderOnlinePickups

