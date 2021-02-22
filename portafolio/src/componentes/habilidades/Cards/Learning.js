import React from "react";
import "./Learning.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Learning = () => {
  return (
    <div className="learning">
      <h3>
        Aprendiendo...
        <hr />
      </h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGraduationCap} /> Tecnologia
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faGraduationCap} /> Tecnologia
        </li>{" "}
      </ul>
    </div>
  );
};

export default Learning;
