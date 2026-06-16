import RouteLink from './RouteLink.jsx';

export default function Logo({ dark = false }) {
  return (
    <RouteLink to="/" className={`brand ${dark ? 'dark' : ''}`} aria-label="Ir para o início">
      <span className="brandMark" aria-hidden="true">
        <svg viewBox="0 0 88 88" role="img">
          <path d="M42 75V18c0-3 2-5 5-5h11c10 0 18 8 18 18s-8 18-18 18H53" />
          <path d="M17 55c12 4 30 3 45-9 8-6 13-13 17-22" />
          <path d="M63 24h17v17" />
          <rect x="21" y="39" width="7" height="15" rx="2" />
          <rect x="32" y="31" width="7" height="23" rx="2" />
          <rect x="43" y="24" width="7" height="30" rx="2" />
        </svg>
      </span>
      <span className="brandText"><strong>Organiza</strong><b>Pro</b></span>
    </RouteLink>
  );
}
