import React from 'react';
import './About.css';
import logo from '../../assets/om.jpg';
import pic from '../../assets/70364.png';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={pic} alt="sorry we cannot provide the image" height="20px" width="20px" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={logo} alt="sorry we cannot provide the image" height="200px" width="200px" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Shiva Kumar Yasala. I have completed my 10th at Don Bosco High School Nalgonda, and my intermediate at TSRJC Sarvail with marks of 972/1000. At present, I am pursuing my bachelors and developing good web pages on the MERN stack.</p>
            <p>I have a good passion and dedication towards web development and am seeking a good internship.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML, CSS</p><hr /></div>
            <div className="about-skill"><p>JavaScript</p><hr /></div>
            <div className="about-skill"><p>React.js</p><hr /></div>
            <div className="about-skill"><p>Node.js</p><hr /></div>
            <div className="about-skill"><p>MongoDB</p><hr /></div>
          </div>
        </div>
      </div>
      <div className="about-achievement">
        <div className="about-achievements">
          <h1>Fresher</h1>
          <p>Looking for an internship</p>
        </div>
        <div className="vertical-line"></div>
        <div className="about-achievements">
          <h1>Projects</h1>
          <p>iNotebook, Text Converter</p>
        </div>
      </div>
      <div className="connect-section">
        <h2>Connect with Me</h2>
        <p>Feel free to reach out if you want to connect!</p>
      </div>
    </div>
  );
};

export default About;
