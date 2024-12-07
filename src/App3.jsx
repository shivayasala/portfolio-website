import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/Services.jsx';
import MyWork from './Components/MyWork/MyWork.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import DocsBotComponent from './Components/Docs/DocsBotComponent.jsx';
import './App.css';
import Visuals from './Components/visuals/Visuals.jsx';

const App = () => {
  const [bgColor, setBgColor] = useState('white');

  const toggleBackgroundColor = () => {
    setBgColor(prevColor => (prevColor === 'white' ? 'black' : 'white'));
  };

  return (
    <div className={`app ${bgColor === 'white' ? 'bg-white' : 'bg-black'}`}>
      <Navbar toggleBackgroundColor={toggleBackgroundColor} navbarClass={bgColor === 'white' ? 'navbar-light' : 'navbar-dark'} isLightMode={bgColor === 'white'} />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Visuals />
      <Contact />
      <Footer />
      <DocsBotComponent />
    </div>
  );
};

export default App;
