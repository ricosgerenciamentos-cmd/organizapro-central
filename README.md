# Central OrganizaPro

Versão inicial da Central OrganizaPro construída a partir da estrutura do projeto antigo, preservando a base de Vercel, APIs, checkout Mercado Pago, Supabase, página de obrigado e liberação de download.

## O que já foi alterado

- Marca principal: OrganizaPro
- Slogan: Soluções para seu negócio
- Home nova responsiva para PC e celular
- Áreas separadas:
  - OrganizaPro Métodos
  - OrganizaPro Serviços
  - OrganizaPro Ferramentas
  - OrganizaPro Produtos
- Páginas internas:
  - `/metodos`
  - `/servicos`
  - `/ferramentas`
  - `/produtos`
  - `/contato`
  - `/checkout`
  - `/obrigado`
- WhatsApp configurado: (12) 98321-6069
- E-mail: OrganizaPro01@gmail.com
- Instagram: @organizaprov

## Produtos disponíveis para checkout agora

- ID 2 — Método Barbeiro Profissional — R$27
- ID 1 — Método Assistência Técnica — R$27

Os métodos Estética Profissional e Alimentação Inteligente aparecem como “Preparando no site” até subir os PDFs finais no projeto ou conectar a entrega via Drive.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como publicar

1. Crie uma cópia/fork do repositório antigo.
2. Substitua os arquivos do fork por esta versão.
3. Configure as variáveis na Vercel:
   - `MERCADO_PAGO_ACCESS_TOKEN`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SITE_URL`
4. Faça deploy na Vercel.

## Observação importante

As APIs antigas foram preservadas. Antes de vender todos os métodos, revise se o PDF de cada produto está dentro de `public/ebooks` e se o ID do produto está configurado em `api/download.js`.
