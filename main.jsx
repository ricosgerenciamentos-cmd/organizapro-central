import React, { useMemo, useState } from 'react';
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
    short: 'Corte, atendimento, precificação, divulgação e fidelização.',
    description: 'Um método prático para barbeiros que querem melhorar atendimento, técnica, divulgação, organização e vendas.',
    price: 'R$ 27,00',
    old: 'R$ 97,00',
    status: 'disponivel',
    img: '/barbearia.png',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Aplicação imediata', 'Acesso digital'],
    featured: true
  },
  {
    id: 1,
    slug: 'assistencia-tecnica',
    title: 'Método Assistência Técnica',
    short: 'Diagnóstico, bancada, atendimento, serviços e clientes.',
    description: 'Organização prática para quem quer atender melhor, montar estrutura, cobrar certo e crescer na assistência técnica.',
    price: 'R$ 27,00',
    old: 'R$ 97,00',
    status: 'disponivel',
    img: '/assistencia-celular.png',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Ferramentas indicadas', 'Acesso digital']
  },
  {
    id: 6,
    slug: 'estetica-profissional',
    title: 'Método Estética Profissional',
    short: 'Atendimento, posicionamento, clientes e estrutura profissional.',
    description: 'Um caminho para profissionais de estética organizarem atendimento, presença digital, vendas e rotina profissional.',
    price: 'R$ 27,00',
    old: 'R$ 97,00',
    status: 'preparando',
    img: '/devocional.png',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Presença digital', 'Organização de atendimento']
  },
  {
    id: 4,
    slug: 'alimentacao-inteligente',
    title: 'Método Alimentação Inteligente',
    short: 'Rotina, preparo, organização e operação alimentar.',
    description: 'Conteúdo prático para organizar uma operação de alimentação com mais clareza, rotina e controle.',
    price: 'R$ 27,00',
    old: 'R$ 97,00',
    status: 'preparando',
    img: '/reeducacao-alimentar.png',
    bullets: ['10 módulos práticos', '3 bônus exclusivos', 'Rotina organizada', 'Aplicação simples']
  }
];

const services = [
  {
    title: 'Assistente Virtual',
    icon: '🎧',
    text: 'Atendimento, agenda, mensagens, follow-up e apoio administrativo para sua empresa ganhar tempo.',
    bullets: ['WhatsApp e Instagram', 'Agenda e lembretes', 'Organização de tarefas'],
    cta: 'Quero Assistente Virtual'
  },
  {
    title: 'Criação de Sites',
    icon: '🌐',
    text: 'Sites profissionais para apresentar sua empresa, gerar confiança e receber contatos com mais clareza.',
    bullets: ['Página institucional', 'Link para WhatsApp', 'Layout profissional'],
    cta: 'Quero um site'
  },
  {
    title: 'Organização de WhatsApp',
    icon: '💬',
    text: 'Estruturamos seu atendimento com mensagens prontas, etiquetas, etapas e organização comercial.',
    bullets: ['Respostas prontas', 'Fluxo de atendimento', 'Mais agilidade'],
    cta: 'Organizar meu WhatsApp'
  },
  {
    title: 'Presença Digital',
    icon: '📲',
    text: 'Organização de bio, destaques, visual, posicionamento e comunicação para sua empresa parecer mais profissional.',
    bullets: ['Bio e destaques', 'Identidade visual', 'Comunicação clara'],
    cta: 'Melhorar minha presença'
  }
];

const toolGroups = [
  'Calculadoras de preço e lucro',
  'Geradores de mensagens',
  'Checklists por profissão',
  'Planilhas e controles',
  'Sistemas simples por nicho'
];

const productGroups = [
  'Produtos para barbeiros',
  'Kits para assistência técnica',
  'Itens para delivery',
  'Produtos para estética',
  'Ferramentas para organizar empresas'
];

function cleanPhone(value){
  return String(value || '').replace(/\D/g, '');
}

