import React from "react";
import "./about.scss";
import "../media/foto.jpg";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookieBite,
  faLaptopCode,
  faGamepad,
  faCat,
  faBookDead,
  faHeadset,
  faPaw,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="aboutMe">
      <div className="borde">
        <div className="foto"></div>
      </div>

      <div className="caja">
        <div className="sobreMi">
          <div className="circulo"></div>
          <div className="circulo"></div>
          <div className="circulo"></div>
          <h2>Sobre mí</h2>
        </div>
        <div className="informacion">
          <h3>Desarrollador front-end jr.</h3>
          <p>¡Hola! Me llamo Jose y soy desarrollador Full Stack junior</p>
          <p>
            Lorem fistrum llevame al sircoo diodenoo hasta luego Lucas me cago
            en tus muelas qué dise usteer. Benemeritaar torpedo te voy a borrar
            el cerito fistro está la cosa muy malar ese pedazo de está la cosa
            muy malar torpedo. Ahorarr hasta luego Lucas se calle ustée ese
            pedazo de torpedo pupita condemor condemor la caidita ahorarr.
            Fistro por la gloria de mi madre benemeritaar de la pradera no te
            digo trigo por no llamarte Rodrigor está la cosa muy malar a
            gramenawer la caidita sexuarl de la pradera no te digo trigo por no
            llamarte
          </p>
          <p>
            Diodenoo tiene musho peligro mamaar no te digo trigo por no llamarte
            Rodrigor llevame al sircoo apetecan diodenoo hasta luego Lucas.
          </p>
        </div>
      </div>
      <div className="hobbies">
        <div className="volador">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <FontAwesomeIcon icon={faLaptopCode} />
        <FontAwesomeIcon icon={faCookieBite} />
        <FontAwesomeIcon icon={faGamepad} />
        <FontAwesomeIcon icon={faCat} />
        <FontAwesomeIcon icon={faBookDead} />
        <FontAwesomeIcon icon={faHeadset} />
        <FontAwesomeIcon icon={faPaw} />
      </div>
    </div>
  );
};

export default About;
