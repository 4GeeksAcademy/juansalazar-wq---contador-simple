// Importa React al bundle
import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Estilos globales
import "../styles/index.css";

// Components
import Home from "./components/Home";

let seconds = 0;

const root = ReactDOM.createRoot(document.querySelector("#root"));

const renderApp = () => {
  root.render(<Home seconds= {seconds} />);
};

renderApp();

setInterval(() => {
  seconds++;
  renderApp();
}, 1000);


