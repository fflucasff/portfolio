import { useState } from 'react'
import { Check, MessageCircle } from 'lucide-react'
import Marca, { Simbolo } from './components/Marca'
import { NATUREZA, conceituais, destaques, outros } from './data/projetos'

const WHATSAPP =
  'https://wa.me/5535991623621?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20LFF%20Industries%20e%20quero%20um%20or%C3%A7amento.'
const EMAIL = 'mailto:lff.industries@gmail.com'

const FERRAMENTAS = [
  ['React', '#0ea5c6'], ['TypeScript', '#3178c6'], ['Node.js', '#3c873a'], ['Next.js', '#16181a'],
  ['Python', '#3776ab'], ['FastAPI', '#009688'], ['PostgreSQL', '#336791'],
  ['Google Tag Manager', '#246fdb'], ['Meta Pixel', '#0866ff'], ['API de Conversões', '#0866ff'],
  ['Google Analytics', '#e37400'], ['RedTrack', '#d92d20'], ['Meta Ads', '#0866ff'],
  ['Hotjar', '#ff3c00'], ['WordPress', '#21759b'], ['Tailwind CSS', '#0891b2'],
  ['Cloudflare', '#f38020'], ['Vercel', '#16181a'],
]

/** Bloco de zeros e uns, gerado sempre igual (semente fixa) pra não mudar a cada render. */
function Binario({ linhas = 60, colunas = 72, className = '' }) {
  let x = 7
  const rnd = () => ((x = (x * 9301 + 49297) % 233280) / 233280)
  const texto = Array.from({ length: linhas }, () =>
    Array.from({ length: colunas }, () => (rnd() > 0.5 ? '1' : '0')).join(' '),
  ).join('\n')
  return (
    <pre className={`binario ${className}`} aria-hidden="true">
      {texto}
    </pre>
  )
}

