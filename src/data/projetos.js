/**
 * Fonte única de dados dos projetos.
 *
 * natureza:
 *   cliente     trabalho contratado, entregue para um cliente real
 *   autoral     produto próprio, sem cliente contratante
 *   conceitual  estudo de marca fictícia, feito para demonstrar método
 *
 * destaque: ordem na seção principal. Ausente significa que o projeto vive na
 * listagem compacta, mas continua acessível.
 */

export const NATUREZA = {
  cliente: 'Cliente',
  autoral: 'Produto autoral',
  conceitual: 'Conceitual',
}

export const projetos = [
  {
    id: 'lais',
    nome: 'Dra. Laís Junqueira',
    natureza: 'cliente',
    segmento: 'Dermatologia',
    ano: '2025',
    destaque: 1,
    capa: '/img/projetos/lais.jpg',
    site: 'https://fflucasff.github.io/Site-Lais-Junqueira/',
    repo: 'https://github.com/fflucasff/Site-Lais-Junqueira',
    linha: 'Site de autoridade para consultório de dermatologia, com medição configurada.',
    contexto:
      'Médica dermatologista com consultório próprio, competindo por atenção com clínicas maiores e com perfis de rede social.',
    participacao: 'Design, desenvolvimento, redação do conteúdo e implantação da medição.',
    problema:
      'A presença digital anterior não dizia o que diferenciava o atendimento e não havia como saber de onde vinham os contatos. Quem chegava ao site não encontrava um caminho claro até a conversa.',
    solucao:
      'Reescrevi o conteúdo em torno do que o consultório faz de diferente, organizei os serviços na ordem em que o paciente pensa e coloquei o contato por WhatsApp em pontos previsíveis da leitura. Instalei Google Tag Manager, Meta Pixel e Analytics, e conferi os disparos depois da publicação.',
    decisao:
      'Serifa editorial e fotografia em preto e branco, para afastar o site da estética de clínica com degradê azul e aproximar de publicação de saúde.',
    resultado:
      'Site estático, carregamento rápido, com os eventos de contato chegando corretamente ao Analytics.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'GTM', 'Meta Pixel'],
  },
  {
    id: 'amor',
    nome: 'Amor em Códigos',
    natureza: 'cliente',
    segmento: 'Produto sob encomenda',
    ano: '2025',
    destaque: 2,
    capa: '/img/projetos/amor.jpg',
    site: 'https://paulovictor-carla.lffindustries.com',
    repo: null,
    linha: 'Site comemorativo personalizado, entregue em domínio próprio do casal.',
    contexto:
      'Produto que vendo repetidamente: um site de presente, refeito do zero para cada casal, com a história de quem compra.',
    participacao: 'Concepção do produto, design, desenvolvimento e publicação em subdomínio.',
    problema:
      'Os sites de presente que existem entregam o mesmo modelo para todo mundo, trocando nome e foto. O presente perde a graça justamente por isso.',
    solucao:
      'Cada entrega tem linha do tempo, textos e trilha próprios. O conteúdo é escrito a partir da história que o cliente conta, e o site vai para um subdomínio dedicado, o que faz ele parecer um presente de verdade e não um link de gerador.',
    decisao:
      'Abertura com um gesto único: a página começa fechada, com um botão para abrir o presente. Isso transforma o carregamento em parte da experiência.',
    resultado: 'Produto replicável em subdomínio próprio, já entregue para vários casais.',
    tecnologias: ['React', 'CSS Animations', 'Subdomínio dedicado'],
  },
  {
    id: 'escopo',
    nome: 'Escopo',
    natureza: 'autoral',
    segmento: 'Ferramenta web',
    ano: '2026',
    destaque: 3,
    capa: '/img/projetos/escopo.jpg',
    site: 'https://fflucasff.github.io/escopo-propostas/',
    repo: 'https://github.com/fflucasff/escopo-propostas',
    linha: 'Monta propostas comerciais mostrando o documento pronto enquanto você preenche.',
    contexto:
      'Ferramenta que eu precisava para o meu próprio trabalho e resolvi terminar e publicar.',
    participacao: 'Tudo: produto, design, código e testes.',
    problema:
      'Quem presta serviço por conta própria manda orçamento por mensagem ou em planilha improvisada. Soma errado e perde trabalho para quem mandou documento organizado.',
    solucao:
      'Formulário de um lado, folha A4 do outro. O que aparece na tela é exatamente o que sai na impressão, então dá para salvar em PDF pelo próprio navegador. Propostas ficam salvas no aparelho, com exportação em JSON.',
    decisao:
      'A folha é o elemento principal da tela, sobre bancada cinza, para ler como papel. A interface fica ao lado, discreta.',
    resultado:
      'Dinheiro circula como centavos inteiros, não como decimal, para a soma das linhas sempre fechar com o total. São 12 testes automatizados cobrindo arredondamento, desconto maior que o subtotal e entrada inválida.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'Testes em Node'],
  },
  {
    id: 'universo',
    nome: 'Universo Computadores',
    natureza: 'cliente',
    segmento: 'Assistência técnica',
    ano: '2025',
    destaque: 4,
    capa: '/img/projetos/universo.jpg',
    site: 'https://fflucasff.github.io/LP-Universo-Computadores/',
    repo: 'https://github.com/fflucasff/LP-Universo-Computadores',
    linha: 'Página para loja física de manutenção, montagem gamer e CFTV.',
    contexto: 'Loja de rua em São Lourenço, Minas Gerais, sem nenhuma presença digital.',
    participacao: 'Design, desenvolvimento, conteúdo e publicação.',
    problema:
      'A loja disputava com concorrência informal que atende só por rede social. Quem procurava assistência técnica não tinha como saber o que a loja fazia nem onde ela ficava.',
    solucao:
      'Serviços separados pelo jeito que o cliente pede: conserto, montagem de PC gamer, equipamento de escritório e instalação de câmeras. Endereço, WhatsApp e Instagram em pontos fáceis de achar.',
    decisao:
      'Tom escuro com azul elétrico, que é o vocabulário visual de quem compra hardware, e não o azul institucional de prestador de serviço.',
    resultado: 'Página única, estática, com contato direto em três canais.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'bolao',
    nome: 'Bolão Tricolor',
    natureza: 'autoral',
    segmento: 'Aplicação web',
    ano: '2025',
    destaque: 5,
    capa: '/img/projetos/bolao.jpg',
    site: 'https://fflucasff.github.io/LP-Bolao-tricolor/',
    repo: 'https://github.com/fflucasff/LP-Bolao-tricolor',
    linha: 'Bolão de futebol com palpites, ranking automático e controle de pagamento.',
    contexto: 'Grupo de amigos que organizava bolão em planilha e cobrava no grito.',
    participacao: 'Produto, design e desenvolvimento.',
    problema:
      'Planilha compartilhada dá margem a palpite enviado depois do jogo começar e a confusão sobre quem pagou.',
    solucao:
      'Palpite trava automaticamente no apito inicial, a pontuação é calculada sozinha ao fim da partida e o pagamento via Pix passa por aprovação do administrador. Grupos são privados, por convite.',
    decisao:
      'Identidade construída sobre as cores do time, com tipografia condensada de placar. O site parece do grupo, não de um produto genérico de apostas.',
    resultado: 'Regra de pontuação e trava de horário rodando inteiramente no navegador.',
    tecnologias: ['React', 'Regras de pontuação', 'Pix'],
  },
  {
    id: 'opdate',
    nome: 'OpDate',
    natureza: 'autoral',
    segmento: 'Aplicação web',
    ano: '2025',
    destaque: 6,
    capa: '/img/projetos/opdate.jpg',
    site: 'https://fflucasff.github.io/OPDate/',
    repo: 'https://github.com/fflucasff/OPDate',
    linha: 'Sugere lugares para um encontro e deixa o casal escolher junto.',
    contexto: 'Produto autoral sobre um problema pequeno e real: decidir onde ir.',
    participacao: 'Produto, design e desenvolvimento.',
    problema:
      'A conversa sobre onde ir trava porque ninguém quer decidir sozinho e as opções são muitas.',
    solucao:
      'Filtros por tipo de programa, ocasião, orçamento e distância, e um modo em que os dois avaliam separadamente até os dois gostarem do mesmo lugar.',
    decisao:
      'Interface pensada primeiro para o celular, em tom escuro com rosa saturado, porque o uso real acontece com as duas pessoas olhando a mesma tela.',
    resultado: 'Lógica de coincidência entre dois perfis resolvida no navegador.',
    tecnologias: ['React', 'Filtros dinâmicos', 'Lógica de coincidência'],
  },

  {
    id: 'donna',
    nome: 'Donna',
    natureza: 'autoral',
    segmento: 'Secretária virtual',
    ano: '2026',
    capa: '/img/projetos/donna.jpg',
    site: 'https://donna-secretaria-virtual.vercel.app/register',
    repo: null,
    linha: 'Plataforma de organização de rotina, com cadastro e autenticação em produção.',
    contexto: 'Produto autoral em fase de lançamento.',
    participacao: 'Produto, design e desenvolvimento.',
    problema: 'Profissionais autônomos organizam agenda e tarefas sem ferramenta própria.',
    solucao:
      'Cadastro, autenticação e painel de rotina funcionando, com a arquitetura preparada para automações.',
    decisao: 'Interface de produto, pensada para uso diário e repetido.',
    resultado: 'Fluxo de entrada no ar, com autenticação real.',
    tecnologias: ['React', 'Autenticação', 'Vercel'],
  },
  {
    id: 'gastos',
    nome: 'Controle de Gastos',
    natureza: 'autoral',
    segmento: 'Aplicação web',
    ano: '2024',
    capa: '/img/projetos/gastos.jpg',
    site: 'https://fflucasff.github.io/Controle-de-Gastos/',
    repo: 'https://github.com/fflucasff/Controle-de-Gastos',
    linha: 'Controle de gastos com categorias e gráficos, sem precisar criar conta.',
    contexto: 'Produto autoral.',
    participacao: 'Produto, design e desenvolvimento.',
    problema: 'Planilha de finanças exige montagem e manutenção que quase ninguém faz.',
    solucao: 'Uso imediato, sem cadastro, com categorização na hora e exportação em CSV.',
    decisao: 'Interface enxuta, otimizada para lançar um gasto em poucos toques.',
    resultado: 'Dados ficam no navegador, com exportação para quem quiser levar embora.',
    tecnologias: ['React', 'Recharts', 'LocalStorage'],
  },
  {
    id: 'dragonball',
    nome: 'Dragon Ball App',
    natureza: 'autoral',
    segmento: 'Estudo de interface',
    ano: '2024',
    capa: '/img/projetos/dragonball.jpg',
    site: 'https://fflucasff.github.io/Projeto---Dragon-Ball/',
    repo: 'https://github.com/fflucasff/Projeto---Dragon-Ball',
    linha: 'Consumo de API externa com busca, filtros e transições.',
    contexto: 'Estudo pessoal de consumo de API e gerenciamento de estado.',
    participacao: 'Desenvolvimento.',
    problema: 'Exercitar integração com API pública e estado compartilhado.',
    solucao: 'Busca em tempo real, filtros combinados e transições entre telas.',
    decisao: 'Interface temática, construída a partir do material da própria API.',
    resultado: 'Integração com API externa e estado via Context.',
    tecnologias: ['React', 'Context API', 'API externa'],
  },
  {
    id: 'postaqui',
    nome: 'Calculadora Postaqui',
    natureza: 'autoral',
    segmento: 'Ferramenta web',
    ano: '2024',
    capa: '/img/projetos/postaqui.jpg',
    site: 'https://fflucasff.github.io/postaqui-desafio/',
    repo: 'https://github.com/fflucasff/postaqui-desafio',
    linha: 'Calculadora direta, com cálculo em tempo real e foco no celular.',
    contexto: 'Desafio técnico resolvido e publicado.',
    participacao: 'Desenvolvimento.',
    problema: 'Fazer uma conta simples sem passar por sistema pesado.',
    solucao: 'Interface mínima, resultado atualizado a cada digitação.',
    decisao: 'Layout pensado primeiro para a tela pequena.',
    resultado: 'Ferramenta estática, sem dependência de servidor.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 'tersa',
    nome: 'Clínica Tersa',
    natureza: 'conceitual',
    segmento: 'Dermatologia',
    ano: '2026',
    capa: '/img/projetos/tersa.jpg',
    site: 'https://fflucasff.github.io/clinica-tersa/',
    repo: 'https://github.com/fflucasff/clinica-tersa',
    linha: 'Serviços organizados pela queixa do paciente, não pelo nome do procedimento.',
    decisao:
      'Navegação lateral fixa, Fraunces com Karla, base osso e acento rosewood. Nenhuma fotografia de banco de imagens.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 'ancora',
    nome: 'Instituto Âncora',
    natureza: 'conceitual',
    segmento: 'Implantes e reabilitação oral',
    ano: '2026',
    capa: '/img/projetos/ancora.jpg',
    site: 'https://fflucasff.github.io/instituto-ancora/',
    repo: 'https://github.com/fflucasff/instituto-ancora',
    linha: 'Avaliação, planejamento e execução separados, cada etapa com uma entrega.',
    decisao:
      'Grade modular visível, cantos retos, Archivo em família única e um diagrama próprio em vez de foto.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 'vereda',
    nome: 'Vereda',
    natureza: 'conceitual',
    segmento: 'Reprodução humana',
    ano: '2026',
    capa: '/img/projetos/vereda.jpg',
    site: 'https://fflucasff.github.io/vereda-reproducao/',
    repo: 'https://github.com/fflucasff/vereda-reproducao',
    linha: 'Centro de fertilidade que não usa taxa de sucesso como argumento, e explica por quê.',
    decisao:
      'Coluna única de leitura longa, Literata com Mulish, areia e musgo. O caminho do paciente é uma trilha vertical desenhada.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 'vertice',
    nome: 'Vértice',
    natureza: 'conceitual',
    segmento: 'Cirurgia plástica',
    ano: '2026',
    capa: '/img/projetos/vertice.jpg',
    site: 'https://fflucasff.github.io/vertice-cirurgia/',
    repo: 'https://github.com/fflucasff/vertice-cirurgia',
    linha: 'A abertura assume que a conversa pode terminar em não.',
    decisao:
      'Alto contraste como estrutura, Instrument Serif em corpo grande, taupe como único acento. Sem antes e depois.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 'horizonte',
    nome: 'Horizonte Visão',
    natureza: 'conceitual',
    segmento: 'Oftalmologia',
    ano: '2026',
    capa: '/img/projetos/horizonte.jpg',
    site: 'https://fflucasff.github.io/horizonte-visao/',
    repo: 'https://github.com/fflucasff/horizonte-visao',
    linha: 'Inverte a promessa do setor: nem todo olho pode operar.',
    decisao:
      'Anéis concêntricos com função, teal profundo no lugar do azul hospitalar, Manrope em família única.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
]

export const destaques = projetos
  .filter((p) => p.destaque)
  .sort((a, b) => a.destaque - b.destaque)

export const conceituais = projetos.filter((p) => p.natureza === 'conceitual')

export const outros = projetos.filter((p) => !p.destaque && p.natureza !== 'conceitual')
