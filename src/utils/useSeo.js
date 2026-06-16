import { useEffect } from 'react';
import { seoByPath } from '../data/seo.js';

export function useSeo(path) {
  useEffect(() => {
    const seo = seoByPath[path] || seoByPath['/'];
    document.title = seo.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', seo.description);
  }, [path]);
}