function wa(message){
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function currencyNumber(value){
  return Number(String(value).replace(/[^\d,]/g, '').replace(',', '.')) || 0;
}

function setCartAndGo(items){
  localStorage.setItem('organizapro_cart', JSON.stringify(items));
  localStorage.setItem('imperio_cart', JSON.stringify(items));
  window.location.href = '/checkout';
}

function buyMethod(method){
  if(method.status !== 'disponivel'){
    window.location.href = wa(`Olá, vim pelo site da OrganizaPro e quero saber quando o ${method.title} estará disponível.`);
    return;
  }
  const item = {
    id: method.id,
    title: method.title,
    price: method.price,
    img: method.img,
    qty: 1
  };
  setCartAndGo([item]);
}

function Header(){
  const [open,setOpen] = useState(false);
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
    <div className="topLine">✦ Soluções práticas para seu negócio vender melhor, atender melhor e se organizar com clareza.</div>
    <header className="header">
      <a className="brand" href="/" aria-label="OrganizaPro início">
        <img src="/organizapro-logo.png" alt="OrganizaPro" />
      </a>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([href,label]) => <a key={href} className={(path === href || (href !== '/' && path.startsWith(href))) ? 'active' : ''} href={href}>{label}</a>)}
      </nav>
      <a className="headerCta" href={wa('Olá, vim pelo site da OrganizaPro e quero saber qual solução combina com meu negócio.')} target="_blank" rel="noopener">◉ Falar com a OrganizaPro</a>
      <button className="menuBtn" type="button" onClick={()=>setOpen(!open)} aria-label="Abrir menu">{open ? '×' : '☰'}</button>
    </header>
  </>;
}

function Layout({children}){
  return <main>
    <Header />
    {children}
    <FinalCTA />
    <Footer />
    <MobileActions />
  </main>;
}

function Home(){
  return <Layout>
    <Hero />
    <AreaChooser />
    <MainOffer />
    <ServicesPreview />
    <WhySection />
  </Layout>;
}

function Hero(){
  return <section className="hero" id="inicio">
    <div className="heroCopy">
      <div className="eyebrow">OrganizaPro • Soluções para seu negócio</div>
      <h1>Métodos, serviços e soluções para seu negócio crescer com <span>organização.</span></h1>
      <p>Menos caos. Mais clareza. A OrganizaPro reúne métodos, serviços, ferramentas e recomendações para você organizar, vender e evoluir com mais confiança.</p>
      <div className="heroActions">
        <a className="btn btnPrimary" href="#solucoes">Ver soluções</a>
        <a className="btn btnGhost" href={wa('Olá, vim pelo site da OrganizaPro e quero ajuda para escolher uma solução.')} target="_blank" rel="noopener">Falar no WhatsApp</a>
      </div>
      <div className="trustMini">
        <span>✓ Conteúdo prático</span>
        <span>✓ Serviços estratégicos</span>
        <span>✓ Atendimento direto</span>
        <span>✓ Pagamento seguro</span>
      </div>
    </div>
    <div className="heroVisual" aria-label="Empreendedor usando notebook">
      <div className="heroImage"></div>
      <div className="floatCard cardOne"><small>Mais clareza</small><strong>Processos em dia</strong></div>
      <div className="floatCard cardTwo"><small>Mais vendas</small><strong>+ organização</strong></div>
      <div className="floatCard cardThree"><small>Mais tempo</small><strong>Rotina melhor</strong></div>
    </div>
  </section>;
}

function AreaChooser(){
  const areas = [
    {href:'/metodos', icon:'🎓', label:'Métodos', title:'OrganizaPro Métodos', text:'Materiais práticos para aprender, aplicar e melhorar seu negócio.', bullets:['10 módulos + bônus', 'Acesso digital', 'Aplicação direta'], cta:'Explorar métodos', tone:'blue'},
    {href:'/servicos', icon:'💼', label:'Serviços', title:'OrganizaPro Serviços', text:'Soluções feitas para organizar e profissionalizar sua operação.', bullets:['Assistente Virtual', 'Criação de Sites', 'WhatsApp e presença digital'], cta:'Conhecer serviços', tone:'sky'},
    {href:'/ferramentas', icon:'🛠️', label:'Ferramentas', title:'OrganizaPro Ferramentas', text:'Calculadoras, checklists e geradores para facilitar sua rotina.', bullets:['Em desenvolvimento', 'Por nicho', 'Uso prático'], cta:'Ver ferramentas', tone:'purple'},
    {href:'/produtos', icon:'🛍️', label:'Produtos', title:'OrganizaPro Produtos', text:'Produtos recomendados para equipar, aplicar e evoluir seu negócio.', bullets:['Curadoria afiliada', 'Links confiáveis', 'Melhor custo-benefício'], cta:'Ver produtos', tone:'orange'}
  ];
  return <section className="section" id="solucoes">
    <div className="sectionHead">
      <h2>Escolha a solução ideal para o seu momento</h2>
      <p>Cada área da OrganizaPro tem uma função. Você entra pelo caminho que mais combina com sua necessidade agora.</p>
    </div>
    <div className="areaGrid">
      {areas.map(area => <a className={`areaCard ${area.tone}`} href={area.href} key={area.href}>
        <div className="areaIcon">{area.icon}</div>
        <span>{area.label}</span>
        <h3>{area.title}</h3>
        <p>{area.text}</p>
        <ul>{area.bullets.map(b => <li key={b}>{b}</li>)}</ul>
        <b>{area.cta} →</b>
      </a>)}
    </div>
  </section>;
}

