import WhatsAppButton from '../components/WhatsAppButton.jsx';

export default function FinalCTA() {
  return (
    <section className="finalCTA">
      <div className="container finalCTAInner">
        <div>
          <span className="pill dark">Próximo passo</span>
          <h2>Não sabe por onde começar?</h2>
          <p>Fale com a OrganizaPro. Vamos entender seu negócio e indicar o melhor caminho para organizar, vender e atender melhor.</p>
        </div>
        <WhatsAppButton message="Olá, não sei por onde começar e quero uma orientação da OrganizaPro.">Chamar no WhatsApp</WhatsAppButton>
      </div>
    </section>
  );
}
