export const platformStats = [
  { value: '12', label: 'leads no CRM' },
  { value: '4', label: 'automações prontas' },
  { value: '7', label: 'tarefas em aberto' },
  { value: 'R$ 1.240', label: 'potencial em propostas' },
];

export const clientProducts = [
  {
    title: 'Combo Tudo Pro Seu Negócio',
    status: 'Em atendimento',
    progress: 62,
    description: 'Site profissional, Instagram organizado, página de vendas e WhatsApp Business configurado.',
    nextStep: 'Enviar fotos, logo e dados do negócio para finalizar a primeira versão.',
  },
  {
    title: 'Método Barbeiro Profissional',
    status: 'Disponível',
    progress: 100,
    description: 'Material prático para atendimento, técnica, divulgação, organização e vendas.',
    nextStep: 'Acessar módulos e aplicar o checklist inicial.',
  },
];

export const adminModules = [
  {
    title: 'CRM de oportunidades',
    description: 'Controle empreendedores chamados, respostas, interesse, orçamento e próximos passos.',
    path: '/admin/crm',
    icon: '📋',
  },
  {
    title: 'Automações comerciais',
    description: 'Mensagens, follow-ups e fluxos para WhatsApp, Instagram e pós-venda.',
    path: '/admin/automacoes',
    icon: '⚙️',
  },
  {
    title: 'Assistente IA OrganizaPro',
    description: 'Gere diagnóstico, plano de ação, bio, mensagens e proposta para cada negócio.',
    path: '/assistente-ia',
    icon: '✨',
  },
  {
    title: 'Área do cliente',
    description: 'Veja como o cliente acessa métodos, serviços contratados, entregas e suporte.',
    path: '/cliente',
    icon: '👤',
  },
];

export const initialLeads = [
  {
    id: 'lead-001',
    name: 'Barbearia Modelo',
    segment: 'Barbearia',
    source: 'WhatsApp ativo',
    status: 'Interessado',
    value: 400,
    nextAction: 'Enviar proposta do combo',
    notes: 'Precisa organizar Instagram e ter link profissional para clientes.'
  },
  {
    id: 'lead-002',
    name: 'Assistência Rápida Cell',
    segment: 'Assistência técnica',
    source: 'Instagram',
    status: 'Aguardando resposta',
    value: 400,
    nextAction: 'Follow-up no fim do dia',
    notes: 'Perguntou sobre site simples e WhatsApp Business.'
  },
  {
    id: 'lead-003',
    name: 'Delivery da Ana',
    segment: 'Delivery',
    source: 'Indicação',
    status: 'Diagnóstico',
    value: 600,
    nextAction: 'Montar plano de presença digital',
    notes: 'Quer página de vendas e cardápio com botão para WhatsApp.'
  },
];

export const automationFlows = [
  {
    title: 'Primeiro contato com empreendedor',
    channel: 'WhatsApp',
    trigger: 'Lead novo',
    status: 'Pronto para usar',
    message: 'Olá, tudo bem? Me chamo Guilherme, sou da OrganizaPro. Estou entrando em contato com pequenos negócios para apresentar uma estrutura simples de site, Instagram e WhatsApp profissional. Posso te mandar uma ideia rápida?'
  },
  {
    title: 'Resposta quando o cliente pedir preço',
    channel: 'WhatsApp',
    trigger: 'Perguntou valor',
    status: 'Pronto para usar',
    message: 'O Combo Tudo Pro Seu Negócio fica R$400 e inclui site profissional, Instagram organizado, página de vendas e WhatsApp Business configurado. É uma estrutura para deixar o negócio mais confiável e fácil de atender pela internet.'
  },
  {
    title: 'Follow-up de interessado',
    channel: 'WhatsApp',
    trigger: 'Sem resposta por 24h',
    status: 'Pronto para usar',
    message: 'Passando só para reforçar: consigo montar uma estrutura simples e profissional para seu negócio aparecer melhor na internet e facilitar o contato dos clientes. Quer que eu te mostre como ficaria?'
  },
  {
    title: 'Pós-venda do combo',
    channel: 'WhatsApp',
    trigger: 'Pagamento confirmado',
    status: 'Modelo inicial',
    message: 'Recebido! Agora vou precisar de algumas informações para montar sua estrutura: nome do negócio, logo, fotos, serviços, endereço, horários e número do WhatsApp de atendimento.'
  },
];

export const aiTemplates = [
  'Diagnóstico de presença digital',
  'Plano de ação para Instagram',
  'Mensagem de prospecção',
  'Proposta comercial',
  'Bio profissional',
  'Checklist de WhatsApp Business',
];
