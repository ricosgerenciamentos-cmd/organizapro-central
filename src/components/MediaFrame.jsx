export default function MediaFrame({ src, alt, icon = 'OP', className = '' }) {
  return (
    <div className={`mediaFrame ${className}`}>
      {src ? <img src={src} alt={alt || ''} loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; }} /> : null}
      <div className="imageFallback" aria-hidden="true">
        <span>{icon}</span>
        <small>Adicionar imagem oficial</small>
      </div>
    </div>
  );
}
