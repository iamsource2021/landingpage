import './index.css';
import React, { useEffect, useRef } from 'react';
import Home from "../Home/index";
import ServiceTransformation from '../ServiceTransformation/index';
import Automatization from "../Automatization/index";
import Analisis from "../Analisis/index";
import Colaboracion from "../Colaboracion/index";
import Gestion from "../Gestion/index";
import Guias from "../Guias";
import Webinars from "../Webinars";
import Estudiocasos from "../Estudiocasos";
import Ebooks from "../Ebooks";
import GA from '../../GA';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

function ContentAnimationTransition() {
  let location = useLocation();
  const nodeRef = useRef(null);
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        odeRef={nodeRef}
        classNames="my-node"
        timeout={300}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/servicetransformation" element={<ServiceTransformation />} />
            <Route exact path="/automatization" element={<Automatization />} />
            <Route exact path="/analisis" element={<Analisis />} />
            <Route exact path="/colaboracion" element={<Colaboracion />} />
            <Route exact path="/gestion" element={<Gestion />} />
            <Route exact path="/guias" element={<Guias />} />
            <Route exact path="/webinars" element={<Webinars />} />
            <Route exact path="/estudiocasos" element={<Estudiocasos />} />
            <Route exact path="/ebooks" element={<Ebooks />} />
          </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}


function Outlet(props) {

  const { trackPageView } = GA();

  useEffect(() => {
    trackPageView(window.location.pathname + window.location.search);
  }, [trackPageView]);
  return (
    <Router>
      <ContentAnimationTransition />
    </Router>
  );
}

export default Outlet;