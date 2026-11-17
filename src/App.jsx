import { useState } from 'react'
import Marca, { Simbolo } from './components/Marca'
import { NATUREZA, conceituais, destaques, outros } from './data/projetos'

const WHATSAPP =
  'https://wa.me/5535991623621?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20LFF%20Industries%20e%20quero%20conversar%20sobre%20um%20projeto.'
const EMAIL = 'mailto:lff.industries@gmail.com'

const navegacao = [
  { id: 'trabalho', rotulo: 'Trabalho' },
  { id: 'servicos', rotulo: 'Serviços' },
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'contato', rotulo: 'Contato' },
]

export default function App() {
  const [menu, setMenu] = useState(false)
  const primeiro = destaques[0]

  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topo">
        <div className="topo-interno">
          <a className="marca" href="#topo" aria-label="LFF Industries, início">
            <Marca size={28} />
          </a>

          <nav className="nav" aria-label="Seções do site">
            {navegacao.map((i) => (
              <a key={i.id} href={`#${i.id}`}>
                {i.rotulo}
              </a>
            ))}
          </nav>

          <a className="link-acao" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Conversar
          </a>

          <button
            className="menu-botao"
            onClick={() => setMenu((a) => !a)}
            aria-expanded={menu}
            aria-controls="menu-movel"
          >
            {menu ? 'Fechar' : 'Menu'}
          </button>
        </div>

        <nav
          className={`menu-movel${menu ? ' aberto' : ''}`}
          id="menu-movel"
          aria-label="Seções do site"
        >
          {navegacao.map((i) => (
            <a key={i.id} href={`#${i.id}`} onClick={() => setMenu(false)}>
              {i.rotulo}
            </a>
          ))}
        </nav>
      </header>

      <main id="conteudo">
        {/* ------------------------------------------------------ abertura */}
        <section className="faixa abertura" id="topo">
          <div>
            <h1>Sites e sistemas para empresas que precisam ser levadas a sério.</h1>
            <p className="abertura-sub">
              A LFF Industries desenha, escreve e programa cada projeto do zero:
              sites, landing pages, sistemas web e tracking para consultórios,
              clínicas, comércio e profissionais que vendem pelo próprio nome.
            </p>
            <div className="abertura-acoes">
              <a className="link-acao" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Fale com a LFF
              </a>
              <a className="link-sublinhado" href="#trabalho">
                Ver projetos
              </a>
            </div>
          </div>

          <figure className="abertura-figura">
            <a href={primeiro.site} target="_blank" rel="noopener noreferrer">
              <img
                src={primeiro.capa}
                alt={`Página inicial do site da ${primeiro.nome}`}
                width="1200"
                height="750"
                fetchpriority="high"
                decoding="async"
              />
            </a>
            <figcaption className="abertura-legenda">
              <span className="etiqueta etiqueta-cliente">Cliente</span>
              <span>
                Comece por aqui: <strong>{primeiro.nome}</strong>, {primeiro.segmento}
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ------------------------------------------------------- números */}
        <section className="faixa numeros" aria-label="A LFF Industries em números">
          {[
            [String(destaques.length + outros.length + conceituais.length), 'projetos publicados e acessíveis'],
            ['100%', 'código próprio, sem tema pronto'],
            ['7 dias úteis', 'prazo de uma landing page'],
            ['Por escrito', 'escopo, prazo e valor antes de começar'],
          ].map(([valor, rotulo]) => (
            <div className="numero" key={rotulo}>
              <p className="numero-valor">{valor}</p>
              <p className="numero-rotulo">{rotulo}</p>
            </div>
          ))}
        </section>

        {/* ----------------------------------------------------- destaques */}
        <section className="faixa secao" id="trabalho">
          <div className="secao-topo">
            <h2>Trabalho selecionado</h2>
            <p>
              Seis projetos que mostram a amplitude: site de cliente, produto
              que mantenho no ar e ferramenta que uso no dia a dia.
            </p>
          </div>

          <div className="destaques">
            <Projeto projeto={destaques[0]} />
            <div className="par">
              <Projeto projeto={destaques[1]} compacto />
              <Projeto projeto={destaques[2]} compacto />
            </div>
            <Projeto projeto={destaques[3]} />
            <div className="par">
              <Projeto projeto={destaques[4]} compacto />
              <Projeto projeto={destaques[5]} compacto />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------- outros projetos */}
        <section className="faixa secao" style={{ paddingTop: 0 }}>
          <div className="secao-topo">
            <h2>Também no ar</h2>
            <p>Produtos e estudos anteriores, todos acessíveis.</p>
          </div>

          <div className="lista-outros">
            {outros.map((p) => (
              <a
                className="linha-projeto"
                key={p.id}
                href={p.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="linha-nome">{p.nome}</span>
                <span className="linha-desc">{p.linha}</span>
                <span className="linha-meta">
                  {NATUREZA[p.natureza]} · {p.ano}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ clínicas */}
        <section className="secao-cobalto">
          <div className="faixa secao">
            <div className="secao-topo">
              <h2>Explorações para o setor de saúde</h2>
              <p>
                Cinco marcas fictícias criadas pela LFF para testar como um site
                de clínica pode ganhar confiança sem prometer resultado. Não são clientes,
                e cada uma tem identidade e argumento próprios.
              </p>
            </div>

            <div className="exploracoes">
              {conceituais.map((p) => (
                <a
                  className="exploracao"
                  key={p.id}
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={p.capa}
                    alt={`Página inicial do site conceitual ${p.nome}`}
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                  <h3>{p.nome}</h3>
                  <p>{p.segmento}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ serviços */}
        <section className="faixa secao" id="servicos">
          <div className="secao-topo">
            <h2>O que a LFF faz</h2>
            <p>Três frentes. Na prática, a maioria dos projetos mistura duas.</p>
          </div>

          <div className="servicos">
            <article className="servico">
              <h3>Sites e landing pages</h3>
              <p>
                Página única ou site completo, escrito e desenhado do zero.
                Entregue publicado, com domínio apontado e medição funcionando.
              </p>
              <ul>
                <li>Redação do conteúdo junto com você</li>
                <li>Layout desenhado para o seu caso, sem tema pronto</li>
                <li>Formulário ou WhatsApp, conferidos depois de publicar</li>
              </ul>
            </article>

            <article className="servico">
              <h3>Sistemas e ferramentas</h3>
              <p>
                Quando uma planilha já não dá conta. Aplicações que rodam no
                navegador, com a regra de negócio testada.
              </p>
              <ul>
                <li>Cálculo, cadastro e geração de documento</li>
                <li>Testes automatizados nas regras que não podem errar</li>
                <li>Publicação e manutenção combinadas antes de começar</li>
              </ul>
            </article>

            <article className="servico">
              <h3>Tracking e integrações</h3>
              <p>
                Saber de onde vem cada contato. Os eventos são instalados,
                nomeados e conferidos com você depois que o site está no ar.
              </p>
              <ul>
                <li>Google Tag Manager, Analytics e Meta Pixel</li>
                <li>Eventos nomeados conforme o que você precisa acompanhar</li>
                <li>Conferência dos disparos na versão publicada</li>
              </ul>
            </article>
          </div>

          <div className="investimento">
            <div>
              <p
                style={{
                  marginTop: 0,
                  color: 'var(--sobre-escuro)',
                  fontSize: 15,
                  marginBottom: 8,
                }}
              >
                Landing pages a partir de
              </p>
              <p className="investimento-valor">R$ 1.299</p>
            </div>
            <div>
              <p style={{ marginTop: 0 }}>
                Esse é o valor do projeto mais simples da LFF: uma landing
                page enxuta, de poucas seções. Não é tabela: o que muda o preço
                é a quantidade de seções, a complexidade do desenho, se o texto
                é escrito ou revisado pela LFF, formulários e integrações, tracking,
                animação, prazo e funcionalidades específicas.
              </p>
              <p>
                Site institucional, sistema web e projeto para clínica só são
                orçados depois de entender o escopo, porque o intervalo é grande
                demais para um número solto.
              </p>
              <p className="investimento-regra">
                Escopo e investimento definidos antes do início do projeto.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- tecnologias */}
        <section className="faixa secao" id="tecnologias" style={{ paddingTop: 0 }}>
          <div className="secao-topo">
            <h2>As ferramentas por trás de cada entrega</h2>
            <p>O que está rodando nos projetos que a LFF publica.</p>
          </div>
          <div className="stack">
            {[
              ['Frontend', ['React', 'TypeScript', 'Tailwind CSS', 'HTML e CSS', 'JavaScript']],
              ['Backend e dados', ['Node.js', 'Python (FastAPI)', 'PostgreSQL', 'APIs REST', 'Firebase']],
              ['Tracking e marketing', ['Google Tag Manager', 'Meta Pixel', 'Google Analytics', 'RedTrack', 'UTM e atribuição']],
              ['Publicação', ['Git e GitHub', 'Vite', 'Vercel', 'Cloudflare', 'Domínio e SSL']],
            ].map(([grupo, itens]) => (
              <div className="stack-grupo" key={grupo}>
                <h3>{grupo}</h3>
                <ul>
                  {itens.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------------- sobre */}
        <section className="faixa secao" id="sobre">
          <div className="secao-topo">
            <h2>Quem está por trás</h2>
          </div>

          <div className="sobre">
            <div className="sobre-retrato">
              <img
                src="/img/imagem_perfil.png"
                alt="Lucas Figueiredo Fernandes"
                width="600"
                height="750"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="sobre-texto">
              <p className="sobre-cargo">Fundador e CEO</p>
              <p>
                <strong>Lucas Figueiredo Fernandes</strong> fundou a LFF
                Industries em Santa Rita do Sapucaí, no Sul de Minas, para
                entregar tecnologia aplicada a problemas comerciais e
                operacionais de empresas.
              </p>
              <p>
                Antes da LFF, trabalhou com tracking e performance em operações
                de mídia digital. É dali que vem o cuidado com medição: um site
                da LFF não é entregue sem saber de onde vem cada contato.
              </p>
              <p>
                Quando o projeto pede, a LFF reúne colaboradores contratados
                por projeto, em design, conteúdo e desenvolvimento, para
                ganhar prazo sem perder o padrão de entrega.
              </p>
              <p>
                Todo projeto tem o fundador envolvido do primeiro contato à
                publicação. Na prática isso significa conversa direta, escopo
                escrito antes de qualquer linha de código e, se o que você
                precisa não for um site, isso é dito logo no começo.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- processo */}
        <section className="faixa secao" style={{ paddingTop: 0 }}>
          <div className="secao-topo">
            <h2>Como o projeto anda</h2>
          </div>

          <ol className="processo">
            {[
              ['Conversa', 'Você conta o objetivo e a LFF levanta o que ainda falta decidir.'],
              ['Escopo', 'Você recebe por escrito o que será feito, o prazo e o investimento.'],
              ['Direção visual', 'A direção visual é apresentada antes de programar, para ajustar cedo.'],
              ['Desenvolvimento', 'O progresso fica visível num endereço de teste durante a construção.'],
              ['Publicação', 'Testes em várias larguras, publicação e conferência no site já no ar.'],
            ].map(([nome, texto], i) => (
              <li className="passo" key={nome}>
                <p className="passo-indice">{String(i + 1).padStart(2, '0')}</p>
                <h3>{nome}</h3>
                <p>{texto}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* -------------------------------------------------------- contato */}
        <section className="contato" id="contato">
          <div className="faixa contato-interno">
            <h2>Tem um projeto em mente? Conte o que precisa funcionar melhor.</h2>
            <p>
              Resposta normalmente no mesmo dia útil, direto com quem vai tocar o
              projeto. Pode mandar o link do site atual, um print ou só a ideia solta.
            </p>
            <div className="contato-canais">
              <a
                className="canal canal-principal"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
              <a className="canal" href={EMAIL}>
                lff.industries@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="faixa rodape-interno">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <Simbolo size={20} cor="#a8aaa2" />
            LFF Industries, {new Date().getFullYear()}
          </span>
          <div className="rodape-links">
            <a href="https://github.com/fflucasff" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/lucasff-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={EMAIL}>E-mail</a>
          </div>
        </div>
      </footer>

      <div className="barra-movel">
        <a className="link-acao" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Falar com a LFF no WhatsApp
        </a>
      </div>
    </>
  )
}

function Projeto({ projeto, compacto = false }) {
  const [aberto, setAberto] = useState(false)
  const temCaso = Boolean(projeto.contexto)

  return (
    <article>
      <a
        className="projeto-figura"
        href={projeto.site}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={projeto.capa}
          alt={`Página inicial do site ${projeto.nome}`}
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="projeto-cabeca">
        <h3 className="projeto-nome">{projeto.nome}</h3>
        <span className={`etiqueta etiqueta-${projeto.natureza}`}>
          {NATUREZA[projeto.natureza]}
        </span>
        <span className="projeto-meta">
          {projeto.segmento} · {projeto.ano}
        </span>
      </div>

      <p className="projeto-linha">{projeto.linha}</p>

      <div className="projeto-acoes">
        <a
          className="link-sublinhado"
          href={projeto.site}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir o site
        </a>
        {projeto.repo && (
          <a
            className="link-sublinhado"
            href={projeto.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver o código
          </a>
        )}
        {temCaso && (
          <button
            className="botao-caso"
            onClick={() => setAberto((a) => !a)}
            aria-expanded={aberto}
            aria-controls={`caso-${projeto.id}`}
          >
            {aberto ? 'Fechar o caso' : 'Ler o caso'}
          </button>
        )}
      </div>

      {temCaso && aberto && (
        <div className="caso" id={`caso-${projeto.id}`}>
          <Bloco titulo="Contexto" texto={projeto.contexto} />
          <Bloco titulo="Minha participação" texto={projeto.participacao} />
          <Bloco titulo="Problema" texto={projeto.problema} />
          <Bloco titulo="Solução" texto={projeto.solucao} />
          <Bloco titulo="Decisão visual" texto={projeto.decisao} />
          <Bloco titulo="Resultado técnico" texto={projeto.resultado} />
          <div className="caso-tec">
            {projeto.tecnologias.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

function Bloco({ titulo, texto }) {
  if (!texto) return null
  return (
    <div className="caso-bloco">
      <h4>{titulo}</h4>
      <p>{texto}</p>
    </div>
  )
}
