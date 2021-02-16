import React from "react";
import video from "../media/video.mp4";
import "../Portada/portada.scss";
import Typewriter from "typewriter-effect";

const Portada = () => {
  var verde = "verde";
  verde.style.setProperty("color", "#00000");

  return (
    <div className="portada">
      <video className="--video" src={video} autoPlay loop muted />

      <div>
        <h1>¡Hola! Soy Jose</h1>
        <div className="typewriter">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`Desarrollador ${verde}`)
                .pauseFor(2000)
                .deleteAll()
                .typeString("Desarrollador Back-end")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Maquetador web")
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
