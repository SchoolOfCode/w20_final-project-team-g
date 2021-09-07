import { useRef } from 'react';
import { useState, createContext } from 'react';

export enum PomoStatus {
  work = 'work',
  break = 'break',
  nothing = 'null',
}

export const PomodoroContext = createContext({
  wellnessQuotes: [],
  wellnessQuoteHandler: (quote: string[]) => {},
  isOnWorkTimer: false,
  isOnBreakTimer: false,
  updateBreakTimer: (updatedSettings: any) => {},
  updateWorkTimer: (updatedSettings: any) => {},
  isWorkTimerFinished: false,
  isBreakTimerFinished: false,
  doctitle: 'Kaizen',
  //
  pomodoro: 0,
  settings: {},
  startAnimate: false,
  startTimer: (updatedSettings: any) => {},
  pauseTimer: (updatedSettings: any) => {},
  children: (updatedSettings: any) => {},
  resetSettings: () => {},
  setSession: (updatedSettings: any) => {},
  stopTimer: () => {},
  audioForEndOfPomodoro: null,
  // resetAfterBreakSettings: () => {},
});

const PomodoroContextProvider: React.FC = (props) => {
  const [pomodoro, setPomodoro] = useState(0); // the number of minutes picked
  const [settings, setSettings] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);
  const audioForEndOfPomodoro = useRef(null);
  const [wellnessQuotes, setWellnessQuotes] = useState([]);
  const [doctitle, setDocTitle] = useState<string>(null);
  //
  const [isOnWorkTimer, setIsOnWorkTimer] = useState(false);
  const [isOnBreakTimer, setIsOnBreakTimer] = useState(false);
  const [isWorkTimerFinished, setIsWorkTimerFinished] = useState(false);
  const [isBreakTimerFinished, setIsBreakTimerFinished] = useState(false);

  function startTimer() {
    setStartAnimate(true);
    console.log('pomodoro state is', pomodoro);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopTimer() {
    setStartAnimate(false);
    setSettings({});
    setPomodoro(0);
  }

  function wellnessQuoteHandler(quote: []) {
    setWellnessQuotes(quote);
  }
  console.log('wellness quotes are', wellnessQuotes);

  const resetSettings = () => {
    setSettings({});
    setPomodoro(0);
    setIsWorkTimerFinished(false);
    setIsBreakTimerFinished(false);
    setIsOnBreakTimer(false);
    setIsOnWorkTimer(false)
  };

  const updateBreakTimer = (updatedSettings) => {
    setSettings(updatedSettings);
    setTimer(updatedSettings);
    setIsOnBreakTimer(true);
    setIsWorkTimerFinished(false);
    setIsBreakTimerFinished(false);
    console.log('updateBreakTimer was called from context');
  };

  const updateWorkTimer = (updatedSettings) => {
    setSettings(updatedSettings);
    setTimer(updatedSettings);
    setIsOnWorkTimer(true);
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

  function setSession(chosenSession: {}) {
    updateWorkTimer({
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
    if (remainingTime === 0 && isOnWorkTimer) {
      setIsWorkTimerFinished(true); // triggers yes no modal
      setIsOnWorkTimer(false);
      audioForEndOfPomodoro.current.play();
    }

    if (remainingTime === 0 && isOnBreakTimer) {
      setIsBreakTimerFinished(true);
      setIsOnBreakTimer(false);
      resetSettings(); // should set it all to zero and render settings page
      audioForEndOfPomodoro.current.play();
    }
    let timeDisplay = `${zeroDisplayerMinutes}${minutes}:${zeroDisplayerSeconds}${seconds}`;
    setDocTitle(timeDisplay);
    //console.log('timeDisplay:', timeDisplay);
    return timeDisplay;
  };
  console.log(doctitle);

  // const resetAfterBreakSettings = () => {
  //   // setSettings({});
  //   setPomodoro(0);
  //   setIsBreakTimerFinished(true);

  //   console.log(
  //     'resetsettings function called, pomodoro state & settings is',
  //     pomodoro,
  //     settings
  //   );
  // };

  const contextValue = {
    wellnessQuotes,
    wellnessQuoteHandler,
    isOnWorkTimer,
    updateBreakTimer,
    isOnBreakTimer,
    doctitle,
    /////
    pomodoro,
    settings,
    isWorkTimerFinished,
    isBreakTimerFinished,
    updateWorkTimer,
    startAnimate,
    startTimer,
    pauseTimer,
    children,
    resetSettings,
    // resetAfterBreakSettings,
    setSession,
    stopTimer,
    audioForEndOfPomodoro,
  };

  return (
    <PomodoroContext.Provider value={contextValue}>
      {props.children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContextProvider;
