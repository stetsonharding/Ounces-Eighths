import React from "react";
import { Container } from "react-bootstrap";
import "../css/InfoBar.css";

const infoItems = [
  {
    title: "DAILY DEALS",
    subtitle: "Save up to 40%",
    icon: "%",
  },
  {
    title: "PREMIUM QUALITY",
    subtitle: "Top shelf, always",
    icon: "✦",
  },
  {
    title: "FAST PICKUP",
    subtitle: "Ready in minutes",
    icon: "➜",
  },

];

export default function InfoBar() {
  return (
    <Container fluid className="info-container">
      <div className="info-pill">
        {infoItems.map((item, index) => (
          <React.Fragment key={item.title}>
            <div className="info-item">
              <div className="info-icon">{item.icon}</div>

              <div className="info-copy">
                <p className="info-title">{item.title}</p>
                <p className="info-subtitle">{item.subtitle}</p>
              </div>
            </div>

            {index !== infoItems.length - 1 && <div className="info-divider" />}
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
}