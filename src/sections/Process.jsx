import SectionTitle from '../components/SectionTitle.jsx';
import { processSteps } from '../data/process.js';

export default function Process() {
  return (
    <section className="section darkSection">
      <div className="container">
        <SectionTitle
          eyebrow="Como funciona"
          title="Uma central simples para sair da dúvida"
          text="O cliente entra, escolhe um caminho e encontra uma solução prática para agir."
        />
        <div className="processGrid">
          {processSteps.map((step) => (
            <article className="processCard" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
