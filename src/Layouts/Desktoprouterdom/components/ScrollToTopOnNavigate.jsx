import { useEffect } from 'react';

export function ScrollToTopOnNavigate() {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}