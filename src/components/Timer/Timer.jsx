import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css'
import Circle from '../Circle/Circle';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "October, 30, 2023";
  // eslint-disable-next-line 
  let strokeDashoffset=0;


  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="timer">
      <Circle text={days + " Days"} strokeWidth={0.5} strokeDashoffset={days/365*100}/> 
      <Circle text={hours + " Hours"} strokeDashoffset={hours/24*100}/>
      <Circle text={minutes + " Minutes"} strokeDashoffset={minutes/60*100}/>
      <Circle text={seconds + " Seconds"} strokeDashoffset={seconds/60*100}/>
     
    </div>
     <h1>{days} : {hours} : {minutes} : {seconds}</h1>
     </div>
  );
};

export default Timer;