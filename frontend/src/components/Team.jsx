import React from 'react';

const Team = () => {
  return (
    <section id="equipe" className="py-20 px-6 lg:px-8" style={{ backgroundColor: '#f7ede1' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#39843e' }}>
            Quem Sou
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4a4a4a' }}>
            Por trás da VeriGuard AI está uma visão clara: transformar a confiança digital em algo técnico, rastreável e acessível.
          </p>
        </div>

        <div className="fade-in-up bg-white rounded-2xl p-10 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://customer-assets.emergentagent.com/job_secure-verify-18/artifacts/ygdin0z6_file_00000000e93071f59473bde54172135c.png"
              alt="Carlos Martins"
              className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg"
              style={{ border: '4px solid #39843e' }}
            />

            <h3 className="text-3xl font-bold mb-3" style={{ color: '#39843e' }}>
              Carlos Martins
            </h3>
            <p className="text-lg font-semibold mb-6" style={{ color: '#416b44' }}>
              Fundador e Idealizador
            </p>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#4a4a4a' }}>
              Especialista em inovação digital, com visão estratégica para segurança comercial. 
              Com 16 anos, eu desenvolvi a VeriGuard AI para resolver problemas de autenticidade, fraude e confiança 
              no ambiente digital. Acredito que a VeriGuard AI é a base para um mercado mais seguro e transparente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;