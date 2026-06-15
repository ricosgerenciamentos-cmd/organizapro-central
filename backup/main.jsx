import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const WHATSAPP_NUMBER = '5512983216069';
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, vim pelo site da OrganizaPro e quero entender a melhor solução para o meu negócio.')}`;
const email = 'OrganizaPro01@gmail.com';
const instagram = '@organizaprov';

const imageSpecs = [
  { area: 'Home hero — fundo principal', size: '1920x980 px', use: 'Imagem escura/sofisticada de empreendedor, escritório, cidade ou operação de negócio.' },
  { area: 'Home hero — card visual lateral', size: '760x560 px', use: 'Imagem de pessoa trabalhando, atendimento ou organização em negócio real.' },
  { area: 'Home soluções — Métodos', size: '900x620 px', use: 'Foto/capa do método principal ou mockup dos materiais digitais.' },
  { area: 'Home soluções — Serviços', size: '900x620 px', use: 'Equipe, atendimento, notebook, WhatsApp, profissional em consultoria.' },
  { area: 'Home soluções — Ferramentas', size: '900x620 px', use: 'Dashboard, planilha, notebook, celular, organização visual.' },
  { area: 'Home soluções — Produtos', size: '900x620 px', use: 'Produtos em mesa, caixas, equipamentos, ferramentas recomendadas.' },
  { area: 'Métodos — banner marketplace', size: '1920x760 px', use: 'Fundo azul abstrato ou montagem com capas dos métodos.' },
  { area: 'Card Método Barbeiro', size: '900x620 px', use: 'Capa horizontal ou mockup do Método Barbeiro.' },
  { area: 'Card Método Assistência Técnica', size: '900x620 px', use: 'Capa horizontal ou imagem de manutenção/celular.' },
  { area: 'Card Método Estética', size: '900x620 px', use: 'Capa horizontal ou imagem de estética profissional.' },
  { area: 'Card Método Alimentação', size: '900x620 px', use: 'Capa horizontal ou imagem de alimentação/rotina.' },
  { area: 'Produtos — slides de recomendações', size: '1920x760 px', use: 'Banner por nicho: barbeiro, assistência técnica, delivery, estética.' },
  { area: 'Produtos — cards individuais', size: '700x520 px', use: 'Foto limpa do produto com fundo claro.' }
];

const methods = [
  {
    id: 'barbeiro',
    title: 'Método Barbeiro Profissional',
    tag: 'Disponível',
    label: 'Destaque atual',
    price: 'R$ 19,00',
    image: '/images/metodo-barbeiro.jpg',
    description: 'Um método direto para melhorar atendimento, técnica, divulgação, organização e vendas na barbearia.',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Acesso digital', 'Aplicação imediata'],
    cta: 'Quero este método'
  },
  {
    id: 'assistencia',
    title: 'Método Assistência Técnica',
    tag: 'Disponível',
    label: 'Alta procura',
    price: 'R$ 23,00',
    image: '/images/metodo-assistencia.jpg',
    description: 'Organização prática para atender melhor, montar estrutura, cobrar certo e crescer na assistência técnica.',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Ferramentas indicadas', 'Acesso digital'],
    cta: 'Quero este método'
  },
  {
    id: 'estetica',
    title: 'Método Estética Profissional',
    tag: 'Preparando no site',
    label: 'Em fila',
    price: 'R$ 27,00',
    image: '/images/metodo-estetica.jpg',
    description: 'Um caminho para profissionais de estética organizarem atendimento, presença digital, vendas e rotina profissional.',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Presença digital', 'Organização de atendimento'],
    cta: 'Quero saber quando abrir'
  },
  {
    id: 'alimentacao',
    title: 'Método Alimentação Inteligente',
    tag: 'Preparando no site',
    label: 'Próximo lançamento',
    price: 'R$ 13,00',
    image: '/images/metodo-alimentacao.jpg',
    description: 'Conteúdo prático para organizar rotina, preparo, operação, atendimento e vendas na área de alimentação.',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Rotina organizada', 'Aplicação simples'],
    cta: 'Quero saber quando abrir'
  }
];