function MainOffer(){
  const featured = methods[0];
  return <section className="section highlightSection">
    <div className="highlightWrap">
      <div className="highlightCopy">
        <span className="offerTag">Produto principal agora</span>
        <h2>Comece pelo Método Barbeiro Profissional</h2>
        <p>Um método digital direto para quem quer evoluir no atendimento, técnica, divulgação, organização e fidelização. Ideal para transformar conhecimento em ação prática.</p>
        <div className="offerBullets">
          <span>10 módulos</span>
          <span>3 bônus</span>
          <span>Acesso digital</span>
          <span>Oferta de lançamento</span>
        </div>
      </div>
      <div className="priceBox">
        <small>Oferta atual</small>
        <strong>{featured.price}</strong>
        <em>Entrega digital + suporte pelo WhatsApp</em>
        <button onClick={()=>buyMethod(featured)}>Garantir acesso agora</button>
        <a href="/metodos">Ver todos os métodos</a>
      </div>
    </div>
  </section>;
}

function ServicesPreview(){
  return <section className="section light">
    <div className="sectionHead">
      <h2>Serviços para profissionalizar sua operação</h2>
      <p>Quando o negócio precisa de execução, a OrganizaPro entra com serviços práticos para organizar atendimento, presença e estrutura.</p>
    </div>
    <div className="serviceMiniGrid">
      {services.map(service => <article className="serviceMini" key={service.title}>
        <div>{service.icon}</div>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
      </article>)}
    </div>
  </section>;
}

function WhySection(){
  const items = [
    ['Clareza', 'Você entende qual solução combina com o seu momento.'],
    ['Organização', 'Materiais, serviços e recomendações conectados no mesmo ecossistema.'],
    ['Ação prática', 'Nada de teoria solta: foco em aplicar no dia a dia.'],
    ['Crescimento', 'A estrutura ajuda você a vender melhor e atender com mais profissionalismo.']
  ];
  return <section className="section proofSection">
    <div className="proofGrid">
      {items.map(([title,text], index) => <article key={title}>
        <i>{String(index + 1).padStart(2,'0')}</i>
        <h3>{title}</h3>
        <p>{text}</p>
      </article>)}
    </div>
  </section>;
}

function MethodsPage(){
  return <Layout>
    <PageHero eyebrow="OrganizaPro Métodos" title="Métodos digitais para organizar, atender melhor e vender mais." text="Materiais práticos com módulos, bônus e aplicação direta para diferentes áreas de negócio." />
    <section className="section">
      <div className="productGrid">
        {methods.map(method => <MethodCard key={method.id} method={method} />)}
      </div>
    </section>
    <section className="section light">
      <div className="sectionHead">
        <h2>Como os métodos serão melhorados</h2>
        <p>A próxima etapa é adicionar recomendações afiliadas e ferramentas por nicho dentro de cada método, para transformar conteúdo em uma jornada completa.</p>
      </div>
      <div className="timeline">
        <div><b>1</b><span>Revisar o conteúdo atual</span></div>
        <div><b>2</b><span>Criar módulo de produtos recomendados</span></div>
        <div><b>3</b><span>Adicionar links afiliados confiáveis</span></div>
        <div><b>4</b><span>Conectar ferramentas da OrganizaPro</span></div>
      </div>
    </section>
  </Layout>;
}

function MethodCard({method}){
  return <article className="methodCard">
    <div className="methodImage"><img src={method.img} alt={method.title} /></div>
    <div className="methodBody">
      <span className={method.status === 'disponivel' ? 'status on' : 'status soon'}>{method.status === 'disponivel' ? 'Disponível' : 'Preparando no site'}</span>
      <h3>{method.title}</h3>
      <p>{method.description}</p>
      <ul>{method.bullets.map(b => <li key={b}>{b}</li>)}</ul>
      <div className="methodFooter">
        <div><small>{method.old}</small><strong>{method.price}</strong></div>
        <button onClick={()=>buyMethod(method)}>{method.status === 'disponivel' ? 'Comprar agora' : 'Quero saber quando abrir'}</button>
      </div>
    </div>
  </article>;
}

