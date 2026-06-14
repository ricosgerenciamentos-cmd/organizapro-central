import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const BRAND = {
  name: 'OrganizaPro',
  slogan: 'Soluções para seu negócio',
  whatsapp: '5512983216069',
  whatsappDisplay: '(12) 98321-6069',
  email: 'OrganizaPro01@gmail.com',
  instagram: '@organizaprov',
  logo: '/assets/organizapro-logo.svg',
};

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Métodos', href: '/metodos' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Ferramentas', href: '/ferramentas' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Contato', href: '/contato' },
];

const methods = [
  {
    title: 'Método Barbeiro Profissional',
    short: 'Atendimento, técnica, divulgação, organização e fidelização para barbearias.',
    image: '/assets/cover-barbeiro.svg',
    price: 'R$ 19,00',
    status: 'Disponível',
    tag: 'Produto principal',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Acesso digital imediato'],
    cta: 'Quero este método',
    payment: '#',
  },
  {
    title: 'Método Assistência Técnica',
    short: 'Organização prática para atender melhor, montar estrutura, cobrar certo e crescer.',
    image: '/assets/cover-assistencia.svg',
    price: 'R$ 23,00',
    status: 'Disponível',
    tag: 'Alta aplicação',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Ferramentas indicadas'],
    cta: 'Quero este método',
    payment: '#',
  },
  {
    title: 'Método Estética Profissional',
    short: 'Organização de atendimento, presença digital, posicionamento e rotina profissional.',
    image: '/assets/cover-estetica.svg',
    price: 'R$ 27,00',
    status: 'Preparando no site',
    tag: 'Em fila',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Presença digital'],
    cta: 'Quero saber quando abrir',
    payment: '#',
  },
  {
    title: 'Método Alimentação Inteligente',
    short: 'Conteúdo prático para organizar rotina, preparação, cardápio e controle alimentar.',
    image: '/assets/cover-alimentacao.svg',
    price: 'R$ 13,00',
    status: 'Preparando no site',
    tag: 'Aplicação simples',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Rotina organizada'],
    cta: 'Quero saber quando abrir',
    payment: '#',
  },
];

const services = [
  {
    icon: '🎧',
    title: 'Assistente Virtual',
    short: 'Atendimento, agenda, mensagens, follow-up e apoio administrativo para sua empresa ganhar tempo.',
    bullets: ['WhatsApp e Instagram', 'Agenda e lembretes', 'Organização de tarefas'],
    cta: 'Quero Assistente Virtual',
  },
  {
    icon: '🌐',
    title: 'Criação de Sites',
    short: 'Sites profissionais para apresentar sua empresa, gerar confiança e receber contatos com clareza.',
    bullets: ['Página institucional', 'Link para WhatsApp', 'Layout profissional'],
    cta: 'Quero um site',
  },
  {
    icon: '💬',
    title: 'Organização de WhatsApp',
    short: 'Estruturamos seu atendimento com mensagens prontas, etiquetas, etapas e organização comercial.',
    bullets: ['Respostas prontas', 'Fluxo de atendimento', 'Mais agilidade'],
    cta: 'Organizar meu WhatsApp',
  },
  {
    icon: '📱',
    title: 'Presença Digital',
    short: 'Organização de bio, destaques, visual, posicionamento e comunicação para sua empresa parecer mais profissional.',
    bullets: ['Bio e destaques', 'Identidade visual', 'Comunicação clara'],
    cta: 'Melhorar minha presença',
  },
];

const tools = [
  { title: 'Calculadora de preço e lucro', desc: 'Para entender preço mínimo, margem e lucro por serviço ou produto.', status: 'Planejada' },
  { title: 'Gerador de mensagens', desc: 'Mensagens prontas para atendimento, recuperação de cliente e pós-venda.', status: 'Planejada' },
  { title: 'Checklist por profissão', desc: 'Passo a passo de rotina para barbearias, assistência técnica, delivery e mais.', status: 'Planejada' },
  { title: 'Controle simples de clientes', desc: 'Organização básica para acompanhar clientes, retornos e oportunidades.', status: 'Planejada' },
];

const productCategories = [
  'Produtos para barbeiros',
  'Kits para assistência técnica',
  'Itens para delivery',
  'Produtos para estética',
  'Ferramentas para organizar empresas',
];

