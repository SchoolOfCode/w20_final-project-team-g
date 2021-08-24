import { useState, useEffect } from 'react';
import styles from './Pomodoro.module.css';

const PomodoroTimer = () => {
  //break code
  const [breakLength, setBreakLength] = useState(300);

  const decrementBreakLengthByOneMin = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMin = () => {
    setBreakLength(breakLength + 60);
  };

  const breakLengthInMinutes = Math.floor(breakLength / 60);

  //session code
  const [sessionLength, setSessionLength] = useState(60 * 25);

  const decrementSessionLengthByOneMin = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMin = () => {
    setSessionLength(sessionLength + 60);
  };

  const sessionLengthInMinutes = Math.floor(sessionLength / 60);

  //time left code
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft - minutes * 60;
  let secondZeroString = '';
  let minuteZeroString = '';

  if (seconds < 10) {
    secondZeroString = '0';
  }

  if (minutes < 10) {
    minuteZeroString = '0';
  }

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const handleClick = () => {
    setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1;
        if (newTimeLeft >= 0) {
          return prevTimeLeft - 1;
        }
        return prevTimeLeft;
      });
    }, 1000);
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>

      <section id="break-section">
        <p id="break-label">Break</p>
        <p id="break-length">{breakLengthInMinutes}</p>
        <button onClick={decrementBreakLengthByOneMin}>-</button>
        <button onClick={incrementBreakLengthByOneMin}>+</button>
      </section>

      <section id="time-left">
        <div>
          {minuteZeroString}
          {minutes} : {secondZeroString}
          {seconds}
        </div>
      </section>
      <button onClick={handleClick}>Start</button>
      <section id="session-section">
        <p id="session-label">Session</p>
        <p id="session-length">{sessionLengthInMinutes}</p>
        <button onClick={decrementSessionLengthByOneMin}>-</button>
        <button onClick={incrementSessionLengthByOneMin}>+</button>
      </section>
    </div>
  );
};
export default PomodoroTimer;
