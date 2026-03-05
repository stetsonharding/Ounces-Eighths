import React from 'react'
import Banner from '../components/Banner'
import "../css/Locations.css"


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

    // image:
    //   "https://images.unsplash.com/photo-1526481280695-3c687fd5432c",

    // mapsUrl:
    //   "https://maps.google.com/?q=7531+196th+St+SW+Lynnwood+WA",

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

    // image:
    //   "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",

    // mapsUrl:
    //   "https://maps.google.com/?q=16412+Trombley+Rd+Monroe+WA",

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
