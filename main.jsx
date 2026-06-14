import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const WHATSAPP = '5512983216069';
const EMAIL = 'OrganizaPro01@gmail.com';
const INSTAGRAM = '@organizaprov';

const methods = [
  {
    id: 2,
    slug: 'barbeiro-profissional',
    title: 'Método Barbeiro Profissional',
    label: 'Mais vendido',
    status: 'disponivel',
    img: '/barbearia.png',
    price: 'R$ 27,00',
    old: 'R$ 97,00',
    discount: '72% OFF',
    rating: '4.9',
    reviews: '1.246',
    short: 'Atendimento, técnica, divulgação, organização e fidelização para barbeiros.',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Acesso digital vitalício', 'Aplicação direta'],
    checkoutText: 'Quero este método',
    featured: true
  },
  {
    id: 1,
    slug: 'assistencia-tecnica',
    title: 'Método Assistência Técnica',
    label: 'Alta procura',
    status: 'disponivel',
    img: '/assistencia-celular.png',
    price: 'R$ 27,00',
    old: 'R$ 97,00',
    discount: '72% OFF',
    rating: '4.8',
    reviews: '985',
    short: 'Diagnóstico, bancada, atendimento, serviços e crescimento na assistência técnica.',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Ferramentas indicadas', 'Acesso digital'],
    checkoutText: 'Quero este método'
  },
  {
    id: 6,
    slug: 'estetica-profissional',
    title: 'Método Estética Profissional',
    label: 'Em fila',
    status: 'preparando',
    img: '/devocional.png',
    price: 'R$ 27,00',
    old: 'R$ 97,00',
    discount: '72% OFF',
    rating: '4.9',
    reviews: '723',
    short: 'Rotina, atendimento, presença digital e vendas para profissionais de estética.',
    bullets: ['Rotinas e protocolos', 'Presença digital', 'Fidelização e vendas', 'Organização de atendimento'],
    checkoutText: 'Quero saber quando abrir'
  },
  {
    id: 4,
    slug: 'alimentacao-inteligente',
    title: 'Método Alimentação Inteligente',
    label: 'Popular',
    status: 'preparando',
    img: '/reeducacao-alimentar.png',
    price: 'R$ 27,00',
    old: 'R$ 97,00',
    discount: '72% OFF',
    rating: '4.8',
    reviews: '1.103',
    short: 'Organização de rotina, preparo, operação e controle para alimentação.',
    bullets: ['Reeducação alimentar', 'Planejamento prático', 'Receitas e cardápios', 'Aplicação simples'],
    checkoutText: 'Quero saber quando abrir'
  }
];

const services = [
  {
    title: 'Assistente Virtual',
    icon: '🎧',
    text: 'Atendimento, agenda, mensagens, follow-up e apoio para sua empresa ganhar tempo.',
    bullets: ['WhatsApp e Instagram', 'Agenda e lembretes', 'Organização de tarefas'],
    cta: 'Quero Assistente Virtual'
  },
  {
    title: 'Criação de Sites',
    icon: '🌐',
    text: 'Sites profissionais para apresentar sua empresa, gerar confiança e receber contatos.',
    bullets: ['Página institucional', 'Link para WhatsApp', 'Layout profissional'],
    cta: 'Quero um site'
  },
  {
    title: 'Organização de WhatsApp',
    icon: '💬',
    text: 'Mensagens prontas, etiquetas, etapas de atendimento e organização comercial.',
    bullets: ['Respostas prontas', 'Fluxo de atendimento', 'Mais agilidade'],
    cta: 'Organizar meu WhatsApp'
  },
  {
    title: 'Presença Digital',
    icon: '📲',
    text: 'Bio, destaques, visual, posicionamento e comunicação para parecer mais profissional.',
    bullets: ['Bio e destaques', 'Identidade visual', 'Comunicação clara'],
    cta: 'Melhorar minha presença'
  }
];

const tools = [
  { title: 'Calculadoras', icon: '🧮', text: 'Preço, lucro e margem sem complicação.' },
  { title: 'Geradores', icon: '✉️', text: 'Mensagens prontas para usar no atendimento.' },
  { title: 'Checklists', icon: '✅', text: 'Passo a passo por profissão e operação.' },
  { title: 'Planilhas', icon: '📊', text: 'Modelos prontos para controlar sua rotina.' },
  { title: 'Sistemas', icon: '🖥️', text: 'Gestão simples para pequenos processos.' },
  { title: 'Controles', icon: '📋', text: 'Acompanhe clientes, serviços e pagamentos.' }
];

const productCards = [
  {
    title: 'Avental Profissional',
    tag: 'Mais procurado',
    img: '/barbearia.png',
    price: 'R$ 89,90',
    rating: '4.8',
    reviews: '241'
  },
  {
    title: 'Kit Capas de Corte Premium',
    tag: 'Custo-benefício',
    img: '/corte-costura.png',
    price: 'R$ 129,90',
    rating: '4.9',
    reviews: '169'
  },
  {
    title: 'Máquina Profissional',
    tag: 'Indicado',
    img: '/assistencia-celular.png',
    price: 'R$ 249,90',
    rating: '4.7',
    reviews: '312'
  },
  {
    title: 'Organizador de Bancada',
    tag: 'Organização',
    img: '/confeitaria.png',
    price: 'R$ 79,90',
    rating: '4.6',
    reviews: '147'
  }
];

