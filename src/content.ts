/**
 * Arquivo central de conteúdo da landing page.
 *
 * Textos e contatos foram tirados da cópia do site arvrao.com.br guardada no
 * Internet Archive (21/04/2025). Tudo ainda precisa ser confirmado pelo cliente
 * (veja docs/PENDENCIAS.md). Campos de contato vazios ('') aparecem como "A confirmar".
 */

export const site = {
  /** Mostra a faixa "Versão de estudo" no topo. Desligue (false) na versão de produção. */
  studyMode: true,

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
  },

  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Quem somos', href: '#sobre' },
    { label: 'Orçamento', href: '#como-funciona' },
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
    title: 'Serviços',
    intro: 'Dois segmentos de atuação, com atendimento sob medida para cada empresa.',
    items: [
      {
        segment: 'Gestão ambiental',
        title: 'Coleta de resíduos não perigosos',
        description: 'Recolhimento de resíduos não perigosos de diferentes classificações, no local indicado pela empresa.',
      },
      {
        segment: 'Gestão ambiental',
        title: 'Transporte e destinação',
        description: 'Transporte dos resíduos coletados e destinação adequada, de acordo com a legislação ambiental.',
      },
      {
        segment: 'Gestão ambiental',
        title: 'Grandes geradores',
        description: 'Gerenciamento de grandes volumes para empresas que geram resíduo todos os dias em São Luís.',
      },
      {
        segment: 'Terceirização',
        title: 'Terceirização de mão de obra',
        description: 'Equipes sob medida, montadas para atender as necessidades da sua empresa do jeito que você precisa.',
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
  },

  proof: {
    title: 'Estrutura',
    facts: [
      { label: 'Licença', value: 'Licenciada para coleta, transporte e destinação de resíduos não perigosos' },
      { label: 'Frota', value: 'Caminhão poliguindaste com caçambas' },
      { label: 'Atuação', value: 'São Luís/MA' },
    ],
    photos: ['Equipe em operação', 'Coleta em cliente', 'Caçambas e equipamentos'],
  },

  steps: {
    title: 'Como pedir um orçamento',
    items: [
      { title: 'Chame no WhatsApp', description: 'Toque no botão e envie a mensagem que já vem escrita.' },
      { title: 'Conte o que precisa', description: 'Tipo de resíduo ou serviço, quantidade aproximada e endereço.' },
      { title: 'Receba a proposta', description: 'A equipe avalia o pedido e retorna com o orçamento.' },
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
export function whatsappUrl(): string | null {
  const digits = site.contact.whatsapp.replace(/\D/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;
}
