import { useRef } from 'react';
import { useState, createContext } from 'react';

export enum PomoStatus {
  work = 'work',
  break = 'break',
  nothing = 'null',
}

export const PomodoroContext = createContext({
  //
  setYesNoModalState: (boolean: boolean) => {},
  yesOrNoChosen: false,
  wellnessQuotes: [],
  wellnessQuoteHandler: (quote: string[]) => {},
  isOnWorkTimer: false,
  isOnBreakTimer: false,
  updateBreakTimer: (updatedSettings: any) => {},
  //
  pomodoro: 0,
  settings: {},
  updateWorkTimer: (updatedSettings: any) => {},
  startAnimate: false,
  isWorkTimerFinished: false,
  isBreakTimerFinished: false,
  startTimer: (updatedSettings: any) => {},
  pauseTimer: (updatedSettings: any) => {},
  children: (updatedSettings: any) => {},
  resetSettings: () => {},
  resetAfterBreakSettings: () => {},

  setSession: (updatedSettings: any) => {},
  stopTimer: () => {},
  audioForEndOfPomodoro: null,
});

const PomodoroContextProvider: React.FC = (props) => {
  const [pomodoro, setPomodoro] = useState(0); // the number of minutes picked
  const [settings, setSettings] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);
  const [yesOrNoChosen, setYesOrNoChosen] = useState(false);
  const audioForEndOfPomodoro = useRef(null);
  const [wellnessQuotes, setWellnessQuotes] = useState([]);

  const [isOnWorkTimer, setIsOnWorkTimer] = useState(false);
  const [isOnBreakTimer, setIsOnBreakTimer] = useState(false);
  const [isWorkTimerFinished, setIsWorkTimerFinished] = useState(false);
  const [isBreakTimerFinished, setIsBreakTimerFinished] = useState(false);

  function startTimer() {
    //setIsWorkTimerFinished(false);
    setStartAnimate(true);
    console.log('pomodoro state is', pomodoro);
    // setIsWorkTimerFinished(false);
    console.log('is Timerfinished value is', isWorkTimerFinished);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }
  function setYesNoModalState(boolean) {
    setYesOrNoChosen(boolean);
  }
  function stopTimer() {
    setStartAnimate(false);
    setSettings({});
    setPomodoro(0);
  }

  function wellnessQuoteHandler(quote: []) {
    setWellnessQuotes(quote);
  }

  // const updateWorkTimer = (updatedSettings) => {
  //   //obtained from PomodoroSettings
  //   setSettings(updatedSettings);
  //   setTimer(updatedSettings);
  //   // setisWorkTimerFinished(false);
  // };

  const updateBreakTimer = (updatedSettings) => {
    setSettings(updatedSettings);
    setTimer(updatedSettings);
    setIsOnBreakTimer(true);
    //setIsBreakTimerFinished(false);
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

  const resetSettings = () => {
    setSettings({});
    setPomodoro(0);
    setIsWorkTimerFinished(false);
    setIsBreakTimerFinished(false);
  };
  const resetAfterBreakSettings = () => {
    // setSettings({});
    setPomodoro(0);
    setIsBreakTimerFinished(true);

    console.log(
      'resetsettings function called, pomodoro state & settings is',
      pomodoro,
      settings
    );
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
    ///HERE BE THY PROBLEM ????????//////
    if (remainingTime === 0 && isOnWorkTimer) {
      setIsWorkTimerFinished(true); // triggers yes no modal
      setIsOnWorkTimer(false);
    }
    // } else if (remainingTime === 0 && !isBreakTimerFinished) {
    //   setIsWorkTimerFinished(true);
    // }

    if (remainingTime === 0 && isOnBreakTimer) {
      setIsBreakTimerFinished(true);
      setIsOnBreakTimer(false);
      resetSettings(); // should set it all to zero and render settings page
      audioForEndOfPomodoro.current.play();
    }

    return `${zeroDisplayerMinutes}${minutes}:${zeroDisplayerSeconds}${seconds}`;
  };

  const contextValue = {
    yesOrNoChosen,
    setYesNoModalState,
    wellnessQuotes,
    wellnessQuoteHandler,
    isOnWorkTimer,
    updateBreakTimer,
    isOnBreakTimer,
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
    resetAfterBreakSettings,
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
