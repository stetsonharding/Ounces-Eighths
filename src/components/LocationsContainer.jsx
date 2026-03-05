import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LocationCard from "./LocationCard"

const LocationsContainer = ({ locations }) => {
  return (
    <Container className="locations-container">

      <Row className="g-4">

        {locations.map((location) => (
          <Col key={location.id} md={6} lg={6}>
            <LocationCard location={location} />
          </Col>
        ))}

      </Row>

    </Container>
  );
};

export default LocationsContainer;