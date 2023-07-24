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

  const trackEventCustom = (event) =>{
    const {category, action, label, dimension1} = event;
    console.log(category, action, label, dimension1);
     ReactGA.set({dimension1:dimension1});
    return ReactGA.event({ category, action, label, dimension1});
  };

  return { trackPageView, trackEvent, trackInit, trackEventCustom };
};

export default GA;