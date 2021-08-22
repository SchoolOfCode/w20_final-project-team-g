import { useState } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState<number>(25 * 60 * 1000);

  const [pause, setPause] = useState(false);

  const onPause = () => {
    setPause(!pause);
  };

  const onStart = () => {
    if (pause === false) {
      setInterval(() => {
        setTime((time) => time - 1000);
      }, 1000);
    } else {
      setTime(time);
    }
  };

  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <h2>
        {minutes}:{seconds}
      </h2>
      <button onClick={onStart}>Start Timer</button>
      <button onClick={onPause}>Pause Timer</button>
    </div>
  );
};

export default PomodoroTimer;
