import React from "react";
import "../Nav/nav.scss";

const Nav = () => {
  var simbolo = "<";
  var simbolo2 = ">";
  return (
    <div className="barra">
      <p>
        {simbolo} JoseAntonio<span className="apellido">GeaFalcon</span> /
        {simbolo2}
      </p>
      <ul>
        <li>Sobre mí</li>
        <li>Proyectos</li>
        <li>Habilidades</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Nav;
