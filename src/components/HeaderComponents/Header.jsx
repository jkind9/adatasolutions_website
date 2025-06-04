import React from 'react';
import logo from '../../assets/images/logo.png';
import '../Styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="James Alexander Logo" className="header-logo" />
        <div className="header-text">
          <h1 className="header-name">James Alexander</h1>
          <div className="header-tagline">
            Pioneering new technology across all industries.
          </div>
        </div>
      </div>
      <div className="header-right">
        <a
          href="https://www.linkedin.com/in/james-alexander-146239a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