const services = [
  {
    title: 'Assistente Virtual',
    icon: '🎧',
    image: '/images/servico-assistente.jpg',
    description: 'Atendimento, agenda, mensagens, follow-up e apoio administrativo para sua empresa ganhar tempo.',
    bullets: ['WhatsApp e Instagram', 'Agenda e lembretes', 'Organização de tarefas'],
    cta: 'Quero Assistente Virtual'
  },
  {
    title: 'Criação de Sites',
    icon: '🌐',
    image: '/images/servico-sites.jpg',
    description: 'Sites profissionais para apresentar sua empresa, gerar confiança e receber contatos com mais clareza.',
    bullets: ['Página institucional', 'Link para WhatsApp', 'Layout profissional'],
    cta: 'Quero um site'
  },
  {
    title: 'Organização de WhatsApp',
    icon: '💬',
    image: '/images/servico-whatsapp.jpg',
    description: 'Estruturamos atendimento com mensagens prontas, etiquetas, etapas e organização comercial.',
    bullets: ['Respostas prontas', 'Fluxo de atendimento', 'Mais agilidade'],
    cta: 'Organizar meu WhatsApp'
  },
  {
    title: 'Presença Digital',
    icon: '📲',
    image: '/images/servico-presenca.jpg',
    description: 'Bio, destaques, visual, posicionamento e comunicação para sua empresa parecer mais profissional.',
    bullets: ['Bio e destaques', 'Identidade visual', 'Comunicação clara'],
    cta: 'Melhorar minha presença'
  }
];

const tools = [
  'Calculadoras de preço e lucro',
  'Geradores de mensagens',
  'Checklists por profissão',
  'Planilhas e controles',
  'Sistemas simples por nicho',
  'Criador de bio profissional'
];

const productSlides = [
  {
    title: 'Produtos para equipar melhor o seu negócio',
    eyebrow: 'Curadoria OrganizaPro',
    text: 'Vamos reunir recomendações por nicho para ajudar quem compra métodos, serviços e ferramentas.',
    image: '/images/produtos-slide-1.jpg',
    cta: 'Ver categorias'
  },
  {
    title: 'Kits para assistência, barbearia, delivery e estética',
    eyebrow: 'Em construção',
    text: 'A área de produtos será alimentada com links confiáveis e recomendações úteis para cada operação.',
    image: '/images/produtos-slide-2.jpg',
    cta: 'Falar sobre recomendações'
  },
  {
    title: 'Recomendações que combinam com os métodos',
    eyebrow: 'OrganizaPro Produtos',
    text: 'O objetivo é facilitar a compra do que realmente ajuda na execução do dia a dia.',
    image: '/images/produtos-slide-3.jpg',
    cta: 'Entender produtos'
  }
];

const productCategories = [
  'Produtos para barbeiros',
  'Kits para assistência técnica',
  'Itens para delivery',
  'Produtos para estética',
  'Ferramentas para organizar empresas'
];

