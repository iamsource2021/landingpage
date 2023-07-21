import React, { useEffect } from 'react';
import './App.css';
import {
  Layout,
  Home,
  Analisis,
  ServiceTransformation,
  Automatization,
  Colaboracion,
  Gestion,
  Guias,
  Webinars,
  Estudiocasos,
  Ebooks,
  ScrollToTopOnNavigate
} from './Layouts/Desktoprouterdom/components/index';
import {
  BrowserRouter,
  Routes,
  Route  
} from 'react-router-dom';
import GA from './GA';

function App() {
  const { trackPageView } = GA();

  useEffect(() => {
    const currentPath = (window.location.pathname + window.location.search)
    trackPageView(currentPath);
  }, [trackPageView]);

  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/analisis" element={<Analisis />} />
          <Route exact path="/servicetransformation" element={<ServiceTransformation />} />
          <Route exact path="/automatization" element={<Automatization />} />
          <Route exact path="/colaboracion" element={<Colaboracion />} />
          <Route exact path="/gestion" element={<Gestion />} />
          <Route exact path="/guias" element={<Guias />} />
          <Route exact path="/webinars" element={<Webinars />} />
          <Route exact path="/estudiocasos" element={<Estudiocasos />} />
          <Route exact path="/ebooks" element={<Ebooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