function ServicesPage(){
  return <Layout>
    <PageHero eyebrow="OrganizaPro Serviços" title="Serviços para deixar seu negócio mais organizado, profissional e eficiente." text="Ativaremos primeiro os serviços com maior facilidade de venda e execução: Assistente Virtual, Sites, Organização de WhatsApp e Presença Digital." />
    <section className="section">
      <div className="serviceGrid">
        {services.map(service => <article className="serviceCard" key={service.title}>
          <div className="serviceIcon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <ul>{service.bullets.map(b => <li key={b}>{b}</li>)}</ul>
          <a href={wa(`Olá, vim pelo site da OrganizaPro e tenho interesse no serviço: ${service.title}.`)} target="_blank" rel="noopener">{service.cta} →</a>
        </article>)}
      </div>
    </section>
  </Layout>;
}

function ToolsPage(){
  return <Layout>
    <PageHero eyebrow="OrganizaPro Ferramentas" title="Ferramentas práticas para resolver problemas reais de cada profissão." text="Essa área ficará pronta depois da central. Vamos criar calculadoras, checklists, geradores e sistemas simples para alimentar o site." />
    <section className="section">
      <div className="comingBox">
        <span>Em desenvolvimento</span>
        <h2>Primeiras ferramentas que vamos criar</h2>
        <div className="tagGrid">
          {toolGroups.map(item => <b key={item}>{item}</b>)}
        </div>
        <a className="btn btnPrimary" href={wa('Olá, quero entrar na lista de interesse das ferramentas da OrganizaPro.')} target="_blank" rel="noopener">Entrar na lista de interesse</a>
      </div>
    </section>
  </Layout>;
}

function ProductsPage(){
  return <Layout>
    <PageHero eyebrow="OrganizaPro Produtos" title="Produtos recomendados para equipar, aplicar e evoluir seu negócio." text="Essa área será usada para links afiliados e recomendações por nicho. A ideia é indicar o que realmente ajuda o cliente a aplicar os métodos e trabalhar melhor." />
    <section className="section">
      <div className="comingBox productsBox">
        <span>Curadoria afiliada</span>
        <h2>Vamos buscar os melhores produtos por nicho</h2>
        <div className="tagGrid">
          {productGroups.map(item => <b key={item}>{item}</b>)}
        </div>
        <p>Depois vamos colocar esses links dentro dos métodos e também nesta área do site.</p>
        <a className="btn btnPrimary" href={wa('Olá, quero saber sobre os produtos recomendados da OrganizaPro.')} target="_blank" rel="noopener">Falar sobre recomendações</a>
      </div>
    </section>
  </Layout>;
}

function ContactPage(){
  return <Layout>
    <PageHero eyebrow="Contato" title="Fale com a OrganizaPro e descubra qual solução combina com seu momento." text="Atendimento pelo WhatsApp, Instagram ou e-mail. Responda com o que você precisa organizar e vamos indicar o melhor caminho." />
    <section className="section">
      <div className="contactGrid">
        <a href={wa('Olá, vim pelo site da OrganizaPro e quero atendimento.')} target="_blank" rel="noopener"><b>WhatsApp</b><span>(12) 98321-6069</span></a>
        <a href={`mailto:${EMAIL}`}><b>E-mail</b><span>{EMAIL}</span></a>
        <a href="https://instagram.com/organizaprov" target="_blank" rel="noopener"><b>Instagram</b><span>{INSTAGRAM}</span></a>
      </div>
    </section>
  </Layout>;
}

function PageHero({eyebrow,title,text}){
  return <section className="pageHero">
    <div className="eyebrow">{eyebrow}</div>
    <h1>{title}</h1>
    <p>{text}</p>
  </section>;
}

function FinalCTA(){
  return <section className="finalCta" id="contato">
    <div>
      <span>📲</span>
      <h2>Não sabe por onde começar?</h2>
      <p>Fale com a OrganizaPro. Vamos entender seu momento e indicar a melhor solução.</p>
    </div>
    <a href={wa('Olá, vim pelo site da OrganizaPro e não sei por onde começar. Pode me ajudar?')} target="_blank" rel="noopener">Chamar no WhatsApp</a>
  </section>;
}

