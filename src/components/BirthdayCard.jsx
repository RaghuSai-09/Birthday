
import ReactConfetti from 'react-confetti';
import { useEffect, useState } from 'react';
import Guestbook from './Guestbook';
import Tempu from './Tempu';
import Aos from 'aos';
import "aos/dist/aos.css";

const BirthdayCard = () => {

  const [confettiDimensions, setConfettiDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight/2,
  });

  useEffect(() => {

    Aos.init({ duration:
      3000 });

    const handleResize = () => {
      setConfettiDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div >
        <div data-aos='fade-in' className=" flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 relative" style={{ height: `${confettiDimensions.height}px` }}>
            <Tempu />
            <ReactConfetti
              width={confettiDimensions.width}
              height={confettiDimensions.height}
              numberOfPieces={500}
              recycle={false}
            />
        </div>
        <div >
            <Guestbook />
        </div>
    
  </div>
  );
};

export default BirthdayCard;
