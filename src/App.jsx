import { useState } from 'react'
import Marca, { Simbolo } from './components/Marca'
import { NATUREZA, conceituais, destaques, outros } from './data/projetos'

const WHATSAPP =
  'https://wa.me/5535991623621?text=Oi%20Lucas%2C%20vi%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.'
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
            <h1>Sou o Lucas. Eu desenho e programo o site inteiro.</h1>
            <p className="abertura-sub">
              Trabalho sozinho com empresas que precisam ser levadas a sério
              quando alguém procura por elas: consultórios, clínicas, lojas de
              bairro e profissionais que vendem pelo próprio nome.
            </p>
            <div className="abertura-acoes">
              <a className="link-acao" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Me conte o que precisa
              </a>
              <a className="link-sublinhado" href="#trabalho">
                Ver o trabalho
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
                Cinco marcas que eu inventei para testar como um site de clínica
                pode ganhar confiança sem prometer resultado. Não são clientes,
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
            <h2>O que eu faço</h2>
            <p>Três frentes. Na prática, a maioria dos projetos mistura duas.</p>
          </div>

          <div className="servicos">
            <article className="servico">
              <h3>Sites e landing pages</h3>
              <p>
                Página única ou site completo, escrito e desenhado do zero.
                Entrego publicado, com domínio apontado e medição funcionando.
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
                Saber de onde vem cada contato. Instalo, nomeio os eventos e
                confiro os disparos com você depois que o site está no ar.
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
                Esse é o valor do projeto mais simples que eu faço: uma landing
                page enxuta, de poucas seções. Não é tabela: o que muda o preço
                é a quantidade de seções, a complexidade do desenho, se eu
                escrevo ou reviso o texto, formulários e integrações, tracking,
                animação, prazo e funcionalidades específicas.
              </p>
              <p>
                Site institucional, sistema web e projeto para clínica eu só
                orço depois de entender o escopo, porque o intervalo é grande
                demais para um número solto.
              </p>
              <p className="investimento-regra">
                Escopo e investimento definidos antes do início do projeto.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- sobre */}
        <section className="faixa secao" id="sobre">
          <div className="secao-topo">
            <h2>Quem fala com você</h2>
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
              <p>
                Me chamo <strong>Lucas Figueiredo Fernandes</strong> e a LFF
                Industries sou eu. Quem responde a sua mensagem, desenha a tela,
                escreve o código e publica o site é a mesma pessoa.
              </p>
              <p>
                Trabalho assim por escolha. Como eu mesmo escrevo o texto e
                desenho o layout, consigo mudar a estrutura da página quando o
                conteúdo pede, em vez de encaixar o conteúdo num template.
                Quando instalo o tracking, sei quais eventos importam porque fui
                eu que montei o caminho até o contato.
              </p>
              <p>
                Na prática isso significa conversa direta, sem atendimento
                intermediário, e um escopo escrito antes de qualquer linha de
                código. Se eu achar que o que você precisa não é um site,
                prefiro dizer isso logo.
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
              ['Conversa', 'Você me conta o objetivo e eu pergunto o que ainda falta decidir.'],
              ['Escopo', 'Mando por escrito o que será feito, o prazo e o investimento.'],
              ['Direção visual', 'Mostro a direção antes de programar, para ajustar cedo.'],
              ['Desenvolvimento', 'Construo e vou mostrando o progresso num endereço de teste.'],
              ['Publicação', 'Testo em várias larguras, publico e confiro no site já no ar.'],
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
            <h2>Tem um projeto em mente? Me conta o que precisa funcionar melhor.</h2>
            <p>
              Respondo pessoalmente, normalmente no mesmo dia. Pode mandar o
              link do site atual, um print ou só a ideia solta.
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
          Falar comigo no WhatsApp
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
