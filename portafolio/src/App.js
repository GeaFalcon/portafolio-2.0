import "./App.css";
import React, { Fragment } from "react";
import Nav from "./componentes/Nav/nav";
import Portada from "./componentes/Portada/portada";
import About from "./componentes/sobre mi/about";
import Proyectos from "./componentes/proyectos/Proyectos";
import Habilidades from "./componentes/habilidades/Habilidades";
import Curriculum from "./componentes/Curriculum/Curriculum";

function App() {
  var cosa = document.documentElement.scrollTop;
  return (
    <Fragment>
      <Nav />
      <Portada />
      <About />
      <h1>{cosa}</h1>

      <Proyectos />
      <Habilidades />
      <Curriculum />
    </Fragment>
  );
}

export default App;
