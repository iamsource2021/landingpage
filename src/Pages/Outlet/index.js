import React from "react";
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

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

function Outlet(props){
    return (
        <Router>
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
      </Router>
    );
}

export default Outlet;