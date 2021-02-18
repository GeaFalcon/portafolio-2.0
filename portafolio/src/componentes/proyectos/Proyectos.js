import React from "react";
import Cads from "./Cards/Cads";
import "./proyectos.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "./../media/gitHub.svg";

const Proyectos = () => {
  return (
    <div className="proyectos">
      <h2>Mis proyectos</h2>
      <div className="contenedor">
        <Cads />
        <Cads />
        <Cads />
        <Cads />
        <Cads />
        <Cads />
      </div>

      <div className="git">
        <img src={github} />
        <span>Ver más proyectos</span>
      </div>
    </div>
  );
};

export default Proyectos;
