import React from 'react';
import { MessageCircle } from 'lucide-react';

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
            Seja um dos primeiros a experimentar o protótipo da VeriGuard AI e fazer parte da nossa revolução na autenticação digital
          </p>

          <div className="flex justify-center">
            {/* Botão Fale Conosco */}
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: '#FFFFFF', color: '#39843e' }}
            >
              <div className="flex items-center justify-center space-x-3">
                <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Fale Conosco</span>
              </div>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)' }}
              ></div>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12">
            <div className="relative w-64 h-1 mx-auto rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(247, 237, 225, 0.2)' }}>
              <div
                className="absolute top-0 left-0 h-full w-1/3 rounded-full"
                style={{
                  backgroundColor: '#f7ede1',
                  animation: 'shimmer 2s ease-in-out infinite'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
