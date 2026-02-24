import React from 'react'
import Hero from '../components/Hero.jsx'
import InfoBar from '../components/InfoBar.jsx'
import OrderOnlinePickup from '../components/OrderOnlinePickup.jsx'
import ShopByCategory from '../components/ShopByCategory.jsx'
import WhoWeAre from '../components/WhoWeAre.jsx'
import GoogleMap from "../assets/GoogleMap.jpg"
import BadgeRow from "../components/BadgeRow.jsx"
import CannabisDestination from '../components/ContactUs.jsx'
import bg from "../assets/cannabis_Destination.svg"


const Index = () => {
    return (
        <>
            <Hero />
            <InfoBar />
            <OrderOnlinePickup />
            <ShopByCategory />
            <WhoWeAre mapImage={GoogleMap} />
            <BadgeRow />
            <CannabisDestination 
             backgroundImage={bg}
             bgScale="58%"
             height="720px"
            />

        </>
    )
}

export default Index
