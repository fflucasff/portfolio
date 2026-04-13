import { CheckCircle2, ArrowRight } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5535991796968?text=Fala%20Lucas%2C%20vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os.'

const traits = [
  {
    title: 'Mentalidade de negócios',
    desc: 'Não escrevo código por escrever — resolvo problemas de negócio. Cada decisão técnica mapeia para um resultado mensurável.',
  },
  {
    title: 'Visão full-funnel',
    desc: 'Do primeiro clique à conversão final, entendo como tudo se conecta: anúncios, páginas, tracking, CRM e automações.',
  },
  {
    title: 'Obsessão por performance',
    desc: 'Carregamento rápido, código limpo, zero perda de dados de tracking. Qualidade é inegociável em tudo que entrego.',
  },
  {
    title: 'Comunicação clara',
    desc: 'Os clientes sempre sabem o andamento do projeto. Sem surpresas, sem enrolação — entrega consistente e profissional.',
  },
]

const timeline = [
  { year: '2021', event: 'Início no desenvolvimento web — HTML, CSS e JavaScript' },
  { year: '2022', event: 'Primeiros projetos para clientes — sites e landing pages' },
  { year: '2023', event: 'Expansão para tracking, funis digitais e React' },
  { year: '2024', event: 'Projetos com empresas focadas em performance digital' },
  { year: 'Hoje', event: 'Construindo sistemas digitais de alto impacto para negócios sérios', active: true },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — positioning */}
          <div>
            <div className="reveal">
              <span className="section-label mb-4">Sobre Mim</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Desenvolvedor com{' '}
                <span className="text-gradient">visão estratégica</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                Sou <span className="text-white font-medium">Lucas Figueiredo Fernandes</span>, desenvolvedor
                full-stack por trás da <span className="text-white font-medium">LFF Industries</span> — focado em
                construir sistemas digitais que ajudam empresas a vender mais, crescer e se estruturar no ambiente online.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Minha bagagem une engenharia de software com inteligência de marketing digital.
                Entendo stacks de tracking, funis de anúncios e estratégia de CRO — não só como empurrar código.
                Isso me torna valioso para empresas que querem um desenvolvedor que pensa como parceiro de crescimento.
              </p>
            </div>

            {/* Traits */}
            <div className="space-y-4">
              {traits.map((trait, i) => (
                <div key={trait.title} className="reveal flex gap-4"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
                  <CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{trait.title}</div>
                    <div className="text-sm text-slate-500 leading-relaxed">{trait.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 reveal">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="flex items-center gap-2">
                  Trabalhar comigo
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>
          </div>

          {/* Right — profile + timeline */}
          <div className="reveal-right space-y-6">
            {/* Profile card */}
            <div className="glass rounded-2xl p-6 flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <img
                  src="/img/imagem_perfil.png"
                  alt="Lucas Figueiredo Fernandes"
                  className="w-20 h-20 rounded-xl object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center text-white font-black text-2xl hidden">
                  L
                </div>
                <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#0f172a]" />
              </div>
              <div>
                <div className="text-base font-bold text-white">Lucas Figueiredo Fernandes</div>
                <div className="text-sm text-indigo-400 font-mono mb-1">LFF Industries</div>
                <div className="text-xs text-slate-500">Full-Stack Dev · Growth Engineer</div>
                <div className="flex gap-3 mt-2">
                  <a href="mailto:lff.industries@gmail.com" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                    lff.industries@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass rounded-2xl p-7">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-7">
                Trajetória
              </h3>
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5 transition-all duration-300 ${
                        item.active
                          ? 'bg-indigo-400 shadow-lg shadow-indigo-500/50 ring-4 ring-indigo-500/20'
                          : 'bg-slate-700 group-hover:bg-slate-500'
                      }`} />
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-slate-800 my-1.5" />
                      )}
                    </div>
                    <div className="pb-6">
                      <span className={`text-xs font-mono font-bold tracking-wider ${item.active ? 'text-indigo-400' : 'text-slate-600'}`}>
                        {item.year}
                      </span>
                      <p className={`text-sm mt-0.5 leading-relaxed ${item.active ? 'text-slate-200 font-medium' : 'text-slate-500'}`}>
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
