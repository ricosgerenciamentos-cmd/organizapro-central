import RouteLink from './RouteLink.jsx';

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const classes = `btn ${variant} ${className}`.trim();
  const target = to || href;

  if (target) {
    return (
      <RouteLink to={target} className={classes} {...props}>
        {children}
      </RouteLink>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
