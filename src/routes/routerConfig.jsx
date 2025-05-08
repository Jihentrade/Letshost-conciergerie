// src/routes/routerConfig.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Estimation from "../pages/Estimation";
import Aproposdenous from "../pages/AproposDeNous/aproposdenous";
import Accueil from "../pages/Accueil";
import Contact from '../pages/Contact'
// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
// import NotFound from "../pages/NotFound";
import PrivateRoute from "./privateRoute";

export default function RouterConfig() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Estimation />} />
        <Route path="/letshost" element={<Letshost />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} /> */}
      
        <Route path="/obtenirUneEstimation" element={<Estimation />}></Route>
        <Route path="/aproposdenous" element={<Aproposdenous />}></Route>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}
