import React from 'react';
import { Rocket, MessageCircle } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8" style={{ backgroundColor: '#39843e' }}>
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-up text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Pronto para Transformar a Segurança Digital?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#f7ede1' }}>
            Seja um dos primeiros a experimentar a VeriGuard AI e fazer parte da revolução na autenticação digital
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Botão Teste o Protótipo */}
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl w-full sm:w-auto"
              style={{ backgroundColor: '#FFFFFF', color: '#39843e' }}
            >
              <div className="flex items-center justify-center space-x-3">
                <Rocket size={24} className="group-hover:animate-bounce" />
                <span>Teste o Protótipo</span>
              </div>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)' }}
              ></div>
            </button>

            {/* Botão Fale Conosco */}
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl w-full sm:w-auto"
              style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: '3px solid #FFFFFF' }}
            >
              <div className="flex items-center justify-center space-x-3">
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Fale Conosco</span>
              </div>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#f7ede1' }}></div>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#f7ede1', animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#f7ede1', animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
