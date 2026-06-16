import SectionTitle from '../components/SectionTitle.jsx';
import RouteLink from '../components/RouteLink.jsx';
import { homeChoices } from '../data/homeChoices.js';

export default function SolutionPaths() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Escolha o caminho"
          title="O que seu negócio precisa agora?"
          text="A OrganizaPro funciona como uma central: você escolhe se precisa contratar, aprender, organizar ou comprar melhor."
        />
        <div className="solutionMatrix">
          {homeChoices.map((choice) => (
            <RouteLink to={choice.path} className="solutionPanel" key={choice.title}>
              <div className="solutionIcon">{choice.icon}</div>
              <div className="solutionContent">
                <span>{choice.area}</span>
                <h3>{choice.title}</h3>
                <p>{choice.message}</p>
                <strong>{choice.cta} →</strong>
              </div>
            </RouteLink>
          ))}
        </div>
      </div>
    </section>
  );
}
