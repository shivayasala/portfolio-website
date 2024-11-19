import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import DocsBotComponent from './Components/Docs/DocsBotComponent';
import './App.css';
import Visuals from './Components/visuals/visuals';

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
      <Visuals/>
      <Contact />
      <Footer />
      <DocsBotComponent/>
      
    </div>
  );
};

export default App;
