import React from 'react'
import Banner from '../components/Banner'
import { Container, Row, Col } from 'react-bootstrap'

const OrderOnline = () => {
  return (
    <section>
      <Banner />
       <Container fluid className="mb-1">
      <Row>
       
        <Col className="orderOnline__menu-container m-1">
          <iframe
          style={{width: "100%", height: '100vh'}}
            className="orderonline__menu"
            src={`https://selection.thekushery.rocks/orderOnline/evergreenWay/menu`}
            title="description"
          ></iframe>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default OrderOnline
