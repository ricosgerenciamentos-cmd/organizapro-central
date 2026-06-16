import Button from '../components/Button.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { brandStats, siteConfig } from '../data/siteConfig.js';

export default function Hero() {
  return (
    <section className="homeHero">
      <div className="heroBackdrop" />
      <div className="container homeHeroPanel">
        <div className="heroCopy">
          <span className="pill dark">Central OrganizaPro</span>
          <h1>Soluções práticas para pequenos negócios crescerem com organização</h1>
          <p>{siteConfig.positioning}</p>
          <div className="heroActions">
            <WhatsAppButton message="Olá, vi o site da OrganizaPro e quero melhorar meu negócio.">Quero melhorar meu negócio</WhatsAppButton>
            <Button to="/servicos" variant="outlineDark">Ver soluções</Button>
          </div>
        </div>
        <div className="heroSignalCards" aria-label="Resumo OrganizaPro">
          {brandStats.map((item) => (
            <div className="signalCard" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
