import React from "react";
import "./App.css";
import Home from "./views/home";
import MapNavigator from "./views/maps/map";
import AdministrativoLaboratorios from "./views/maps/Administrativo-Laboratorios";
import AdministrativoCafeteria from "./views/maps/Administrativo-Cafeteria";

function App() {
  return (
    <div className="App">
      <AdministrativoCafeteria></AdministrativoCafeteria>
    </div>
  );
}

export default App;
