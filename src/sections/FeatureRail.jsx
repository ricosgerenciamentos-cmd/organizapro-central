const items = [
  ['💼', 'Serviços para executar'],
  ['🎓', 'Métodos para aprender'],
  ['🛠️', 'Ferramentas para organizar'],
  ['🛍️', 'Produtos para equipar'],
];

export default function FeatureRail() {
  return (
    <div className="container featureRail">
      {items.map(([icon, label]) => (
        <div className="featureMini" key={label}>
          <span>{icon}</span>
          <strong>{label}</strong>
        </div>
      ))}
    </div>
  );
}
