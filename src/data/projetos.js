/**
 * Projetos do portfólio.
 *
 * Três categorias, com classificação explícita em cada card:
 *  cliente     trabalho contratado e entregue para um cliente real
 *  autoral     produto próprio, sem cliente contratante
 *  conceitual  estudo de caso de marca fictícia, criado para demonstrar método
 *
 * A separação existe para não dar a entender que estudo conceitual foi
 * trabalho pago.
 */

export const CATEGORIAS = [
  { id: 'todos', rotulo: 'Todos' },
  { id: 'conceitual', rotulo: 'Estudos conceituais' },
  { id: 'autoral', rotulo: 'Produtos autorais' },
  { id: 'cliente', rotulo: 'Trabalhos para clientes' },
]

export const ROTULO_CATEGORIA = {
  cliente: 'Cliente',
  autoral: 'Produto autoral',
  conceitual: 'Estudo conceitual',
}

export const projetos = [
  {
    id: 'tersa',
    nome: 'Clínica Tersa',
    setor: 'Dermatologia clínica e estética',
    categoria: 'conceitual',
    capa: '/img/projetos/tersa.jpg',
    site: 'https://fflucasff.github.io/clinica-tersa/',
    repo: 'https://github.com/fflucasff/clinica-tersa',
    resumo:
      'Clínica de dermatologia com serviços organizados pela necessidade do paciente, não pelo nome do procedimento.',
    problema:
      'Sites de dermatologia listam aparelhos e prometem resultado. Quem chega sem conhecer o vocabulário técnico não se reconhece numa lista de nomes de equipamento, e promessa de resultado reduz credibilidade com quem já tratou antes.',
    publico:
      'Pacientes de maior poder aquisitivo que comparam clínicas antes de marcar e esperam atendimento individualizado.',
    estrategia:
      'A seção principal usa frases na voz do paciente, como "tenho manchas que me incomodam". A jornada aparece antes dos tratamentos, informando que nenhum procedimento é marcado antes da avaliação. As perguntas frequentes enfrentam valor, convênio e prazo em vez de evitá-los.',
    funcionalidades: [
      'Áreas de atendimento em acordeão, organizadas por necessidade',
      'Jornada em quatro etapas com duração estimada',
      'Índice de tratamentos agrupado por região',
      'Perguntas frequentes expansíveis',
      'Formulário de avaliação com validação e confirmação demonstrativa',
    ],
    design:
      'Navegação lateral fixa no desktop libera a coluna de texto e evita o cabeçalho padrão. Fraunces no display e Karla no corpo. Base osso com um único acento rosewood. A faixa visual é composição própria em SVG, sem banco de imagens.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'CSS próprio', 'GitHub Actions'],
  },
  {
    id: 'ancora',
    nome: 'Instituto Âncora',
    setor: 'Implantes e reabilitação oral',
    categoria: 'conceitual',
    capa: '/img/projetos/ancora.jpg',
    site: 'https://fflucasff.github.io/instituto-ancora/',
    repo: 'https://github.com/fflucasff/instituto-ancora',
    resumo:
      'Instituto de implantes que separa avaliação, planejamento e execução em etapas distintas, cada uma com uma entrega.',
    problema:
      'Implante é decisão cara, demorada e cercada de medo. O paciente chega com três perguntas que quase nenhum site responde: se o caso dele tem solução, quanto tempo leva e quanto custa.',
    publico:
      'Adultos avaliando reabilitação oral, frequentemente após anos adiando a decisão.',
    estrategia:
      'A espinha dorsal é a separação entre avaliação, planejamento e execução, deixando claro que ninguém decide cirurgia na primeira consulta. A indicação é descrita por situação reconhecível. A tabela de opções tem uma coluna dedicada a contrapartidas, porque listar só vantagens perde credibilidade com quem compara clínicas.',
    funcionalidades: [
      'Grade modular de situações de indicação',
      'Etapas com a entrega concreta de cada fase',
      'Tabela comparativa de opções com coluna de contrapartida',
      'Recursos de planejamento explicados pela função',
      'Formulário que pergunta se o paciente já tem exames de imagem',
    ],
    design:
      'Grade modular visível formada por bordas de um pixel, cantos retos em todos os elementos e Archivo em família única. Azul profundo com areia e mineral. Diagrama próprio em SVG das camadas avaliadas, no lugar de fotografia.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'CSS próprio', 'GitHub Actions'],
  },
  {
    id: 'vereda',
    nome: 'Vereda',
    setor: 'Reprodução humana',
    categoria: 'conceitual',
    capa: '/img/projetos/vereda.jpg',
    site: 'https://fflucasff.github.io/vereda-reproducao/',
    repo: 'https://github.com/fflucasff/vereda-reproducao',
    resumo:
      'Centro de reprodução assistida que não usa taxa de sucesso como argumento e explica o motivo.',
    problema:
      'É o segmento em que o marketing mais atrapalha. Quem procura um centro de fertilidade já passou por tentativas e frustração, e encontra sites que vendem esperança com foto de bebê e taxa de sucesso em destaque. A pessoa se sente um número e a expectativa criada não se sustenta na primeira consulta.',
    publico:
      'Pessoas e casais em diferentes configurações familiares investigando fertilidade.',
    estrategia:
      'A conversa inicial é posicionada como escuta, com aviso de que nenhum tratamento é definido nela. A jornada admite que o caminho é interrompido, retomado ou refeito, e que esperar também é uma possibilidade legítima. A recusa em usar taxa de sucesso vira argumento, explicada na seção de dúvidas.',
    funcionalidades: [
      'Jornada em trilha vertical contínua, com cinco passos',
      'Seção dedicada a diferentes configurações familiares',
      'Possibilidades de tratamento descritas sem promessa de desfecho',
      'Perguntas frequentes sobre dor, afastamento e tentativa sem resultado',
      'Formulário que pergunta em que ponto a pessoa está',
    ],
    design:
      'Coluna única de leitura longa, com medida controlada e sem grade de cartões. Literata no corpo e Mulish na interface. Areia e musgo, cantos arredondados. Nenhum símbolo de bebê, barriga ou coração: a única ilustração é uma trilha desenhada em SVG.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'CSS próprio', 'GitHub Actions'],
  },
  {
    id: 'vertice',
    nome: 'Vértice',
    setor: 'Cirurgia plástica',
    categoria: 'conceitual',
    capa: '/img/projetos/vertice.jpg',
    site: 'https://fflucasff.github.io/vertice-cirurgia/',
    repo: 'https://github.com/fflucasff/vertice-cirurgia',
    resumo:
      'Clínica de cirurgia plástica cuja abertura assume que a conversa pode terminar em não.',
    problema:
      'O segmento tem o marketing mais agressivo da área médica e as restrições éticas mais rígidas. Converter com antes e depois e tabela de preço atrai volume e atrai o paciente errado, criando expectativa que a técnica não sustenta.',
    publico:
      'Pessoas avaliando procedimento estético que buscam critério, não garantia.',
    estrategia:
      'A frase de abertura funciona como filtro deliberado. A jornada inclui uma etapa chamada decisão, que é um intervalo entre o plano e a marcação. A seção de segurança abre dizendo que existe para apoiar a decisão, não para tranquilizar, e lista riscos reais. A ausência de antes e depois é transformada em argumento, com o motivo explicado.',
    funcionalidades: [
      'Procedimentos organizados por região, com nota de contexto em cada item',
      'Jornada em cinco etapas, incluindo intervalo de decisão',
      'Seção de segurança listando risco, exames e ambiente hospitalar',
      'Perguntas frequentes enfrentando antes e depois, cicatriz e afastamento',
      'Formulário em fundo escuro com campos de linha única',
    ],
    design:
      'Alto contraste usado como estrutura: blocos pretos e claros se alternam marcando mudança de assunto. Instrument Serif em corpo grande ocupa o espaço que o segmento usaria para foto. Taupe como único acento, sem nenhum dourado. Sem fotografia.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'CSS próprio', 'GitHub Actions'],
  },
  {
    id: 'horizonte',
    nome: 'Horizonte Visão',
    setor: 'Oftalmologia e cirurgia refrativa',
    categoria: 'conceitual',
    capa: '/img/projetos/horizonte.jpg',
    site: 'https://fflucasff.github.io/horizonte-visao/',
    repo: 'https://github.com/fflucasff/horizonte-visao',
    resumo:
      'Clínica de oftalmologia que inverte a promessa do segmento e trata o protocolo de exames como argumento.',
    problema:
      'Cirurgia refrativa é vendida com a promessa de largar os óculos. Isso gera paciente inelegível que agenda e recebe negativa inesperada, e paciente elegível que opera esperando independência total e descobre depois que a presbiopia continua evoluindo.',
    publico:
      'Adultos considerando cirurgia refrativa e pacientes de rotina oftalmológica.',
    estrategia:
      'A abertura afirma que nem todo olho pode operar e que descobrir isso é o trabalho da avaliação. Os cinco critérios de elegibilidade ficam explícitos, o que permite ao paciente se autoavaliar antes de marcar. Os exames são apresentados pela pergunta que respondem. A logística, como as duas horas de exame e a pupila dilatada, é dita antes porque é o que gera remarcação.',
    funcionalidades: [
      'Critérios de elegibilidade para cirurgia refrativa, explicitados',
      'Exames apresentados pela pergunta que cada um responde',
      'Jornada em cinco passos com tempo estimado',
      'Aviso destacado de que nenhuma técnica garante dispensa de óculos',
      'Formulário com expectativas práticas listadas ao lado',
    ],
    design:
      'Anéis concêntricos aparecem no símbolo, nos marcadores e na figura de abertura, sempre representando foco e eixo de medida. Teal profundo no lugar do azul hospitalar, com âmbar em dose mínima. Manrope em família única. Sem olho em close e sem fotografia.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'CSS próprio', 'GitHub Actions'],
  },
  {
    id: 'escopo',
    nome: 'Escopo',
    setor: 'Propostas e orçamentos',
    categoria: 'autoral',
    capa: '/img/projetos/escopo.jpg',
    site: 'https://fflucasff.github.io/escopo-propostas/',
    repo: 'https://github.com/fflucasff/escopo-propostas',
    resumo:
      'Ferramenta para montar propostas comerciais, com o documento A4 pronto para imprimir aparecendo ao lado do formulário.',
    problema:
      'Quem presta serviço por conta própria manda orçamento por mensagem ou em planilha improvisada. Isso custa trabalho para somar sem errar e custa negócio quando o cliente compara com um concorrente que mandou documento organizado.',
    publico:
      'Autônomos e pequenos prestadores: fotógrafo, projetista, eletricista, consultor, desenvolvedor.',
    estrategia:
      'O produto resolve a objeção na hora em que ela aparece: você vê o documento final enquanto preenche, então sabe exatamente o que o cliente vai receber. Abre com uma proposta de exemplo preenchida, em vez de tela vazia.',
    funcionalidades: [
      'Itens com quantidade, unidade e valor unitário, com total por linha',
      'Desconto percentual ou em valor, com subtotal e total separados',
      'Numeração automática no padrão prefixo e sequência',
      'Impressão que gera apenas a folha A4, permitindo salvar em PDF',
      'Propostas salvas no navegador, com exportação e importação em JSON',
    ],
    design:
      'A folha é o elemento principal da tela, sobre bancada cinza fria, para ler como papel de verdade. Spectral no documento e IBM Plex Sans na interface. Bordô como único acento. No celular a tabela vira blocos, mas a impressão continua em tabela.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'CSS próprio', 'GitHub Actions'],
    nota: 'Todo valor circula como número inteiro de centavos, porque soma em ponto flutuante acumula erro e faz o total não bater com a soma das linhas. A regra tem 12 testes automatizados cobrindo arredondamento, desconto maior que o subtotal e entrada inválida.',
  },
  {
    id: 'lais',
    nome: 'Dra. Laís Junqueira',
    setor: 'Site para dermatologista',
    categoria: 'cliente',
    capa: null,
    site: 'https://fflucasff.github.io/Site-Lais-Junqueira/',
    repo: 'https://github.com/fflucasff/Site-Lais-Junqueira',
    resumo:
      'Site de autoridade para médica dermatologista, com estrutura de conversão e tracking configurado.',
    problema:
      'A médica tinha presença digital genérica, sem medição e sem caminho claro até o contato.',
    publico: 'Pacientes buscando dermatologia clínica e estética na região.',
    estrategia:
      'Reescrita do conteúdo com foco em conversão, pontos de contato em sequência e implementação de medição para saber de onde vêm os contatos.',
    funcionalidades: [
      'Apresentação de serviços e protocolo de atendimento',
      'Contato direto por WhatsApp',
      'Google Analytics e Meta Pixel configurados',
    ],
    design: 'Identidade clara e sóbria, adequada ao contexto médico.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'GTM', 'Meta Pixel'],
  },
  {
    id: 'amor',
    nome: 'Amor em Códigos',
    setor: 'Site personalizado para casal',
    categoria: 'cliente',
    capa: null,
    site: 'https://paulovictor-carla.lffindustries.com',
    repo: null,
    resumo:
      'Produto white-label de site comemorativo personalizado, entregue em domínio próprio do cliente.',
    problema:
      'Os templates genéricos de site para casal entregam todos a mesma página, sem relação com a história de quem compra.',
    publico: 'Casais procurando um presente digital feito sob medida.',
    estrategia:
      'Produto replicável com conteúdo totalmente personalizado por cliente, publicado em subdomínio próprio.',
    funcionalidades: [
      'Linha do tempo do relacionamento',
      'Contador em tempo real',
      'Galeria de fotos e carta com efeito de revelação',
    ],
    design: 'Identidade específica por casal, com animações próprias em CSS.',
    tecnologias: ['React', 'CSS Animations', 'Domínio customizado'],
  },
  {
    id: 'universo',
    nome: 'Universo Computadores',
    setor: 'Landing page para loja local',
    categoria: 'cliente',
    capa: null,
    site: 'https://fflucasff.github.io/LP-Universo-Computadores/',
    repo: 'https://github.com/fflucasff/LP-Universo-Computadores',
    resumo:
      'Landing page para loja física de manutenção de computadores e instalação de CFTV.',
    problema:
      'Loja de bairro sem presença digital, competindo com concorrência informal.',
    publico: 'Clientes residenciais e empresas da região de São Lourenço.',
    estrategia:
      'Serviços categorizados de forma reconhecível e vários caminhos de contato, incluindo endereço físico.',
    funcionalidades: [
      'Serviços agrupados por tipo',
      'Contato por WhatsApp, Instagram e endereço',
    ],
    design: 'Direta e objetiva, priorizando clareza sobre sofisticação.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'donna',
    nome: 'Donna',
    setor: 'Secretária virtual',
    categoria: 'autoral',
    capa: null,
    site: 'https://donna-secretaria-virtual.vercel.app/register',
    repo: null,
    resumo:
      'Plataforma própria de organização de rotina, com cadastro e autenticação em produção.',
    problema:
      'Profissionais autônomos organizam agenda e tarefas manualmente, sem ferramenta pensada para o fluxo deles.',
    publico: 'Profissionais autônomos e pequenos prestadores.',
    estrategia:
      'Produto em fase de lançamento, com o fluxo de entrada funcionando e arquitetura preparada para automações.',
    funcionalidades: [
      'Cadastro e autenticação de usuários',
      'Painel de organização de rotina',
    ],
    design: 'Interface de produto, focada em uso recorrente.',
    tecnologias: ['React', 'Autenticação', 'Vercel'],
  },
  {
    id: 'gastos',
    nome: 'Controle de Gastos',
    setor: 'Aplicação web',
    categoria: 'autoral',
    capa: null,
    site: 'https://fflucasff.github.io/Controle-de-Gastos/',
    repo: 'https://github.com/fflucasff/Controle-de-Gastos',
    resumo:
      'Controle de gastos mensais com categorização e gráficos, sem exigir cadastro.',
    problema:
      'Planilha de controle financeiro exige montagem e manutenção que a maioria não faz.',
    publico: 'Pessoas organizando finanças pessoais.',
    estrategia: 'Uso imediato, sem conta e sem configuração inicial.',
    funcionalidades: [
      'Categorização em tempo real',
      'Gráficos de distribuição',
      'Exportação em CSV',
    ],
    design: 'Interface enxuta, centrada na entrada rápida de dados.',
    tecnologias: ['React', 'Recharts', 'LocalStorage'],
  },
]
