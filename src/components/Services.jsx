import { Layout, BarChart3, GitBranch, Globe, ArrowRight } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5535991623621?text=Fala%20Lucas%2C%20vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os.'

const services = [
  {
    icon: Layout,
    title: 'Landing Pages de Alta Conversão',
    tag: 'Conversão & Design',
    description:
      'Páginas construídas para vender, não apenas para impressionar. Combino psicologia de UX, estrutura de copy persuasiva e otimização contínua para transformar visitantes em clientes.',
    outcomes: ['Estrutura pensada para o visitante agir', 'Carregamento rápido e layout testado no celular', 'Formulário validado e medição configurada'],
    color: 'from-amber-400 to-yellow-700',
    glow: 'rgba(212, 175, 55, 0.15)',
  },
  {
    icon: BarChart3,
    title: 'Tracking & Análise de Dados',
    tag: 'Dados & Performance',
    description:
      'Stack completo de atribuição: Facebook Pixel, Google Tag Manager, UTM e integração com RedTrack, para você saber exatamente de onde vem cada real investido.',
    outcomes: ['Eventos definidos junto com você', 'Atribuição da origem ao contato', 'Conferência dos disparos após publicar'],
    color: 'from-yellow-500 to-amber-800',
    glow: 'rgba(240, 200, 105, 0.15)',
  },
  {
    icon: GitBranch,
    title: 'Estruturação de Funis Digitais',
    tag: 'Crescimento Digital',
    description:
      'Funis do início ao fim: VSLs, upsells, sequências pós-compra e automações. Projetados para maximizar o faturamento de cada lead que entra no seu ecossistema.',
    outcomes: ['Fluxos de conversão em múltiplas etapas', 'Automação de e-mails e WhatsApp', 'UX otimizado para receita'],
    color: 'from-amber-500 to-yellow-800',
    glow: 'rgba(138, 109, 31, 0.2)',
  },
  {
    icon: Globe,
    title: 'Sites Institucionais & Sistemas Web',
    tag: 'Desenvolvimento Web',
    description:
      'De sites de autoridade a aplicações web completas, com código limpo, arquitetura escalável e performance de produção usando React, Node.js e integrações de API.',
    outcomes: ['Stack React + Node.js', 'Integrações de API', 'Arquitetura escalável'],
    color: 'from-amber-400 to-yellow-700',
    glow: 'rgba(245, 215, 142, 0.15)',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #d4af37 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-xl mb-10 sm:mb-16 reveal">
          <span className="section-label mb-4">O Que Faço</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Serviços focados em{' '}
            <span className="text-gradient">resultado para o seu negócio</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Não entrego apenas código. Entrego sistemas que geram resultados mensuráveis.
            Cada solução é pensada para impactar diretamente o crescimento da sua empresa.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="reveal glass glass-hover rounded-2xl p-5 sm:p-7 group cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${service.glow}` }}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-mono font-medium tracking-wider uppercase px-3 py-1 rounded-full"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', color: '#f0c869' }}>
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #d4af37, #8a6d1f)' }} />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-1.5 text-sm text-amber-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Investimento */}
        <div className="mt-12 reveal glass rounded-2xl p-6 sm:p-8" style={{ border: '1px solid rgba(212,175,55,0.22)' }}>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                Projetos a partir de{' '}
                <span className="text-gradient">R$ 1.299</span>
              </h3>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                Esse é o valor inicial do projeto mais simples, uma landing page
                enxuta. Não é preço de tabela para qualquer página, porque o
                investimento final depende do que o projeto realmente exige.
              </p>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                Sites institucionais, funis, sistemas web e projetos para
                clínicas são orçados depois da análise do escopo.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 mb-3">
                O que faz o investimento variar
              </h4>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  'Quantidade de seções',
                  'Complexidade do design',
                  'Produção ou revisão de copy',
                  'Formulários e integrações',
                  'Tracking e analytics',
                  'Animações',
                  'Prazo de entrega',
                  'Funcionalidades específicas',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #d4af37, #8a6d1f)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Escopo e investimento são definidos por escrito antes do início
                do projeto.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center reveal">
          <p className="text-slate-400 mb-6 text-sm">
            Receba uma proposta de acordo com o seu objetivo, prazo e
            necessidades técnicas.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Solicitar uma proposta</span>
          </a>
        </div>
      </div>
    </section>
  )
}
