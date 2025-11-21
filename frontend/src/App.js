import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import HowItWorks from './components/HowItWorks';
import WhyItMatters from './components/WhyItMatters';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f7ede1' }}>
      <Header />
      <Hero />
      <About />
      <Modules />
      <HowItWorks />
      <WhyItMatters />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;