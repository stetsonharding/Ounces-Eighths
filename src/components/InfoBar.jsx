import React from 'react'

import { Container } from 'react-bootstrap'
import BackgroundBlob from './BackgroundBlob'

const InfoBar = () => {
  return (
   <Container fluid className="info-container">
    <BackgroundBlob/>
    <div className="hours-information">
    <p className="hours-text">Ounces & Eighths</p>
     <p className="hours-text">Open 8AM - 10PM</p>
    </div>
   </Container>
  )
}

export default InfoBar
