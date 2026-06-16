import Logo from './Logo.jsx';
import RouteLink from './RouteLink.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { navigation, footerNavigation } from '../data/navigation.js';
import { siteConfig } from '../data/siteConfig.js';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo dark />
          <p>{siteConfig.positioning}</p>
          <WhatsAppButton>Chamar no WhatsApp</WhatsAppButton>
        </div>
        <div>
          <h3>Áreas</h3>
          <div className="footerLinks">
            {navigation.map((item) => <RouteLink key={item.path} to={item.path}>{item.label}</RouteLink>)}
          </div>
        </div>
        <div>
          <h3>Contato</h3>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.instagram}</p>
          <p>{siteConfig.city}</p>
        </div>
        <div>
          <h3>Legal</h3>
          <div className="footerLinks">
            {footerNavigation.map((item) => <RouteLink key={item.path} to={item.path}>{item.label}</RouteLink>)}
          </div>
        </div>
      </div>
      <div className="footerBottom">© {new Date().getFullYear()} OrganizaPro. Estrutura digital para pequenos negócios.</div>
    </footer>
  );
}
