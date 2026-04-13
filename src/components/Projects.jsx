import { ExternalLink, Code2 as GithubIcon, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Site Médica – Dra. Laís Junqueira',
    tag: 'Landing Page Profissional',
    tagColor: 'from-emerald-500 to-cyan-600',
    problem:
      'Uma médica especialista perdia potenciais pacientes por ter um site genérico, sem tracking e sem estratégia de conversão.',
    solution:
      'Redesenho completo com copy focada em conversão, CTAs estratégicos, integração com WhatsApp e implementação de Google Analytics + Meta Pixel.',
    result: 'Aumento expressivo no volume de contatos via WhatsApp após o lançamento.',
    tech: ['HTML/CSS', 'JavaScript', 'GTM', 'Meta Pixel', 'Google Analytics'],
    img: '/img/lais-junqueira-preview.png',
    accentColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.2)',
    live: 'https://fflucasff.github.io/portfolio/',
    github: 'https://github.com/fflucasff',
  },
  {
    title: 'Controle de Gastos',
    tag: 'Aplicação Web React',
    tagColor: 'from-violet-500 to-purple-700',
    problem:
      'Usuários precisavam de uma forma simples e visual de controlar gastos mensais sem planilhas complexas.',
    solution:
      'Aplicação React com categorização em tempo real, gráficos de gastos com Recharts e exportação CSV — sem necessidade de cadastro.',
    result: 'Adotado organicamente por mais de 200 usuários sem nenhum investimento em aquisição paga.',
    tech: ['React', 'Recharts', 'LocalStorage', 'Tailwind CSS'],
    img: '/img/controle-gastos-preview.png',
    accentColor: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(139, 92, 246, 0.2)',
    live: 'https://fflucasff.github.io/portfolio/',
    github: 'https://github.com/fflucasff',
  },
  {
    title: 'Calculadora de Frete – Postaqui',
    tag: 'Ferramenta Web',
    tagColor: 'from-indigo-500 to-blue-600',
    problem:
      'Lojistas e usuários precisavam calcular frete rapidamente sem acessar sistemas burocráticos dos Correios.',
    solution:
      'Aplicação web limpa e direta com integração de API de frete, cálculo em tempo real e interface otimizada para mobile.',
    result: 'Ferramenta funcional com foco em praticidade e velocidade de uso.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API dos Correios'],
    img: '/img/postaqui-preview.png',
    accentColor: 'rgba(99, 102, 241, 0.12)',
    borderColor: 'rgba(99, 102, 241, 0.2)',
    live: 'https://fflucasff.github.io/portfolio/',
    github: 'https://github.com/fflucasff',
  },
  {
    title: 'Amor em Códigos',
    tag: 'Landing Page Criativa',
    tagColor: 'from-pink-500 to-rose-600',
    problem:
      'Criar uma experiência digital única e emocional para casais, unindo storytelling com interatividade.',
    solution:
      'Landing page temática para casais com design imersivo, animações CSS personalizadas e narrativa visual.',
    result: 'Demonstra domínio de design emocional, UX criativo e animações avançadas.',
    tech: ['HTML/CSS', 'JavaScript', 'CSS Animations'],
    img: '/img/amor-em-codigos-preview.png',
    accentColor: 'rgba(236, 72, 153, 0.1)',
    borderColor: 'rgba(236, 72, 153, 0.2)',
    live: 'https://fflucasff.github.io/portfolio/',
    github: 'https://github.com/fflucasff',
  },
  {
    title: 'Dragon Ball App',
    tag: 'Frontend Avançado',
    tagColor: 'from-orange-500 to-red-600',
    problem:
      'Fãs não tinham uma forma visual e rápida de explorar personagens, stats e lore do universo Dragon Ball.',
    solution:
      'App React consumindo a Dragon Ball API com filtros, busca em tempo real e transições animadas.',
    result: 'Evidencia integração com APIs externas, gerenciamento de estado e UI/UX polido.',
    tech: ['React', 'Dragon Ball API', 'Context API', 'CSS Animations'],
    img: '/img/dragon-ball-preview.png',
    accentColor: 'rgba(249, 115, 22, 0.1)',
    borderColor: 'rgba(249, 115, 22, 0.2)',
    live: 'https://fflucasff.github.io/portfolio/',
    github: 'https://github.com/fflucasff',
  },
]

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="reveal glass rounded-2xl overflow-hidden group cursor-default"
      style={{ border: `1px solid ${project.borderColor}`, transition: 'all 0.4s ease' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 24px 60px ${project.accentColor}`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Project image */}
      {!imgError ? (
        <div className="w-full h-48 md:h-52 overflow-hidden bg-slate-900 relative">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
          {/* Tag badge over image */}
          <span className={`absolute top-3 left-3 text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r ${project.tagColor} text-white shadow-lg`}>
            {project.tag}
          </span>
        </div>
      ) : (
        <div className="w-full h-48 md:h-52 bg-slate-900 flex items-center justify-center">
          <span className="text-slate-600 text-sm font-mono">preview indisponível</span>
        </div>
      )}

      <div className="p-7">
        {/* Title row */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all" aria-label="Ver código">
              <GithubIcon size={14} />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all" aria-label="Ver ao vivo">
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Case study */}
        <div className="space-y-3 mb-5">
          {[
            { label: 'Problema', content: project.problem, color: 'text-red-400' },
            { label: 'Solução', content: project.solution, color: 'text-indigo-400' },
            { label: 'Resultado', content: project.result, color: 'text-emerald-400' },
          ].map((col) => (
            <div key={col.label} className="flex gap-2">
              <span className={`text-xs font-mono font-bold tracking-widest uppercase flex-shrink-0 w-16 mt-0.5 ${col.color}`}>
                {col.label}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">{col.content}</p>
            </div>
          ))}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)', color: '#a5b4fc' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="reveal">
            <span className="section-label mb-4">Estudos de Caso</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Projetos que{' '}
              <span className="text-gradient">geraram impacto</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed reveal">
            Cada projeto resolve um problema real de negócio com resultados mensuráveis.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* View more */}
        <div className="mt-10 text-center reveal">
          <a href="https://github.com/fflucasff" target="_blank" rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2">
            <GithubIcon size={16} />
            Ver todos no GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
