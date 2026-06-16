import Button from '../../components/Button.jsx';
import PlatformShell from '../../platform/PlatformShell.jsx';
import { adminModules, initialLeads } from '../../data/platformData.js';

export default function AdminDashboard() {
  const totalValue = initialLeads.reduce((sum, lead) => sum + lead.value, 0);

  return (
    <PlatformShell
      title="Painel administrativo"
      description="Controle a operação da OrganizaPro: leads, propostas, clientes, automações e próximos passos."
      actions={<Button to="/admin/crm">Abrir CRM</Button>}
    >
      <div className="platformStats">
        <article><strong>{initialLeads.length}</strong><span>leads iniciais</span></article>
        <article><strong>R$ {totalValue}</strong><span>potencial em aberto</span></article>
        <article><strong>4</strong><span>fluxos comerciais</span></article>
        <article><strong>V5</strong><span>estrutura de plataforma</span></article>
      </div>
      <div className="platformCards">
        {adminModules.map((module) => (
          <article className="platformCard" key={module.title}>
            <div className="platformIcon">{module.icon}</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            <Button variant="ghost" to={module.path}>Gerenciar</Button>
          </article>
        ))}
      </div>
    </PlatformShell>
  );
}
