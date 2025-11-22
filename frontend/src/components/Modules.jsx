import React from 'react';
import { Shield, Lock, CreditCard } from 'lucide-react';

const Modules = () => {
  const modules = [
    {
      icon: Shield,
      title: 'Trustchain',
      subtitle: 'Autenticação de Produtos',
      description:
        'Para vendedores digitais que precisam autenticar produtos e monitorar com evidência técnica.',
      features: [
        'Gera o Evidence Pack: hash, timestamp, assinatura digital e metadados',
        'Resolve clonagem de produtos',
        'Previne contestação injusta de vendas',
        'Fornece prova técnica em disputas'
      ],
      color: '#39843e'
    },
    {
      icon: Lock,
      title: 'Gatekeeper',
      subtitle: 'Controle de Acesso Comercial',
      description:
        'Para marketplaces e plataformas que exigem validação obrigatória antes da liberação comercial.',
      features: [
        'Atua como filtro de entrada',
        'Bloqueia produtos não autenticados',
        'Impede vendedores sem verificação',
        'Protege reputação da plataforma'
      ],
      color: '#416b44'
    },
    {
      icon: CreditCard,
      title: 'Finance',
      subtitle: 'Prevenção de Fraudes Financeiras',
      description:
        'Para bancos, fintechs e gateways que enfrentam fraudes como lavagem de dinheiro, cartões clonados e invasão de contas.',
      features: [
        'Detecta padrões suspeitos com IA',
        'Gera alertas com rastreabilidade',
        'Previne transações fraudulentas',
        'Reduz riscos regulatórios e multas'
      ],
      color: '#39843e'
    }
  ];

  return (
    <section id="modulos" className="py-20 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#39843e' }}>
            Módulos da Plataforma
          </h2>
          <p className="text-xl" style={{ color: '#4a4a4a' }}>
            Três soluções integradas para máxima proteção
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="card-hover bg-white rounded-2xl p-8 border-2 shadow-lg"
                style={{ borderColor: '#f7ede1', animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: module.color }}
                >
                  <Icon size={32} style={{ color: '#FFFFFF' }} />
                </div>

                <h3 className="text-2xl font-bold mb-2" style={{ color: '#39843e' }}>
                  {module.title}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: '#416b44' }}>
                  {module.subtitle}
                </p>
                <p className="text-base mb-6 leading-relaxed" style={{ color: '#4a4a4a' }}>
                  {module.description}
                </p>

                <div className="space-y-3">
                  <p className="font-semibold text-sm" style={{ color: '#39843e' }}>
                    Resolve:
                  </p>
                  <ul className="space-y-2">
                    {module.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start space-x-2 text-sm"
                        style={{ color: '#4a4a4a' }}
                      >
                        <span style={{ color: '#39843e', fontWeight: 'bold' }}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modules;