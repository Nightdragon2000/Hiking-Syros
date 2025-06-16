import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row className="align-items-center">

          {/* Logo and Info */}
          <Col lg={4} className="mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <img
                src="/img/HikingTeam_favicon.png"
                alt="Syros Hiking Team Logo"
                height="45"
                className="me-3"
              />
              <div>
                <h6 className="mb-1">Syros Hiking Team</h6>
                <span className="small opacity-75">Exploring Syros since 2005</span>
              </div>
            </div>
          </Col>

          {/* Navigation Links */}
          <Col lg={4} md={6} className="mb-3 mb-lg-0 text-center">
            <div className="footer-links d-flex justify-content-center flex-wrap">
              <a href="/" className="text-white text-decoration-none mx-2 hover-underline">
                Home
              </a>
              <a href="#/about" className="text-white text-decoration-none mx-2 hover-underline">
                About
              </a>
              {/* Routes (Under Development) */}
              {/* <a href="/routes" className="text-white text-decoration-none mx-2 hover-underline">
                Routes
              </a> */}
              {/* Events (Under Development) */}
              {/* <a href="/events" className="text-white text-decoration-none mx-2 hover-underline">
                Events
              </a> */}
              {/* Contact (Under Development) */}
              {/* <a href="/contact" className="text-white text-decoration-none mx-2 hover-underline">
                Contact
              </a> */}
            </div>
          </Col>

          {/* Social Media Icons */}
          <Col lg={4} md={6} className="mb-3 mb-lg-0 text-lg-end">
            <div className="social-icons d-inline-flex">
              <a href="#" className="text-white me-3 social-link" title="Facebook">
                <FontAwesomeIcon icon={faFacebookF} size="sm" />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-3 opacity-25" />

        {/* Copyright */}
        <Row>
          <Col xs={12} className="text-center">
            <p className="mb-0 small opacity-75">
              &copy; {currentYear} Syros Hiking Team. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;