import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Buscador from "./Buscador";
import Header from "./Header";
import Sobre from "./assets/Sobre";
import Inicio from "./Inicio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Inicio />
    <Sobre />
    <Buscador />
  </React.StrictMode>
);
