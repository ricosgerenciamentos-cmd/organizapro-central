import SectionTitle from '../components/SectionTitle.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import { tools } from '../data/tools.js';

export default function ToolsPreview() {
  return (
    <section className="section softSection">
      <div className="container">
        <SectionTitle
          eyebrow="Ferramentas"
          title="Organize a rotina com recursos simples"
          text="Planilhas, calculadoras, checklists e geradores para facilitar a execução no dia a dia."
        />
        <div className="cardGrid four compactCards">
          {tools.map((tool) => <Card key={tool.id} item={tool} type="tool" />)}
        </div>
        <div className="centerAction"><Button to="/ferramentas" variant="primary">Ver ferramentas</Button></div>
      </div>
    </section>
  );
}
