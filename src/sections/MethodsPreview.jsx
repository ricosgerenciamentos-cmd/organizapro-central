import SectionTitle from '../components/SectionTitle.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import { methods } from '../data/methods.js';

export default function MethodsPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Métodos"
          title="Aprenda o caminho com materiais práticos"
          text="Métodos digitais por nicho para transformar conhecimento em ação, organização e venda."
        />
        <div className="cardGrid three">
          {methods.slice(0, 3).map((method) => <Card key={method.id} item={method} type="method" />)}
        </div>
        <div className="centerAction"><Button to="/metodos" variant="primary">Ver métodos</Button></div>
      </div>
    </section>
  );
}
