import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faGlobe, faSync } from "@fortawesome/free-solid-svg-icons";
import "./Cards.scss";
import github from "../../media/gitHub.svg";
const Cads = ({ img, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card">
        <div className="cabecera">
          <div className="icono">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className="icono">
            <img src={github} />
          </div>
          <div className="button" onClick={handleClick}>
            <span>Info</span>
            <FontAwesomeIcon icon={faSync} />
          </div>
        </div>
        <div className="contenido-imagen">
          <h4>Nombre del proyecto</h4>
          <div className="cabecera-imagen">
            <div className="circulo"></div>
            <div className="circulo"></div>
            <div className="circulo"></div>
          </div>
          <div className="imagen"></div>
        </div>
      </div>
      <div className="card">
        <div className="cabecera">
          <div className="icono">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className="icono">
            <img src={github} />
          </div>
          <div className="button" onClick={handleClick}>
            <span>Volver</span>
            <FontAwesomeIcon icon={faSync} />
          </div>
        </div>
        <div className="contenido-imagen">
          <h4>Nombre del proyecto</h4>
          <p>
            Lorem fistrum pupita torpedo te va a hasé pupitaa torpedo amatomaa
            ese pedazo de jarl. Qué dise usteer caballo blanco caballo negroorl{" "}
          </p>
          <FontAwesomeIcon icon={faGamepad} />
          <FontAwesomeIcon icon={faGamepad} />
          <FontAwesomeIcon icon={faGamepad} />
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Cads;
