import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-1 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#39843e' }}>
            Contato
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#4a4a4a' }}>
            Quer saber mais, apoiar ou conversar sobre a VeriGuard AI?
          </p>

          <div
            className="inline-flex items-center space-x-3 p-2 rounded-2xl shadow-lg"
            style={{ backgroundColor: '#f7ede1' }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#39843e' }}
            >
              <Mail size={32} style={{ color: '#FFFFFF' }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold mb-1" style={{ color: '#416b44' }}>
                E-mail
              </p>
              <a
                href="mailto:contatoveriguard@gmail.com"
                className="text-2xl font-bold hover:underline transition-all duration-200"
                style={{ color: '#39843e' }}
              >
                contatoveriguard@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;