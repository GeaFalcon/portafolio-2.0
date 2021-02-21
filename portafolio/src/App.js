import "./App.css";
import React, { Fragment } from "react";
import Nav from "./componentes/Nav/nav";
import Portada from "./componentes/Portada/portada";
import About from "./componentes/sobre mi/about";
import Proyectos from "./componentes/proyectos/Proyectos";
import Habilidades from "./componentes/habilidades/Habilidades";

function App() {
  return (
    <Fragment>
      <Nav />
      <Portada />
      <About />
      <Proyectos />
      <Habilidades />
    </Fragment>
  );
}

export default App;
