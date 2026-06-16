import PageHero from './PageHero.jsx';
import MediaFrame from './MediaFrame.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import Button from './Button.jsx';

export default function DetailPage({ item, eyebrow, backTo, backLabel }) {
  if (!item) {
    return (
      <section className="section">
        <div className="container emptyState">
          <h1>Solução não encontrada</h1>
          <p>Essa página ainda não foi cadastrada na OrganizaPro.</p>
          <Button to="/">Voltar ao início</Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero eyebrow={eyebrow} title={item.title} text={item.description || item.short} secondaryLabel={backLabel} secondaryTo={backTo} />
      <section className="section compactTop">
        <div className="container detailGrid">
          <MediaFrame src={item.image} alt={item.title} icon={item.icon || 'OP'} />
          <div className="detailContent">
            <span className="eyebrow">Detalhes da solução</span>
            <h2>O que está incluído</h2>
            <ul className="cleanList">
              {item.bullets?.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="detailActions">
              <WhatsAppButton message={`Olá, vi a página ${item.title} da OrganizaPro e quero saber mais.`}>{item.cta || 'Quero saber mais'}</WhatsAppButton>
              {item.paymentUrl && item.paymentUrl !== '#' ? <Button href={item.paymentUrl} variant="ghost">Ir para pagamento</Button> : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
