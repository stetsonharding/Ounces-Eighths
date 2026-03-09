import React from 'react'
import Banner from '../components/Banner'
import { Container, Row, Col } from 'react-bootstrap'
import LocationMenuSwitcher from '../components/LocationMenuSwitcher'

const OrderOnline = () => {
  return (
    <>
      <Banner bannerTitle="ORDER ONLINE" />

      <LocationMenuSwitcher />
  
    </>
  )
}

export default OrderOnline
