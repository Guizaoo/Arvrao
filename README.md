# Arvrao Gestão Ambiental — landing page (versão de estudo)

Proposta navegável de landing page para apresentar a Arvrao Gestão Ambiental e gerar pedidos de orçamento pelo WhatsApp.

> **Versão de estudo.** Boa parte do conteúdo é provisória e precisa ser aprovada pelo cliente.
> Veja [docs/PENDENCIAS.md](docs/PENDENCIAS.md). Esta versão não deve substituir o site atual nem usar o domínio arvrao.com.br sem aprovação.

## Análise do site de referência

O site https://arvrao.com.br/ não abre direto porque o **certificado HTTPS venceu em 11/08/2026** (Let's Encrypt, válido de 13/05/2026 a 11/08/2026). O endereço HTTP redireciona para o HTTPS e esbarra no mesmo erro. Os navegadores mostram um aviso de "conexão não segura" para quem visita o site, então vale avisar o cliente.

A referência usada foi a **cópia da página inicial guardada no Internet Archive em 21/04/2025** (`web.archive.org/web/20250421162202/https://arvrao.com.br/`). Dela vieram:

- Nome e assinatura: **Arvrão – Terceirização e Gestão Ambiental**.
- Os dois segmentos: gestão ambiental e terceirização de mão de obra.
- A frase "licenciada para a coleta, transporte e destinação de resíduos não perigosos de diferentes classificações".
- O texto de "Quem somos", os telefones, os e-mails, o endereço e o Instagram.
- O logotipo e as cores do site: roxo `#4e3b97` e coral `#e1624b`.
- A foto do caminhão da empresa.

As páginas internas (Quem somos, Serviços, Galeria) não estão no arquivo. As outras fotos do site antigo parecem de banco de imagens e não foram usadas. Como a cópia tem mais de um ano, **tudo continua provisório** até o cliente confirmar. Veja [docs/PENDENCIAS.md](docs/PENDENCIAS.md).

## Tecnologias

- React 19 + Vite + TypeScript
- CSS próprio, responsivo e mobile-first (sem framework de UI)
- Fonte Archivo, carregada do Google Fonts
- Sem backend, banco de dados, login ou painel administrativo
- Únicas dependências de execução: `react` e `react-dom`

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # checagem de tipos + build de produção em dist/
npm run preview    # serve o build em http://localhost:4173
```

## Onde editar o conteúdo

Todo o conteúdo fica em **[src/content.ts](src/content.ts)**:

| Campo | O que controla |
| --- | --- |
| `studyMode` | Faixa amarela "Versão de estudo" no topo. Mude para `false` na versão final. |
| `company` | Nome, assinatura, cidade e CNPJ |
| `contact.whatsapp` | Número do WhatsApp usado nos botões (só dígitos, com 55 + DDD). Vazio = modo demonstração. |
| `contact.whatsappDisplay` | Número exibido no bloco de contato |
| `contact.whatsappMessage` | Mensagem que já vem preenchida no WhatsApp |
| `contact.phone`, `emails`, `address`, `cep`, `hours`, `instagram` | Demais contatos. Campo vazio = aparece "A confirmar". |
| `hero`, `services`, `about`, `proof`, `steps`, `faq` | Textos de cada seção |

Imagens: logotipo e foto do caminhão ficam em `src/assets/`.

### WhatsApp e modo demonstração

Enquanto `contact.whatsapp` estiver vazio, os botões de orçamento **não abrem nenhuma conversa**: eles mostram um aviso de "Modo demonstração" na tela. Assim que o número confirmado for preenchido, todos os botões passam a abrir `https://wa.me/<número>?text=<mensagem>` em nova aba.

Não há formulário de contato. Isso é proposital: sem backend, um formulário só simularia um envio.

### Formulário de orçamento

A seção "Solicite seu orçamento" tem um formulário, mas **não há backend**. Ao enviar, os campos viram o texto de uma mensagem e o WhatsApp abre para a pessoa revisar e mandar. Sem número configurado, aparece o aviso de modo demonstração. Nada é gravado e nenhum envio é simulado.

Há também um botão flutuante de WhatsApp no canto inferior direito, com o mesmo comportamento dos outros botões.

### Imagens

As imagens ficam em `src/assets/`. Em `src/content.ts` elas são referenciadas pelo nome do arquivo.

- `caminhao-arvrao.jpg` e `logo-arvrao.png`: da própria empresa (site anterior).
- `site-*.jpg`: do site anterior. Parecem de banco de imagens, então é preciso confirmar a licença.
- `ilustrativa-*.jpg`: **ilustrativas**, do Wikimedia Commons. A página mostra "Foto ilustrativa" e o crédito do autor, que a licença exige.

Para trocar uma imagem:

1. Coloque a foto em `src/assets/`, em WebP ou JPEG, com cerca de 1200 px de largura e de preferência abaixo de 200 KB.
2. Atualize o nome do arquivo em `src/content.ts`.
3. Se for foto real, remova o campo de crédito (`credit`).

## Publicar na Vercel

> Não publique em produção nem altere o domínio atual antes da aprovação do cliente.

Para uma **prévia de revisão** (URL `*.vercel.app`, sem mexer no domínio):

1. Envie o projeto para um repositório no GitHub, GitLab ou Bitbucket.
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite automaticamente. Confirme:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Clique em **Deploy**. A Vercel gera uma URL de prévia para enviar ao cliente.

Alternativa pela linha de comando: `npx vercel` (prévia) e, só depois de aprovado, `npx vercel --prod`.

A página de estudo tem `<meta name="robots" content="noindex, nofollow">` em [index.html](index.html), para que a prévia não apareça no Google. **Remova essa linha** antes da publicação definitiva.

Ligar o domínio `arvrao.com.br` à Vercel (Project → Settings → Domains) só deve ser feito depois da aprovação, combinando com quem administra o DNS. A Vercel emite e renova o certificado HTTPS automaticamente.

## Estrutura

```
index.html              SEO básico (título, descrição, Open Graph, idioma)
src/content.ts          Conteúdo e contatos (arquivo central)
src/assets/             Logotipo e foto do caminhão (do site anterior)
src/styles.css          Estilos e paleta
src/App.tsx             Ordem das seções
src/components/         Cabeçalho, seções, botão de WhatsApp, espaços de imagem
docs/PENDENCIAS.md      O que o cliente precisa fornecer e o que falta aprovar
```

## Acessibilidade e qualidade

- HTML semântico: `header`, `nav`, `main`, `section` com título, `footer`, listas, `dl` para contatos.
- Um único `h1`; `h2` por seção; `h3` nos cartões.
- Link "Pular para o conteúdo", foco visível, menu mobile com `aria-expanded` e fechamento pela tecla Esc.
- Perguntas frequentes com `<details>`, que funciona pelo teclado sem JavaScript extra.
- Animações discretas, desligadas quando o sistema pede menos movimento (`prefers-reduced-motion`).
- Sem carrosséis.
