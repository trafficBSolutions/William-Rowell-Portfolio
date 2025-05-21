import React, { useState } from 'react';
import '../css/project.css';
import '../css/header.css';
import '../css/footer.css';
import images from '../utils/images';
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMenuOutline } from 'react-icons/io5';

const Project = () => {
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
            <li><a className="main-nav-link-view" href="">Projects</a></li>
            <li><a className="main-nav-link" href="/contact-me">Contact</a></li>
          </ul>
          <div className="mobile-nav-close">
            <img className="header-img" src={images['Material WorX.svg']} alt="Brand" />
          </div>
        </nav>
      </header>

      <main className="project-main">
        <h1 className="project-h1">Projects</h1>
        <div className="project-grid">
          {[
            {
              title: "Traffic Control Website",
              description: "Scheduling platform for traffic control jobs with a job application portal.",
              stack: "React, Express, MongoDB, Node",
              demo: "https://www.trafficbarriersolutions.com/",
              repo: "https://github.com/trafficBSolutions/TBS",
              server: "https://github.com/trafficBSolutions/TBS-Server",
            },
            {
              title: "Sign Shop Website",
              description: "Logo submission and project intake for signage and branding services.",
              stack: "React, Express, MongoDB, Node",
              demo: "https://www.material-worx.com/",
              repo: "https://github.com/trafficBSolutions/MX",
              server: "https://github.com/trafficBSolutions/MX-Server",
            },
            {
              title: "Excavation Website",
              description: "Full-stack website for excavation services with a contact and quote form.",
              stack: "React, Express, MongoDB, Node",
              demo: "https://www.skylinebuildersgallc.com/",
              repo: "https://github.com/trafficBSolutions/Skyline-Builders",
              server: "https://github.com/trafficBSolutions/Skyline-Builders-Server",
            }
          ].map((project, index) => (
            <div key={index} className="project-card-page">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Stack:</strong> {project.stack}</p>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.server} target="_blank" rel="noopener noreferrer">Server</a>
              </div>
            </div>
          ))}
        </div>
      </main>

            <footer className="footer">
                <div className="footer-content">
                    <li><a className="footer-li" href="/">Home</a></li>
                    <li><a className="footer-li" href="/about-me">About</a></li>
                    <li><a className="footer-li-view" href="">Projects</a></li>
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
};

export default Project;