function Footer(){
  return <footer className="footer">
    <div className="footerGrid">
      <div>
        <img src="/organizapro-logo.png" alt="OrganizaPro" />
        <p>Métodos, serviços, ferramentas e produtos para quem quer evoluir com organização.</p>
        <div className="socials">
          <a href="https://instagram.com/organizaprov" target="_blank" rel="noopener">◎</a>
          <a href={wa('Olá, vim pelo site da OrganizaPro.')} target="_blank" rel="noopener">◉</a>
          <a href={`mailto:${EMAIL}`}>✉</a>
        </div>
      </div>
      <div><h4>Navegação</h4><a href="/">Início</a><a href="/metodos">Métodos</a><a href="/servicos">Serviços</a><a href="/ferramentas">Ferramentas</a><a href="/produtos">Produtos</a></div>
      <div><h4>Métodos</h4>{methods.map(m => <span key={m.id}>{m.title.replace('Método ', '')}</span>)}</div>
      <div><h4>Serviços</h4>{services.map(s => <span key={s.title}>{s.title}</span>)}</div>
      <div><h4>Contato</h4><span>(12) 98321-6069</span><span>{EMAIL}</span><span>{INSTAGRAM}</span></div>
    </div>
    <div className="copyRight">© 2024 OrganizaPro. Todos os direitos reservados.</div>
  </footer>;
}

function MobileActions(){
  return <div className="mobileActions">
    <a href={wa('Olá, quero falar com a OrganizaPro.')} target="_blank" rel="noopener">WhatsApp</a>
    <a href="/metodos">Métodos</a>
  </div>;
}

function CheckoutPage(){
  const [cart,setCart] = useState([]);
  const [customer,setCustomer] = useState({name:'', email:'', whatsapp:''});
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const isTestCheckout = new URLSearchParams(window.location.search).get('teste') === '1';

  React.useEffect(()=>{
    const data = localStorage.getItem('organizapro_cart') || localStorage.getItem('imperio_cart') || '[]';
    setCart(JSON.parse(data));
  },[]);

  const total = useMemo(()=>cart.reduce((sum,item)=>sum + currencyNumber(item.price),0),[cart]);
  const displayTotal = isTestCheckout ? 0 : total;

  async function submit(e){
    e.preventDefault();
    setError('');
    if(cart.length === 0) return setError('Seu carrinho está vazio.');
    if(!customer.name || !customer.email || !customer.whatsapp) return setError('Preencha nome, e-mail e WhatsApp.');

    if(isTestCheckout){
      localStorage.setItem('organizapro_last_order', JSON.stringify({cart, customer, total:0, test:true}));
      window.location.href = '/obrigado?teste=1';
      return;
    }

    try{
      setLoading(true);
      const res = await fetch('/api/create-preference', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({items: cart.map(item => ({id:item.id, qty: item.qty || 1})), customer})
      });
      const data = await res.json();
      if(!res.ok) throw new Error(data.error || 'Não foi possível criar o pagamento.');
      localStorage.setItem('organizapro_last_order', JSON.stringify({cart, customer, total}));
      localStorage.setItem('imperio_last_order', JSON.stringify({cart, customer, total}));
      window.location.href = data.init_point;
    }catch(err){
      setError(err.message || 'Erro inesperado.');
    }finally{
      setLoading(false);
    }
  }

  return <main className="checkoutPage">
    <a className="checkoutBrand" href="/"><img src="/organizapro-logo.png" alt="OrganizaPro" /></a>
    <section className="checkoutShell">
      <form className="checkoutForm" onSubmit={submit}>
        <span>Checkout seguro</span>
        <h1>Finalize seu acesso</h1>
        <p>Preencha seus dados e siga para o pagamento seguro pelo Mercado Pago.</p>
        <label>Nome completo<input value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})} placeholder="Seu nome" /></label>
        <label>E-mail<input type="email" value={customer.email} onChange={e=>setCustomer({...customer,email:e.target.value})} placeholder="seuemail@exemplo.com" /></label>
        <label>WhatsApp<input value={customer.whatsapp} onChange={e=>setCustomer({...customer,whatsapp:e.target.value})} placeholder="(12) 99999-9999" /></label>
        {error && <div className="errorBox">{error}</div>}
        <button disabled={loading}>{loading ? 'Gerando pagamento...' : isTestCheckout ? 'Simular pagamento' : 'Pagar com Mercado Pago'}</button>
        <small>🔒 Pagamento protegido. Entrega digital após aprovação.</small>
      </form>
      <aside className="summary">
        <h2>Resumo</h2>
        {cart.length === 0 ? <p>Seu carrinho está vazio.</p> : cart.map(item => <div className="summaryItem" key={item.id}>
          <img src={item.img || '/barbearia.png'} alt="" />
          <div><b>{item.title}</b><span>{item.price}</span></div>
        </div>)}
        <div className="summaryTotal"><span>Total</span><strong>R$ {displayTotal.toFixed(2).replace('.', ',')}</strong></div>
        <a href="/metodos">Continuar vendo métodos</a>
      </aside>
    </section>
  </main>;
}