const toolTags = ['Calculadoras', 'Geradores', 'Checklists', 'Planilhas', 'Sistemas', 'Controles', 'Templates', 'Mais em breve'];
const productTags = ['Produtos para barbeiros', 'Kits para assistência técnica', 'Itens para delivery', 'Produtos para estética', 'Ferramentas para organizar empresas'];

function wa(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function goWhats(message) {
  window.location.href = wa(message);
}

function setCartAndGo(items) {
  localStorage.setItem('organizapro_cart', JSON.stringify(items));
  localStorage.setItem('imperio_cart', JSON.stringify(items));
  window.location.href = '/checkout';
}

function buyMethod(method) {
  if (method.status !== 'disponivel') {
    goWhats(`Olá, vim pelo site da OrganizaPro e quero saber quando o ${method.title} estará disponível.`);
    return;
  }

  setCartAndGo([
    {
      id: method.id,
      title: method.title,
      price: method.price,
      img: method.img,
      qty: 1
    }
  ]);
}


const promoSlides = [
  {
    eyebrow: 'OrganizaPro Métodos',
    title: 'Aprenda, aplique e venda mais com métodos práticos.',
    text: 'Materiais digitais com módulos, bônus e aplicação direta para transformar conhecimento em ação no seu negócio.',
    cta: 'Ver ofertas de métodos',
    theme: 'blue',
    highlight: '72% OFF',
    image: '/barbearia.png'
  },
  {
    eyebrow: 'Oferta em destaque',
    title: 'Comece pelo Método Barbeiro Profissional.',
    text: 'Atendimento, técnica, divulgação, organização e fidelização em um passo a passo direto ao ponto.',
    cta: 'Comprar por R$ 27,00',
    theme: 'dark',
    highlight: 'Mais vendido',
    image: '/barbearia.png'
  },
  {
    eyebrow: 'Alta procura',
    title: 'Assistência técnica com processo, preço e atendimento.',
    text: 'Aprenda a organizar bancada, diagnóstico, ferramentas, serviços e crescimento da assistência técnica.',
    cta: 'Conhecer método',
    theme: 'tech',
    highlight: 'Acesso digital',
    image: '/assistencia-celular.png'
  }
];

const methodQuickCards = [
  { title: 'Métodos em destaque', text: 'Os mais procurados da OrganizaPro.', img: '/barbearia.png', cta: 'Ver métodos' },
  { title: 'Sua busca', text: 'Encontre o método ideal para seu momento.', icon: '🔎', cta: 'Explorar' },
  { title: 'Também te interessa', text: 'Materiais que complementam sua evolução.', img: '/assistencia-celular.png', cta: 'Ver opções' },
  { title: 'Ofertas atuais', text: 'Métodos digitais com condição de lançamento.', icon: '🏷️', cta: 'Ver ofertas' },
  { title: 'Menos de R$100', text: 'Soluções acessíveis para começar agora.', icon: '💸', cta: 'Conferir' },
  { title: 'Mais vendidos', text: 'Os métodos com maior destaque na central.', icon: '🛍️', cta: 'Ver mais' }
];

function MarketHeader({ active = 'metodos' }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ['categorias', '☰ Categorias', '#categorias'],
    ['ofertas', 'Ofertas', '#ofertas'],
    ['metodos', 'Métodos', '/metodos'],
    ['servicos', 'Serviços', '/servicos'],
    ['ferramentas', 'Ferramentas', '/ferramentas'],
    ['produtos', 'Produtos', '/produtos'],
    ['contato', 'Contato', '/contato']
  ];

  return <>
    <div className="marketTopLine">✦ Soluções práticas para fazer seu negócio crescer com organização.</div>
    <header className="marketHeader">
      <div className="marketHeaderMain">
        <a className="marketBrand" href="/" aria-label="OrganizaPro início">
          <img src="/organizapro-logo.png" alt="OrganizaPro" />
        </a>

        <label className="marketSearch" aria-label="Buscar na OrganizaPro">
          <span>⌕</span>
          <input type="search" placeholder="Buscar métodos, serviços, ferramentas e produtos..." />
        </label>

        <div className="marketActions">
          <a href={wa('Olá, quero acessar minha conta na OrganizaPro.')} target="_blank" rel="noopener"><span>♙</span><b>Minha conta</b><small>Entrar</small></a>
          <a href="/produtos"><span>♡</span><b>Favoritos</b><small>Lista</small></a>
          <a href="/checkout"><span>🛒</span><b>Carrinho</b><small>Itens</small></a>
          <a className="marketTalk" href={wa('Olá, vim pelo site da OrganizaPro e quero saber qual método combina com meu negócio.')} target="_blank" rel="noopener">◉ Falar com a OrganizaPro</a>
        </div>

        <button className="marketMenu" type="button" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? '×' : '☰'}</button>
      </div>

      <nav className={open ? 'marketNav open' : 'marketNav'} aria-label="Navegação estilo marketplace">
        {nav.map(([key, label, href]) => <a key={key} href={href} className={active === key ? 'active' : ''} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  </>;
}

function MethodsPromoHero() {
  const [current, setCurrent] = useState(0);
  const slide = promoSlides[current];

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % promoSlides.length), 5200);
    return () => clearInterval(timer);
  }, []);

  const go = (direction) => setCurrent(prev => (prev + direction + promoSlides.length) % promoSlides.length);

  return <section className={`methodsMarketHero ${slide.theme}`}>
    <button className="heroNavArrow left" type="button" onClick={() => go(-1)} aria-label="Promoção anterior">‹</button>
    <div className="methodsHeroInner">
      <div className="methodsHeroCopy">
        <span className="heroSaleBadge">{slide.eyebrow}</span>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="heroMiniBenefits">
          <span>📈 Estratégia prática</span>
          <span>🎓 10 módulos</span>
          <span>🎁 3 bônus</span>
        </div>
        <button type="button" onClick={() => current === 1 ? buyMethod(methods[0]) : window.location.hash = '#ofertas'}>{slide.cta} <b>›</b></button>
      </div>

      <div className="methodsHeroVisual" aria-label="Expositor de métodos OrganizaPro">
        <div className="heroBookStack">
          <article><small>Método</small><b>Clareza Total</b><em>Organize. Foque. Cresça.</em></article>
          <article><small>Método</small><b>Vendas que Escalam</b><em>Estratégias para vender mais.</em></article>
          <article><small>Método</small><b>Lucro com Organização</b><em>Mais controle. Mais resultado.</em></article>
        </div>
        <img className="heroLaptopCard" src={slide.image} alt="Método OrganizaPro em destaque" />
        <div className="heroFloat one"><b>{slide.highlight}</b><small>Condição atual</small></div>
        <div className="heroFloat two"><b>Acesso digital</b><small>Receba pelo WhatsApp</small></div>
      </div>
    </div>
    <button className="heroNavArrow right" type="button" onClick={() => go(1)} aria-label="Próxima promoção">›</button>
    <div className="heroDots">{promoSlides.map((_, index) => <button key={index} type="button" className={index === current ? 'active' : ''} onClick={() => setCurrent(index)} aria-label={`Ver promoção ${index + 1}`} />)}</div>
  </section>;
}

