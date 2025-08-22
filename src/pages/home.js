import React, { useState } from 'react'; 
import images from '../utils/images'
import '../css/header.css';
import '../css/home.css';
import '../css/footer.css';
import HomePhotoGallery from '../photos/homePhotos';
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMenuOutline } from 'react-icons/io5';
const Home = () => {
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
                        <li><a className="main-nav-link-view" href="">Home</a></li>
                        <li><a className="main-nav-link" href="/about-me">About</a></li>
                        <li><a className="main-nav-link" href="/projects">Projects</a></li>
                        <li><a className="main-nav-link" href="/contact-me">Contact</a></li>
                    </ul>
                      <div className="mobile-nav-close">
                    <img className="header-img" src={images['Material WorX.svg']} alt="Will Img"/>
                    </div>
    </nav>
            </header>
            <div className="will-portfolio">
                <h1 className="will-port-h1">WILLIAM ROWELL</h1>
                <section className="port-img-section">
                    <div className="will-img-div">
                    <div className="will-description-div">
                    <h1 className="will-h1">Hey!
                        I am William Rowell! MERN Stack web developer!
                    </h1>
                    <p className="will-p">I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js.</p>
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
<div className="gradient-border">
  <img src={images['web-img3.jpg']} alt="Will Img" className="web-img" />
</div>
</div>
<a className="btn projectbtn" href="/projects">View My Work ↓</a>
                </section>
                <section id="projects" className="projects">
                    <h2 className="project-h2">Projects</h2>
                    <div className="project-div">
  <div className="project-card">
    <h3>Traffic Control Website</h3>
    <p>Website that allows for traffic control to have a user-friendly scheduling MERN Stack.
        Also has a Job Application Form for new hiries to apply for a job and attach their resume.
    </p>
    <p><strong>Stack:</strong> React, Express, MongoDB, Node</p>
    <a href="https://www.trafficbarriersolutions.com/" target="_blank">Live Demo</a>
    <a href="https://github.com/trafficBSolutions/TBS">GitHub</a>
    <a href ="https://github.com/trafficBSolutions/TBS-Server">GitHub Server</a>
  </div>
  <div className="project-card">
    <h3>Sign Shop Website</h3>
    <p>Website that allows for a sign shop to have a user-friendly submissions mainly logo redesign MERN Stack.
    </p>
    <p><strong>Stack:</strong> React, Express, MongoDB, Node</p>
    <a href="https://www.material-worx.com/" target="_blank">Live Demo</a>
    <a href="https://github.com/trafficBSolutions/MX">GitHub</a>
    <a href ="https://github.com/trafficBSolutions/MX-Server">GitHub Server</a>
  </div>
    <div className="project-card">
    <h3>Excavation Website</h3>
    <p>Website that allows for an excavation company to have a user-friendly MERN Stack.
    </p>
    <p><strong>Stack:</strong> React, Express, MongoDB, Node</p>
    <a href="https://www.skylinebuildersgallc.com/" target="_blank">Live Demo</a>
    <a href="https://github.com/trafficBSolutions/Skyline-Builders">GitHub</a>
     <a href ="https://github.com/trafficBSolutions/Skyline-Builders-Server">GitHub Server</a>
  </div>
      <div className="project-card">
    <h3>Mobile Detailing Website</h3>
    <p>Website that allows for a mobile detailing company to have a user-friendly MERN Stack.
    </p>
    <p><strong>Stack:</strong> React, Express, MongoDB, Node</p>
    <a href="https://www.highvisibilitydetailing.com/" target="_blank">Live Demo</a>
    <a href="https://github.com/trafficBSolutions/High-Visibility">GitHub</a>
     <a href ="https://github.com/trafficBSolutions/High-Vis-Server">GitHub Server</a>
  </div>
  </div>
</section>
<HomePhotoGallery />
<section className="skills">
  <h2>Skills</h2>
  <ul>
    <li>MERN Stack</li>
    <li>React Router</li>
    <li>MongoDB Atlas</li>
    <li>Node.js & Express</li>
    <li>GitHub & Git</li>
    <li>RESTful APIs</li>
    <li>Vite / Render / Netlify</li>
  </ul>
</section>
<section className="about">
  <h2>About Me</h2>
  <p>I’m a passionate developer with a unique perspective shaped by my journey with Asperger’s. I thrive in structured environments and love solving real-world problems with technology.</p>
</section>
<section className="contact">
  <h2>Contact</h2>
  <a href="mailto: tbsolutions9@gmail.com">Email: tbsolutions9@gmail.com</a>
  <a href="tel:+17068790106">Call: (706) 879-0106</a>
  <a href="/resume.pdf" download>Download Resume</a>
</section>

            </div>
            <footer className="footer">
                <div className="footer-content">
                    <li><a className="footer-li-view" href="">Home</a></li>
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
    )
}
export default Home;
