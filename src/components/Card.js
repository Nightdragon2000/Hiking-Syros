import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faRoute, faMountain, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const getDifficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'success';
    case 'moderate':
      return 'warning';
    case 'hard':
      return 'danger';
    default:
      return 'success';
  }
};

export const FeatureCard = ({ icon, title, description, linkText, linkHref }) => {
  return (
    <div className="feature-card card text-center">
      <div className="feature-icon mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>

      {/* Show link only if both linkText and linkHref are provided  */}
      {linkText && linkHref && (
        <a href={linkHref} className="feature-link">
          {linkText}
          <span className="icon-text-space"></span>
          <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </a>
      )}
    </div>
  );
}


export const TrailCard = ({ title, description, image, difficulty, distance, elevation, rating, duration, onExplore }) => {
  return (
    <div className="trail-card-wrapper">
      <div className="card trail-card">
        {/* Image Section */}
        <div className="trail-image-container position-relative">
          <img src={image} alt={title} className="trail-image" />
          <div className="trail-overlay"></div>
          <div className="position-absolute top-0 end-0 m-3">
            <span className={`badge bg-${getDifficultyColor(difficulty)} px-3 py-2`}>
              {difficulty}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="card-body p-4 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="trail-title mb-0">{title}</h5>
            <div className="trail-duration d-flex align-items-center text-muted small">
              <FontAwesomeIcon icon={faClock} className="me-1" />
              {duration}
            </div>
          </div>

          <p className="text-muted">{description}</p>

          {/* Stats Section */}
          <div className="trail-stats d-flex justify-content-between mb-4">
            {/* Distance */}
            <div className="stat-item text-center">
              <div className="stat-icon text-primary mb-1">
                <FontAwesomeIcon icon={faRoute} />
              </div>
              <div className="stat-value fw-bold">{distance}</div>
              <div className="stat-label small text-muted">Distance</div>
            </div>

            {/* Elevation */}
            <div className="stat-item text-center">
              <div className="stat-icon text-primary mb-1">
                <FontAwesomeIcon icon={faMountain} />
              </div>
              <div className="stat-value fw-bold">{elevation}</div>
              <div className="stat-label small text-muted">Elevation</div>
            </div>

            {/* Rating */}
            <div className="stat-item text-center">
              <div className="stat-icon text-warning mb-1">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="stat-value fw-bold">{rating}</div>
              <div className="stat-label small text-muted">Rating</div>
            </div>
          </div>

          {/* Explore Button */}
          <button className="btn btn-primary mt-auto" onClick={onExplore}>
            Explore Trail
          </button>
        </div>
      </div>
    </div>
  );
};


export const EventCard = ({ title, description, date, time, location, image, difficulty, onJoin }) => {
  return (
    <div className="event-card-wrapper">
      <div className="card event-card">
        {/* Image Section */}
        <div className="event-image-container position-relative">
          <img src={image} alt={title} className="event-image" />
          <div className="event-overlay"></div>
          <div className="position-absolute top-0 end-0 m-3">
            <span className={`badge bg-${getDifficultyColor(difficulty)} px-3 py-2`}>
              {difficulty}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="event-content p-4 d-flex flex-column h-100">
          {/* Date & Time */}
          <div className="event-date-badge mb-3">
            <div className="d-flex align-items-center text-primary">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              <span className="fw-semibold">{date}</span>
              <span className="ms-auto badge bg-light text-dark">{time}</span>
            </div>
          </div>

          <h4 className="event-title fw-bold mb-3">{title}</h4>
          <p className="event-description text-muted mb-4">{description}</p>

          {/* Details */}
          <div className="event-details mb-4">
            <div className="d-flex align-items-center mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
              <span className="text-muted">{location}</span>
            </div>

          </div>

          {/* Action Button */}
          <button className="btn btn-primary w-100 mt-auto" onClick={onJoin}>
            Join This Adventure
          </button>
        </div>
      </div>
    </div>
  );
};


export const PersonCard = ({ name, role, bio, socialLinks, imageUrl }) => {
  return (
    <div className="card h-100 border-0 shadow-sm">
      {/* Card Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="card-img-top"
          style={{ height: '250px', objectFit: 'cover' }}
        />
      )}
      
      {/* Card Body */}
      <div className="card-body">
        <div className="team-content p-4 text-center d-flex flex-column h-100">
          {/* Text Content */}
          <h4 className="fw-bold mb-2">{name}</h4>
          <p className="text-primary fw-semibold mb-3">{role}</p>
          <p className="text-muted mb-4 flex-grow-1">{bio}</p>
          
          {/* Social Links */}
          <div className="social-links d-flex justify-content-center gap-2">
            {socialLinks?.facebook && (
              <a
                href={socialLinks.facebook}
                className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                href={socialLinks.instagram}
                className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px' }}
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};