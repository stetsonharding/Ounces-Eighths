import './App.css'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from "./pages/Index.jsx"
import OrderOnline from './pages/OrderOnline.jsx'
import Locations from './pages/Locations.jsx'

function App() {

  
  return (
    <>
    <BrowserRouter>
 
    <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="/orderOnline">
            <Route path="/orderOnline" element={<Navigate to="/orderOnline/ChooseLocation" replace />} />
          <Route path=":locationId" element={<OrderOnline />} />
        </Route>
      <Route path="/locations" element={<Locations/>} />
    </Routes>
 
    
   
    
    </BrowserRouter>
    </>
  )
}

export default App
