import React, { useState } from 'react';
import '../css/contact.css';
import '../css/header.css';
import '../css/footer.css';
import images from '../utils/images';
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMenuOutline } from 'react-icons/io5';
export default function Contact() {
    const [isNavOpen, setIsNavOpen] = useState(false);
      const toggleMenu = () => setIsNavOpen(!isNavOpen);
      return (
        <div>
              <header className="header">
        <div className="mobile-nav-icon">
          <button className="mobile-nav" onClick={toggleMenu}>
            <IoMenuOutline className="icon-mobile-nav" />
          </button>
        </div>

        <nav className={`main-nav ${isNavOpen ? 'active' : ''}`}>
          <div className="mobile-nav-close">
            <img className="tbs-header-img" src={images['TBSPDF7.svg']} alt="Logo" />
          </div>
          <ul className="main-nav-list">
            <li><a className="main-nav-link" href="/">Home</a></li>
            <li><a className="main-nav-link" href="/about-me">About</a></li>
            <li><a className="main-nav-link" href="/projects">Projects</a></li>
            <li><a className="main-nav-link-view" href="">Contact</a></li>
          </ul>
          <div className="mobile-nav-close">
            <img className="header-img" src={images['Material WorX.svg']} alt="Brand" />
          </div>
        </nav>
      </header>
      <main className="contact-main">
        <h1 className="contact-h1">Contact</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-h2">Contact Information</h2>
            <p>Email: <a href="mailto:tbsolutions9@gmail.com">tbsolutions9@gmail.com</a></p>
            <p>Phone: <a href="tel:+17068790106">(706) 879-0106</a></p>
            <p>Location: Calhoun, GA</p>
            <p><a href="/resume.pdf" download>Download My Resume</a></p>
          </div>
        </div>
      </main>
       <footer className="footer">
                      <div className="footer-content">
                          <li><a className="footer-li" href="/">Home</a></li>
                          <li><a className="footer-li" href="/about-me">About</a></li>
                          <li><a className="footer-li" href="/projects">Projects</a></li>
                          <li><a className="footer-li-view" href="">Contact</a></li>
                          <div className="social-links">
          <a href="https://www.linkedin.com/in/william-rowell-5097131a0/" target="_blank" rel="noopener noreferrer">
        <IoLogoLinkedin className="linkedin-icon" />
      </a>
      <a href="https://www.facebook.com/will.rowell.779" target="_blank" rel="noopener noreferrer">
      <IoLogoFacebook className="facebook-icon" />
      </a>
      <a href="https://www.instagram.com/willrowell" target="_blank" rel="noopener noreferrer">
      <IoLogoInstagram className="instagram-icon" />
      </a>
      <a href="https://github.com/trafficBSolutions" target="_blank" rel="noopener noreferrer">
      <IoLogoGithub className="github-icon" />
      </a>
          </div>
                          </div>
                      <div className="footer-copyright">
            <p className="footer-copy-p">&copy; 2025 Traffic & Barrier Solutions, LLC - 
              Website MERN Stack Coded & Deployed by <a className="footer-face"href="https://www.facebook.com/will.rowell.779" target="_blank" rel="noopener noreferrer">William Rowell</a> - All Rights Reserved.</p>
          </div>
                  </footer>
      </div>
      )
}