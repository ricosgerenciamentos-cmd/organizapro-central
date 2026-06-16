import PageHero from '../components/PageHero.jsx';
import Card from '../components/Card.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import { tools } from '../data/tools.js';

export default function FerramentasPage() {
  return (
    <>
      <PageHero
        eyebrow="OrganizaPro Ferramentas"
        title="Planilhas, calculadoras, checklists e geradores"
        text="Ferramentas simples para organizar preço, atendimento, rotina, clientes, mensagens e processos do negócio."
        secondaryLabel="Ver métodos"
        secondaryTo="/metodos"
      />
      <section className="section">
        <div className="container cardGrid four">
          {tools.map((tool) => <Card key={tool.id} item={tool} type="tool" />)}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
