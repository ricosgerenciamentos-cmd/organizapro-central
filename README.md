# OrganizaPro Central — Pro V2

Versão refatorada e mais profissional da Central OrganizaPro.

## O que esta versão melhora

- Remove a dependência de colocar o site inteiro dentro de `main.jsx`.
- Cria arquitetura com `pages`, `sections`, `components`, `data`, `areas`, `utils` e `styles`.
- Mantém a OrganizaPro como central de soluções: Serviços, Métodos, Ferramentas e Produtos.
- Destaca o **Combo Tudo Pro Seu Negócio** por R$400 para venda imediata.
- Deixa páginas internas prontas para crescer:
  - `/servicos`
  - `/metodos`
  - `/ferramentas`
  - `/produtos`
  - `/contato`
  - `/servicos/site-profissional`
  - `/metodos/barbeiro`
  - e outras rotas específicas.
- Separa textos e dados em `src/data`, facilitando ajustes sem refazer o código.
- Inclui `vercel.json` para rotas internas funcionarem na Vercel.

## Estrutura principal

```txt
src/
├── main.jsx
├── App.jsx
├── pages/
├── sections/
├── components/
├── data/
├── areas/
├── styles/
└── utils/
```

## Onde editar as coisas principais

- WhatsApp, e-mail e Instagram: `src/data/siteConfig.js`
- Menu: `src/data/navigation.js`
- Combo de R$400: `src/data/combo.js`
- Serviços: `src/data/services.js`
- Métodos: `src/data/methods.js`
- Ferramentas: `src/data/tools.js`
- Produtos: `src/data/products.js`
- SEO/títulos das páginas: `src/data/seo.js`
- Cores e identidade: `src/styles/variables.css`

## Como aplicar no seu projeto atual

1. Faça backup da pasta atual do projeto.
2. Extraia este ZIP.
3. Copie `index.html`, `vercel.json`, `package.json` e a pasta `src` para dentro do projeto.
4. Mantenha suas pastas importantes atuais, como `api`, `public`, `backup`, `publicimages`, checkout e integrações.
5. Se já existir uma pasta `public/images`, mantenha as imagens. Esta versão usa placeholders caso as imagens não existam.
6. Abra o GitHub Desktop.
7. Faça commit.
8. Clique em Push origin.
9. Aguarde a Vercel publicar.

## Rodar localmente

```bash
npm install
npm run dev
```

## Testar build

```bash
npm run build
```

## Observação

Esta versão é uma base premium de estrutura e front-end. As APIs antigas de checkout, Mercado Pago, Supabase e download devem ser mantidas no projeto original, se já existirem.
