const categories = [
  {
    label: 'Frontend',
    color: 'text-amber-400',
    techs: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'HTML / CSS', icon: '</>' },
      { name: 'JavaScript', icon: 'JS' },
    ],
  },
  {
    label: 'Backend & Dados',
    color: 'text-yellow-500',
    techs: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python (FastAPI)', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    label: 'Tracking & Marketing',
    color: 'text-amber-300',
    techs: [
      { name: 'Google Tag Manager', icon: '🏷️' },
      { name: 'Meta Pixel', icon: '📊' },
      { name: 'Google Analytics', icon: '📈' },
      { name: 'RedTrack', icon: '🎯' },
      { name: 'UTM / Atribuição', icon: '🔍' },
    ],
  },
  {
    label: 'Ferramentas',
    color: 'text-yellow-600',
    techs: [
      { name: 'Git / GitHub', icon: '🐙' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Figma', icon: '🎨' },
      { name: 'Vercel', icon: '▲' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="relative py-16 sm:py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <span className="section-label mb-4">Tecnologias</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            As ferramentas por trás de{' '}
            <span className="text-gradient">cada entrega</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((cat, ci) => (
            <div key={cat.label} className="reveal glass rounded-2xl p-6"
              style={{ transitionDelay: `${ci * 0.1}s` }}>
              <div className={`text-xs font-mono font-bold tracking-widest uppercase mb-5 ${cat.color}`}>
                {cat.label}
              </div>
              <div className="space-y-3">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3 group cursor-default">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.12)' }}>
                      {tech.icon}
                    </span>
                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Onde cada competência aparece, com evidência nos projetos */}
        <div className="glass rounded-2xl p-5 sm:p-7 reveal">
          <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 mb-6">
            Onde essas competências aparecem
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {[
              {
                skill: 'Interface e acessibilidade',
                evidencia:
                  'Os seis projetos são auditados em cinco larguras, com contraste conferido no critério AA, foco visível e navegação por teclado.',
              },
              {
                skill: 'Lógica de negócio no navegador',
                evidencia:
                  'O Escopo calcula orçamento em centavos inteiros e tem 12 testes automatizados cobrindo arredondamento e casos de borda.',
              },
              {
                skill: 'Conversão em serviço de alto valor',
                evidencia:
                  'Os cinco estudos de clínica usam estratégias distintas de qualificação, formulário validado e confirmação explícita.',
              },
              {
                skill: 'Tracking e atribuição',
                evidencia:
                  'Google Tag Manager, Meta Pixel e Analytics implantados em projetos de cliente, com eventos conferidos após a publicação.',
              },
              {
                skill: 'Publicação e automação',
                evidencia:
                  'Cada projeto publica por GitHub Actions, com checagem de tipos e build rodando antes de ir ao ar.',
              },
              {
                skill: 'Direção visual própria',
                evidencia:
                  'Cada estudo tem tipografia, paleta e estrutura próprias, em vez do mesmo layout com cores trocadas.',
              },
            ].map((item) => (
              <div key={item.skill}>
                <div className="text-sm text-slate-200 font-semibold mb-1.5">{item.skill}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{item.evidencia}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
