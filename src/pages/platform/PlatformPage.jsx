import Button from '../../components/Button.jsx';
import PlatformShell from '../../platform/PlatformShell.jsx';
import { adminModules, platformStats } from '../../data/platformData.js';

export default function PlatformPage() {
  return (
    <PlatformShell
      title="A OrganizaPro como plataforma"
      description="Aqui começa o nível máximo: não só site, mas sistema com cliente, administração, CRM, IA e automações."
      actions={<Button to="/login">Entrar</Button>}
    >
      <div className="platformStats">
        {platformStats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
      <div className="platformCards">
        {adminModules.map((module) => (
          <article className="platformCard" key={module.title}>
            <div className="platformIcon">{module.icon}</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            <Button variant="ghost" to={module.path}>Abrir módulo</Button>
          </article>
        ))}
      </div>
      <div className="roadmapBox">
        <span className="eyebrow">Próximo nível real</span>
        <h2>Depois do MVP, conectamos banco de dados, pagamento, entrega e login real.</h2>
        <p>Este pacote já deixa a arquitetura pronta. A próxima evolução é ligar Supabase, Mercado Pago, OpenAI/API de IA e automações reais de atendimento.</p>
      </div>
    </PlatformShell>
  );
}
