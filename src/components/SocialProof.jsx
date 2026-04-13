import { TrendingUp, Globe, Target, Users } from 'lucide-react'

const stats = [
  {
    icon: Globe,
    value: '30+',
    label: 'Projetos digitais',
    desc: 'Sites, sistemas e funis entregues com qualidade',
    color: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99, 102, 241, 0.2)',
  },
  {
    icon: TrendingUp,
    value: '3x',
    label: 'Mais conversões',
    desc: 'Média de melhoria em landing pages otimizadas',
    color: 'from-purple-500 to-cyan-500',
    glow: 'rgba(139, 92, 246, 0.2)',
  },
  {
    icon: Target,
    value: '100%',
    label: 'Rastreamento preciso',
    desc: 'Implementações de tracking sem perda de dados',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6, 182, 212, 0.2)',
  },
  {
    icon: Users,
    value: '15+',
    label: 'Clientes atendidos',
    desc: 'Em e-commerce, serviços e infoprodutos',
    color: 'from-violet-500 to-indigo-600',
    glow: 'rgba(167, 139, 250, 0.2)',
  },
]

const logos = [
  'RedTrack', 'Meta Ads', 'Google Tag Manager', 'Hotjar',
  'React', 'Node.js', 'WordPress', 'Google Analytics',
  'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'TypeScript',
]

export default function SocialProof() {
  return (
    <section id="proof" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-indigo-500/30" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4">Resultados</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Empresas que crescem com{' '}
            <span className="text-gradient">estratégia e tecnologia</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="reveal glass glass-hover rounded-2xl p-6"
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}
                  style={{ boxShadow: `0 8px 20px ${stat.glow}` }}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-200 mb-2">{stat.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{stat.desc}</div>
              </div>
            )
          })}
        </div>

        {/* Technologies ticker */}
        <div className="reveal">
          <p className="text-center text-xs font-mono tracking-widest uppercase text-slate-600 mb-6">
            Ferramentas e plataformas que domino
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 items-center" style={{ animation: 'scroll-x 22s linear infinite', width: 'max-content' }}>
              {[...logos, ...logos].map((logo, i) => (
                <span key={i}
                  className="text-slate-500 text-sm font-medium whitespace-nowrap px-4 py-2 rounded-lg border border-white/5 hover:border-indigo-500/30 hover:text-slate-300 transition-colors cursor-default">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
