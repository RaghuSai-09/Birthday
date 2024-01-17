import ReactConfetti from 'react-confetti';import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import img from '../assets/c.jpeg';
import imgTopRight from '../assets/t.png';
import imgBottomLeft from '../assets/01.jpg';


const HomePage = () => {

  const [confettiDimensions, setConfettiDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [text, setText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const messages = ['Happy Birthday Glory 🌟🎉🎊', 'Its your Birthday Daaarin"😉😚', 'Otanjoubi Omedetou Glory 🌟🎉🎊'];

  useEffect(() => {

    const handleResize = () => {
      setConfettiDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    const typingInterval = setInterval(() => {
      if (currentCharIndex < messages[currentMessageIndex].length) {
        setText((prevText) => prevText + messages[currentMessageIndex][currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          startTyping();
        }, 2500); 
      }
    }, 70);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(typingInterval);
    }
  }, [currentCharIndex, currentMessageIndex]);

  const startTyping = () => {
    setCurrentCharIndex(0);
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setText('');
  };
  useEffect(() => {
    Aos.init({ duration: 
      3000 });
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
            <ReactConfetti
            width={confettiDimensions.width}
            height={confettiDimensions.height}
            numberOfPieces={500}/>
          
          <div data-aos='flip-left' className="text-center h-screen bg-fixed z-0 bg-cover bg-top flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${img})`}}>
            <div className="absolute top-5 right-5 p-4">
        <img
          src={imgTopRight}
          alt="Top Right"
          className="rounded-full w-44 h-40"
        />
      </div>
      
      <div className="absolute bottom-8 left-5 p-4">
        <img
          src={imgBottomLeft}
          alt="Bottom Left"
          className="rounded-full w-44 h-40"
        />
      </div>
              <h1 className="text-5xl font-bold text-black mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
                {text}
              </h1>
              <p className="p-2 text-lg shadow-lg bg-green-300 rounded-full text-black">
                    Its your birthday, and we are here to celebrate it with you.🤗🤗
              </p>
              <Link to="/wishes"
          className="px-4 py-1 mt-5 rounded-3xl text-white text-lg bg-slate-800 hover:bg-gray-700"
          data-aos="zoom-in-up"
        >
          Let&apos;s celebrate
        </Link>
            </div>
    </div>
  );
};

export default HomePage;
