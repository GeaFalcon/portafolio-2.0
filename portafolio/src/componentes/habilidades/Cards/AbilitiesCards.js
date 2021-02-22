import React from "react";
import "./AbilitiesCards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTools } from "@fortawesome/free-solid-svg-icons";

const AbilitiesCards = () => {
  return (
    <div className="AbilityCard">
      <div className="cardTittle">Desarrollo</div>
      <h3>
        Tecnologias
        <hr />
      </h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} /> Tecnologia
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faCheckCircle} /> Tecnologia
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faCheckCircle} /> Tecnologia
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faCheckCircle} /> Tecnologia
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faCheckCircle} /> Tecnologia
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faCheckCircle} /> Tecnologia
        </li>{" "}
      </ul>
      <h3>
        Herramientas
        <hr />
      </h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faTools} /> Tecnologia
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faTools} /> Tecnologia
        </li>{" "}
        <li></li>{" "}
        <li>
          <FontAwesomeIcon icon={faTools} /> Tecnologia
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faTools} /> Tecnologia
        </li>
      </ul>
    </div>
  );
};

export default AbilitiesCards;
