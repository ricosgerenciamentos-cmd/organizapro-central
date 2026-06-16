import { useState } from 'react';
import Logo from './Logo.jsx';
import RouteLink from './RouteLink.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { navigation } from '../data/navigation.js';
import { homeChoices } from '../data/homeChoices.js';
import { useRoute } from '../utils/useRoute.js';

export default function Header() {
  const path = useRoute();
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="topStrip">✦ Métodos, ferramentas, serviços e produtos úteis para pequenos negócios.</div>
      <div className="headerMain">
        <div className="headerInner">
          <Logo />
          <div className="searchIntent" role="search">
            <span>⌕</span>
            <input placeholder="Do que seu negócio precisa hoje? Serviços, métodos, ferramentas ou produtos..." aria-label="Buscar solução" />
          </div>
          <div className="headerActions">
            <RouteLink to="/servicos" className="miniAction">💼 <small>Serviços</small></RouteLink>
            <RouteLink to="/metodos" className="miniAction">🎓 <small>Métodos</small></RouteLink>
            <RouteLink to="/login" className="miniAction">🔐 <small>Login</small></RouteLink>
            <WhatsAppButton className="headerWhats">Falar com a OrganizaPro</WhatsAppButton>
          </div>
        </div>
        <nav className="navBar" aria-label="Navegação principal">
          <button type="button" className="categoryButton" onClick={() => setOpen((value) => !value)} aria-expanded={open}>☰ Categorias</button>
          {navigation.map((item) => (
            <RouteLink key={item.path} to={item.path} className={path === item.path ? 'active' : ''} onClick={() => setOpen(false)}>
              {item.label}
            </RouteLink>
          ))}
        </nav>
        {open && (
          <div className="categoryOverlay">
            <div className="categoryPanel">
              <div>
                <span className="eyebrow">Escolha por intenção</span>
                <h3>Encontre a solução certa para seu momento.</h3>
                <p>Essa divisão deixa a OrganizaPro parecida com uma central de soluções: simples para o cliente e organizada para crescer.</p>
              </div>
              <div className="categoryGrid">
                {homeChoices.map((choice) => (
                  <RouteLink key={choice.path} to={choice.path} onClick={() => setOpen(false)}>
                    <strong>{choice.icon} {choice.area}</strong>
                    <span>{choice.title}</span>
                  </RouteLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
