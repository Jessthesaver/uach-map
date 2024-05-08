import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import AdministrativoLaboratorios from "./views/maps/Administrativo-Laboratorios";
import AdministrativoCafeteria from "./views/maps/Administrativo-Cafeteria";
import Administrativo from "./views/startPoints/Administrativo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/administrativo">
              <Route index element={<Administrativo />} />
              <Route
                path="laboratorios"
                element={<AdministrativoLaboratorios />}
              />
              <Route path="cafeteria" element={<AdministrativoCafeteria />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
