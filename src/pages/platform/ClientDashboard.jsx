import Button from '../../components/Button.jsx';
import PlatformShell from '../../platform/PlatformShell.jsx';
import { clientProducts } from '../../data/platformData.js';

export default function ClientDashboard() {
  const session = JSON.parse(localStorage.getItem('organizapro-session') || '{}');

  return (
    <PlatformShell
      title={`Área do cliente${session.name ? `, ${session.name}` : ''}`}
      description="Um espaço para o cliente acompanhar serviços contratados, métodos comprados, próximos passos e suporte."
      actions={<Button to="/contato">Pedir suporte</Button>}
    >
      <div className="clientGrid">
        {clientProducts.map((product) => (
          <article className="clientProduct" key={product.title}>
            <div className="productTopline">
              <span className="statusPill">{product.status}</span>
              <strong>{product.progress}%</strong>
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="progressBar"><i style={{ width: `${product.progress}%` }} /></div>
            <div className="nextStep">
              <strong>Próximo passo</strong>
              <span>{product.nextStep}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="supportBox">
        <h2>Central de suporte</h2>
        <p>O cliente pode ver o que falta enviar, acompanhar a entrega e chamar a OrganizaPro sem se perder nas mensagens.</p>
        <Button to="/assistente-ia">Gerar plano com IA</Button>
      </div>
    </PlatformShell>
  );
}
