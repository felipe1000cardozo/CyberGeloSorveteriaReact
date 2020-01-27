import React from "react";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Routes from "./routes";

export default function App() {
  return (
    <div className="App" id="app">
      <Routes />
    </div>
  );
}
