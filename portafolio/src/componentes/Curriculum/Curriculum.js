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
            <a href="https://www.linkedin.com/in/jose-antonio-gea-falcon-46b1b8159/">
              <img className="icon" src={linkedin} />
            </a>
            <a href="https://github.com/GeaFalcon">
              <img className="reverse icon" src={github} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
