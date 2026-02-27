import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
const Navigation = () => {
  return (
      <Navbar expand="lg" variant="dark" className="header-navbar">
        <Navbar.Brand className="header-logo">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto header-nav-links">
            <Nav.Link href="/" className="header-nav-link">HOME</Nav.Link>
            <Nav.Link href="/orderOnline" className="header-nav-link">ORDER ONLINE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation
