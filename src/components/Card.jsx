import Button from './Button.jsx';
import MediaFrame from './MediaFrame.jsx';

export default function Card({ item, type = 'default', actionLabel = 'Ver detalhes' }) {
  return (
    <article className={`card ${type}`}>
      <MediaFrame src={item.image} alt={item.title} icon={item.icon || 'OP'} />
      <div className="cardBody">
        {item.eyebrow && <span className="eyebrow">{item.eyebrow}</span>}
        {item.status && <span className="statusPill">{item.status}</span>}
        <h3>{item.title}</h3>
        <p>{item.short || item.description}</p>
        {item.bullets?.length ? (
          <ul className="cleanList small">
            {item.bullets.slice(0, 4).map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        ) : null}
        {item.path && <Button to={item.path} variant="ghost">{item.cta || actionLabel}</Button>}
      </div>
    </article>
  );
}
