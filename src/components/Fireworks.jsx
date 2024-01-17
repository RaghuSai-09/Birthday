import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFireworksPreset } from "@tsparticles/preset-fireworks";
import audio from '../assets/audio.mp3';
import AOS from 'aos';
import "aos/dist/aos.css";
import { loadSoundsPlugin } from "@tsparticles/plugin-sounds";
import { Link } from "react-router-dom";

const Fireworks = () => {
    
  const [init, setInit] = useState(false);
  useEffect(() => {

    AOS.init({ duration:
      3000 });

    initParticlesEngine(async (engine) => {
      await loadFireworksPreset(engine);
      await loadSoundsPlugin(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    
    console.log(container);
  };

  const options = useMemo(
    () => ({particles: {
      shape: {
        type: "square",
      },
    },
    Sounds : {
      enable: true,
      sounds: {
        "fireworks-explosion": {
          src: audio, 
          volume: 50,
        },}
    },
    preset: "fireworks",
  }),[],);

  if (init) {
    return (
      <div className="min-h-screen ">
        <div>
        <div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}/>
        </div>

          <div data-aos='fade-out' className="text-center h-screen flex flex-col items-center justify-center"
          style={{ fontFamily: 'Dancing Script, cursive' }}>
            <div data-aos='zoom-in' className="text-white text-4xl font-bold m-8">
              Happy Birthday!
            </div>
            <div data-aos='fade-up' className="text-white text-lg mt-4">
              Wishing you a day filled with joy🌟🌍, laughter, and unforgettable moments.
            </div>
            <div data-aos='fade-up' className="text-white text-lg mt-4">
              May this year be your best one yet, filled with love and success!🎂🎈🎉🥳
            </div>
            <div data-aos='fade-up' className="text-white text-lg mt-4">
              Cheers to another year of incredible adventures and achievements!🎊💞🌠
            </div>
            <Link  to='/wishes' data-aos='zoom-out'
            className="mt-4 justify-center items-center flex bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
           Go Back &  Explore Wishes!
          </Link>
          </div>
        </div>
       
      </div>
      
    );
}

return <></>;
};
export default Fireworks;