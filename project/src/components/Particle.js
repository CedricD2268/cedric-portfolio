import React from "react";
import Particles from "react-tsparticles";

function Particle({lightMode}) {
  const paramConfig = {
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable_auto: true,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false
              },
              onclick: {
                enable: false
              },
              resize: true
            }
          },
          retina_detect: true
        };

  const paramConfigLight = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#000000",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  };
  return (
    <Particles
      className="mi-home-particle"
      options={lightMode ? paramConfigLight : paramConfig}
    />
  );
}

export default Particle;