function MethodsQuickRail() {
  return <section className="methodsQuickRail" id="categorias" aria-label="Atalhos de métodos">
    {methodQuickCards.map((card, index) => <a key={card.title} href={index === 0 ? '#ofertas' : '/metodos'} className="quickRailCard">
      <b>{card.title}</b>
      {card.img ? <img src={card.img} alt="" /> : <span>{card.icon}</span>}
      <p>{card.text}</p>
      <small>{card.cta}</small>
    </a>)}
  </section>;
}

function MethodMarketCard({ method }) {
  const ready = method.status === 'disponivel';
  return <article className="methodMarketCard">
    <div className="methodMarketImage">
      <img src={method.img} alt={method.title} />
      <span className={ready ? 'ready' : 'soon'}>{method.label}</span>
      <button type="button" aria-label="Favoritar método">♡</button>
    </div>
    <div className="methodMarketBody">
      <h3>{method.title}</h3>
      <div className="marketRating"><span>★★★★★</span><small>({method.reviews})</small></div>
      <p>{method.short}</p>
      <ul>{method.bullets.slice(0, 3).map(item => <li key={item}>✓ {item}</li>)}</ul>
      <div className="marketPriceRow">
        <div><small>De {method.old} por</small><strong>{method.price}</strong></div>
        <em>{method.discount}</em>
      </div>
      <button className="marketBuyButton" type="button" onClick={() => buyMethod(method)}>{ready ? 'Quero este método' : 'Quero saber quando abrir'}</button>
    </div>
  </article>;
}