const navItems = [
  { label: 'Início', path: '/' },
  { label: 'Métodos', path: '/metodos' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Ferramentas', path: '/ferramentas' },
  { label: 'Produtos', path: '/produtos' }
];

function currentPath() {
  return window.location.pathname.replace(/\/$/, '') || '/';
}

function go(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function BrandLogo() {
  return (
    <button className="brand" onClick={() => go('/')} aria-label="Ir para o início">
      <span className="brandMark" aria-hidden="true">
        <svg viewBox="0 0 88 88" role="img">
          <defs>
            <linearGradient id="opBlue" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#0a3a78" />
              <stop offset="100%" stopColor="#1f7cff" />
            </linearGradient>
          </defs>
          <path d="M42 75V18c0-3 2-5 5-5h11c10 0 18 8 18 18s-8 18-18 18H53" fill="none" stroke="url(#opBlue)" strokeWidth="9" strokeLinecap="round" />
          <path d="M17 55c12 4 30 3 45-9 8-6 13-13 17-22" fill="none" stroke="url(#opBlue)" strokeWidth="7" strokeLinecap="round" />
          <path d="M63 24h17v17" fill="none" stroke="url(#opBlue)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="21" y="39" width="7" height="15" rx="2" fill="url(#opBlue)" />
          <rect x="32" y="31" width="7" height="23" rx="2" fill="url(#opBlue)" />
          <rect x="43" y="24" width="7" height="30" rx="2" fill="url(#opBlue)" />
        </svg>
      </span>
      <span className="brandText"><strong>Organiza</strong><b>Pro</b></span>
    </button>
  );
}

function Header() {
  const [path, setPath] = useState(currentPath());
  const [openCategories, setOpenCategories] = useState(false);

  React.useEffect(() => {
    const sync = () => setPath(currentPath());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  const navigate = (target) => {
    setOpenCategories(false);
    go(target);
  };

  return (
    <header className="siteHeader">
      <div className="topStrip">✦ Soluções práticas para fazer seu negócio crescer com organização.</div>
      <div className="marketHeader">
        <div className="headerInner">
          <BrandLogo />
          <div className="searchBox" role="search">
            <span>⌕</span>
            <input placeholder="Buscar métodos, serviços, ferramentas e produtos..." aria-label="Buscar" />
          </div>
          <div className="quickActions" aria-label="Ações rápidas">
            <button type="button" className="miniAction"><span>♡</span><small>Favoritos</small></button>
            <button type="button" className="miniAction"><span>🛒</span><small>Carrinho</small></button>
            <a className="whatsHeader" href={whatsappUrl}>☻ Falar com a OrganizaPro</a>
          </div>
        </div>
        <nav className="navBar" aria-label="Navegação principal">
          <button type="button" className="categoryButton" onClick={() => setOpenCategories((v) => !v)} aria-expanded={openCategories}>☰ Categorias</button>
          {navItems.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className={path === item.path ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
        </nav>
        {openCategories && <CategoryMenu onNavigate={navigate} onClose={() => setOpenCategories(false)} />}
      </div>
    </header>
  );
}

function CategoryMenu({ onNavigate, onClose }) {
  return (
    <div className="categoryOverlay" onMouseLeave={onClose}>
      <div className="categoryPanel">
        <div>
          <span className="eyebrow">Categorias OrganizaPro</span>
          <h3>Escolha o caminho certo para o seu momento.</h3>
          <p>O botão Categorias agora abre uma área de seleção, sem jogar o lead direto para outra página.</p>
        </div>
        <div className="categoryGrid">
          <button onClick={() => onNavigate('/metodos')}><strong>📘 Métodos</strong><span>Aprenda e aplique.</span></button>
          <button onClick={() => onNavigate('/servicos')}><strong>💼 Serviços</strong><span>Profissionalize sua operação.</span></button>
          <button onClick={() => onNavigate('/ferramentas')}><strong>🧰 Ferramentas</strong><span>Calculadoras e sistemas.</span></button>
          <button onClick={() => onNavigate('/produtos')}><strong>🛍️ Produtos</strong><span>Recomendações por nicho.</span></button>
        </div>
      </div>
    </div>
  );
}

function MediaFrame({ src, alt, className = '', children }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`mediaFrame ${failed ? 'fallback' : ''} ${className}`.trim()}>
      {!failed && <img src={src} alt={alt} onError={() => setFailed(true)} />}
      {failed && <div className="imageFallback"><span>Imagem</span><small>{alt}</small></div>}
      {children}
    </div>
  );
}

function Shell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FloatingWhats />
      <Footer />
    </>
  );
}

function Home() {
  return (
    <Shell>
      <section className="homeHero">
        <div className="heroBackdrop" />
        <div className="homeHeroPanel container">
          <div className="heroCopy">
            <span className="pill">OrganizaPro • soluções para seu negócio</span>
            <h1>Inovamos para melhorar seu negócio</h1>
            <p>Métodos, serviços, ferramentas e produtos conectados para organizar sua operação, melhorar o atendimento e transformar rotina em crescimento.</p>
            <div className="heroActions">
              <button className="btn primary" onClick={() => go('/metodos')}>Conhecer soluções</button>
              <a className="btn whats" href={whatsappUrl}>Falar no WhatsApp</a>
            </div>
          </div>
          <div className="heroSignalCards">
            <InfoCard title="Mais organização" text="Rotinas claras e tarefas sob controle." />
            <InfoCard title="Processos claros" text="Métodos simples e eficientes." />
            <InfoCard title="Atendimento melhor" text="Clientes mais satisfeitos e fiéis." />
          </div>
        </div>
      </section>

      <section className="featureRail container">
        <FeatureMini icon="🔒" title="Pagamento seguro" />
        <FeatureMini icon="☁️" title="Acesso digital" />
        <FeatureMini icon="💬" title="Suporte no WhatsApp" />
        <FeatureMini icon="🛠️" title="Aplicação prática" />
      </section>

      <section className="section container">
        <SectionTitle kicker="Central OrganizaPro" title="Uma estrutura única para cada etapa do seu negócio" text="A experiência agora segue a mesma identidade em todas as páginas: institucional, marketplace e conversão no mesmo sistema." />
        <div className="solutionMatrix">
          <SolutionPanel title="Métodos" subtitle="Aprender e aplicar" image="/images/home-metodos.jpg" path="/metodos" text="Materiais práticos com módulos, bônus e passo a passo." />
          <SolutionPanel title="Serviços" subtitle="Executar com apoio" image="/images/home-servicos.jpg" path="/servicos" text="Soluções para atendimento, site, WhatsApp e presença digital." />
          <SolutionPanel title="Ferramentas" subtitle="Organizar a rotina" image="/images/home-ferramentas.jpg" path="/ferramentas" text="Calculadoras, planilhas, geradores e sistemas simples." />
          <SolutionPanel title="Produtos" subtitle="Equipar melhor" image="/images/home-produtos.jpg" path="/produtos" text="Recomendações por nicho para trabalhar com mais estrutura." />
        </div>
      </section>

      <section className="splitInstitutional">
        <div className="splitImage"><MediaFrame src="/images/home-institucional.jpg" alt="Equipe e tecnologia aplicada a negócios" /></div>
        <div className="splitText">
          <span className="eyebrow">Resposta certa para seu negócio</span>
          <h2>Você escolhe o momento. A OrganizaPro indica o próximo passo.</h2>
          <p>Sem textão, sem confusão: a central mostra o que aprender, o que contratar, quais ferramentas usar e quais produtos podem ajudar sua operação.</p>
          <button className="btn primary" onClick={() => go('/metodos')}>Ver soluções</button>
        </div>
      </section>

      <CTA />
    </Shell>
  );
}

function InfoCard({ title, text }) {
  return <div className="signalCard"><strong>{title}</strong><span>{text}</span></div>;
}

function FeatureMini({ icon, title }) {
  return <div className="featureMini"><span>{icon}</span><strong>{title}</strong></div>;
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="sectionTitle">
      {kicker && <span className="pill">{kicker}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function SolutionPanel({ title, subtitle, image, path, text }) {
  return (
    <article className="solutionPanel" onClick={() => go(path)}>
      <MediaFrame src={image} alt={title} />
      <div className="solutionContent">
        <span>{subtitle}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>Explorar →</button>
      </div>
    </article>
  );
}

function MethodsPage() {
  return (
    <Shell>
      <MarketplaceHero
        kicker="OrganizaPro Métodos"
        title="Aprenda, aplique e venda mais com métodos práticos."
        text="Produtos digitais com módulos, bônus e aplicação direta para transformar conhecimento em ação no seu negócio."
        image="/images/metodos-hero.jpg"
        chips={['Estratégia prática', '10 módulos', 'Bônus exclusivos', 'Acesso digital']}
        cta="Ver métodos disponíveis"
      />
      <MethodShowcase />
      <section className="section container compactTop">
        <SectionTitle title="Métodos disponíveis" text="Sem números falsos, sem avaliações inventadas e sem desconto artificial. Apenas informação clara para decisão de compra." />
        <div className="methodGrid">
          {methods.map((method) => <MethodCard key={method.id} method={method} />)}
        </div>
      </section>
      <CTA />
    </Shell>
  );
}

function MarketplaceHero({ kicker, title, text, image, chips, cta }) {
  return (
    <section className="marketHero container">
      <div className="marketHeroContent">
        <span className="pill darkPill">{kicker}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="chipRow">{chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
        <button className="btn primary" onClick={() => window.scrollTo({ top: 620, behavior: 'smooth' })}>{cta}</button>
      </div>
      <MediaFrame src={image} alt={title} className="marketHeroVisual">
        <div className="floatingOffer">Acesso digital<br /><strong>Receba pelo WhatsApp</strong></div>
      </MediaFrame>
      <button className="heroArrow left" aria-label="Slide anterior">‹</button>
      <button className="heroArrow right" aria-label="Próximo slide">›</button>
    </section>
  );
}

function MethodShowcase() {
  return (
    <section className="categoryShelf container">
      <div className="shelfCard"><strong>Métodos em destaque</strong><span>Organize sua próxima etapa.</span></div>
      <div className="shelfCard"><strong>Sua busca</strong><span>Barbearia, assistência e vendas.</span></div>
      <div className="shelfCard"><strong>Também te interessa</strong><span>Serviços para profissionalizar.</span></div>
      <div className="shelfCard"><strong>Ofertas atuais</strong><span>Preço claro, sem desconto falso.</span></div>
      <div className="shelfCard"><strong>Acesso digital</strong><span>Entrega e suporte pelo WhatsApp.</span></div>
    </section>
  );
}

function MethodCard({ method }) {
  return (
    <article className="productCard methodCard">
      <div className="productImageWrap">
        <MediaFrame src={method.image} alt={method.title} />
        <span className="cardRibbon">{method.label}</span>
      </div>
      <div className="productBody">
        <span className={`status ${method.tag.includes('Dispon') ? 'available' : 'queue'}`}>{method.tag}</span>
        <h3>{method.title}</h3>
        <p>{method.description}</p>
        <ul>{method.bullets.map((b) => <li key={b}>✓ {b}</li>)}</ul>
        <div className="priceLine">
          <div><small>Preço atual</small><strong>{method.price}</strong></div>
        </div>
        <a className="btn primary full" href={whatsappUrl}>{method.cta}</a>
      </div>
    </article>
  );
}

function ServicesPage() {
  return (
    <Shell>
      <PageIntro kicker="OrganizaPro Serviços" title="Serviços para deixar seu negócio mais organizado, profissional e eficiente." text="Ativaremos primeiro os serviços com maior facilidade de venda e execução: Assistente Virtual, Sites, Organização de WhatsApp e Presença Digital." />
      <section className="section container compactTop">
        <div className="serviceGrid premiumCards">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </section>
      <section className="section container compactTop">
        <div className="valueGrid">
          <ValueCard number="01" title="Clareza" text="Você entende qual solução combina com o seu momento." />
          <ValueCard number="02" title="Organização" text="Materiais, serviços e recomendações conectados no mesmo ecossistema." />
          <ValueCard number="03" title="Ação prática" text="Nada de teoria solta: foco em aplicar no dia a dia." />
          <ValueCard number="04" title="Crescimento" text="A estrutura ajuda você a vender melhor e atender com mais profissionalismo." />
        </div>
      </section>
      <CTA />
    </Shell>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="serviceCard">
      <MediaFrame src={service.image} alt={service.title} />
      <div className="iconBadge">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>{service.bullets.map((b) => <li key={b}>✓ {b}</li>)}</ul>
      <a className="btn primary full" href={whatsappUrl}>{service.cta} →</a>
    </article>
  );
}

function ValueCard({ number, title, text }) {
  return <div className="valueCard"><span>{number}</span><h3>{title}</h3><p>{text}</p></div>;
}

function ToolsPage() {
  return (
    <Shell>
      <PageIntro kicker="OrganizaPro Ferramentas" title="Ferramentas práticas para resolver problemas reais de cada profissão." text="Essa área ficará pronta depois da central. Vamos criar calculadoras, checklists, geradores, planilhas e sistemas simples para alimentar o site." />
      <section className="section container compactTop">
        <div className="developmentPanel">
          <span className="status queue">Em desenvolvimento</span>
          <h2>Primeiras ferramentas que vamos criar</h2>
          <div className="toolChips">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          <a className="btn primary" href={whatsappUrl}>Entrar na lista de interesse</a>
        </div>
      </section>
      <CTA />
    </Shell>
  );
}

function ProductsPage() {
  const [active, setActive] = useState(0);
  const slide = productSlides[active];

  const next = () => setActive((i) => (i + 1) % productSlides.length);
  const prev = () => setActive((i) => (i - 1 + productSlides.length) % productSlides.length);

  return (
    <Shell>
      <section className="productsHero container">
        <button className="slideArrow left" onClick={prev} aria-label="Slide anterior">‹</button>
        <div className="productsSlide">
          <div className="slideCopy">
            <span className="pill darkPill">{slide.eyebrow}</span>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <button className="btn primary" onClick={() => document.getElementById('produtos-categorias')?.scrollIntoView({ behavior: 'smooth' })}>{slide.cta}</button>
          </div>
          <MediaFrame src={slide.image} alt={slide.title} className="slideVisual" />
        </div>
        <button className="slideArrow right" onClick={next} aria-label="Próximo slide">›</button>
        <div className="dots">{productSlides.map((_, index) => <button key={index} onClick={() => setActive(index)} className={index === active ? 'active' : ''} aria-label={`Ir para slide ${index + 1}`} />)}</div>
      </section>

      <section id="produtos-categorias" className="section container compactTop">
        <div className="developmentPanel orangeSoft">
          <span className="status queue orange">Curadoria afiliada</span>
          <h2>Vamos buscar os melhores produtos por nicho</h2>
          <div className="toolChips">{productCategories.map((category) => <span key={category}>{category}</span>)}</div>
          <p>Depois vamos colocar esses links dentro dos métodos e também nesta área do site.</p>
          <a className="btn primary" href={whatsappUrl}>Falar sobre recomendações</a>
        </div>
      </section>
      <CTA />
    </Shell>
  );
}

function PageIntro({ kicker, title, text }) {
  return (
    <section className="pageIntro container">
      <span className="pill">{kicker}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function CTA() {
  return (
    <section className="ctaBand container">
      <div>
        <span>🚀</span>
        <h2>Não sabe por onde começar?</h2>
        <p>Fale com a OrganizaPro. Vamos entender seu momento e indicar a melhor solução.</p>
      </div>
      <a className="btn ctaBtn" href={whatsappUrl}>Chamar no WhatsApp</a>
    </section>
  );
}

function FloatingWhats() {
  return <a className="floatingWhats" href={whatsappUrl} aria-label="Falar no WhatsApp">☘</a>;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <BrandLogo />
          <p>Métodos, serviços, ferramentas e produtos para quem quer evoluir com organização.</p>
          <div className="socials"><span>◎</span><span>◉</span><span>✉</span></div>
        </div>
        <FooterCol title="Navegação" links={['Início', 'Métodos', 'Serviços', 'Ferramentas', 'Produtos']} />
        <FooterCol title="Métodos" links={methods.map((m) => m.title)} />
        <FooterCol title="Serviços" links={services.map((s) => s.title)} />
        <div>
          <h4>Contato</h4>
          <p>(12) 98321-6069</p>
          <p>{email}</p>
          <p>{instagram}</p>
          <a className="footerWhats" href={whatsappUrl}>Falar no WhatsApp</a>
        </div>
      </div>
      <div className="footerBottom">© 2024 OrganizaPro. Todos os direitos reservados.</div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return <div><h4>{title}</h4>{links.map((link) => <p key={link}>{link}</p>)}</div>;
}

function ImageGuidePage() {
  return (
    <Shell>
      <PageIntro kicker="Guia de imagens" title="Dimensões para buscar imagens gratuitas" text="Use esta lista para procurar imagens em bancos gratuitos. As imagens devem ser salvas dentro da pasta public/images com os nomes indicados no código." />
      <section className="section container compactTop">
        <div className="imageSpecGrid">
          {imageSpecs.map((spec) => <div className="imageSpec" key={spec.area}><strong>{spec.area}</strong><span>{spec.size}</span><p>{spec.use}</p></div>)}
        </div>
      </section>
    </Shell>
  );
}

function App() {
  const [path, setPath] = useState(currentPath());
  React.useEffect(() => {
    const sync = () => setPath(currentPath());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  if (path === '/metodos') return <MethodsPage />;
  if (path === '/servicos') return <ServicesPage />;
  if (path === '/ferramentas') return <ToolsPage />;
  if (path === '/produtos') return <ProductsPage />;
  if (path === '/guia-imagens') return <ImageGuidePage />;
  return <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
