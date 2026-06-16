import PageHero from '../components/PageHero.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { siteConfig } from '../data/siteConfig.js';

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a OrganizaPro"
        text="Conte o que seu negócio precisa agora: contratar serviço, aprender com métodos, organizar rotina ou encontrar produtos úteis."
      />
      <section className="section compactTop">
        <div className="container contactGrid">
          <article className="contactCard">
            <h2>WhatsApp</h2>
            <p>Canal principal para orçamento, dúvidas e indicação da melhor solução.</p>
            <WhatsAppButton>Chamar agora</WhatsAppButton>
          </article>
          <article className="contactCard">
            <h2>E-mail</h2>
            <p>{siteConfig.email}</p>
          </article>
          <article className="contactCard">
            <h2>Instagram</h2>
            <p>{siteConfig.instagram}</p>
          </article>
        </div>
      </section>
    </>
  );
}
