import { useEffect } from 'react';
import styles from './Pomodoro.module.css';
import CountdownAnimation from './CountDownAnimation';
import { PomodoroContext } from '../../Store/PomodoroContext';
import PomodoroSettings from './PomodoroSettings';
import { useContext } from 'react';
import Button from './Button';
import { PomoStatus } from '../../Store/PomodoroContext';
const PomodoroTimer = () => {
  //const = useContext(PomodoroContext);

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(PomodoroContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    <div className={styles.container}>
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      {pomodoro !== 0 ? (
        <>
          <ul className={styles.labels}>
            <li>
              <Button
                title="Work"
                _callback={() => setCurrentTimer(PomoStatus.work)}
                className={
                  executing === 'work' ? styles.activeLabel : undefined
                }
              />
            </li>
            <li>
              <Button
                title="Short Break"
                className={
                  executing.active === PomoStatus.short
                    ? styles.activeLabel
                    : undefined
                }
                _callback={() => setCurrentTimer(PomoStatus.short)}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={
                  executing.active === 'short' ? 'active-label' : undefined
                }
                _callback={() => setCurrentTimer(PomoStatus.short)}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingsBtn} />
          <div className="timer-container">
            <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
            <Button title="Start" _callback={startTimer} />
            <Button title="Pause" _callback={pauseTimer} />
          </div>
        </>
      ) : (
        <PomodoroSettings />
      )}
    </div>
  );
};

export default PomodoroTimer;

// umar's old code:
//break code
//   const [breakLength, setBreakLength] = useState(300);

//   const decrementBreakLengthByOneMin = () => {
//     const newBreakLength = breakLength - 60;
//     if (newBreakLength < 0) {
//       setBreakLength(0);
//     } else {
//       setBreakLength(newBreakLength);
//     }
//   };

//   const incrementBreakLengthByOneMin = () => {
//     setBreakLength(breakLength + 60);
//   };

//   const breakLengthInMinutes = Math.floor(breakLength / 60);

//   //session code
//   const [sessionLength, setSessionLength] = useState(60 * 25);

//   const decrementSessionLengthByOneMin = () => {
//     const newSessionLength = sessionLength - 60;
//     if (newSessionLength < 0) {
//       setSessionLength(0);
//     } else {
//       setSessionLength(newSessionLength);
//     }
//   };

//   const incrementSessionLengthByOneMin = () => {
//     setSessionLength(sessionLength + 60);
//   };

//   const sessionLengthInMinutes = Math.floor(sessionLength / 60);

//   //time left code
//   const [timeLeft, setTimeLeft] = useState(sessionLength);

//   let minutes = Math.floor(timeLeft / 60);
//   let seconds = timeLeft - minutes * 60;
//   let secondZeroString = '';
//   let minuteZeroString = '';

//   if (seconds < 10) {
//     secondZeroString = '0';
//   }

//   if (minutes < 10) {
//     minuteZeroString = '0';
//   }

//   useEffect(() => {
//     setTimeLeft(sessionLength);
//   }, [sessionLength]);

//   const handleClick = () => {
//     setInterval(() => {
//       setTimeLeft((prevTimeLeft) => {
//         const newTimeLeft = prevTimeLeft - 1;
//         if (newTimeLeft >= 0) {
//           return prevTimeLeft - 1;
//         }
//         return prevTimeLeft;
//       });
//     }, 1000);
//   };

//   return (
//     <div>
//       <h2>Pomodoro Timer</h2>

//       <section id="break-section">
//         <p id="break-label">Break</p>
//         <p id="break-length">{breakLengthInMinutes}</p>
//         <button _callback={decrementBreakLengthByOneMin}>-</button>
//         <button _callback={incrementBreakLengthByOneMin}>+</button>
//       </section>

//       <section id="time-left">
//         <div>
//           {minuteZeroString}
//           {minutes} : {secondZeroString}
//           {seconds}
//         </div>
//       </section>
//       <button _callback={handleClick}>Start</button>
//       <section id="session-section">
//         <p id="session-label">Session</p>
//         <p id="session-length">{sessionLengthInMinutes}</p>
//         <button _callback={decrementSessionLengthByOneMin}>-</button>
//         <button _callback={incrementSessionLengthByOneMin}>+</button>
//       </section>
//     </div>
//   );
// };
