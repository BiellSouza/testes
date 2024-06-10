import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Page from "./Page";
import "./index.css";
import cepsComuns from "./cepsComuns";
import { preLoadCeps } from "./armazenarCeps";

const App = () => {
  useEffect(() => {
    // Pré-carregue os CEPs comuns no armazenamento local durante a inicialização do aplicativo
    preLoadCeps(cepsComuns);
  }, []); // Executa apenas uma vez, durante a montagem do componente

  return (
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

