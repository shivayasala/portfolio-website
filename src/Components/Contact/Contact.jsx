import React, { useState } from 'react';
import './Contact.css';
import mail from '../../assets/mail.png';
import location from '../../assets/location.jpeg';
import call from '../../assets/call.jpg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9de088ba-b4a6-4cfc-898e-b6bec4eb4b4a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      window.alert("Your message has been delivered successfully!");
    } else {
      console.log("Error", data);
      setResult(data.message);
      window.alert("There was an error delivering your message. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects and provide a fully finished website. You can call me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Email icon" height="20px" width="20px" />
              <p>shivakumar.630485@gamil.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="Call icon" height="20px" width="20px" />
              <p>123456654</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location icon" height="20px" width="20px" />
              <p>Hyderabad, Telangana state</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label htmlFor="message">Write your message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit</button>
        </form>
      </div>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
