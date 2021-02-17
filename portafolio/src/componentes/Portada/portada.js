import React from "react";
import video from "../media/video.mp4";
import "../Portada/portada.scss";
import Typewriter from "typewriter-effect";

const Portada = () => {
  let front = '<span id ="verde">Front-end</span>';
  let back = '<span id ="verde">Back-end</span>';
  let web = '<span id ="verde">Web</span>';

  return (
    <div className="portada">
      <video className="--video" src={video} autoPlay loop muted />

      <div className="titulo">
        <h1>¡Hola! Soy Jose</h1>
        <div className="typewriter">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`Desarrollador ${front}`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(`Desarrollador ${back}`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(`Maquetador ${web}`)
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Portada;
