import PageHero from '../components/PageHero.jsx';
import Card from '../components/Card.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import { methods } from '../data/methods.js';

export default function MethodsPage() {
  return (
    <>
      <PageHero
        eyebrow="OrganizaPro Métodos"
        title="Métodos digitais para aprender e aplicar"
        text="Materiais práticos por nicho para empreendedores que querem direção, organização e ação simples para evoluir."
        secondaryLabel="Ver serviços"
        secondaryTo="/servicos"
      />
      <section className="section">
        <div className="container cardGrid three">
          {methods.map((method) => <Card key={method.id} item={method} type="method" />)}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
