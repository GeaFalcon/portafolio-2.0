import React from "react";
import "./Curriculum.scss";
import icono from "../media/man.svg";

const Curriculum = () => {
  return (
    <div>
      <div className="cv">
        <span>{icono}</span>
        <p>TRABAJEMOS JUNTOS</p>
        <hr />
        <p>
          Quiero seguir aprendiendo y creciendo profesionalmente. Si estás
          interesado/a en un perfil de desarrolladora front-end junior creativa
          y con muchas ganas de aprender, contacta conmigo.
        </p>
        <button></button>
      </div>
      <div>{icono}</div>
      <div className="vacio"></div>
    </div>
  );
};

export default Curriculum;
