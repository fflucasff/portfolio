import { useMemo, useState } from 'react'
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import { CATEGORIAS, ROTULO_CATEGORIA, projetos } from '../data/projetos'

export default function Projects() {
  const [filtro, setFiltro] = useState('conceitual')

  const lista = useMemo(
    () => (filtro === 'todos' ? projetos : projetos.filter((p) => p.categoria === filtro)),
    [filtro],
  )

  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-8">
          <span className="section-label mb-4">Projetos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 max-w-2xl">
            Cada projeto resolve um problema{' '}
            <span className="text-gradient">de negócio específico</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl leading-relaxed">
            Trabalhos para clientes, produtos que mantenho e estudos conceituais
            feitos para demonstrar método em segmentos de serviço de alto valor.
            A classificação de cada projeto está no card, para não confundir
            estudo com trabalho contratado.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2 mb-10 reveal"
          role="tablist"
          aria-label="Filtrar projetos por tipo"
        >
          {CATEGORIAS.map((c) => {
            const ativo = filtro === c.id
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={ativo}
                onClick={() => setFiltro(c.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  ativo
                    ? 'bg-amber-400 text-[#0a1628] border-amber-400'
                    : 'border-white/10 text-slate-400 hover:text-white hover:border-amber-500/40'
                }`}
              >
                {c.rotulo}
              </button>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {lista.map((projeto) => (
            <CardProjeto key={projeto.id} projeto={projeto} />
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a
            href="https://github.com/fflucasff"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Code2 size={16} />
            Ver todos os repositórios
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

function CardProjeto({ projeto }) {
  const [aberto, setAberto] = useState(false)

  return (
    <article
      className="reveal glass rounded-2xl overflow-hidden flex flex-col"
      style={{ border: '1px solid rgba(212,175,55,0.22)' }}
    >
      {projeto.capa ? (
        <a
          href={projeto.site}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group"
        >
          <img
            src={projeto.capa}
            alt={`Captura da página inicial do site ${projeto.nome}`}
            width="1200"
            height="750"
            loading="lazy"
            decoding="async"
            className="w-full h-auto aspect-[1200/750] object-cover object-top border-b border-white/5"
          />
          <span className="absolute top-3 left-3 text-[11px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-400 text-[#0a1628]">
            {ROTULO_CATEGORIA[projeto.categoria]}
          </span>
        </a>
      ) : (
        <div className="px-6 pt-6">
          <span className="inline-block text-[11px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/25">
            {ROTULO_CATEGORIA[projeto.categoria]}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{projeto.nome}</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">{projeto.setor}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {projeto.repo && (
              <a
                href={projeto.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/40 transition-all"
                aria-label={`Ver repositório de ${projeto.nome}`}
              >
                <Code2 size={14} />
              </a>
            )}
            <a
              href={projeto.site}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/40 transition-all"
              aria-label={`Abrir o site ${projeto.nome}`}
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mt-4">{projeto.resumo}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {projeto.tecnologias.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded"
              style={{
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.15)',
                color: '#e0b84f',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setAberto((a) => !a)}
          aria-expanded={aberto}
          aria-controls={`detalhe-${projeto.id}`}
          className="mt-5 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
        >
          {aberto ? 'Fechar o estudo de caso' : 'Ler o estudo de caso'}
          <span aria-hidden="true">{aberto ? '−' : '+'}</span>
        </button>

        {aberto && (
          <div
            id={`detalhe-${projeto.id}`}
            className="mt-5 pt-5 border-t border-white/10 space-y-4 text-sm"
          >
            <Bloco titulo="Problema" texto={projeto.problema} />
            <Bloco titulo="Público" texto={projeto.publico} />
            <Bloco titulo="Estratégia" texto={projeto.estrategia} />

            <div>
              <h4 className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-400 mb-2">
                Funcionalidades
              </h4>
              <ul className="space-y-1.5">
                {projeto.funcionalidades.map((f) => (
                  <li key={f} className="flex gap-2.5 text-slate-400 leading-relaxed">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                      style={{ background: '#d4af37' }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Bloco titulo="Decisões de design" texto={projeto.design} />
            {projeto.nota && <Bloco titulo="Decisão técnica" texto={projeto.nota} />}

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={projeto.site}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-5"
              >
                <span>Abrir o site</span>
              </a>
              {projeto.repo && (
                <a
                  href={projeto.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2.5 px-5"
                >
                  Ver o código
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

function Bloco({ titulo, texto }) {
  return (
    <div>
      <h4 className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-400 mb-1.5">
        {titulo}
      </h4>
      <p className="text-slate-400 leading-relaxed">{texto}</p>
    </div>
  )
}
