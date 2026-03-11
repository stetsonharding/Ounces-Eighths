import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <Navbar expand="lg" variant="dark" className="header-navbar">
      <Navbar.Brand href="/" className="header-logo">

        <img
          src={Logo}
          alt="Ounces & Eighths"
          className="nav-logo"

        />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="ms-auto header-nav-links">
          <Nav.Link href="/" className="header-nav-link">HOME</Nav.Link>
          <Nav.Link href="/orderOnline" className="header-nav-link">ORDER ONLINE</Nav.Link>
          <Nav.Link href="/locations" className="header-nav-link">LOCATIONS</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
