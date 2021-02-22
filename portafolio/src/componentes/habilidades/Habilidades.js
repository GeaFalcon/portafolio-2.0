import React from "react";
import AbilitiesCards from "./Cards/AbilitiesCards";
import Learning from "./Cards/Learning.js";

import "./habilidades.scss";

const Habilidades = () => {
  return (
    <div className="Abilities">
      <h2>Habilidades</h2>
      <div className="cardsAbilities">
        <AbilitiesCards />
        <AbilitiesCards />
        <AbilitiesCards />
      </div>
      <div className="container-learning">
        <Learning />
        <Learning />
      </div>
    </div>
  );
};

export default Habilidades;