const solutionCards = [
  {
    label: 'Métodos',
    title: 'OrganizaPro Métodos',
    text: 'Materiais digitais práticos para aprender, aplicar e melhorar seu negócio.',
    icon: '▤',
    href: '/metodos',
    color: 'blue',
    bullets: ['Passo a passo prático', 'Aplicação imediata', 'Resultados reais'],
    cta: 'Ver métodos',
  },
  {
    label: 'Serviços',
    title: 'OrganizaPro Serviços',
    text: 'Execução profissional para organizar atendimento, presença digital e estrutura.',
    icon: '◉',
    href: '/servicos',
    color: 'green',
    bullets: ['Execução personalizada', 'Mais tempo para você', 'Foco no que importa'],
    cta: 'Ver serviços',
  },
  {
    label: 'Ferramentas',
    title: 'OrganizaPro Ferramentas',
    text: 'Calculadoras, checklists e sistemas simples para facilitar sua rotina.',
    icon: '✦',
    href: '/ferramentas',
    color: 'purple',
    bullets: ['Praticidade no dia a dia', 'Economia de tempo', 'Tudo organizado'],
    cta: 'Ver ferramentas',
  },
  {
    label: 'Produtos',
    title: 'OrganizaPro Produtos',
    text: 'Produtos recomendados para equipar, aplicar e evoluir seu negócio.',
    icon: '▣',
    href: '/produtos',
    color: 'orange',
    bullets: ['Curadoria afiliada', 'Links confiáveis', 'Melhor custo-benefício'],
    cta: 'Ver produtos',
  },
];

