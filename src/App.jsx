import './App.css'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import HomePage from "./pages/Index.jsx"
import OrderOnline from './pages/OrderOnline.jsx'


function App() {
  return (
    <>
    <BrowserRouter>
 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orderOnline" element={<OrderOnline/>} />
    </Routes>
 
  
   <Footer />
    
    </BrowserRouter>
    </>
  )
}

export default App
