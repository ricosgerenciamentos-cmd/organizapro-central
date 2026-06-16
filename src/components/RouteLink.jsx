import { isExternalLink, navigateTo } from '../utils/routes.js';

export default function RouteLink({ to, children, className = '', onClick, ...props }) {
  if (isExternalLink(to)) {
    return (
      <a href={to} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        navigateTo(to);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
