import Button from './Button.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

export default function PageHero({ eyebrow, title, text, primaryLabel = 'Falar com a OrganizaPro', secondaryLabel, secondaryTo }) {
  return (
    <section className="pageHero">
      <div className="container pageHeroInner">
        <span className="pill dark">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="heroActions">
          <WhatsAppButton>{primaryLabel}</WhatsAppButton>
          {secondaryLabel && secondaryTo ? <Button to={secondaryTo} variant="outlineDark">{secondaryLabel}</Button> : null}
        </div>
      </div>
    </section>
  );
}
