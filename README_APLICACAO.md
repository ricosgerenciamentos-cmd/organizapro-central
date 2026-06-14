# OrganizaPro Central V8 — base visual unificada

Esta versão reorganiza o site para que Início, Métodos, Serviços, Ferramentas, Produtos e Contato pareçam partes do mesmo ecossistema.

## O que foi corrigido

- Cabeçalho único em todas as páginas.
- Visual inspirado em marketplace, mas com identidade azul da OrganizaPro.
- Página inicial com pegada institucional/profissional inspirada no modelo da Zucchetti.
- Página Métodos com vitrine mais forte para venda.
- Sem avaliações, números de vendas ou descontos inventados.
- Cards preparados para receber capas/imagens oficiais dos métodos e produtos.
- Rotas separadas: `/`, `/metodos`, `/servicos`, `/ferramentas`, `/produtos`, `/contato`.

## Como aplicar

1. Abra a pasta do projeto `organizapro-central`.
2. Substitua os arquivos `main.jsx` e `style.css` pelos arquivos desta pasta.
3. Copie a pasta `public/assets` para dentro do projeto, mantendo o caminho `public/assets`.
4. Se for usar o projeto completo, pode substituir todos os arquivos pelo conteúdo desta pasta.
5. No GitHub Desktop, faça commit e push.
6. A Vercel vai publicar automaticamente.

## Pontos para editar depois

- Links reais de pagamento em `methods.payment`.
- Imagens/capas oficiais dos métodos em `methods.image`.
- Produtos afiliados reais na página `/produtos`.
- Ferramentas reais na página `/ferramentas`.
