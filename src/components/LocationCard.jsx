import React from "react";
import { Card, Button } from "react-bootstrap";

const LocationCard = ({ location }) => {

  console.log(location.image)
  return (
    <Card className="loc-card">

      <div className="loc-card-img-wrapper">
        <img
          src={location.image}
          alt={location.name}
          className="loc-card-img"
        />
      </div>

      <Card.Body className="loc-card-body">

        <h2 className="loc-title">{location.name}</h2>
        <p className="loc-tagline">{location.tagline}</p>

        <div className="loc-info">

          <div className="loc-row">
            <span className="loc-dot" />
            <div>
              <strong>{location.address1}</strong>
              <div className="loc-muted">{location.address2}</div>
            </div>
          </div>

          <div className="loc-row">
            <span className="loc-dot" />
            <div>
              <a style={{ textDecoration: 'none', color: "#ffffff" }} href={`tel:+${location.phone}`} className="phone-link">
                Contact us: <strong>{location.phone}</strong>
              </a>

              <div className="loc-muted">Call with questions</div>
            </div>
          </div>

          <div className="loc-row">
            <span className="loc-dot" />
            <div>
              {location.hours.map((h, i) => (
                <div key={i} className="loc-hours-row">
                  <span>{h.days}</span> {" "}
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="loc-buttons">

          <Button
            className="btn-green"
            href={location.orderUrl}
            target="_blank"
          >
            Order Online
          </Button>

          <Button
            className="btn-outline"
            href={location.mapsUrl}
            target="_blank"
          >
            Directions
          </Button>

        </div>

      </Card.Body>
    </Card>
  );
};

export default LocationCard;