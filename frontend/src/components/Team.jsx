import React from 'react';
import { User } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Carlos Martins',
      role: 'Fundador e Idealizador',
      description:
        'Especialista em tecnologia e inovação digital, com visão estratégica para segurança comercial.'
    },
    {
      name: 'Breno',
      role: 'Cofundador / Tecnologia',
      description:
        'Responsável pela arquitetura técnica e integração da IA com plataformas comerciais e financeiras.'
    }
  ];

  return (
    <section id="equipe" className="py-20 px-6 lg:px-8" style={{ backgroundColor: '#f7ede1' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#39843e' }}>
            Quem Somos
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4a4a4a' }}>
            Somos uma equipe enxuta, com experiência prática e visão clara. Acreditamos
            que a confiança digital precisa ser técnica, rastreável e acessível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="fade-in-up bg-white rounded-2xl p-8 shadow-lg card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#39843e' }}
                >
                  <User size={48} style={{ color: '#FFFFFF' }} />
                </div>

                <h3 className="text-2xl font-bold mb-2" style={{ color: '#39843e' }}>
                  {member.name}
                </h3>
                <p className="text-base font-semibold mb-4" style={{ color: '#416b44' }}>
                  {member.role}
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;