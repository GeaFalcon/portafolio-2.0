import "./App.css";
import React, { Fragment } from "react";
import Nav from "./componentes/Nav/nav";
import Portada from "./componentes/Portada/portada";
import About from "./componentes/sobre mi/about";
function App() {
  return (
    <Fragment>
      <Nav />
      <Portada />
      <About />
    </Fragment>
  );
}

export default App;
