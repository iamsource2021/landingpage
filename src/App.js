import React, {useEffect} from 'react';
import './App.css';
// import Mobile from './Layouts/Mobile/index';
import Desktop from './Layouts/Desktop/index';
// import { useStyleMediaQuery } from './hooks/useStyleMediaQuery.js';
import useGoogleAnalytics from './hooks/useGoogleAnalytics';
import { createBrowserHistory } from "history";

function App() {
  // const { matches: isMobile } = useStyleMediaQuery(
  //   {
  //     mixOrMax: 'max',
  //     widthOrHeight: 'width',
  //     value: 767
  //   }
  // );
  const { trackPageView } = useGoogleAnalytics();

  useEffect(() => {
    trackPageView(window.location.pathname); // Registra la vista de página inicial

    // Opcionalmente, puedes suscribirte a cambios de ruta y realizar un seguimiento de las vistas de página según las rutas
    const history = createBrowserHistory();
    history.listen((location) => {
      console.log(location.pathname)
      trackPageView(location.pathname);
    });
  }, [trackPageView]);

  return (
    <div className="App">
      <Desktop/>
    </div>
  );
}

export default App;
