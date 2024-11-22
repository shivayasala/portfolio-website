import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/shiva.png';
import { Link as AnchorLink } from 'react-scroll';
import navbar1 from '../assets/navbar1.jpeg';
import wrong1 from '../assets/wrong1.jpg';

function Navbar({ toggleBackgroundColor, navbarClass, isLightMode }) {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openNavbar = () => {
    menuRef.current.classList.add('open');
  };

  const closeNavbar = () => {
    menuRef.current.classList.remove('open');
  };

  return (
    <div className={`navbar ${navbarClass}`}>
      <img src={logo} alt="Logo" height="80px" width="80px" className="navbar-logo" />
      <ul ref={menuRef} className={`nav-menu ${isLightMode ? 'nav-light' : 'nav-dark'}`}>
        <li>
          <AnchorLink className='anchor-link' offset={50} to='home' smooth={true} duration={500}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={logo} alt="Menu logo" height="20px" width="20px" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} to='about' smooth={true} duration={500}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={logo} alt="Menu logo" height="20px" width="20px" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} to='services' smooth={true} duration={500}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={logo} alt="Menu logo" height="20px" width="20px" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} to='work' smooth={true} duration={500}>
            <p onClick={() => setMenu("work")}>Projects</p>
          </AnchorLink>
          {menu === "work" ? <img src={logo} alt="Menu logo" height="20px" width="20px" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} to='contact' smooth={true} duration={500}>
            <div className="nav-content" onClick={() => setMenu("contact")}>
              Connect with Me
            </div>
          </AnchorLink>
        </li>
        <li>
          <button onClick={toggleBackgroundColor} className="bg-toggle-btn">
            {isLightMode ? 'Disable Light Mode' : 'Enable Light Mode'}
          </button>
        </li>
      </ul>
      <img src={navbar1} alt="Open Menu" height="40px" onClick={openNavbar} width="40px" className="nav-mob-open" />
      <img src={wrong1} onClick={closeNavbar} alt="Close Menu" height="40px" width="40px" className="nav-mob-close" />
    </div>
  );
}

export default Navbar;
