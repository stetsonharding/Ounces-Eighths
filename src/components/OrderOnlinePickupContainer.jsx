import React from 'react'
import GoogleMap from "../assets/GoogleMap.jpg"
import "../css/OrderOnlinePickup.css"
import BackgroundBlob from './BackgroundBlob';
import OrderOnlinePickups from './OrderOnlinePickups';
const OrderOnlinePickupContainer = () => {
  return (
    <div className="pickup-container">

 <BackgroundBlob />
    <OrderOnlinePickups location={"Lynwood"} address={"7531 196th St SW"} city={"Lynwood WA 98036"} />
    <OrderOnlinePickups location={"Monroe"} address={"16412 Trombley Rd"} city={"Monroe WA 98290"} />
    </div>
  );
}

export default OrderOnlinePickupContainer

