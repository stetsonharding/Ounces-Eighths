import React, { useMemo } from "react";
import { Container } from "react-bootstrap";
import "../css/InfoBar.css";

export default function InfoBar() {
  // OPTIONAL: simple “open now” indicator (local time)
  const isOpenNow = useMemo(() => {
    const now = new Date();
    const hour = now.getHours(); // 0-23
    // Open 8AM (8) - 10PM (22). If you mean “closes at 10”, keep < 22.
    return hour >= 8 && hour < 22;
  }, []);

  return (
    <Container fluid className="info-container">
      {/* You can keep your blob elements if you already have them */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="hours-information">
        <div className="left">
          <p className="hours-text brand">Ounces &amp; Eighths</p>
        </div>

        <div className="divider" />

        <div className="right-l">
          <p className={`hours-text hours ${isOpenNow ? "open" : "closed"}`}>
            <span className={`status-dot ${isOpenNow ? "on" : ""}`} />
            Open 8AM – 10PM
          </p>
        </div>
      </div>
    </Container>
  );
}
