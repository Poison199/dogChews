import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <div className="main-content">
      {/* Your main content goes here */}
      
      <footer className="footer">
        <div className="container">
          <p className="text">© 2025 Dog Chews. All rights reserved.</p>
          <div className="socialLinks">
            <a href="https://facebook.com" className="socialIcon" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={16} />
            </a>
            <a href="https://instagram.com" className="socialIcon" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={16} />
            </a>
            <a href="https://linkedin.com" className="socialIcon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
