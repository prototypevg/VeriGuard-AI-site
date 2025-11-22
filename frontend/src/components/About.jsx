import React from 'react';
import { AlertCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 px-6 lg:px-8" style={{ backgroundColor: '#f7ede1' }}>
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            style={{ color: '#39843e' }}
          >
            O que é a VeriGuard AI
          </h2>

          <div
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4"
            style={{ borderColor: '#39843e' }}
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1a1a1a' }}>
              A VeriGuard AI é uma plataforma em fase de concepção, criada para resolver
              problemas críticos de autenticidade digital, segurança comercial e prevenção
              de fraudes financeiras.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1a1a1a' }}>
              Ainda não lançada oficialmente, buscamos investimento para desenvolver e
              aplicar essa tecnologia no mercado real.
            </p>

            <div
              className="flex items-start space-x-4 p-6 rounded-xl mt-8"
              style={{ backgroundColor: '#39843e', opacity: 0.95 }}
            >
              <AlertCircle size={28} style={{ color: '#FFFFFF', flexShrink: 0 }} />
              <p className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                Em desenvolvimento — aberta a parcerias e investidores
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;