import React, { useState } from 'react';
import './Footer.css';
import user from '../../assets/user.jpeg';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      window.alert("Please enter your email to subscribe.");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      window.alert("You have subscribed successfully!");
      setEmail(""); // Clear the email input field
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="" />
          <p>I am a good web developer, and I have developed several projects which work well.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt="Cannot load the image right now" height="30px" width="30px" />
            <input 
              type="email" 
              placeholder="Enter your Email" 
              value={email} 
              onChange={handleEmailChange} 
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© All Rights Reserved 2024 Shiva Kumar Yasala.</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Contact Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
