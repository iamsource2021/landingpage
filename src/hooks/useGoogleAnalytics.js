import { useEffect } from 'react';
import ReactGA from 'react-ga';

const useGoogleAnalytics = () => {
  useEffect(() => {
    const trackingId = "G-4BDDNC0KG3";
    ReactGA.initialize(
        trackingId,
        {
            debug: false,
            testMode: false
        }
    );

    return () => {
      // Realiza alguna limpieza, si es necesario
    };
  }, []);

  const trackPageView = (path) => {
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
  };

  const trackEvent = (category, action, label) => {
    ReactGA.event({ category, action, label });
  };

  return { trackPageView, trackEvent };
};

export default useGoogleAnalytics;

