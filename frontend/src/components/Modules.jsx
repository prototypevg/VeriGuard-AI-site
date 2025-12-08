import React from 'react';
import { Shield, Lock, CreditCard, Users, Building2, Landmark } from 'lucide-react';

const Modules = () => {
  const targetAudiences = [
    { icon: Users, label: 'Vendedores Digitais' },
    { icon: Building2, label: 'Marketplaces' },
    { icon: Landmark, label: 'Bancos, Fintechs & Gateways' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Autenticação de Produtos',
      description: 'Gera o Evidence Pack com hash, timestamp, assinatura digital e metadados da transação',
      benefits: [
        'Resolve clonagem de produtos',
        'Previne contestação injusta de vendas',
        'Fornece prova técnica em disputas'
      ]
    },
    {
      icon: Lock,
      title: 'Controle de Acesso Comercial',
      description: 'Atua como filtro de entrada, validando produtos e vendedores antes da liberação comercial',
      benefits: [
        'Bloqueia produtos não autenticados',
        'Impede vendedores sem verificação',
        'Protege reputação da plataforma'
      ]
    },
    {
      icon: CreditCard,
      title: 'Prevenção de Fraudes Financeiras',
      description: 'Detecta padrões suspeitos com IA e gera alertas com rastreabilidade completa',
      benefits: [
        'Previne transações fraudulentas',
        'Identifica lavagem de dinheiro',
        'Reduz riscos regulatórios e multas'
      ]
    }
  ];

  return (
    <section id="modulos" className="py-20 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#39843e' }}>
           A Solução
          </h2>
          <p className="text-xl mb-8" style={{ color: '#4a4a4a' }}>
            Um aplicativo integrado para proteção completa
          </p>
        </div>

        {/* Main App Card */}
        <div className="fade-in-up bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 mb-12" style={{ borderColor: '#39843e' }}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ backgroundColor: '#39843e' }}>
              <Shield size={48} style={{ color: '#FFFFFF' }} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#39843e' }}>
              VeriGuard AI - Confiança Digital
            </h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#4a4a4a' }}>
              Um aplicativo completo que combina autenticação de produtos, controle de acesso comercial 
              e prevenção de fraudes financeiras em uma única plataforma integrada.
            </p>
          </div>

          {/* Target Audiences */}
          <div className="mb-12">
            <p className="text-center text-lg font-semibold mb-6" style={{ color: '#416b44' }}>
              Desenvolvido para:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {targetAudiences.map((audience, index) => {
                const Icon = audience.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-white shadow-md"
                    style={{ border: '2px solid #39843e' }}
                  >
                    <Icon size={24} style={{ color: '#39843e' }} />
                    <span className="font-semibold" style={{ color: '#39843e' }}>
                      {audience.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border"
                  style={{ borderColor: '#f7ede1' }}
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#39843e' }}
                  >
                    <Icon size={28} style={{ color: '#FFFFFF' }} />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#39843e' }}>
                    {feature.title}
                  </h4>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start space-x-2">
                        <span style={{ color: '#39843e', fontWeight: 'bold', fontSize: '1.2em' }}>✓</span>
                        <span className="text-sm" style={{ color: '#4a4a4a' }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center fade-in-up">
          <p className="text-lg md:text-xl font-semibold" style={{ color: '#416b44' }}>
            Uma única solução para proteger vendedores, marketplaces e instituições financeiras
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modules;