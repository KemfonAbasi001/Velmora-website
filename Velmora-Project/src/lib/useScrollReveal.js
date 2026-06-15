import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { refreshScrollReveal } from '../lib/scrollReveal.js';

// Re-scans the DOM for [data-reveal] elements every time the route changes,
// so animations also trigger on freshly mounted pages.
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    refreshScrollReveal();
  }, [location.pathname]);
}