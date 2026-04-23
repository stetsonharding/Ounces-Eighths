import React from 'react'
import Banner from '../components/Banner'
import "../css/Locations.css"
import Ounces_Eighths_Monroe from "../assets/Ounces_Eighths_Monroe.png"

import LocationsContainer from '../components/LocationsContainer';
import Footer from '../components/Footer';
import comingSoon from "../assets/comingSoon.jpg"

const LOCATIONS = [
  {
    id: "monroe",
    name: "Monroe",
    tagline: "Skip the line - Order Online.",
    address1: "16412 Trombley Rd",
    address2: "Monroe WA 98290",
    phone: "(360) 217-8951",

   hours: [
  { days: "Sunday - Thursday:", time: "8AM - 10PM" },
  { days: "Friday & Saturday:", time: "8AM - 12AM" },
],

    image:
      Ounces_Eighths_Monroe,

    mapsUrl:
      "https://www.google.com/maps/dir//The+Kushery+Monroe+%7C+Marijuana+%7C+Pot+%7C+Weed,+16412+Trombley+Rd,+Snohomish,+WA+98290/@47.9503092,-122.2068299,5715m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x549aa9dbc48a20fb:0x1a44f4f343fcf9e7!2m2!1d-122.0110644!2d47.8923142?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D",

    orderUrl: "https://selection.thekushery.rocks/orderOnline/monroe/menu"
  },
  {
    id: "lynnwood",
    name: "Lynnwood (Coming soon)",
    tagline: "Skip the line - Order Online.",
    address1: "7531 196th St SW",
    address2: "Lynnwood WA 98036",
    phone: "(000) 000-0000",

    hours: [
      { days: "Monday - Sunday", time: "8AM - 10PM" },
    ],

    image:
     comingSoon,

    mapsUrl:
      "",

    orderUrl: "/orderOnline"
  },

];

const Locations = () => {
  return (
    <>
      <Banner bannerTitle={"LOCATIONS"} />
      <div className="locations-page">
        <LocationsContainer locations={LOCATIONS} />
        <Footer />
      </div>
    </>
  );
};

export default Locations
