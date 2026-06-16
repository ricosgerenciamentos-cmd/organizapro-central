import Button from '../components/Button.jsx';

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container emptyState">
        <span className="eyebrow">Página não encontrada</span>
        <h1>Esse caminho ainda não existe.</h1>
        <p>A estrutura já está preparada para crescer, mas essa página específica ainda não foi criada.</p>
        <Button to="/">Voltar ao início</Button>
      </div>
    </section>
  );
}
