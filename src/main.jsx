import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation.jsx"



import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <App />
  </StrictMode>,
)
