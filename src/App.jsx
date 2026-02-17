import './App.css'
import Hero from './components/Hero.jsx'
import InfoBar from './components/InfoBar.jsx'
import "../src/css/Infobar.css"
import OrderOnlinePickup from './components/OrderOnlinePickup.jsx'
import ShopByCategory from './components/ShopByCategory.jsx'
import WhoWeAre from './components/WhoWeAre.jsx'
import GoogleMap from "./assets/GoogleMap.jpg"
import BadgeRow from "./components/BadgeRow.jsx"


function App() {
  return (
    <>
    <Hero />
    <InfoBar />
    <OrderOnlinePickup />
    <ShopByCategory />
    <WhoWeAre  mapImage={GoogleMap}/>
    <BadgeRow/>
    </>
  )
}

export default App
