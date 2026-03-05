import './App.css'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from "./pages/Index.jsx"
import OrderOnline from './pages/OrderOnline.jsx'
import Locations from './pages/Locations.jsx'

function App() {

  
  return (
    <>
    <BrowserRouter>
 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orderOnline" element={<OrderOnline/>} />
      <Route path="/locations" element={<Locations/>} />
    </Routes>
 
    
   
    
    </BrowserRouter>
    </>
  )
}

export default App
