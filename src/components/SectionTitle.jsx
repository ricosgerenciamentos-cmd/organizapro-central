export default function SectionTitle({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`sectionTitle ${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
