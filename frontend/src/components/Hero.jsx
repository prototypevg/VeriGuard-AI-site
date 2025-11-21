import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4
      });
    }
    setParticles(newParticles);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#39843e' }}
    >
      {/* Animated Digital Grid */}
      <div className="digital-grid"></div>

      {/* Floating Particles */}
      <div className="hero-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            VeriGuard AI
          </h1>
          <p
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ color: '#f7ede1' }}
          >
            Confiança digital com evidência técnica
          </p>
          <p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#FFFFFF', opacity: 0.9 }}
          >
            Uma plataforma modular que protege produtos, marketplaces e transações
            financeiras com rastreabilidade jurídica.
          </p>

          <button
            onClick={scrollToAbout}
            className="btn-primary-vg inline-flex items-center space-x-2"
            style={{ backgroundColor: '#FFFFFF', color: '#39843e' }}
          >
            <span>Conheça a proposta</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ color: '#FFFFFF', opacity: 0.6 }}
      >
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;