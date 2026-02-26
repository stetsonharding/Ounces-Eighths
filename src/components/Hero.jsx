import React from 'react';

import '../css/Hero.css';


export default function Header() {
  return (
    <div className="header">

      {/* Background layer (this is what zooms) */}
      <div className="hero-bg" />

      {/* (Optional) fog layers — you can delete these if you don’t want them yet */}
      <div className="fog fog-1" />
      <div className="fog fog-2" />

    
   

      <div className="header-content">
        <h1 className="header-title">
          Premium <span className="cannabis-span">Cannabis</span>
        </h1>
        <p className="header-subtitle">Explore the best weed at the best prices, 21+ only</p>
        <button className="cta-button">SHOP ONLINE</button>
      </div>
    </div>
  );
}
