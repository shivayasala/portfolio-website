import React, { useState } from 'react';
import './Hero.css';
import logo from '../../assets/om.jpg';
import wrong1 from '../../assets/wrong1.jpg'; // Ensure you have a close icon

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const handleCloseResume = () => {
    setShowResume(false);
  };

  return (
    <div id='home' className='hero'>
      <img src={logo} alt="Sorry, we cannot load the image" height="200px" width="200px" />
      <h1><span>I'm Shiva Kumar Yasala, </span> a dynamic web page developer</h1>
      <p>
        I am Shiva Kumar Yasala, a student of Chaitanya Deemed to be University, pursuing my BTech second year. I have been learning web development since my 1st year and have good experience working with webpages.
      </p>
      <div className="hero-action">
        <div className="hero-connect" onClick={toggleContact}>Connect with me</div>
        <div className="hero-resume" onClick={toggleResume}>My Resume</div>
      </div>
      {showResume && (
        <div className="resume-box">
          <div className="resume-header">
            <h2>Shiva Kumar Yasala</h2>
            <img src={wrong1} alt="Close" className="close-btn" onClick={handleCloseResume} />
          </div>
          <p>Student, Chaitanya Deemed to be University</p>
          <p>BTech, Second Year</p>
          <p>Skills: Web Development, HTML, CSS, JavaScript, React</p>
          <p>Experience: 2 years of learning and working with web development</p>
        </div>
      )}
      {showContact && (
        <div className="contact-box">
          <h2>Contact Information</h2>
          <p>Phone: +1234567890</p>
          <p>Email: shiva@example.com</p>
        </div>
      )}
    </div>
  );
}

export default Hero;
