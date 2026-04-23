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
        <h2 className="pickup-title">Order Online</h2>
        <h3 className="pickup-title-sub">SELECT LOCATION</h3>

        <OrderOnlinePickups 
          location={"Monroe"} 
          address={"16412 Trombley Rd"} 
          city={"Monroe WA 98290"} 
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.8197038847693!2d-122.0110644!3d47.8923142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa9dbc48a20fb%3A0x1a44f4f343fcf9e7!2sThe%20Kushery%20Monroe%20%7C%20Marijuana%20%7C%20Pot%20%7C%20Weed!5e1!3m2!1sen!2sus!4v1772578925383!5m2!1sen!2sus"
            menuLink={"https://selection.thekushery.rocks/orderOnline/monroe/menu"}
        />
        <OrderOnlinePickups 
          location={"Lynnwood"} 
          address={"7531 196th St SW"} 
          city={"Lynnwood WA 98036"}
           mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.7136907884701!2d-122.33537533864221!3d47.821782386749526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901b6804487c93%3A0x8fdcf45c395a20ec!2sOunces%20%26%20Eighths!5e1!3m2!1sen!2sus!4v1773688980478!5m2!1sen!2sus"}
          menuLink={""}
        />

      </div>
    </div>
  );
}

export default OrderOnlinePickupContainer