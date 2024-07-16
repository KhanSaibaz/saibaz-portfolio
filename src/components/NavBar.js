// NavBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';  // Import Nav
import github from '../assests/image/GitHub.png';
import linkedIn from '../assests/image/IN.png';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);  // Fix the typo

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
      <span className='logo-text'> Saibaz | Portfolio</span>
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skillsSect"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skill
            </Nav.Link>
            <Nav.Link
              href="#projectSection"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Project
            </Nav.Link>

            <Nav.Link
              href="#certificateSection"
              className={activeLink === 'certificate' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('certificate')}
            >
              Certificate
            </Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/khansaibaz231/" target="_blank">
                <img src={linkedIn} alt="icon"   />
              </a>
              <a href="https://github.com/KhanSaibaz/" target="_blank">
                <img src={github} alt="icon" />
              </a>
              {/* <a href="#">
                <img src={github} alt="icon" />
              </a> */}
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>
                <a href="#connect" className='saibazContact'> Let’s Connect</a>
              </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
