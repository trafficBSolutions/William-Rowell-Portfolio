import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMenuOutline } from 'react-icons/io5';
import { useState } from 'react';
import images from '../utils/images';
import '../css/error.css';
export default function Error() {
    const [isNavOpen, setIsNavOpen] = useState(false);
        const toggleMenu = () => {
            setIsNavOpen(!isNavOpen);
        };
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
                        <img className="tbs-header-img" src={images['TBSPDF7.svg']} alt="Will Img"/>
                        </div>
                    <ul className="main-nav-list">
                        <li><a className="main-nav-link" href="/">Home</a></li>
                        <li><a className="main-nav-link" href="/about-me">About</a></li>
                        <li><a className="main-nav-link" href="/projects">Projects</a></li>
                        <li><a className="main-nav-link" href="/contact-me">Contact</a></li>
                    </ul>
                      <div className="mobile-nav-close">
                    <img className="header-img" src={images['Material WorX.svg']} alt="Will Img"/>
                    </div>
    </nav>
            </header>
            <div className="error-container">
                <h1 className="error-will-h1">WILLIAM ROWELL: <strong className="oops">"OOPS!!"</strong></h1>
      <h1 className="warning-emoji">⚠️</h1>
      <h1 className="error">ERROR - 404</h1>
      <h2 className="error-h1">PAGE NOT FOUND</h2>
      <p className="error-p">The page you are looking for might have been removed, had its name changed, or does not exist.</p>
        <a href="/" className="back-home-link">Back to Home</a>
    </div>
                <footer className="footer">
                    <div className="footer-content">
                        <li><a className="footer-li" href="">Home</a></li>
                        <li><a className="footer-li" href="/about-me">About</a></li>
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