import Button from '../../components/Button.jsx';
import PlatformShell from '../../platform/PlatformShell.jsx';
import { automationFlows } from '../../data/platformData.js';

export default function AutomationsPage() {
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      alert('Mensagem copiada.');
    } catch {
      alert(text);
    }
  }

  return (
    <PlatformShell
      title="Automações comerciais"
      description="Fluxos prontos para prospecção, resposta de preço, follow-up e pós-venda. Hoje copia e usa; depois conecta com WhatsApp/API."
      actions={<Button to="/admin/crm">Voltar ao CRM</Button>}
    >
      <div className="automationGrid">
        {automationFlows.map((flow) => (
          <article className="automationCard" key={flow.title}>
            <div className="productTopline">
              <span className="statusPill">{flow.status}</span>
              <strong>{flow.channel}</strong>
            </div>
            <h3>{flow.title}</h3>
            <p><b>Gatilho:</b> {flow.trigger}</p>
            <blockquote>{flow.message}</blockquote>
            <Button variant="ghost" onClick={() => copyText(flow.message)}>Copiar mensagem</Button>
          </article>
        ))}
      </div>
    </PlatformShell>
  );
}
