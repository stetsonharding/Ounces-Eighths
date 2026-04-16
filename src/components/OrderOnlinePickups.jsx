import React from 'react'
import GoogleMap from "../assets/GoogleMap.jpg"
import "../css/OrderOnlinePickup.css"



const OrderOnlinePickups = ({ location, address, city, menuLink, mapSrc }) => {
  return (



    <div className="pickup-card">
      <h1 className="title">Skip the line - Order Online.</h1>
      <h2 className="subtitle">{location} Location</h2>


      <div className="map-wrapper" style={{ width: "100%", height: "350px" }}>
        <iframe
          title="The Kushery Monroe Map"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="address">{address} </p>
      <p className="address"> {city}</p>

      <a
        href={menuLink}
        target="_blank"
        rel="noopener noreferrer"
        className="shop-btn"
      >
        Shop {location} Now
      </a>
    </div>

  );
}

export default OrderOnlinePickups

