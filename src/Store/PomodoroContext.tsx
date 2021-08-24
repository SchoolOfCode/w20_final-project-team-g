import { useState, createContext } from 'react';

export const PomodoroContext = createContext({
  pomodoro: 0,
  executing: {},
  updateExecute: (updatedSettings: any) => {},
  startAnimate: false,
  startTimer: (updatedSettings: any) => {},
  pauseTimer: (updatedSettings: any) => {},
  children: (updatedSettings: any) => {},
  SettingsBtn: (updatedSettings: any) => {},
  setCurrentTimer: (updatedSettings: any) => {},
  stopAimate: () => {},
});

const PomodoroContextProvider: React.FC = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  // start animation fn
  function startTimer() {
    setStartAnimate(true);
  }
  // pause animation fn
  function pauseTimer() {
    setStartAnimate(false);
  }
  // pass time to counter
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  // clear session storage
  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case 'work':
        setPomodoro(evaluate.work);
        break;
      case 'short':
        setPomodoro(evaluate.short);
        break;
      case 'long':
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  function stopAimate() {
    setStartAnimate(false);
  }

//   const contextValue: typeof PomodoroContext = {
//     pomodoro,
//     executing,
//     updateExecute,
//     startAnimate,
//     startTimer,
//     pauseTimer,
//     children,
//     SettingsBtn,
//     setCurrentTimer,
//     stopAimate,
//   };

    return (
        <PomodoroContext.Provider value={{
            pomodoro, 
            executing,
            updateExecute, 
            startAnimate, 
            startTimer,
            pauseTimer,
            children,
            SettingsBtn,
            setCurrentTimer,
            stopAimate
        }}>
            {props.children}
        </PomodoroContext.Provider>
    )
    
};

export default PomodoroContextProvider;
