import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountdownTimer = () => {


  

  const calculateTimeLeft = () => {
    const birthdayDate = new Date('2024-01-18'); 
    const now = new Date();
    const timezoneOffset = now.getTimezoneOffset() * 60 * 1000;
  
    const difference = birthdayDate - (now - timezoneOffset);
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
  
    return timeLeft;
  };
  

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(prevTimeLeft => {
        const updatedTimeLeft = calculateTimeLeft();
  
        if (
          updatedTimeLeft.days === 0 &&
          updatedTimeLeft.hours === 0 &&
          updatedTimeLeft.minutes === 0 &&
          updatedTimeLeft.seconds === 0
        ) {
          setTimerEnded(true);
        }
  
        return updatedTimeLeft;
      });
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="text-center rounded-lg text-yellow-200 mt-4 font-serif">
      <p className="text-xl mb-2">{timerEnded ? "" : `Let's fire some crackers🎉🌟`}</p>
      <div className="flex bg-gray-900 justify-center items-center space-x-4">
        <div className="countdown-box">
          <div className="countdown-value">{formatTime(timeLeft.days)}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-value">{formatTime(timeLeft.hours)}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-value">{formatTime(timeLeft.minutes)}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-value">{formatTime(timeLeft.seconds)}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
      <div className='mt-8'>
        <Link  to='/celebrate'
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Celebrate Now!
        </Link>
      </div>
      
    </div>
  );
};

export default CountdownTimer;
