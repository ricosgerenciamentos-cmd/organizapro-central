import SectionTitle from '../components/SectionTitle.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { comboOffer } from '../data/combo.js';
import { formatPrice } from '../utils/formatPrice.js';

export default function ComboOffer() {
  return (
    <section className="section comboSection" id="combo">
      <div className="container">
        <SectionTitle
          eyebrow="Oferta principal"
          title="Destaque para vender serviços hoje"
          text="O combo deixa a oferta simples para o cliente entender e fácil para você apresentar no WhatsApp."
        />
        <div className="comboCard">
          <div className="comboContent">
            <span className="pill">{comboOffer.badge}</span>
            <h2>{comboOffer.title}</h2>
            <p>{comboOffer.subtitle}</p>
            <ul className="cleanList twoColumns">
              {comboOffer.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <small>{comboOffer.idealFor}</small>
          </div>
          <div className="pricePanel">
            <span>{comboOffer.priceLabel}</span>
            <strong>{formatPrice(comboOffer.price)}</strong>
            <p>Estrutura digital básica para começar com mais profissionalismo.</p>
            <WhatsAppButton message={comboOffer.whatsappMessage} className="full">{comboOffer.cta}</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
