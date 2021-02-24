import React from "react";
import "./Curriculum.scss";
import icono from "../media/man.svg";
import github from "../media/signo-de-github.svg";
import linkedin from "../media/linkedin.svg";

const Curriculum = () => {
  return (
    <div className="fondo-cv ">
      <div className="cv">
        <img className="reverse" src={icono} />
        <h2>
          TRABAJEMOS JUNTOS
          <hr />
        </h2>
        <p>
          Quiero seguir aprendiendo y creciendo profesionalmente. Si estás
          interesado/a en un perfil de desarrolladora front-end junior creativa
          y con muchas ganas de aprender, contacta conmigo.
        </p>
        <h3 className="button">Descargar CV</h3>

        <div className="contacto">
          <span>Diseño: Irene Rueda | Javier Santos</span>
          <div className="icon-contacto">
            <img className="icon" src={linkedin} />
            <img className="reverse icon" src={github} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
