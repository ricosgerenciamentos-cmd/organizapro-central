import PageHero from '../components/PageHero.jsx';
import Card from '../components/Card.jsx';
import ComboOffer from '../sections/ComboOffer.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import { services } from '../data/services.js';

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="OrganizaPro Serviços"
        title="Execução para deixar seu negócio mais profissional"
        text="Sites, Instagram, WhatsApp Business, página de vendas e apoio operacional para pequenos negócios que precisam sair do improviso."
        secondaryLabel="Ver combo"
        secondaryTo="/#combo"
      />
      <section className="section">
        <div className="container cardGrid three">
          {services.map((service) => <Card key={service.id} item={service} type="service" />)}
        </div>
      </section>
      <ComboOffer />
      <FinalCTA />
    </>
  );
}
