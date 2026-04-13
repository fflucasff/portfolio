const categories = [
  {
    label: 'Frontend',
    color: 'text-indigo-400',
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
    color: 'text-purple-400',
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
    color: 'text-cyan-400',
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
    color: 'text-violet-400',
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
    <section id="stack" className="relative py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
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
                      style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.12)' }}>
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

        {/* Proficiency bars */}
        <div className="glass rounded-2xl p-7 reveal">
          <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-6">
            Nível de proficiência
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {[
              { skill: 'React / Frontend', level: 92 },
              { skill: 'Tracking & Analytics', level: 95 },
              { skill: 'Landing Pages CRO', level: 90 },
              { skill: 'Estruturação de Funis', level: 85 },
              { skill: 'Node.js / Backend', level: 75 },
              { skill: 'UI/UX Design', level: 80 },
            ].map((item, i) => (
              <div key={item.skill}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-300 font-medium">{item.skill}</span>
                  <span className="text-xs font-mono text-indigo-400">{item.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full"
                    style={{ width: `${item.level}%`, background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', animation: `progress-grow 1.2s ease ${i * 0.1 + 0.5}s both` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress-grow {
          from { width: 0; }
        }
      `}</style>
    </section>
  )
}
