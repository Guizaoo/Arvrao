# Pendências para aprovação — Arvrão

Versão de estudo de 26/10/2026.

**Origem do conteúdo:** o site atual (arvrao.com.br) não abre porque o certificado HTTPS venceu em 11/08/2026. Textos, contatos, logotipo, cores e a foto do caminhão vieram da **cópia da página inicial no Internet Archive, de 21/04/2025**. Como essa cópia tem mais de um ano, tudo abaixo precisa ser confirmado.

## 1. Perguntas para o cliente

- [ ] O nome na página deve ser **"Arvrão – Terceirização e Gestão Ambiental"**, como no site anterior, ou "Arvrao Gestão Ambiental", como veio no briefing?
- [ ] A página deve apresentar **os dois segmentos** (gestão ambiental e terceirização de mão de obra) ou só gestão ambiental?
- [ ] O WhatsApp de orçamentos é **(98) 99144-1126**? O cabeçalho do site antigo mostrava "(98) 9144-1126", com um 9 a menos.
- [ ] O telefone fixo (98) 3015-7123, os e-mails comercial@ e sac@arvrao.com.br e o endereço da BR-135 continuam valendo?
- [ ] A licença ambiental está vigente? Qual o número e o órgão emissor? A página afirma que a empresa é "licenciada".
- [ ] A empresa aluga ou fornece caçambas? A foto mostra um caminhão poliguindaste com caçamba, mas o site antigo não cita esse serviço.
- [ ] O atendimento a grandes geradores é um serviço oferecido? Hoje ele foi deduzido de um artigo do site antigo.
- [ ] Que serviços entram em "terceirização de mão de obra" (limpeza, portaria, apoio operacional etc.)?
- [ ] Qual o horário de atendimento?
- [ ] O que acontece com o site atual quando a nova página entrar no ar?

## 2. O que o cliente precisa fornecer

- [ ] Logotipo em alta resolução, de preferência SVG. O atual é um PNG de 789×158 tirado do site antigo.
- [ ] De 4 a 6 fotos reais: equipe, coleta em cliente, caçambas, terceirização. Precisa de autorização de uso de imagem de quem aparece.
- [ ] Foto do caminhão em resolução maior. A atual tem 770×520 e perde nitidez em telas grandes.
- [ ] CNPJ e razão social para o rodapé.
- [ ] Missão, visão e valores. O site antigo tinha esses itens, mas a página interna não está no arquivo.
- [ ] Respostas confirmadas para as perguntas frequentes.
- [ ] Acesso ou contato de quem administra o domínio e o DNS.

## 3. Informações provisórias que precisam de aprovação

Todas estão em `src/content.ts`. Na página, a faixa amarela no topo avisa que o conteúdo é provisório.

| Local | Conteúdo | Origem |
| --- | --- | --- |
| Geral | Nome "Arvrão" e assinatura "Terceirização e Gestão Ambiental" | Site anterior (2025) |
| Geral | Logotipo e cores roxo/coral | Site anterior (2025) |
| Primeira seção | Título "Coleta, transporte e destinação de resíduos não perigosos." | Redação baseada no site anterior |
| Primeira seção | "Licenciada para recolher resíduos não perigosos de diferentes classificações e cumpre as normas da legislação ambiental" | Site anterior (2025); confirmar a licença |
| Primeira seção | Foto do caminhão | Site anterior (2025) |
| Serviços 1 e 2 | Coleta; transporte e destinação | Site anterior (2025) |
| Serviço 3 | Grandes geradores | Deduzido de um artigo do site anterior |
| Serviço 4 | Terceirização de mão de obra ("sob medida") | Site anterior (2025) |
| Quem somos | Texto sobre segurança, qualidade e parceria | Site anterior (2025), reescrito em frases curtas |
| Estrutura | Licença; "Caminhão poliguindaste com caçambas"; atuação em São Luís/MA | Site anterior e foto |
| Estrutura | Três espaços "Foto a enviar" | Espaços reservados |
| Perguntas frequentes | Regra de grande gerador (mais de 200 litros por dia de resíduo não reciclável) | Artigo do site anterior; confirmar a regra vigente em São Luís |
| Perguntas frequentes | Atendimento fora de São Luís; terceirização | Respostas genéricas que pedem contato |
| Como pedir orçamento | Os três passos, sem promessa de prazo | Proposta de fluxo |
| Contato | WhatsApp, telefone, e-mails, endereço, CEP e Instagram | Site anterior (2025) |
| Contato e rodapé | Horário e CNPJ aparecem como "A confirmar" | Não encontrados |
| SEO (`index.html`) | Título e descrição da página | Derivados do conteúdo acima |

A página não inclui certificações, clientes, depoimentos ou números de resultados. As fotos de banco de imagens do site anterior não foram usadas.

## 4. O que falta para colocar em produção

1. **Responder as perguntas da seção 1** e aplicar as correções em `src/content.ts`.
2. **Ativar o WhatsApp:** preencher `contact.whatsapp` com o número confirmado e testar no celular e no computador.
3. **Trocar os espaços de foto** por fotos reais otimizadas (WebP, com `alt`, `width` e `height`) e usar o logotipo em alta resolução.
4. **Remover os sinais de estudo:** `studyMode: false` em `src/content.ts` e retirar a meta `noindex` de `index.html`.
5. **Completar o SEO:** URL canônica, imagem de compartilhamento (og:image, 1200×630), dados estruturados `LocalBusiness` com endereço e telefone confirmados, `robots.txt` e `sitemap.xml`.
6. **Publicar uma prévia na Vercel** (URL `*.vercel.app`) para aprovação final.
7. **Ligar o domínio** arvrao.com.br à Vercel, só depois da aprovação e com quem administra o DNS. Isso também resolve o certificado vencido, porque a Vercel renova o HTTPS automaticamente.
8. **Revisão final:** testar em celulares Android e iPhone, navegar pelo teclado, conferir os links e rodar o Lighthouse.

### Esforço estimado do que falta

A estrutura, o visual e o conteúdo-base já estão prontos. O restante depende das respostas e do material do cliente:

- Aplicar correções de texto e contato: de 1 a 3 horas.
- Tratar e otimizar fotos e logotipo: depende da quantidade e da qualidade do material.
- Publicar, ligar o domínio e revisar: algumas horas, dependendo do acesso ao DNS.

Isso cabe no escopo de uma landing page simples (R$ 800), desde que o conteúdo chegue completo e em no máximo uma ou duas rodadas de ajustes. Formulário com envio, blog, várias páginas ou painel para editar conteúdo ficam fora desse escopo.
