import { useState, createContext } from 'react';

export enum PomoStatus {
  work = 'work',
  short = 'short',
  long = 'long',
  nothing = 'null',
}

export const PomodoroContext = createContext({
  pomodoro: 0,
  settings: {},
  updateSettings: (updatedSettings: any) => {},
  startAnimate: false,
  isTimerFinished: false,
  startTimer: (updatedSettings: any) => {},
  pauseTimer: (updatedSettings: any) => {},
  children: (updatedSettings: any) => {},
  resetSettings: (updatedSettings: any) => {},
  setSession: (updatedSettings: any) => {},
  stopTimer: () => {},
});

const PomodoroContextProvider: React.FC = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [settings, setsettings] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  function startTimer() {
    setStartAnimate(true);
  }
  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopTimer() {
    setStartAnimate(false);
  }

  const updateSettings = (updatedSettings: {}) => {
    //obtained from PomodoroSettings
    setsettings(updatedSettings);
    setTimer(updatedSettings);
  };

  const setTimer = (evaluate) => {
    switch (
      evaluate.session // frm settings
    ) {
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

  const resetSettings = () => {
    setsettings({});
    setPomodoro(0);

    console.log('resetsettings function called');
  };

  function setSession(chosenSession: {}) {
    updateSettings({
      ...settings, // updating the session key
      session: chosenSession,
    });
    setTimer(settings); // either work, short, or long
  }

  // pass time to counter
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60); // change display here
    const seconds = remainingTime % 60;

    if (remainingTime === 0) {
      setIsTimerFinished(true);
    }
    return `${minutes}:${seconds}`;
  };

  const contextValue = {
    pomodoro,
    settings,
    isTimerFinished,
    updateSettings,
    startAnimate,
    startTimer,
    pauseTimer,
    children,
    resetSettings,
    setSession,
    stopTimer,
  };

  return (
    <PomodoroContext.Provider value={contextValue}>
      {props.children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContextProvider;