function ThankYouPage(){
  const [order,setOrder] = useState(null);
  const [token,setToken] = useState(null);
  const [loading,setLoading] = useState(true);
  const [message,setMessage] = useState('Verificando pagamento...');
  const [error,setError] = useState('');

  React.useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('order_id');
    const isTest = params.get('teste') === '1';

    if(isTest || !orderId){
      const localOrder = JSON.parse(localStorage.getItem('organizapro_last_order') || localStorage.getItem('imperio_last_order') || 'null');
      if(localOrder){
        setOrder({status: localOrder.test ? 'approved' : 'local', items: localOrder.cart || [], customer_name: localOrder.customer?.name || 'Cliente'});
        setToken(localOrder.test ? 'TESTE' : null);
        setMessage(localOrder.test ? 'Modo teste aprovado. Acesso liberado.' : 'Pedido registrado.');
      }
      setLoading(false);
      return;
    }

    let tries = 0;
    let interval = null;
    async function check(){
      try{
        tries += 1;
        const res = await fetch(`/api/order-status?order_id=${encodeURIComponent(orderId)}`);
        const data = await res.json();
        if(!res.ok) throw new Error(data.error || 'Não foi possível consultar o pedido.');
        setOrder(data.order || null);
        setToken(data.token?.token || null);
        if(data.order?.status === 'approved' && data.token?.token){
          setMessage('Pagamento aprovado. Seus acessos estão liberados.');
          setLoading(false);
          return true;
        }
        if(tries >= 20){
          setMessage('Ainda não conseguimos confirmar automaticamente. Fale com a OrganizaPro pelo WhatsApp.');
          setLoading(false);
          return true;
        }
        setMessage('Pagamento em processamento. Aguarde alguns segundos...');
        return false;
      }catch(err){
        setError(err.message || 'Erro ao consultar pedido.');
        setLoading(false);
        return true;
      }
    }
    check().then(done => {
      if(done) return;
      interval = setInterval(async()=>{
        const doneNow = await check();
        if(doneNow && interval) clearInterval(interval);
      }, 4000);
    });
    return ()=>{if(interval) clearInterval(interval)};
  },[]);

  const items = order?.items || [];
  return <main className="thankPage">
    <a className="checkoutBrand" href="/"><img src="/organizapro-logo.png" alt="OrganizaPro" /></a>
    <section className="thankBox">
      <span>Obrigado!</span>
      <h1>{message}</h1>
      {loading && <p>Estamos verificando a aprovação do pagamento.</p>}
      {error && <div className="errorBox">{error}</div>}
      {items.length > 0 && <div className="downloadList">
        {items.map(item => <a key={item.id} href={token === 'TESTE' ? '#' : `/api/download?token=${encodeURIComponent(token || '')}&product_id=${encodeURIComponent(item.id)}`}>
          {item.title || 'Produto'} {token ? '→ Baixar/Acessar' : '→ Aguardando liberação'}
        </a>)}
      </div>}
      <a className="btn btnPrimary" href={wa('Olá, acabei de comprar pelo site da OrganizaPro e quero confirmar meu acesso.')} target="_blank" rel="noopener">Falar com suporte</a>
    </section>
  </main>;
}

function App(){
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if(path === '/checkout') return <CheckoutPage />;
  if(path === '/obrigado') return <ThankYouPage />;
  if(path === '/metodos') return <MethodsPage />;
  if(path === '/servicos') return <ServicesPage />;
  if(path === '/ferramentas') return <ToolsPage />;
  if(path === '/produtos' || path === '/indica') return <ProductsPage />;
  if(path === '/contato') return <ContactPage />;
  return <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
