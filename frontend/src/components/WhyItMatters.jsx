import React from 'react';
import { CheckCircle2, ShieldCheck, FileText, TrendingUp } from 'lucide-react';

const WhyItMatters = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Redução de fraudes e disputas',
      description: 'Minimiza riscos e prejuízos com autenticação técnica'
    },
    {
      icon: FileText,
      title: 'Proteção jurídica com evidência técnica',
      description: 'Documentação completa com validade legal'
    },
    {
      icon: CheckCircle2,
      title: 'Conformidade com normas e reguladores',
      description: 'Atende exigências de compliance e auditoria'
    },
    {
      icon: TrendingUp,
      title: 'Aumento da confiança do consumidor e do mercado',
      description: 'Fortalece reputação e credibilidade da marca'
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#39843e' }}>
            Por que isso importa
          </h2>
          <p className="text-xl" style={{ color: '#4a4a4a' }}>
            Benefícios reais para seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="fade-in-up flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md border-l-4 hover:shadow-lg transition-shadow duration-300"
                style={{ borderColor: '#39843e', animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#39843e' }}
                >
                  <Icon size={28} style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#39843e' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;