function MethodsMarketplacePage() {
  return <main className="methodsMarketplacePage">
    <MarketHeader active="metodos" />
    <MethodsPromoHero />
    <MethodsQuickRail />

    <section className="methodsStoreIntro" id="ofertas">
      <span>OrganizaPro Métodos</span>
      <h2>Aprenda, aplique e venda mais com métodos práticos.</h2>
      <p>Produtos digitais com módulos, bônus e aplicação direta para diferentes áreas de negócio.</p>
    </section>

    <section className="methodsStoreGrid" aria-label="Métodos disponíveis">
      {methods.map(method => <MethodMarketCard key={method.id} method={method} />)}
    </section>

    <section className="methodsComboCta">
      <div><span>🚀</span><h2>Pronto para elevar seu negócio ao próximo nível?</h2><p>Fale com a OrganizaPro e descubra o melhor método para o seu momento.</p></div>
      <div><a className="btn btnWhatsapp" href={wa('Olá, vim pela página de métodos e quero saber qual método combina com meu negócio.')} target="_blank" rel="noopener">◉ Falar no WhatsApp</a><a className="btn btnPrimary" href="/servicos">Agendar conversa</a></div>
    </section>

    <Footer />
    <MobileActions />
  </main>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const path = window.location.pathname;
  const nav = [
    ['/', 'Início'],
    ['/metodos', 'Métodos'],
    ['/servicos', 'Serviços'],
    ['/ferramentas', 'Ferramentas'],
    ['/produtos', 'Produtos'],
    ['/contato', 'Contato']
  ];

  return <>
    <div className="announcement">✦ Soluções práticas para fazer seu negócio crescer com organização.</div>
    <header className="header">
      <a className="brand" href="/" aria-label="OrganizaPro início">
        <img src="/organizapro-logo.png" alt="OrganizaPro" />
      </a>

      <nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
        {nav.map(([href, label]) => (
          <a key={href} href={href} className={(path === href || (href !== '/' && path.startsWith(href))) ? 'active' : ''} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="headerActions">
        <button className="searchButton" type="button" aria-label="Pesquisar">⌕</button>
        <a className="headerCta" href={wa('Olá, vim pelo site da OrganizaPro e quero saber qual solução combina com meu negócio.')} target="_blank" rel="noopener">◉ Falar com a OrganizaPro</a>
      </div>

      <button className="menuButton" type="button" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? '×' : '☰'}
      </button>
    </header>
  </>;
}

function Layout({ children }) {
  return <main>
    <Header />
    {children}
    <FinalCTA />
    <Footer />
    <MobileActions />
  </main>;
}


function Home() {
  return <Layout>
    <CorporateHero />
    <CorporateSolutionBlocks />
    <BusinessAnswerSection />
    <CorporateProofSection />
    <CorporateSplitSection />
  </Layout>;
}

function CorporateHero() {
  return <section className="corpHero">
    <div className="corpHeroBackdrop" />
    <div className="corpHeroPanel">
      <div className="corpHeroText">
        <span>OrganizaPro • Soluções para seu negócio</span>
        <h1>Inovamos para melhorar <strong>seu negócio</strong></h1>
        <p>Métodos, serviços, ferramentas e produtos conectados para organizar sua operação, melhorar o atendimento e transformar rotina em crescimento.</p>
        <div className="corpHeroActions">
          <a className="btn btnPrimary" href="#solucoes-corporativas">Conhecer soluções</a>
          <a className="btn btnWhatsapp" href={wa('Olá, vim pela página inicial da OrganizaPro e quero entender qual solução combina com meu negócio.')} target="_blank" rel="noopener">◉ Falar no WhatsApp</a>
        </div>
      </div>
      <div className="corpHeroCards" aria-label="Indicadores OrganizaPro">
        <article><small>Mais clareza</small><b>Processos em dia</b></article>
        <article><small>Mais vendas</small><b>+ organização</b></article>
        <article><small>Mais tempo</small><b>Rotina melhor</b></article>
      </div>
    </div>
  </section>;
}

function CorporateSolutionBlocks() {
  const blocks = [
    {
      title: 'OrganizaPro Métodos',
      text: 'Produtos digitais com passo a passo, módulos e bônus para aprender, aplicar e melhorar a estrutura do negócio.',
      img: '/barbearia.png',
      href: '/metodos',
      cta: 'Saiba mais'
    },
    {
      title: 'OrganizaPro Serviços',
      text: 'Execução profissional para organizar atendimento, presença digital, WhatsApp e estrutura comercial.',
      img: '/organizapro-hero.webp',
      href: '/servicos',
      cta: 'Ver serviços'
    },
    {
      title: 'OrganizaPro Ferramentas',
      text: 'Calculadoras, checklists, geradores e controles simples para resolver problemas reais do dia a dia.',
      img: '/assistencia-celular.png',
      href: '/ferramentas',
      cta: 'Ver ferramentas'
    }
  ];

  return <section className="corpBlocks" id="solucoes-corporativas">
    {blocks.map((block, index) => <article className="corpBlock" key={block.title}>
      <div className="corpBlockImage" style={{ backgroundImage: `url(${block.img})` }} />
      <div className="corpBlockText">
        <span>{index === 0 ? 'Aprender e aplicar' : index === 1 ? 'Organizar e executar' : 'Controlar e crescer'}</span>
        <h2>{block.title}</h2>
        <p>{block.text}</p>
        <a href={block.href}>{block.cta}</a>
      </div>
    </article>)}
  </section>;
}

function BusinessAnswerSection() {
  const needs = [
    { title: 'Barbearias', subtitle: 'Métodos, atendimento e precificação', img: '/barbearia.png', href: '/metodos' },
    { title: 'Assistência técnica', subtitle: 'Diagnóstico, bancada e serviços', img: '/assistencia-celular.png', href: '/metodos' },
    { title: 'Delivery e alimentação', subtitle: 'Rotina, preparo e operação', img: '/reeducacao-alimentar.png', href: '/ferramentas' },
    { title: 'Presença digital', subtitle: 'Site, WhatsApp e comunicação', img: '/organizapro-hero.webp', href: '/servicos' }
  ];

  return <section className="corpAnswer">
    <div className="corpSectionTitle">
      <h2>Temos a resposta certa para o seu negócio</h2>
      <p>Escolha o ponto que mais combina com a sua necessidade agora.</p>
    </div>
    <div className="corpNeedGrid">
      {needs.map(need => <a key={need.title} href={need.href} className="corpNeedCard">
        <div style={{ backgroundImage: `url(${need.img})` }} />
        <h3>{need.title}</h3>
        <p>{need.subtitle}</p>
      </a>)}
    </div>
  </section>;
}

function CorporateProofSection() {
  const cards = [
    ['Métodos práticos', 'Materiais diretos para transformar conhecimento em ação.'],
    ['Serviços aplicáveis', 'Apoio para organizar áreas que travam o crescimento.'],
    ['Produtos recomendados', 'Indicações para equipar melhor cada nicho.']
  ];

  return <section className="corpProof">
    <h2>Mais clareza para vender, atender e crescer</h2>
    <div className="corpProofGrid">
      {cards.map(([title, text]) => <article key={title}>
        <div className="playBadge">▶</div>
        <h3>{title}</h3>
        <p>{text}</p>
      </article>)}
    </div>
    <a href="/metodos">Ver soluções disponíveis</a>
  </section>;
}

function CorporateSplitSection() {
  return <section className="corpSplit">
    <div className="corpAbout">
      <h2>Sobre a OrganizaPro</h2>
      <p>Criamos uma central de soluções para quem precisa organizar o negócio sem complicar: métodos, serviços, ferramentas e produtos recomendados em um só ecossistema.</p>
      <a href="/contato">Falar com a OrganizaPro</a>
    </div>
    <div className="corpPartner">
      <h2>Quer saber por onde começar?</h2>
      <p>Explique seu momento e indicaremos o caminho mais simples: método, serviço, ferramenta ou produto.</p>
      <a href={wa('Olá, quero saber por onde começar com a OrganizaPro.')} target="_blank" rel="noopener">Descobrir melhor solução</a>
    </div>
  </section>;
}

function Hero() {
  return <section className="hero">
    <div className="heroText">
      <span className="microLabel">Soluções práticas para seu negócio crescer</span>
      <h1>Métodos, serviços, ferramentas e produtos <strong>para você crescer com organização.</strong></h1>
      <p>Materiais práticos, ferramentas inteligentes e serviços que trazem mais clareza, produtividade e resultado.</p>
      <div className="heroButtons">
        <a className="btn btnPrimary" href="#solucoes">Ver soluções <span>→</span></a>
        <a className="btn btnWhatsapp" href={wa('Olá, vim pelo site da OrganizaPro e quero conhecer as soluções.')} target="_blank" rel="noopener">◉ Falar no WhatsApp</a>
      </div>
    </div>

    <div className="heroMedia">
      <div className="heroPhoto" />
      <div className="metricBubble bubbleOne"><span>🙂</span><b>Mais organização</b><small>Rotinas claras e tarefas sob controle.</small></div>
      <div className="metricBubble bubbleTwo"><span>▣</span><b>Processos claros</b><small>Métodos simples e eficientes.</small></div>
      <div className="metricBubble bubbleThree"><span>👥</span><b>Atendimento melhor</b><small>Clientes mais satisfeitos e fiéis.</small></div>
      <div className="metricBubble bubbleFour"><span>▣</span><b>Mais produtividade</b><small>Foque no que importa e colha resultados.</small></div>
    </div>
  </section>;
}

function TrustBar() {
  const items = [
    ['🔒', 'Pagamento seguro'],
    ['☁️', 'Acesso digital imediato'],
    ['◉', 'Suporte no WhatsApp'],
    ['🛠️', 'Aplicação prática']
  ];

  return <section className="trustBar" aria-label="Benefícios rápidos">
    {items.map(([icon, label]) => <div key={label}><span>{icon}</span><b>{label}</b></div>)}
  </section>;
}

function SolutionsShowcase() {
  const areas = [
    { href: '/metodos', icon: '▤', title: 'Métodos', bullets: ['Passo a passo prático', 'Aplicação imediata', 'Resultados reais'], cta: 'Ver métodos' },
    { href: '/servicos', icon: '🎧', title: 'Serviços', bullets: ['Execução profissional', 'Mais tempo para você', 'Foco no que importa'], cta: 'Ver serviços' },
    { href: '/ferramentas', icon: '💼', title: 'Ferramentas', bullets: ['Praticidade no dia a dia', 'Economia de tempo', 'Tudo organizado'], cta: 'Ver ferramentas' },
    { href: '/produtos', icon: '🛍️', title: 'Produtos', bullets: ['Selecionados para ajudar', 'Qualidade e confiança', 'Entrega rápida'], cta: 'Ver produtos' }
  ];
  const featured = methods[0];

  return <section className="section showcase" id="solucoes">
    <div className="sectionTitle rowTitle">
      <h2>Escolha a solução ideal para o seu momento</h2>
    </div>

    <div className="showcaseGrid">
      <div className="areaTiles">
        {areas.map(area => <a key={area.title} className="solutionTile" href={area.href}>
          <div className="tileIcon">{area.icon}</div>
          <h3>{area.title}</h3>
          <ul>
            {area.bullets.map(item => <li key={item}>{item}</li>)}
          </ul>
          <span>{area.cta} →</span>
        </a>)}
      </div>

      <article className="featuredDeal">
        <div className="dealImage" style={{ backgroundImage: `url(${featured.img})` }} />
        <div className="dealShade" />
        <span className="dealTag">Oferta em destaque</span>
        <h3>{featured.title}</h3>
        <p>O caminho completo para barbearias de sucesso e clientes fiéis.</p>
        <ul>
          <li>10 módulos práticos</li>
          <li>3 bônus exclusivos</li>
          <li>Acesso digital imediato</li>
        </ul>
        <div className="dealBottom">
          <div><small>De {featured.old} por</small><strong>{featured.price}</strong></div>
          <em>{featured.discount}</em>
        </div>
        <button type="button" onClick={() => buyMethod(featured)}>Quero este método</button>
      </article>
    </div>
  </section>;
}

function SectionHeader({ title, link, href }) {
  return <div className="shelfHeader">
    <h2>{title}</h2>
    {link && <a href={href}>{link} →</a>}
  </div>;
}

function Rating({ value, reviews }) {
  return <div className="rating"><span>★★★★★</span><small>({reviews})</small></div>;
}

function MethodsShelf() {
  return <section className="section shelf" id="metodos-destaque">
    <SectionHeader title="Métodos em destaque" link="Ver todos os métodos" href="/metodos" />
    <div className="methodShelfGrid">
      {methods.map(method => <MethodProductCard key={method.id} method={method} />)}
    </div>
  </section>;
}

function MethodProductCard({ method }) {
  const isReady = method.status === 'disponivel';

  return <article className="productMethodCard">
    <div className="productImageWrap">
      <img src={method.img} alt={method.title} />
      <span className={`badge ${isReady ? 'green' : 'orange'}`}>{method.label}</span>
    </div>
    <div className="productCardBody">
      <h3>{method.title}</h3>
      <Rating value={method.rating} reviews={method.reviews} />
      <ul>
        {method.bullets.slice(0, 3).map(item => <li key={item}>{item}</li>)}
      </ul>
      <div className="priceLine">
        <div><small>De {method.old} por</small><strong>{method.price}</strong></div>
        <em>{method.discount}</em>
      </div>
      <button type="button" onClick={() => buyMethod(method)}>{method.checkoutText}</button>
    </div>
  </article>;
}

function ServicesShelf() {
  return <section className="section shelf compact">
    <SectionHeader title="Serviços para impulsionar seu negócio" link="Ver todos os serviços" href="/servicos" />
    <div className="serviceShelfGrid">
      {services.map(service => <ServiceMini key={service.title} service={service} />)}
    </div>
  </section>;
}

function ServiceMini({ service }) {
  return <article className="miniService">
    <div className="miniIcon">{service.icon}</div>
    <h3>{service.title}</h3>
    <p>{service.text}</p>
    <ul>{service.bullets.map(b => <li key={b}>{b}</li>)}</ul>
    <a href={wa(`Olá, vim pelo site da OrganizaPro e quero saber mais sobre ${service.title}.`)} target="_blank" rel="noopener">Saiba mais →</a>
  </article>;
}

function ToolsShelf() {
  return <section className="section shelf compact">
    <SectionHeader title="Ferramentas que simplificam seu dia" link="Ver todas as ferramentas" href="/ferramentas" />
    <div className="toolTags">{toolTags.map(tag => <span key={tag}>{tag}</span>)}</div>
    <div className="toolsGrid">
      {tools.map(tool => <div className="toolCard" key={tool.title}><span>{tool.icon}</span><b>{tool.title}</b><small>{tool.text}</small></div>)}
      <div className="waitCard"><b>Novas ferramentas toda semana!</b><p>Entre na lista e receba em primeira mão.</p><a href={wa('Olá, quero entrar na lista das ferramentas da OrganizaPro.')} target="_blank" rel="noopener">Entrar na lista →</a></div>
    </div>
  </section>;
}

function ProductsShelf() {
  return <section className="section shelf compact">
    <SectionHeader title="Produtos recomendados" link="Ver todos os produtos" href="/produtos" />
    <div className="productShelfGrid">
      {productCards.map(product => <ProductCard key={product.title} product={product} />)}
      <div className="productInfoBox">
        <span>👥</span>
        <h3>Produtos selecionados para elevar o nível do seu negócio.</h3>
        <ul>
          <li>Qualidade garantida</li>
          <li>Entrega rápida</li>
          <li>Melhores marcas</li>
        </ul>
        <a href="/produtos">Ver todos os produtos</a>
      </div>
    </div>
  </section>;
}

function ProductCard({ product }) {
  return <article className="affiliateCard">
    <div className="affiliateImage"><img src={product.img} alt={product.title} /><span>{product.tag}</span></div>
    <h3>{product.title}</h3>
    <Rating value={product.rating} reviews={product.reviews} />
    <strong>{product.price}</strong>
    <div className="affiliateActions">
      <button type="button" onClick={() => goWhats(`Olá, quero o link do produto recomendado: ${product.title}.`)}>Ver produto</button>
      <button type="button" aria-label="Adicionar aos favoritos">🛒</button>
    </div>
  </article>;
}

function MethodsPage() {
  return <MethodsMarketplacePage />;
}

function ServicesPage() {
  return <Layout>
    <PageHero label="OrganizaPro Serviços" title="Execução profissional para organizar e fortalecer seu negócio." text="Serviços pensados para gerar confiança, atendimento melhor, presença digital e mais clareza operacional." />
    <section className="section shelf pageShelf">
      <div className="servicePageGrid">
        {services.map(service => <ServiceMini key={service.title} service={service} />)}
      </div>
    </section>
    <ProcessSection />
  </Layout>;
}

function ProcessSection() {
  const steps = [
    ['01', 'Diagnóstico rápido', 'Entendemos sua necessidade e o momento do seu negócio.'],
    ['02', 'Organização da solução', 'Definimos o caminho, os materiais e a execução.'],
    ['03', 'Aplicação prática', 'Nada de teoria solta: foco no que resolve o dia a dia.'],
    ['04', 'Acompanhamento', 'Você recebe orientação para continuar evoluindo.']
  ];

  return <section className="section processSection">
    <div className="processGrid">{steps.map(([num, title, text]) => <div key={num}><b>{num}</b><h3>{title}</h3><p>{text}</p></div>)}</div>
  </section>;
}

function ToolsPage() {
  return <Layout>
    <PageHero label="OrganizaPro Ferramentas" title="Ferramentas práticas para resolver problemas reais de cada profissão." text="Calculadoras, checklists, geradores, planilhas e sistemas simples para alimentar o ecossistema OrganizaPro." />
    <ToolsShelf />
  </Layout>;
}

function ProductsPage() {
  return <Layout>
    <PageHero label="OrganizaPro Produtos" title="Produtos recomendados para equipar, aplicar e evoluir seu negócio." text="Essa área será usada para links afiliados e recomendações por nicho, com curadoria para ajudar o cliente a trabalhar melhor." />
    <section className="section productsIntro">
      <div className="marketBox">
        <span>Curadoria afiliada</span>
        <h2>Vamos reunir os melhores produtos por nicho</h2>
        <div className="toolTags">{productTags.map(tag => <b key={tag}>{tag}</b>)}</div>
        <p>Depois vamos colocar esses links dentro dos métodos e também nesta área do site.</p>
        <a className="btn btnPrimary" href={wa('Olá, quero falar sobre recomendações e produtos afiliados da OrganizaPro.')} target="_blank" rel="noopener">Falar sobre recomendações</a>
      </div>
    </section>
    <ProductsShelf />
  </Layout>;
}

function ContactPage() {
  return <Layout>
    <PageHero label="Contato" title="Fale com a OrganizaPro e descubra qual solução combina com seu momento." text="Atendimento pelo WhatsApp, Instagram ou e-mail. Responda com o que você precisa organizar e vamos indicar o melhor caminho." />
    <section className="section contactPage">
      <div className="contactGrid">
        <a href={wa('Olá, vim pelo site da OrganizaPro e quero atendimento.')} target="_blank" rel="noopener"><b>WhatsApp</b><span>(12) 98321-6069</span></a>
        <a href={`mailto:${EMAIL}`}><b>E-mail</b><span>{EMAIL}</span></a>
        <a href="https://instagram.com/organizaprov" target="_blank" rel="noopener"><b>Instagram</b><span>{INSTAGRAM}</span></a>
      </div>
    </section>
  </Layout>;
}

function PageHero({ label, title, text }) {
  return <section className="pageHero">
    <span className="microLabel">{label}</span>
    <h1>{title}</h1>
    <p>{text}</p>
  </section>;
}

function FinalCTA() {
  return <section className="finalCta">
    <div className="finalIcon">🚀</div>
    <div>
      <h2>Pronto para elevar seu negócio ao próximo nível?</h2>
      <p>Fale com a OrganizaPro e descubra a melhor solução para o seu momento.</p>
    </div>
    <div className="finalActions">
      <a className="btn btnWhatsapp" href={wa('Olá, vim pelo site e quero elevar meu negócio com a OrganizaPro.')} target="_blank" rel="noopener">◉ Falar no WhatsApp</a>
      <a className="btn btnPrimary" href={wa('Olá, quero agendar uma conversa com a OrganizaPro.')} target="_blank" rel="noopener">▣ Agendar conversa</a>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer">
    <div className="footerGrid">
      <div>
        <img src="/organizapro-logo.png" alt="OrganizaPro" />
        <p>Métodos, serviços, ferramentas e produtos para quem quer evoluir com organização.</p>
        <div className="socials"><a href="https://instagram.com/organizaprov" target="_blank" rel="noopener">◎</a><a href={wa('Olá, vim pelo site da OrganizaPro.')} target="_blank" rel="noopener">◉</a><a href={`mailto:${EMAIL}`}>✉</a></div>
      </div>
      <FooterColumn title="Métodos" links={['Barbeiro Profissional', 'Assistência Técnica', 'Estética Profissional', 'Alimentação Inteligente', 'Ver todos os métodos']} />
      <FooterColumn title="Serviços" links={['Assistente Virtual', 'Criação de Sites', 'Organização de WhatsApp', 'Presença Digital', 'Ver todos os serviços']} />
      <FooterColumn title="Ferramentas" links={['Calculadoras', 'Geradores', 'Checklists', 'Planilhas', 'Ver todas as ferramentas']} />
      <FooterColumn title="Produtos" links={['Produtos para estética', 'Ferramentas para barbearia', 'Equipamentos', 'Acessórios', 'Ver todos os produtos']} />
      <div>
        <h4>Contato</h4>
        <span>(12) 98321-6069</span>
        <span>{EMAIL}</span>
        <span>{INSTAGRAM}</span>
        <a className="footerWhats" href={wa('Olá, vim pelo site da OrganizaPro.')} target="_blank" rel="noopener">Falar no WhatsApp</a>
      </div>
    </div>
    <div className="copy">© 2024 OrganizaPro. Todos os direitos reservados. <a href="/privacidade">Política de Privacidade</a> <a href="/termos">Termos de Uso</a> <a href="/contato">Suporte</a></div>
  </footer>;
}

function FooterColumn({ title, links }) {
  return <div><h4>{title}</h4>{links.map(link => <span key={link}>{link}</span>)}</div>;
}

function MobileActions() {
  return <div className="mobileActions">
    <a href={wa('Olá, vim pelo site da OrganizaPro e quero atendimento.')} target="_blank" rel="noopener">WhatsApp</a>
    <a href="/metodos">Ver métodos</a>
  </div>;
}

function CheckoutPage() {
  const initialItems = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('organizapro_cart') || localStorage.getItem('imperio_cart') || '[]');
    } catch {
      return [];
    }
  }, []);
  const [items] = useState(initialItems);
  const [customer, setCustomer] = useState({ name: '', email: '', whatsapp: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const total = items.reduce((sum, item) => sum + (Number(String(item.price).replace(/[^^\d,]/g, '').replace(',', '.')) || 0) * (Number(item.qty) || 1), 0);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, customer })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Erro ao criar pagamento.');

      window.location.href = data.init_point || data.sandbox_init_point;
    } catch (err) {
      setError(err.message || 'Erro ao criar pagamento.');
    } finally {
      setLoading(false);
    }
  }

  return <main className="checkoutPage">
    <a href="/" className="checkoutLogo"><img src="/organizapro-logo.png" alt="OrganizaPro" /></a>
    <div className="checkoutShell">
      <form className="checkoutCard" onSubmit={submit}>
        <span>Pagamento seguro</span>
        <h1>Finalize seu acesso</h1>
        <p>Preencha seus dados para continuar para o Mercado Pago.</p>
        {error && <div className="errorBox">{error}</div>}
        <label>Nome completo<input required value={customer.name} onChange={e => setCustomer({ ...customer, name: e.target.value })} placeholder="Seu nome" /></label>
        <label>E-mail<input required type="email" value={customer.email} onChange={e => setCustomer({ ...customer, email: e.target.value })} placeholder="seuemail@gmail.com" /></label>
        <label>WhatsApp<input required value={customer.whatsapp} onChange={e => setCustomer({ ...customer, whatsapp: e.target.value })} placeholder="(12) 99999-9999" /></label>
        <button className="btn btnPrimary" type="submit" disabled={loading || !items.length}>{loading ? 'Gerando pagamento...' : 'Ir para pagamento seguro'}</button>
        <small>Pagamento processado pelo Mercado Pago.</small>
      </form>
      <aside className="checkoutSummary">
        <h2>Resumo</h2>
        {items.length === 0 ? <p>Carrinho vazio. Volte para os métodos e escolha uma opção.</p> : items.map(item => <div className="summaryItem" key={item.id}>
          <img src={item.img} alt={item.title} />
          <div><b>{item.title}</b><span>{item.price}</span></div>
        </div>)}
        <div className="summaryTotal"><span>Total</span><strong>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></div>
        <a href="/metodos">Continuar escolhendo</a>
      </aside>
    </div>
  </main>;
}

function ObrigadoPage() {
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get('order_id');
  return <main className="thanksPage">
    <a href="/" className="checkoutLogo"><img src="/organizapro-logo.png" alt="OrganizaPro" /></a>
    <div className="thanksCard">
      <span>Pedido recebido</span>
      <h1>Obrigado pela compra!</h1>
      <p>Se o pagamento foi aprovado, seu acesso será liberado conforme a confirmação do Mercado Pago.</p>
      {orderId && <p className="orderId">Pedido: {orderId}</p>}
      <a className="btn btnPrimary" href={wa('Olá, finalizei uma compra na OrganizaPro e quero confirmar meu acesso.')} target="_blank" rel="noopener">Confirmar acesso no WhatsApp</a>
      <a className="btn btnGhost" href="/">Voltar para o site</a>
    </div>
  </main>;
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
  return <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
