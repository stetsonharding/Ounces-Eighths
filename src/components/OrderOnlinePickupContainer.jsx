import React from 'react'
import GoogleMap from "../assets/GoogleMap.jpg"
import "../css/OrderOnlinePickup.css"
import BackgroundBlob from './BackgroundBlob';
import OrderOnlinePickups from './OrderOnlinePickups';

const OrderOnlinePickupContainer = () => {
  return (
    <div className="pickup">
      <div className="pickup-container">
        <BackgroundBlob />

        {/* 🔥 Title */}
        <h2 className="pickup-title">SELECT LOCATION</h2>

        <OrderOnlinePickups 
          location={"Lynnwood"} 
          address={"7531 196th St SW"} 
          city={"Lynnwood WA 98036"}
          menuLink={""}
        />

        <OrderOnlinePickups 
          location={"Monroe"} 
          address={"16412 Trombley Rd"} 
          city={"Monroe WA 98290"} 
            menuLink={"https://selection.thekushery.rocks/orderOnline/monroe/menu"}
        />
      </div>
    </div>
  );
}

export default OrderOnlinePickupContainer