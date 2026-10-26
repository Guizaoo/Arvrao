/**
 * Arquivo central de conteúdo da landing page.
 *
 * Textos e contatos foram tirados da cópia do site arvrao.com.br guardada no
 * Internet Archive (21/04/2025). Tudo ainda precisa ser confirmado pelo cliente
 * (veja docs/PENDENCIAS.md). Campos de contato vazios ('') aparecem como "A confirmar".
 */

export const site = {
  /** Mostra a faixa "Versão de estudo" no topo. Desligue (false) na versão de produção. */
  studyMode: false,

  company: {
    name: 'Arvrão',
    tagline: 'Terceirização e Gestão Ambiental',
    city: 'São Luís/MA',
    cnpj: '',
  },

  contact: {
    /**
     * Número do WhatsApp só com dígitos, com DDI e DDD. Ex.: '5598900000000'.
     * Enquanto estiver vazio, os botões funcionam em modo demonstração e não abrem conversa.
     * No site antigo aparece (98) 99144-1126 — preencher só depois que o cliente confirmar.
     */
    whatsapp: '',
    whatsappMessage: 'Olá! Vim pelo site da Arvrão e gostaria de solicitar um orçamento.',
    whatsappDisplay: '(98) 99144-1126',
    phone: '(98) 3015-7123',
    emails: ['comercial@arvrao.com.br', 'sac@arvrao.com.br'],
    address: 'BR-135, Av. das Nações Unidas, nº 22, Conj. Res. Magnólia, Ribeira',
    cep: '65095-602',
    hours: '',
    instagram: 'arvrao_ambiental',
    /**
     * Busca usada no mapa da seção de contato. Aponta para o perfil da empresa no Google Maps,
     * que mostra outro endereço (Av. Sarney Filho, Vila Riod) — confirmar com o cliente.
     */
    mapQuery: 'Arvrão Gestão Ambiental, São Luís - MA',
  },

  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Quem somos', href: '#sobre' },
    { label: 'Orçamento', href: '#orcamento' },
    { label: 'Notícias', href: '#noticias' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    kicker: 'São Luís/MA',
    title: 'Coleta, transporte e destinação de resíduos não perigosos.',
    text: 'A Arvrão é licenciada para recolher resíduos não perigosos de diferentes classificações e cumpre as normas da legislação ambiental. Também atende empresas com terceirização de mão de obra.',
    cta: 'Pedir orçamento no WhatsApp',
    imageAlt: 'Caminhão poliguindaste vermelho da Arvrão com caçamba, estacionado em uma avenida de São Luís',
  },

  services: {
    title: 'Nossos serviços',
    intro: 'Dois segmentos de atuação, com atendimento sob medida para cada empresa.',
    segments: [
      {
        title: 'Gestão ambiental',
        text: 'A Arvrão está licenciada para a coleta, o transporte e a destinação de resíduos não perigosos de diferentes classificações e cumpre as normas da legislação ambiental.',
        items: ['Coleta de resíduos não perigosos', 'Transporte e destinação adequada', 'Gerenciamento para grandes geradores'],
        image: 'ilustrativa-coleta.jpg',
        imageAlt: 'Caminhão poliguindaste carregando uma caçamba na rua',
        /** Foto ilustrativa (Wikimedia Commons). Remover `credit` quando trocar por foto real. */
        credit: { author: 'Robin Webster', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Loading_a_skip,_New_Barnet_-_geograph.org.uk_-_7638706.jpg' },
      },
      {
        title: 'Terceirização de mão de obra',
        text: 'A grande vantagem da terceirização é que tudo pode ser feito sob medida, para que as necessidades da sua empresa sejam atendidas do jeito que você precisa.',
        items: ['Equipes montadas conforme a demanda', 'Atendimento sob medida para cada empresa'],
        image: 'site-terceirizacao.jpg',
        imageAlt: 'Profissionais de limpeza uniformizados limpando o piso de um ambiente',
        credit: null,
      },
    ],
  },

  about: {
    title: 'Quem somos',
    lead: 'Nossa história está sendo escrita com alto padrão de segurança e qualidade nos serviços.',
    paragraphs: [
      'Usamos recursos modernos para crescer e para construir uma parceria sólida com cada cliente.',
      'Atuamos em dois segmentos: gestão ambiental, com coleta, transporte e destinação de resíduos não perigosos, e terceirização de mão de obra.',
    ],
    image: 'site-quem-somos.jpg',
    imageAlt: 'Duas pessoas apertando as mãos sobre uma mesa com contrato e notebook',
    moreTitle: 'Conheça também',
    /** Textos de missão, visão e valores não estavam na cópia do site. Preencher com o texto da empresa. */
    more: [
      { title: 'Missão gestão ambiental', text: '' },
      { title: 'Missão terceirização', text: '' },
      { title: 'Visão', text: '' },
      { title: 'Valores', text: '' },
    ],
  },

  proof: {
    title: 'Estrutura',
    facts: [
      { label: 'Licença', value: 'Licenciada para coleta, transporte e destinação de resíduos não perigosos' },
      { label: 'Frota', value: 'Caminhão poliguindaste com caçambas' },
      { label: 'Atuação', value: 'São Luís/MA' },
    ],
    /**
     * Fotos ILUSTRATIVAS do Wikimedia Commons (não são da Arvrão). Trocar por fotos reais.
     * A licença exige o crédito do autor, exibido na legenda.
     */
    photos: [
      {
        file: 'ilustrativa-equipe.jpg',
        caption: 'Equipe em operação',
        alt: 'Trabalhadora com capacete, máscara e colete refletivo ao lado de um caminhão de coleta',
        credit: 'Ermell',
        license: 'CC BY 3.0',
        source: 'https://commons.wikimedia.org/wiki/File:Japanese-refuse-collection-0931.jpg',
      },
      {
        file: 'ilustrativa-cacambas.jpg',
        caption: 'Caçambas e equipamentos',
        alt: 'Caçambas metálicas laranja estacionadas em frente a um prédio residencial',
        credit: 'Ximonic (Simo Räsänen)',
        license: 'CC BY 4.0',
        source: 'https://commons.wikimedia.org/wiki/File:Skips_at_Ojahaanpolku_in_Myyrm%C3%A4ki,_Vantaa,_Finland,_2022_April.jpg',
      },
    ],
  },

  steps: {
    title: 'Solicite seu orçamento',
    text: 'Nossa equipe está pronta para atender sua empresa. Preencha os campos e a conversa abre no WhatsApp com tudo já escrito.',
    formTitle: 'Preencha os campos e fale com a nossa equipe.',
    submit: 'Enviar pelo WhatsApp',
    items: [
      { title: 'Preencha o pedido', description: 'Use o formulário ou o botão do WhatsApp. A mensagem já vem escrita.' },
      { title: 'Conte o que precisa', description: 'Tipo de resíduo ou serviço, quantidade aproximada e endereço.' },
      { title: 'Receba a proposta', description: 'A equipe avalia o pedido e retorna com o orçamento.' },
    ],
  },

  news: {
    title: 'Notícias',
    /** Resumos do site anterior. Os artigos completos não estavam na cópia do Internet Archive. */
    items: [
      {
        title: 'Aspectos legais sobre a terceirização',
        excerpt:
          'Muitos empresários têm dúvidas sobre contratar ou não uma empresa de terceirização. A principal é sobre o aspecto legal: como a sua empresa fica amparada?',
        image: 'site-noticia-terceirizacao.jpg',
        imageAlt: 'Pessoa de terno assinando documentos em uma pasta',
      },
      {
        title: 'Gerenciamento de grandes volumes em São Luís/MA',
        excerpt:
          'Grandes geradores são aqueles que produzem, em média, mais de 200 litros por dia de lixo não reciclável, como papel higiênico, fralda descartável e peças de louça.',
        image: 'site-noticia-grandes-volumes.jpg',
        imageAlt: 'Trator de esteira espalhando resíduos em um aterro',
      },
      {
        title: 'Política nacional de resíduos sólidos em São Luís/MA',
        excerpt:
          'Em São Luís, o tratamento adequado dos resíduos sólidos é uma das prioridades da administração municipal, e há legislação municipal específica para o setor.',
        image: 'site-noticia-residuos.jpg',
        imageAlt: 'Trabalhadora com capacete e máscara separando garrafas plásticas para reciclagem',
      },
    ],
  },

  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'Que tipo de resíduo vocês recolhem?',
        answer: 'Resíduos não perigosos de diferentes classificações. Fale com a equipe para confirmar o seu caso.',
      },
      {
        question: 'Minha empresa é grande geradora de resíduos?',
        answer:
          'Em geral, é grande gerador quem produz, em média, mais de 200 litros de resíduo não reciclável por dia. Em São Luís existe legislação municipal específica para esses casos.',
      },
      {
        question: 'Vocês atendem fora de São Luís?',
        answer: 'Consulte a equipe pelo WhatsApp informando o endereço da coleta.',
      },
      {
        question: 'Como funciona a terceirização de mão de obra?',
        answer: 'O serviço é montado sob medida, conforme a necessidade da sua empresa. Peça um orçamento para conversar com a equipe.',
      },
    ],
  },

  contactSection: {
    title: 'Fale com a Arvrão',
    text: 'Nossa equipe está pronta para atender sua empresa.',
  },
};

/** Monta o link do WhatsApp. Retorna null enquanto não houver número configurado. */
export function whatsappUrl(message: string = site.contact.whatsappMessage): string | null {
  const digits = site.contact.whatsapp.replace(/\D/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
