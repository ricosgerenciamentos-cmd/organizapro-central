const legalContent = {
  '/privacidade': {
    eyebrow: 'Política de Privacidade',
    title: 'Como tratamos informações de contato e atendimento',
    paragraphs: [
      'A OrganizaPro pode receber dados enviados voluntariamente pelo usuário, como nome, telefone, e-mail, Instagram e informações sobre o negócio.',
      'Esses dados são usados para atendimento, orçamento, entrega de soluções, suporte e melhoria da experiência no site.',
      'A OrganizaPro não vende dados pessoais. Links externos, pagamentos e plataformas parceiras podem ter políticas próprias.',
    ],
  },
  '/termos': {
    eyebrow: 'Termos de Uso',
    title: 'Condições gerais para uso das soluções OrganizaPro',
    paragraphs: [
      'Os conteúdos, métodos, ferramentas e serviços da OrganizaPro são voltados para pequenos negócios e uso profissional.',
      'Materiais digitais não devem ser copiados, revendidos ou distribuídos sem autorização.',
      'Serviços personalizados dependem de alinhamento prévio de escopo, prazo, conteúdo, pagamento e condições de entrega.',
    ],
  },
  '/reembolso': {
    eyebrow: 'Política de Reembolso',
    title: 'Condições gerais de reembolso e suporte',
    paragraphs: [
      'Produtos digitais e serviços personalizados podem ter condições diferentes de reembolso, conforme o tipo de entrega.',
      'Quando houver pagamento por plataforma externa, as regras do checkout utilizado também podem se aplicar.',
      'Em caso de dúvida, o cliente deve entrar em contato pelo WhatsApp ou e-mail da OrganizaPro.',
    ],
  },
};

export default function LegalPage({ path }) {
  const content = legalContent[path] || legalContent['/privacidade'];

  return (
    <section className="section legalPage">
      <div className="container narrow">
        <span className="eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