const DUVIDAS = [
  ['E se eu não gostar do visual?', 'Você aprova a direção visual antes de qualquer linha de código. Se não estiver bom, ajusta ali, quando mudar ainda é barato, e não depois do site pronto.'],
  ['Preciso escrever os textos?', 'Não. A LFF escreve com você a partir de uma conversa. Você revisa e aprova, sem precisar sentar pra redigir nada.'],
  ['Quanto tempo leva?', 'Uma landing page fica pronta em até 7 dias úteis. Site institucional e sistema têm o prazo definido por escrito no escopo, antes de começar.'],
  ['Quanto custa?', 'Landing page a partir de R$ 1.299. Os outros projetos são orçados depois de entender o escopo, e você recebe o valor fechado por escrito antes de começar.'],
  ['Vou saber de onde vêm os meus clientes?', 'Sim. Todo site sai com a medição configurada e conferida no ar: você sabe quantas pessoas entraram e quantas chamaram no WhatsApp.'],
  ['Já tenho um site. Vale refazer?', 'Às vezes não. Se o problema for só um ajuste ou a medição, a LFF diz isso logo na primeira conversa, em vez de vender um site novo.'],
]


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
            <h1>Antes de chamar, o cliente pesquisa você.</h1>
            <p className="abertura-sub">
              E o que ele encontra decide se ele chama. A LFF Industries cria
              sites, landing pages e sistemas que fazem a sua empresa parecer
              exatamente o que ela é: a escolha certa. Do
              zero, sem template, e no ar em dias, não em meses.
            </p>
            <div className="abertura-acoes">
              <a className="link-acao" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Quero meu orçamento
              </a>
              <a className="link-sublinhado" href="#trabalho">
                Ver projetos no ar
              </a>
            </div>
            <p className="abertura-micro">Resposta no mesmo dia útil. Sem compromisso.</p>
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
            ['+100', 'projetos publicados pelo time, dentro e fora da LFF'],
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

        {/* -------------------------------------------------------- stack */}
        <section className="faixa marquee-faixa" aria-label="Ferramentas e plataformas">
          <p className="marquee-rotulo">Ferramentas e plataformas que a LFF domina</p>
          <div className="marquee">
            <div className="marquee-trilho">
              {[...FERRAMENTAS, ...FERRAMENTAS].map(([f, cor], i) => (
                <span
                  className="marquee-item"
                  key={i}
                  style={{ '--cor': cor }}
                  aria-hidden={i >= FERRAMENTAS.length}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- destaques */}
        <section className="faixa secao" id="trabalho">
          <div className="secao-topo">
            <h2>Não é mockup. Está no ar.</h2>
            <p>
              Clique em qualquer projeto e veja funcionando, no celular ou no
              computador. Prova que dá pra conferir vale mais do que promessa.
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
            <h2>Seis formas de parar de perder cliente pro concorrente</h2>
            <p>Seis frentes. A maioria dos projetos combina duas ou três.</p>
          </div>

          <Bento />

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
              <p className="investimento-gancho">
                Quanto custa um cliente que pesquisou o seu nome, não gostou do
                que viu e chamou o concorrente? Provavelmente mais do que isso.
              </p>
              <p>
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

        {/* ------------------------------------------------------ tracking */}
        <section className="secao-tinta" id="tracking">
          <Binario />
          <div className="faixa secao">
            <p className="tracking-rotulo">Tracking</p>
            <h2 className="tracking-titulo">Não é o criativo. Não é o público. É o dado.</h2>

            <div className="tracking-corpo">
              <div>
                <p className="tracking-lead">
                  Se a campanha que vendia parou do nada, se o painel da Meta
                  mostra um número e o caixa mostra outro, se ninguém sabe dizer
                  de onde veio a última venda, o problema quase nunca está onde
                  todo mundo procura.
                </p>
                <p>
                  Quando a venda chega pela metade na Meta, o algoritmo aprende
                  pela metade. Ele passa a buscar gente parecida com quem clica,
                  não com quem compra. E nenhum criativo novo resolve isso.
                </p>
                <p className="tracking-soco">
                  Antes de aumentar o orçamento, descubra o que o seu pixel está
                  deixando escapar.
                </p>
              </div>

              <div>
                <p className="tracking-subtitulo">O que a LFF instala e confere</p>
                <ul className="tracking-lista">
                  <li>API de Conversões da Meta, com deduplicação de eventos</li>
                  <li>GTM server-side, pra parar de depender só do navegador</li>
                  <li>Postback e atribuição com RedTrack</li>
                  <li>Eventos separados por tipo de venda quando a URL não diferencia nada</li>
                  <li>Conferência de cada disparo na versão publicada, não no teste</li>
                </ul>
                <p className="tracking-agencia">
                  <strong>Atende cliente final?</strong> A LFF entra white label:
                  você entrega, a gente configura e confere. Seu cliente não fica
                  sabendo.
                </p>
                <a
                  className="link-acao link-acao-claro"
                  href="https://wa.me/5535991623621?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20LFF%20Industries%20e%20quero%20saber%20o%20que%20o%20meu%20pixel%20est%C3%A1%20perdendo."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descobrir o que meu pixel está perdendo
                </a>
              </div>
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

        {/* --------------------------------------------------------- dúvidas */}
        <section className="faixa secao" id="duvidas">
          <div className="secao-topo">
            <h2>O que todo mundo pergunta antes de fechar</h2>
          </div>
          <div className="duvidas">
            {DUVIDAS.map(([pergunta, resposta]) => (
              <details className="duvida" key={pergunta}>
                <summary>{pergunta}</summary>
                <p>{resposta}</p>
              </details>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------- contato */}
        <section className="contato" id="contato">
          <Binario className="binario-contato" />
          <div className="faixa contato-interno">
            <h2>Conte o problema. Em um dia útil você sabe se dá, quanto custa e quando fica pronto.</h2>
            <p>
              Pode mandar o link do site atual, um print ou só a ideia solta. Quem
              responde é quem vai tocar o projeto.
            </p>
            <p className="contato-prazo">
              <strong>Quer o site no ar antes do Natal?</strong> Landing pages
              fechadas até 11 de dezembro são entregues até 22 de dezembro.
            </p>
            <div className="contato-canais">
              <a
                className="canal canal-principal"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Receber orçamento no WhatsApp
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

function Bento() {
  return (
    <div className="bento">
      {/* Landing page: destaque */}
      <article className="tile tile-lp">
        <div className="tile-texto">
          <p className="tile-tipo">Conversão</p>
          <h3>Landing Page</h3>
          <p className="tile-golpe">
            Uma página feita pra uma ação só: chamar no WhatsApp, agendar ou
            comprar. Copy escrita com você, layout sem template e pixel no ar.
          </p>
          <p className="tile-preco">
            <strong>A partir de R$ 1.299</strong>
            <span>7 dias úteis</span>
          </p>
        </div>
        <div className="vis-lp" aria-hidden="true">
          <div className="vis-navegador">
            <span /><span /><span />
          </div>
          <div className="vis-pagina">
            <i className="l1" /><i className="l2" /><i className="l3" />
            <b className="vis-botao">
              <MessageCircle size={13} strokeWidth={2.4} /> Falar no WhatsApp
            </b>
            <em className="vis-cursor" />
          </div>
        </div>
      </article>

      {/* Tracking */}
      <article className="tile tile-trk">
        <p className="tile-tipo">Precisão</p>
        <h3>Tracking</h3>
        <p className="tile-golpe">
          Cada venda chega inteira na Meta, e o algoritmo aprende com quem compra.
        </p>
        <ul className="vis-log" aria-hidden="true">
          <li><span>Purchase</span><em>CAPI</em><Check size={14} /></li>
          <li><span>Lead</span><em>server-side</em><Check size={14} /></li>
          <li><span>Deduplicação</span><em>event_id</em><Check size={14} /></li>
          <li><span>Postback</span><em>RedTrack</em><Check size={14} /></li>
        </ul>
      </article>

      {/* Site */}
      <article className="tile">
        <div className="vis-site" aria-hidden="true">
          <span className="logo" /><span /><span /><span /><b />
        </div>
        <p className="tile-tipo">Autoridade</p>
        <h3>Site Institucional</h3>
        <p className="tile-golpe">
          O endereço que faz o cliente confiar antes da primeira mensagem.
          Domínio, e-mail e SSL configurados.
        </p>
      </article>

      {/* Sistema */}
      <article className="tile">
        <div className="vis-barras" aria-hidden="true">
          {[42, 68, 54, 86, 61, 74].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="tile-tipo">Operação</p>
        <h3>Sistema Web</h3>
        <p className="tile-golpe">
          Pra quando a planilha já não dá conta. Cadastro, cálculo, documentos e
          login por nível de acesso.
        </p>
      </article>

      {/* Automação */}
      <article className="tile">
        <div className="vis-fluxo" aria-hidden="true">
          <span>WhatsApp</span><i /><span>CRM</span><i /><span>Planilha</span>
        </div>
        <p className="tile-tipo">Velocidade</p>
        <h3>Automação</h3>
        <p className="tile-golpe">
          O trabalho repetido sai da mão de alguém e passa a acontecer sozinho,
          com IA onde faz sentido.
        </p>
      </article>

      {/* Integrações */}
      <article className="tile tile-int">
        <div className="tile-texto">
          <p className="tile-tipo">Conexão</p>
          <h3>Integrações e APIs</h3>
          <p className="tile-golpe">
            Sistemas que não conversavam passam a conversar. Ninguém digita o
            mesmo dado duas vezes, e você fica sabendo quando algo falha.
          </p>
        </div>
        <div className="vis-hub" aria-hidden="true">
          {['Loja', 'CRM', 'ERP', 'Pagamento', 'WhatsApp', 'Planilha'].map((n) => (
            <span key={n}>{n}</span>
          ))}
          <b>API</b>
        </div>
      </article>
    </div>
  )
}
