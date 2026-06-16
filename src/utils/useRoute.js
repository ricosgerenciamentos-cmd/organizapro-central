import { useEffect, useState } from 'react';
import { normalizePath } from './routes.js';

export function useRoute() {
  const [path, setPath] = useState(normalizePath());

  useEffect(() => {
    const sync = () => setPath(normalizePath());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return path;
}
