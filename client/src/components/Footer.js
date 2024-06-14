import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      <nav>
        <Link to="/terms">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link> | <Link to="/about">About Us</Link> {/* Add About Us link */}
      </nav>
    </footer>
  );
};

export default Footer;
