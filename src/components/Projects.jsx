import { ExternalLink, Code2 as GithubIcon, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Site Médica – Dra. Laís Junqueira',
    tag: 'Landing Page Profissional',
    tagColor: 'from-amber-400 to-yellow-700',
    problem:
      'Uma médica especialista perdia potenciais pacientes por ter um site genérico, sem tracking e sem estratégia de conversão.',
    solution:
      'Redesenho completo com copy focada em conversão, CTAs estratégicos, integração com WhatsApp e implementação de Google Analytics + Meta Pixel.',
    result: 'Aumento expressivo no volume de contatos via WhatsApp após o lançamento.',
    tech: ['HTML/CSS', 'JavaScript', 'GTM', 'Meta Pixel', 'Google Analytics'],
    img: '/img/lais-junqueira-preview.png',
    accentColor: 'rgba(212, 175, 55, 0.12)',
    borderColor: 'rgba(212, 175, 55, 0.22)',
    live: 'https://fflucasff.github.io/Site-Lais-Junqueira/',
    github: 'https://github.com/fflucasff/Site-Lais-Junqueira',
  },
  {
    title: 'BR Advogados Associados',
    tag: 'Landing Page Institucional',
    tagColor: 'from-yellow-500 to-amber-800',
    problem:
      'Escritório especializado em direito previdenciário precisava transmitir credibilidade e captar leads qualificados sem parecer "mais um site de advogado genérico".',
    solution:
      'Landing institucional com copy clara sobre aposentadoria, revisão de benefícios e BPC/LOAS, prova de mais de 10 anos de atuação e atendimento direto (sem terceirização de caso), com CTA direto para WhatsApp.',
    result: 'Página pronta para captar leads em todo o Brasil, com atuação registrada em SP e MG.',
    tech: ['HTML/CSS', 'JavaScript', 'WhatsApp API'],
    accentColor: 'rgba(240, 200, 105, 0.12)',
    borderColor: 'rgba(240, 200, 105, 0.22)',
    live: 'https://fflucasff.github.io/LP-BR-Advogados/',
    github: 'https://github.com/fflucasff/LP-BR-Advogados',
  },
  {
    title: 'ALPREVEMP – Saúde Ocupacional',
    tag: 'Landing Page B2B',
    tagColor: 'from-amber-500 to-yellow-800',
    problem:
      'Empresa de medicina do trabalho precisava explicar serviços técnicos e burocráticos (ASO, PCMSO, PGR, LTCAT) de forma simples para donos de empresas que não entendem a legislação trabalhista.',
    solution:
      'LP B2B com fluxo de 4 passos (contato → avaliação → execução → entrega), retorno em 24h e atendimento via WhatsApp, cobrindo múltiplos municípios do sul de Minas Gerais.',
    result: 'Comunicação simplificada de um serviço técnico, reduzindo a fricção no primeiro contato comercial.',
    tech: ['HTML/CSS', 'JavaScript', 'WhatsApp API'],
    accentColor: 'rgba(138, 109, 31, 0.15)',
    borderColor: 'rgba(138, 109, 31, 0.25)',
    live: 'https://fflucasff.github.io/LP-ALPREVEMP/',
    github: 'https://github.com/fflucasff/LP-ALPREVEMP',
  },
  {
    title: 'Donna – Secretária Virtual',
    tag: 'Sistema Personalizado / SaaS',
    tagColor: 'from-amber-400 to-yellow-700',
    problem:
      'Profissionais autônomos perdem tempo organizando agenda, tarefas e rotina manualmente, sem uma ferramenta pensada para o dia a dia deles.',
    solution:
      'Plataforma própria com cadastro e autenticação de usuários, dashboard de rotina e arquitetura pronta para automações futuras (lembretes, integrações, IA).',
    result: 'Produto em fase de lançamento, já com fluxo de onboarding funcionando em produção.',
    tech: ['React', 'Autenticação', 'Deploy na Vercel'],
    accentColor: 'rgba(212, 175, 55, 0.12)',
    borderColor: 'rgba(212, 175, 55, 0.22)',
    live: 'https://donna-secretaria-virtual.vercel.app/register',
  },
  {
    title: 'Amor em Códigos – Paulo Victor & Carla',
    tag: 'Landing Page Personalizada',
    tagColor: 'from-yellow-500 to-amber-800',
    problem:
      'Cliente queria um jeito único de celebrar o relacionamento e o casamento, fugindo dos templates genéricos de "site para casal" que existem por aí.',
    solution:
      'Site personalizado com linha do tempo interativa do relacionamento, contador de tempo juntos em tempo real, galeria de fotos, player de música e carta de amor com efeito de revelação.',
    result: 'Presente digital 100% sob medida, entregue como produto white-label da LFF Industries no domínio do próprio cliente.',
    tech: ['React', 'CSS Animations', 'Deploy customizado'],
    img: '/img/amor-em-codigos-preview.png',
    accentColor: 'rgba(240, 200, 105, 0.12)',
    borderColor: 'rgba(240, 200, 105, 0.22)',
    live: 'https://paulovictor-carla.lffindustries.com',
  },
  {
    title: 'Universo Computadores',
    tag: 'Landing Page Local',
    tagColor: 'from-amber-500 to-yellow-800',
    problem:
      'Loja física de manutenção de computadores em São Lourenço (MG) não tinha presença digital para captar clientes de PCs gamer, suporte técnico e CFTV.',
    solution:
      'LP local com categorização por serviço (manutenção, montagem gamer, suporte, CFTV), múltiplos canais de contato (WhatsApp, Instagram, endereço físico) e CTAs diretos de orçamento.',
    result: 'Presença digital profissional para negócio de bairro, reforçando autoridade local frente à concorrência informal.',
    tech: ['HTML/CSS', 'JavaScript'],
    accentColor: 'rgba(138, 109, 31, 0.15)',
    borderColor: 'rgba(138, 109, 31, 0.25)',
    live: 'https://fflucasff.github.io/LP-Universo-Computadores/',
    github: 'https://github.com/fflucasff/LP-Universo-Computadores',
  },
  {
    title: 'Bolão Tricolor',
    tag: 'Aplicação Web',
    tagColor: 'from-amber-400 to-yellow-700',
    problem:
      'Grupos de amigos torcedores queriam organizar bolões de apostas de futebol sem depender de planilhas manuais e cobranças bagunçadas.',
    solution:
      'Plataforma de bolão com palpites em tempo real (bloqueio automático antes da partida), ranking automático pós-jogo, grupos privados por convite e controle financeiro via Pix com aprovação do admin.',
    result: 'Sistema completo de gamificação esportiva com gestão financeira integrada, pronto para replicar para qualquer time ou grupo.',
    tech: ['React', 'Sistema de pontuação', 'Pix'],
    accentColor: 'rgba(212, 175, 55, 0.12)',
    borderColor: 'rgba(212, 175, 55, 0.22)',
    live: 'https://fflucasff.github.io/LP-Bolao-tricolor',
    github: 'https://github.com/fflucasff/LP-Bolao-tricolor',
  },
  {
    title: 'OPDate',
    tag: 'Aplicação Web',
    tagColor: 'from-yellow-500 to-amber-800',
    problem:
      'Casais e solteiros perdem tempo decidindo onde ir em um encontro, gerando indecisão e programas sem graça.',
    solution:
      'App com sugestões de local baseadas no perfil do usuário, filtros por tipo de programa, ocasião, orçamento e distância, e um modo "swipe a dois" onde o casal vota junto até dar match no lugar do encontro.',
    result: 'Produto com potencial de monetização via assinatura premium, demonstrando domínio de UX para apps de consumo.',
    tech: ['React', 'Filtros dinâmicos', 'Lógica de matching'],
    accentColor: 'rgba(240, 200, 105, 0.12)',
    borderColor: 'rgba(240, 200, 105, 0.22)',
    live: 'https://fflucasff.github.io/OPDate/',
    github: 'https://github.com/fflucasff/OPDate',
  },
  {
    title: 'Controle de Gastos',
    tag: 'Aplicação Web React',
    tagColor: 'from-amber-500 to-yellow-800',
    problem:
      'Usuários precisavam de uma forma simples e visual de controlar gastos mensais sem planilhas complexas.',
    solution:
      'Aplicação React com categorização em tempo real, gráficos de gastos com Recharts e exportação CSV — sem necessidade de cadastro.',
    result: 'Adotado organicamente por mais de 200 usuários sem nenhum investimento em aquisição paga.',
    tech: ['React', 'Recharts', 'LocalStorage', 'Tailwind CSS'],
    img: '/img/controle-gastos-preview.png',
    accentColor: 'rgba(138, 109, 31, 0.15)',
    borderColor: 'rgba(138, 109, 31, 0.25)',
    live: 'https://fflucasff.github.io/Controle-de-Gastos/',
    github: 'https://github.com/fflucasff/Controle-de-Gastos',
  },
  {
    title: 'Calculadora – Postaqui',
    tag: 'Ferramenta Web',
    tagColor: 'from-amber-400 to-yellow-700',
    problem:
      'Usuários precisavam de uma calculadora rápida e direta para o dia a dia, sem acessar sistemas burocráticos.',
    solution:
      'Aplicação web limpa e direta, com cálculo em tempo real e interface otimizada para mobile.',
    result: 'Ferramenta funcional com foco em praticidade e velocidade de uso.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    img: '/img/postaqui-preview.png',
    accentColor: 'rgba(212, 175, 55, 0.12)',
    borderColor: 'rgba(212, 175, 55, 0.22)',
    live: 'https://fflucasff.github.io/postaqui-desafio/',
    github: 'https://github.com/fflucasff/postaqui-desafio',
  },
  {
    title: 'Dragon Ball App',
    tag: 'Frontend Avançado',
    tagColor: 'from-yellow-500 to-amber-800',
    problem:
      'Fãs não tinham uma forma visual e rápida de explorar personagens, stats e lore do universo Dragon Ball.',
    solution:
      'App React consumindo a Dragon Ball API com filtros, busca em tempo real e transições animadas.',
    result: 'Evidencia integração com APIs externas, gerenciamento de estado e UI/UX polido.',
    tech: ['React', 'Dragon Ball API', 'Context API', 'CSS Animations'],
    img: '/img/dragon-ball-preview.png',
    accentColor: 'rgba(240, 200, 105, 0.12)',
    borderColor: 'rgba(240, 200, 105, 0.22)',
    live: 'https://fflucasff.github.io/Projeto---Dragon-Ball/',
    github: 'https://github.com/fflucasff/Projeto---Dragon-Ball',
  },
]

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)
  const hasImg = project.img && !imgError

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
      {hasImg ? (
        <div className="w-full h-48 md:h-52 overflow-hidden bg-slate-900 relative">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
          {/* Tag badge over image */}
          <span className={`absolute top-3 left-3 text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r ${project.tagColor} text-[#0a1628] shadow-lg`}>
            {project.tag}
          </span>
        </div>
      ) : (
        <div className="w-full h-48 md:h-52 bg-slate-900 flex flex-col items-center justify-center gap-3 relative">
          <span className={`text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gradient-to-r ${project.tagColor} text-white shadow-lg`}>
            {project.tag}
          </span>
          <span className="text-slate-600 text-xs font-mono">preview indisponível</span>
        </div>
      )}

      <div className="p-7">
        {/* Title row */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all" aria-label="Ver código">
                <GithubIcon size={14} />
              </a>
            )}
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
            { label: 'Solução', content: project.solution, color: 'text-amber-400' },
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
              style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.15)', color: '#e0b84f' }}>
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
