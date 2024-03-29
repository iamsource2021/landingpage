import ReactGA from 'react-ga';
import config from './Env/index';


const GA = () => {
  
  const GA_ENV = process.env.NODE_ENV === 'production' ? {
      debug: false,
      testMode: false
  } : {
    debug: true,
    testMode: true
  };

  const trackInit = () => {

    return ReactGA.initialize(
      config.trackId,
      GA_ENV
    );
  };

  const trackPageView = (path) => {
    ReactGA.set({ page: path });
    return ReactGA.pageview(path);
  };

  const trackEvent = (category, action, label) => {
    return ReactGA.event({ category, action, label });
  };

  return { trackPageView, trackEvent, trackInit};
};

export default GA;