import React from "react";
import Home from "../Home/index";

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
            </Routes>
      </Router>
    );
}

export default Outlet;