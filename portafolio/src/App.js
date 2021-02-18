import "./App.css";
import React, { Fragment } from "react";
import Nav from "./componentes/Nav/nav";
import Portada from "./componentes/Portada/portada";
import About from "./componentes/sobre mi/about";
import Proyectos from "./componentes/proyectos/Proyectos";

function App() {
  return (
    <Fragment>
      <Nav />
      <Portada />
      <About />
      <Proyectos />
    </Fragment>
  );
}

export default App;
