import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function BackgroundParticles() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (

    <Particles

      id="particles"

      init={particlesInit}

      options={{

        fullScreen:false,

        background:{
          color:"transparent",
        },

        fpsLimit:60,

        detectRetina:true,

        particles:{

          number:{
            value:28,
          },

          color:{
            value:"#6CA9FF",
          },

          opacity:{
            value:0.18,
          },

          size:{
            value:{
              min:2,
              max:5,
            },
          },

          move:{
            enable:true,
            speed:.5,
            direction:"none",
            outModes:{
              default:"out",
            },
          },

          links:{
            enable:true,
            color:"#8EC5FF",
            opacity:.12,
            distance:150,
          },

        },

      }}

    />

  );

}

export default BackgroundParticles;