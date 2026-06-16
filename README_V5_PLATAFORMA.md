# OrganizaPro Plataforma V5

Esta versão transforma a Central OrganizaPro em um MVP de plataforma, mantendo o site institucional e adicionando:

- `/login` — acesso local de cliente/admin
- `/plataforma` — visão geral da plataforma
- `/cliente` — área do cliente
- `/admin` — painel administrativo
- `/admin/crm` — CRM simples com leads em localStorage
- `/admin/automacoes` — modelos de mensagens e fluxos comerciais
- `/assistente-ia` — protótipo de assistente para diagnóstico e plano de ação

## Observação

O login, CRM e IA desta versão são MVPs front-end para validar a experiência. Para uso real, conectar:

- Supabase Auth ou Clerk para login real
- Supabase/Postgres para banco de dados
- Mercado Pago para pagamento
- API de IA para respostas inteligentes reais
- WhatsApp Business API/Z-API/Take Blip para automações reais

## Como testar

```bash
npm install
npm run dev
npm run build
```

## Como aplicar

Copie a pasta `src`, `index.html`, `package.json`, `vercel.json` e mantenha suas pastas atuais `api`, `public`, `backup` e integrações antigas.
