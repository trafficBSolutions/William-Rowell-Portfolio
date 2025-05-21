import React, { useState } from 'react';
import '../css/header.css';
import '../css/footer.css';
import '../css/about.css'; 
import images from '../utils/images';
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMenuOutline } from 'react-icons/io5';

export default function About() {
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
            <li><a className="main-nav-link-view" href="">About</a></li>
            <li><a className="main-nav-link" href="/projects">Projects</a></li>
            <li><a className="main-nav-link" href="/contact-me">Contact</a></li>
          </ul>
          <div className="mobile-nav-close">
            <img className="header-img" src={images['Material WorX.svg']} alt="Brand" />
          </div>
        </nav>
      </header>

      <main className="about-main">
        <section className="about-hero">
            <div className="about-hero-text">
                <h1>Hi, I'm William Rowell</h1>
            <p>A MERN Stack Web Developer with a passion for clean design and practical solutions.</p>
            </div>
          <div className="gradient-about-border">
          <img src={images['web-img.jpg']} alt="Will Rowell" className="about-img" />
          </div>
        </section>

        <section className="about-story">
          <h2>My Journey</h2>
          <p>I’ve always been driven by curiosity and a love for building. My experience with Asperger’s has taught me to focus deeply, stay organized, and create systems that make life easier—for both myself and others.</p>
        </section>

        <section className="about-skills">
          <h2>What I Do</h2>
          <p>I build full-stack web apps using:</p>
          <ul>
            <li>React & React Router</li>
            <li>Node.js & Express</li>
            <li>MongoDB & Mongoose</li>
            <li>REST APIs & Axios</li>
            <li>Hosting with Render, Azure, Netlify, and Heroku</li>
          </ul>
        </section>

        <section className="about-values">
          <h2>How I Work</h2>
          <p>I thrive in environments where clarity, structure, and direct communication are key. I enjoy working independently or with teams that value focus and mutual respect.</p>
        </section>

        <section className="about-contact">
          <h2>Let’s Connect</h2>
          <p>Want to collaborate or hire me? <a href="/contact-me">Get in touch!</a></p>
        </section>
      </main>

            <footer className="footer footer-about">
                <div className="footer-content">
                    <li><a className="footer-li" href="/">Home</a></li>
                    <li><a className="footer-li-view" href="">About</a></li>
                    <li><a className="footer-li" href="/projects">Projects</a></li>
                    <li><a className="footer-li" href="/contact-me">Contact</a></li>
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
  );
}
