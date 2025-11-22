import React from 'react';
import { Brain, FileCheck, Zap, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Brain,
      title: 'Análise com IA',
      description: 'A IA analisa dados da transação, produto ou conta em tempo real'
    },
    {
      icon: FileCheck,
      title: 'Evidence Pack',
      description: 'Gera um pacote de evidências com validade técnica e rastreabilidade'
    },
    {
      icon: Zap,
      title: 'Integração',
      description: 'Integra com plataformas via API ou webhooks de forma simples'
    },
    {
      icon: CheckCircle,
      title: 'Verificação',
      description:
        'Permite verificação por consumidores, marketplaces e instituições financeiras'
    }
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 px-6 lg:px-8"
      style={{ backgroundColor: '#f7ede1' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#39843e' }}>
            Como Funciona
          </h2>
          <p className="text-xl" style={{ color: '#4a4a4a' }}>
            Processo simplificado em 4 etapas
          </p>
        </div>

        <div className="relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -mt-0.5" style={{ backgroundColor: '#39843e', opacity: 0.2 }}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="fade-in-up flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 pulse-glow"
                    style={{ backgroundColor: '#39843e' }}
                  >
                    <Icon size={36} style={{ color: '#FFFFFF' }} />
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md h-full">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#39843e' }}>
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;