import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  const location = useLocation();
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      className="navbar-light bg-white"
      onToggle={(nextExpanded) => setIsNavOpen(nextExpanded)}
    >
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/img/HikingTeam_favicon.png" alt="Logo" height="50" />
          <span>Syros Hiking Team</span>
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler second-button"
        >
          <div className={`animated-icon2 ${isNavOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Main Navigation Links */}
            <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive('/about') ? 'active' : ''}>
              About Us
            </Nav.Link>

            {/* Language Dropdown */}
            <NavDropdown
              title={<><i className="fas fa-globe"></i> EN</>}
              id="language-dropdown"
              className="language-dropdown"
              menuVariant="light"
              onMouseEnter={() => setIsLanguageHovered(true)}
              onMouseLeave={() => setIsLanguageHovered(false)}
              show={isLanguageHovered}
            >
              <NavDropdown.Item href="#english">English</NavDropdown.Item>
              <NavDropdown.Item href="#greek">Ελληνικά</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;