function whatsLink(message = 'Olá, vim pelo site da OrganizaPro. Quero entender qual solução combina com meu momento.') {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Logo({ compact = false }) {
  return (
    <a className={cx('logoLink', compact && 'logoLinkCompact')} href="/" aria-label="Ir para o início da OrganizaPro">
      <img src={BRAND.logo} alt="OrganizaPro" />
    </a>
  );
}

function Header({ activePath = '/' }) {
  const [query, setQuery] = useState('');
  const active = (href) => {
    if (href === '/') return activePath === '/';
    return activePath.startsWith(href);
  };

  function submitSearch(event) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    window.location.href = `/produtos?busca=${encodeURIComponent(value)}`;
  }

  return (
    <header className="siteHeader">
      <div className="topAnnouncement">✦ Soluções práticas para fazer seu negócio crescer com organização.</div>

      <div className="marketHeader">
        <div className="headerInner">
          <Logo />

          <form className="searchBox" onSubmit={submitSearch} role="search">
            <span className="searchIcon" aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar métodos, serviços, ferramentas e produtos..."
              aria-label="Buscar no site"
            />
            <button type="submit" aria-label="Pesquisar">Buscar</button>
          </form>

          <div className="utilityLinks" aria-label="atalhos">
            <a href="/contato"><span>Minha conta</span><small>Em breve</small></a>
            <a href="/produtos"><span>Favoritos</span><small>Lista</small></a>
            <a href="/produtos"><span>Carrinho</span><small>Itens</small></a>
          </div>

          <a className="headerCta" href={whatsLink()} target="_blank" rel="noreferrer">◉ Falar com a OrganizaPro</a>
        </div>

        <div className="navInner">
          <a className="categoryTrigger" href="/produtos">☰ Categorias</a>
          <nav className="mainNav" aria-label="navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={active(item.href) ? 'active' : ''} aria-current={active(item.href) ? 'page' : undefined}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function FloatingWhatsApp() {
  return (
    <a className="floatingWhats" href={whatsLink()} target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp">
      ☎
    </a>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">
          <Logo compact />
          <p>Métodos, serviços, ferramentas e produtos para quem quer evoluir com organização.</p>
          <div className="socialButtons">
            <a href={`https://instagram.com/${BRAND.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href={whatsLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">◉</a>
            <a href={`mailto:${BRAND.email}`} aria-label="E-mail">✉</a>
          </div>
        </div>

        <FooterColumn title="Navegação" items={navItems.map((item) => ({ label: item.label, href: item.href }))} />
        <FooterColumn title="Métodos" items={methods.map((item) => ({ label: item.title.replace('Método ', ''), href: '/metodos' }))} />
        <FooterColumn title="Serviços" items={services.map((item) => ({ label: item.title, href: '/servicos' }))} />
        <div className="footerColumn">
          <h3>Contato</h3>
          <a href={whatsLink()} target="_blank" rel="noreferrer">{BRAND.whatsappDisplay}</a>
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <a href={`https://instagram.com/${BRAND.instagram.replace('@', '')}`} target="_blank" rel="noreferrer">{BRAND.instagram}</a>
          <a className="footerWhats" href={whatsLink()} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
        </div>
      </div>
      <div className="footerBottom">
        <span>© 2026 OrganizaPro. Todos os direitos reservados.</span>
        <span>Política de Privacidade</span>
        <span>Termos de Uso</span>
        <span>Suporte</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div className="footerColumn">
      <h3>{title}</h3>
      {items.map((item) => <a key={`${title}-${item.label}`} href={item.href}>{item.label}</a>)}
    </div>
  );
}

function HeroMarketplace({ eyebrow, title, description, image, imageLabel = 'Vitrine OrganizaPro', cta = 'Conhecer soluções', secondaryCta = 'Falar no WhatsApp', chips = [] }) {
  return (
    <section className="marketHero">
      <button className="heroArrow heroArrowLeft" aria-label="Anterior">‹</button>
      <div className="marketHeroContent">
        <div className="marketHeroText">
          <span className="eyebrow light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="heroChips">
            {chips.map((chip) => <span key={chip}>{chip}</span>)}
          </div>
          <div className="heroActions">
            <a className="btn primary" href="#solucoes">{cta} →</a>
            <a className="btn ghostWhite" href={whatsLink()} target="_blank" rel="noreferrer">◉ {secondaryCta}</a>
          </div>
        </div>

        <div className="heroShowcase" aria-label={imageLabel}>
          <div className="stack stackA">Método<br />Clareza Total</div>
          <div className="stack stackB">Serviços<br />Organizados</div>
          <div className="stack stackC">Rotina<br />Produtiva</div>
          <img src={image || methods[0].image} alt={imageLabel} />
          <div className="floatingBadge badgeOne"><strong>Acesso digital</strong><span>Receba pelo WhatsApp</span></div>
          <div className="floatingBadge badgeTwo"><strong>Condição atual</strong><span>Sem números inventados</span></div>
        </div>
      </div>
      <button className="heroArrow heroArrowRight" aria-label="Próximo">›</button>

      <div className="quickCards" aria-label="atalhos de vitrine">
        <QuickCard title="Métodos disponíveis" text="Materiais práticos" href="/metodos" />
        <QuickCard title="Serviços ativos" text="Execução profissional" href="/servicos" />
        <QuickCard title="Também te interessa" text="Ferramentas em desenvolvimento" href="/ferramentas" />
        <QuickCard title="Produtos" text="Curadoria por nicho" href="/produtos" />
        <QuickCard title="Contato rápido" text="Fale no WhatsApp" href="/contato" />
      </div>
    </section>
  );
}

function QuickCard({ title, text, href }) {
  return (
    <a className="quickCard" href={href}>
      <strong>{title}</strong>
      <span>{text}</span>
    </a>
  );
}

function HomePage() {
  return (
    <>
      <Header activePath="/" />
      <main>
        <section className="homeHero">
          <div className="homeBackdrop" />
          <div className="homePanel">
            <div className="homePanelText">
              <span className="eyebrow">OrganizaPro • soluções para seu negócio</span>
              <h1>Inovamos para melhorar seu negócio</h1>
              <p>Métodos, serviços, ferramentas e produtos conectados para organizar sua operação, melhorar o atendimento e transformar rotina em crescimento.</p>
              <div className="heroActions">
                <a className="btn primary" href="#solucoes">Conhecer soluções</a>
                <a className="btn whatsapp" href={whatsLink()} target="_blank" rel="noreferrer">◉ Falar no WhatsApp</a>
              </div>
            </div>
            <div className="homePanelCards">
              <MetricCard label="Mais clareza" value="Processos em dia" />
              <MetricCard label="Mais organização" value="Rotinas simples" />
              <MetricCard label="Mais tempo" value="Atendimento melhor" />
            </div>
          </div>
        </section>

        <TrustStrip />
        <SolutionsSection />
        <FeaturedMethod />
        <ServicesPreview />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="metricCard">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TrustStrip() {
  const items = [
    ['▣', 'Pagamento seguro', 'Caminho simples para compra e atendimento.'],
    ['☁', 'Acesso digital imediato', 'Materiais pensados para aplicação rápida.'],
    ['◉', 'Suporte no WhatsApp', 'Atendimento próximo para orientar o próximo passo.'],
    ['✦', 'Aplicação prática', 'Menos teoria solta e mais ação no dia a dia.'],
  ];
  return (
    <section className="trustStrip">
      {items.map(([icon, title, text]) => (
        <div className="trustItem" key={title}>
          <span>{icon}</span>
          <div><strong>{title}</strong><small>{text}</small></div>
        </div>
      ))}
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="section" id="solucoes">
      <SectionHeader title="Escolha a solução ideal para o seu momento" subtitle="Cada área da OrganizaPro tem uma função. Você entra pelo caminho que mais combina com sua necessidade agora." />
      <div className="solutionGrid">
        {solutionCards.map((card) => <SolutionCard key={card.title} card={card} />)}
      </div>
    </section>
  );
}

function SolutionCard({ card }) {
  return (
    <a className={cx('solutionCard', card.color)} href={card.href}>
      <span className="solutionIcon">{card.icon}</span>
      <small>{card.label}</small>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
      <ul>
        {card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <strong className="cardCta">{card.cta} →</strong>
    </a>
  );
}

function FeaturedMethod() {
  const item = methods[0];
  return (
    <section className="featuredBand">
      <div className="featuredCopy">
        <span className="pill">Produto principal agora</span>
        <h2>Comece pelo {item.title}</h2>
        <p>Um método digital direto para quem quer evoluir no atendimento, técnica, divulgação, organização e fidelização. Ideal para transformar conhecimento em ação prática.</p>
        <div className="miniChips">{item.bullets.map((b) => <span key={b}>{b}</span>)}</div>
      </div>
      <div className="featuredOffer">
        <span>Preço atual</span>
        <strong>{item.price}</strong>
        <small>Entrega digital + suporte pelo WhatsApp</small>
        <a href={whatsLink(`Olá, quero saber mais sobre o ${item.title}.`)} target="_blank" rel="noreferrer">Garantir acesso agora</a>
        <a className="soft" href="/metodos">Ver todos os métodos</a>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section sectionTight">
      <SectionHeader title="Serviços para profissionalizar sua operação" subtitle="Quando o negócio precisa de execução, a OrganizaPro entra com serviços práticos para organizar atendimento, presença e estrutura." />
      <div className="servicePreviewGrid">
        {services.map((service) => <ServiceMiniCard key={service.title} service={service} />)}
      </div>
    </section>
  );
}

function ServiceMiniCard({ service }) {
  return (
    <a className="serviceMiniCard" href={`/servicos#${slugify(service.title)}`}>
      <span>{service.icon}</span>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
    </a>
  );
}

function HowItWorks() {
  const steps = [
    ['01', 'Clareza', 'Você entende qual solução combina com o seu momento.'],
    ['02', 'Organização', 'Materiais, serviços e recomendações conectados no mesmo ecossistema.'],
    ['03', 'Ação prática', 'Nada de teoria solta: foco em aplicar no dia a dia.'],
    ['04', 'Crescimento', 'A estrutura ajuda você a vender melhor e atender com mais profissionalismo.'],
  ];
  return (
    <section className="section sectionTight">
      <div className="stepGrid">
        {steps.map(([number, title, text]) => (
          <div className="stepCard" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection({ title = 'Não sabe por onde começar?', text = 'Fale com a OrganizaPro. Vamos entender seu momento e indicar a melhor solução.' }) {
  return (
    <section className="ctaSection">
      <div>
        <span>📲</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <a href={whatsLink()} target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
    </section>
  );
}

function SectionHeader({ title, subtitle, align = 'center' }) {
  return (
    <div className={cx('sectionHeader', align === 'left' && 'left')}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function MethodsPage() {
  return (
    <>
      <Header activePath="/metodos" />
      <main>
        <HeroMarketplace
          eyebrow="OrganizaPro Métodos"
          title="Aprenda, aplique e venda mais com métodos práticos."
          description="Produtos digitais com módulos, bônus e aplicação direta para transformar conhecimento em ação no seu negócio."
          image={methods[0].image}
          chips={['Estratégia prática', '10 módulos', '3 bônus']}
          cta="Ver ofertas de métodos"
        />
        <section className="section productSection">
          <SectionHeader title="Métodos disponíveis" subtitle="Escolha o material mais alinhado com o seu momento. Os cards já estão prontos para receber as capas oficiais dos métodos." />
          <div className="productGrid">
            {methods.map((method) => <MethodCard key={method.title} method={method} />)}
          </div>
        </section>
        <CTASection title="Pronto para elevar seu negócio ao próximo nível?" text="Fale com a OrganizaPro e descubra o melhor método para começar agora." />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function MethodCard({ method }) {
  const isAvailable = method.status === 'Disponível';
  return (
    <article className="methodCard">
      <div className="methodImageWrap">
        <img src={method.image} alt={`Capa do ${method.title}`} />
        <span className={cx('statusBadge', !isAvailable && 'muted')}>{method.status}</span>
      </div>
      <div className="methodBody">
        <span className="methodTag">{method.tag}</span>
        <h3>{method.title}</h3>
        <p>{method.short}</p>
        <ul>
          {method.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </div>
      <div className="methodFooter">
        <div>
          <span>Preço atual</span>
          <strong>{method.price}</strong>
        </div>
        <a href={isAvailable ? whatsLink(`Olá, quero comprar ou saber mais sobre o ${method.title}.`) : whatsLink(`Olá, quero ser avisado quando o ${method.title} abrir.`)} target="_blank" rel="noreferrer">
          {method.cta}
        </a>
      </div>
    </article>
  );
}

function ServicesPage() {
  return (
    <>
      <Header activePath="/servicos" />
      <main>
        <PageHero
          eyebrow="OrganizaPro Serviços"
          title="Serviços para deixar seu negócio mais organizado, profissional e eficiente."
          subtitle="Ativaremos primeiro os serviços com maior facilidade de venda e execução: Assistente Virtual, Sites, Organização de WhatsApp e Presença Digital."
        />
        <section className="section serviceSection">
          <div className="serviceGrid">
            {services.map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </section>
        <CTASection title="Quer profissionalizar sua operação?" text="Fale com a OrganizaPro e escolha o serviço mais útil para seu momento atual." />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="serviceCard" id={slugify(service.title)}>
      <span className="serviceIcon">{service.icon}</span>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <ul>
        {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <a href={whatsLink(`Olá, quero saber mais sobre ${service.title}.`)} target="_blank" rel="noreferrer">{service.cta} →</a>
    </article>
  );
}

function ToolsPage() {
  return (
    <>
      <Header activePath="/ferramentas" />
      <main>
        <HeroMarketplace
          eyebrow="OrganizaPro Ferramentas"
          title="Ferramentas práticas para resolver problemas reais de cada profissão."
          description="Vamos criar calculadoras, checklists, geradores e sistemas simples para alimentar a Central OrganizaPro."
          image="/assets/tools-preview.svg"
          chips={['Calculadoras', 'Checklists', 'Geradores']}
          cta="Entrar na lista"
        />
        <section className="section">
          <SectionHeader title="Primeiras ferramentas que vamos criar" subtitle="Essa área fica pronta depois da central. A vitrine já está preparada para receber cada ferramenta quando for lançada." />
          <div className="toolGrid">
            {tools.map((tool) => <ToolCard key={tool.title} tool={tool} />)}
          </div>
        </section>
        <CTASection title="Quer uma ferramenta para o seu nicho?" text="Conte para nós qual rotina você quer organizar primeiro." />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function ToolCard({ tool }) {
  return (
    <article className="toolCard">
      <span>{tool.status}</span>
      <h3>{tool.title}</h3>
      <p>{tool.desc}</p>
      <a href={whatsLink(`Olá, tenho interesse na ferramenta: ${tool.title}.`)} target="_blank" rel="noreferrer">Entrar na lista →</a>
    </article>
  );
}

function ProductsPage() {
  return (
    <>
      <Header activePath="/produtos" />
      <main>
        <HeroMarketplace
          eyebrow="OrganizaPro Produtos"
          title="Produtos recomendados para equipar, aplicar e evoluir seu negócio."
          description="Essa área será usada para links afiliados e recomendações por nicho. A ideia é indicar o que realmente ajuda o cliente a aplicar os métodos e trabalhar melhor."
          image="/assets/showcase-products.svg"
          chips={['Curadoria afiliada', 'Links confiáveis', 'Por nicho']}
          cta="Ver categorias"
        />
        <section className="section">
          <div className="curationBox">
            <span className="pill orange">Curadoria afiliada</span>
            <h2>Vamos buscar os melhores produtos por nicho</h2>
            <div className="categoryPills">
              {productCategories.map((category) => <span key={category}>{category}</span>)}
            </div>
            <p>Depois vamos colocar esses links dentro dos métodos e também nesta área do site.</p>
            <a href={whatsLink('Olá, quero falar sobre recomendações e produtos afiliados da OrganizaPro.')} target="_blank" rel="noreferrer">Falar sobre recomendações</a>
          </div>
        </section>
        <CTASection title="Encontrou um produto que precisa entrar aqui?" text="Mande no WhatsApp para avaliarmos se faz sentido indicar dentro dos métodos." />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Header activePath="/contato" />
      <main>
        <PageHero
          eyebrow="Contato"
          title="Fale com a OrganizaPro e descubra qual solução combina com seu momento."
          subtitle="Atendimento pelo WhatsApp, Instagram ou e-mail. Responda com o que você precisa organizar e vamos indicar o melhor caminho."
        />
        <section className="section contactSection">
          <div className="contactCards">
            <a href={whatsLink()} target="_blank" rel="noreferrer"><strong>WhatsApp</strong><span>{BRAND.whatsappDisplay}</span></a>
            <a href={`mailto:${BRAND.email}`}><strong>E-mail</strong><span>{BRAND.email}</span></a>
            <a href={`https://instagram.com/${BRAND.instagram.replace('@', '')}`} target="_blank" rel="noreferrer"><strong>Instagram</strong><span>{BRAND.instagram}</span></a>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="pageHero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}

function CheckoutPage() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const produto = params.get('produto') || 'OrganizaPro';
  return (
    <>
      <Header activePath="/checkout" />
      <main className="checkoutPage">
        <div className="checkoutBox">
          <Logo compact />
          <span className="pill">Checkout</span>
          <h1>Finalize seu acesso com segurança</h1>
          <p>Produto selecionado: <strong>{produto}</strong></p>
          <a className="btn primary" href={whatsLink(`Olá, quero finalizar a compra do ${produto}.`)} target="_blank" rel="noreferrer">Falar com a OrganizaPro</a>
          <a className="btn muted" href="/metodos">Voltar para métodos</a>
        </div>
      </main>
    </>
  );
}

function ObrigadoPage() {
  return (
    <>
      <Header activePath="/obrigado" />
      <main className="checkoutPage">
        <div className="checkoutBox">
          <Logo compact />
          <span className="pill">Pedido recebido</span>
          <h1>Obrigado pela compra!</h1>
          <p>Seu acesso será liberado de acordo com o atendimento da OrganizaPro.</p>
          <a className="btn primary" href={whatsLink('Olá, já fiz minha compra e quero liberar meu acesso.')} target="_blank" rel="noreferrer">Liberar acesso no WhatsApp</a>
          <a className="btn muted" href="/">Voltar para o início</a>
        </div>
      </main>
    </>
  );
}

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function App() {
  const path = window.location.pathname;
  if (path.startsWith('/checkout')) return <CheckoutPage />;
  if (path.startsWith('/obrigado')) return <ObrigadoPage />;
  if (path.startsWith('/metodos')) return <MethodsPage />;
  if (path.startsWith('/servicos')) return <ServicesPage />;
  if (path.startsWith('/ferramentas')) return <ToolsPage />;
  if (path.startsWith('/produtos')) return <ProductsPage />;
  if (path.startsWith('/contato')) return <ContactPage />;
  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
