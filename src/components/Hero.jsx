import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../css/Hero.css';

export default function Header() {
  return (
    <div className="header">

      
      
      <Navbar expand="lg" variant="dark" className="header-navbar">
        <Navbar.Brand className="header-logo">LOGO</Navbar.Brand>

        {/* ✅ Hamburger */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* ✅ Collapsible area */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto header-nav-links">
            <Nav.Link href="#home" className="header-nav-link">HOME</Nav.Link>
            <Nav.Link href="#order" className="header-nav-link">ORDER ONLINE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="header-content">
        <h1 className="header-title">Premium <span className="cannabis-span">Cannabis</span></h1>
        <p className="header-subtitle">Explore the best weed at the best prices, 21+ only</p>
        <Button className="cta-button">SHOP ONLINE</Button>
      </div>
    </div>
  );
}
