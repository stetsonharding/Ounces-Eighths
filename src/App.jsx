import './App.css'
import Hero from './components/Hero.jsx'
import InfoBar from './components/InfoBar.jsx'
import "../src/css/Infobar.css"
import OrderOnlinePickup from './components/OrderOnlinePickup.jsx'
import ShopByCategory from './components/ShopByCategory.jsx'
import WhoWeAre from './components/WhoWeAre.jsx'
import WhoWeAreBackground from "../src/assets/WhoWeAreBackground.svg"
import GoogleMap from "./assets/GoogleMap.jpg"

function App() {
  return (
    <>
    <Hero />
    <InfoBar />
    <OrderOnlinePickup />
    <ShopByCategory />
    <WhoWeAre  mapImage={GoogleMap}/>
    </>
  )
}

export default App
