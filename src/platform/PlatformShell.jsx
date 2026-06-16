import RouteLink from '../components/RouteLink.jsx';

const items = [
  { label: 'Visão geral', path: '/plataforma' },
  { label: 'Cliente', path: '/cliente' },
  { label: 'Admin', path: '/admin' },
  { label: 'CRM', path: '/admin/crm' },
  { label: 'Automações', path: '/admin/automacoes' },
  { label: 'Assistente IA', path: '/assistente-ia' },
];

export default function PlatformShell({ title, eyebrow = 'OrganizaPro Plataforma', description, children, actions }) {
  return (
    <section className="platformPage">
      <div className="container platformLayout">
        <aside className="platformSidebar">
          <strong>Central V5</strong>
          <p>Login, cliente, admin, CRM, IA e automações em uma estrutura pronta para evoluir.</p>
          <nav>
            {items.map((item) => (
              <RouteLink key={item.path} to={item.path}>{item.label}</RouteLink>
            ))}
          </nav>
        </aside>
        <div className="platformMain">
          <div className="platformHeader">
            <div>
              <span className="eyebrow">{eyebrow}</span>
              <h1>{title}</h1>
              {description && <p>{description}</p>}
            </div>
            {actions && <div className="platformActions">{actions}</div>}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
