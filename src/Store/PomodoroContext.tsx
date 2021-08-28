import { useState, createContext } from 'react';

export enum PomoStatus {
  work = 'work',
  break = 'break',
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
  resetSettings: () => {},
  setSession: (updatedSettings: any) => {},
  stopTimer: () => {},
});

const PomodoroContextProvider: React.FC = (props) => {
  const [pomodoro, setPomodoro] = useState(0); // the number of minutes picked
  const [settings, setsettings] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  function startTimer() {
    setIsTimerFinished(false);
    setStartAnimate(true);
    console.log('pomodoro state is', pomodoro);
    setIsTimerFinished(false);
    console.log('is Timerfinished value is', isTimerFinished);
  }

  function pauseTimer() {
    setStartAnimate(false);
    setPomodoro(0);
  }

  function stopTimer() {
    setStartAnimate(false);
    setsettings({});
    setPomodoro(0);
    console.log('timer stopped settings are', settings);
  }

  const updateSettings = (updatedSettings: {}) => {
    //obtained from PomodoroSettings
    setsettings(updatedSettings);
    setTimer(updatedSettings);
    // setIsTimerFinished(false);
  };

  const setTimer = (evaluate) => {
    switch (
      evaluate.session // frm settings
    ) {
      case 'work':
        setPomodoro(evaluate.work);
        break;
      case 'break':
        setPomodoro(evaluate.break);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const resetSettings = () => {
    setsettings({});
    setPomodoro(0);
    setIsTimerFinished(false);

    console.log(
      'resetsettings function called, pomodoro state & settings is',
      pomodoro,
      settings
    );
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
    let zeroDisplayerSeconds = '';
    let zeroDisplayerMinutes = '';

    if (seconds < 10) {
      zeroDisplayerSeconds = '0';
    }

    if (minutes < 10) {
      zeroDisplayerMinutes = '0';
    }

    if (remainingTime === 0) {
      setIsTimerFinished(true);
      console.log('is Timerfinished value is', isTimerFinished);

      // setsettings({});
      // setPomodoro(0); // cuasing rendering issue
    }

    return `${zeroDisplayerMinutes}${minutes}:${zeroDisplayerSeconds}${seconds}`;
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
