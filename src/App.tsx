import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido a el mapa interactivo de faculta de ingenieria!</h1>
        <h2>A donde te diriges el día de hoy?</h2>
      </header>
    </div>
  );
}

export default App;
