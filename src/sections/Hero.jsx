import Button from '../components/Button.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { brandStats } from '../data/siteConfig.js';

export default function Hero() {
  return (
    <section className="homeHero">
      <div className="heroBackdrop" />

      <div className="container homeHeroPanel">
        <div className="heroCopy">
          <span className="pill dark">Central OrganizaPro</span>

          <h1>Organização digital para pequenos negócios</h1>

          <p>
            A OrganizaPro reúne serviços, métodos, ferramentas e produtos para ajudar
            empreendedores a vender melhor, atender melhor e crescer com mais clareza.
          </p>

          <div className="heroHighlight">
            <strong>Hoje em destaque:</strong>
            <span>Site + Instagram + Página de vendas + WhatsApp Business por R$400</span>
          </div>

          <div className="heroActions">
            <WhatsAppButton message="Olá, vi o site da OrganizaPro e quero saber mais sobre o Combo Tudo Pro Seu Negócio.">
              Quero meu combo
            </WhatsAppButton>

            <Button to="/servicos" variant="outlineDark">
              Ver serviços
            </Button>
          </div>
        </div>

        <div className="heroSignalCards" aria-label="Resumo OrganizaPro">
          <div className="signalCard signalFeatured">
            <strong>R$400</strong>
            <span>Combo Tudo Pro Seu Negócio</span>
            <small>Site, Instagram, página de vendas e WhatsApp Business.</small>
          </div>

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