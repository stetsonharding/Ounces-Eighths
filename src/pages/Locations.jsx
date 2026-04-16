import React from 'react'
import Banner from '../components/Banner'
import "../css/Locations.css"
import  Ounces_Eighths_Monroe from "../assets/Ounces_Eighths_Monroe.png"

import LocationsContainer from '../components/LocationsContainer';
import Footer from '../components/Footer';

const LOCATIONS = [
  {
    id: "lynnwood",
    name: "Lynnwood",
    tagline: "Skip the line - Order Online.",
    address1: "7531 196th St SW",
    address2: "Lynnwood WA 98036",
    phone: "(425) 000-0000",

    hours: [
      { days: "Monday - Sunday", time: "8AM - 10PM" },
    ],

    image:
    " Ounces_Eighths_Monroe,",

    mapsUrl:
      "https://www.google.com/maps/dir//Ounces+%26+Eighths,+7531+196th+St+SW,+Lynnwood,+WA+98036/@47.9503092,-122.2068299,5101m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x54901b6804487c93:0x8fdcf45c395a20ec!2m2!1d-122.3353372!2d47.8217234?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",

    orderUrl: "/orderOnline"
  },

  {
    id: "monroe",
    name: "Monroe",
    tagline: "Skip the line - Order Online.",
    address1: "16412 Trombley Rd",
    address2: "Monroe WA 98290",
    phone: "(360) 217-8951", 

    hours: [
      { days: "Monday - Sunday", time: "8AM - 10PM" },
    ],

    image:
      Ounces_Eighths_Monroe,

    mapsUrl:
      "https://www.google.com/maps/dir//The+Kushery+Monroe+%7C+Marijuana+%7C+Pot+%7C+Weed,+16412+Trombley+Rd,+Snohomish,+WA+98290/@47.9503092,-122.2068299,5715m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x549aa9dbc48a20fb:0x1a44f4f343fcf9e7!2m2!1d-122.0110644!2d47.8923142?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",

    orderUrl: "https://selection.thekushery.rocks/orderOnline/monroe/menu"
  },
];

const Locations = () => {
  return (
    <>
    
    <Banner bannerTitle={"LOCATIONS"}/>
  

      

   <div className="locations-page">

  <LocationsContainer locations={LOCATIONS} />
  <Footer />

</div>

    
    </>
  );
};

export default Locations
