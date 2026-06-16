import SectionTitle from '../components/SectionTitle.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import { services } from '../data/services.js';

export default function ServicesPreview() {
  return (
    <section className="section softSection">
      <div className="container">
        <SectionTitle
          eyebrow="Serviços"
          title="Deixe seu negócio mais profissional na internet"
          text="Site, Instagram, WhatsApp e página de vendas para seu cliente encontrar, entender e confiar melhor no seu negócio."
        />
        <div className="cardGrid four">
          {services.slice(0, 4).map((service) => <Card key={service.id} item={service} type="service" />)}
        </div>
        <div className="centerAction"><Button to="/servicos" variant="primary">Ver todos os serviços</Button></div>
      </div>
    </section>
  );
}
