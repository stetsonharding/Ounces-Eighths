import React from 'react';

import '../css/Hero.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
 <div className="header">
  <div className="hero-bg" />
  <div className="hero-overlay" />

  <div className="header-content">
    <div className="hero-badge">21+ • Order Online • Pickup Available</div>

    <h1 className="header-title">
      Premium Cannabis.<br />
      <span>Better Prices.</span>
    </h1>

    <p className="header-subtitle">
      Shop quality flower, vapes, edibles, concentrates, and more from your local Washington dispensary.
    </p>

    <div className="hero-actions">
      <Link to="/orderOnline" className="cta-button">Shop Online</Link>
      <Link to="/locations" className="secondary-button">View Locations</Link>
    </div>
  </div>
</div>
  );
}
