import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, primaryButton, secondaryButton, backgroundImage }) => {
  const backgroundStyle = { backgroundImage: `url(${backgroundImage})` };
  const overlayStyle = { backgroundColor: "rgba(37, 99, 235, 0.4)" };

  return (
    <section className="hero-section">
      <div className="hero-background" style={backgroundStyle}></div>
      <div className="hero-overlay" style={overlayStyle}></div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>

        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        {(primaryButton || secondaryButton) && (
          <div className="hero-buttons">
            {primaryButton && (
              <a
                href={primaryButton.href || '#'}
                className="btn btn-primary btn-lg"
                onClick={primaryButton.onClick}
              >
                {primaryButton.icon && (
                  <>
                    <i className={primaryButton.icon}></i>
                    <span className="icon-text-space"></span>
                  </>
                )}
                {primaryButton.text}
              </a>
            )}

            {secondaryButton && (
              <a
                href={secondaryButton.href || '#'}
                className="btn btn-outline btn-lg"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.icon && (
                  <>
                    <i className={secondaryButton.icon}></i>
                    <span className="icon-text-space"></span>
                  </>
                )}
                {secondaryButton.text}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;