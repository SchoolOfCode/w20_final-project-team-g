import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { PomodoroContext } from '../../Store/PomodoroContext';
const CountdownAnimation = ({ key, timer, animate, children }) => {
  const pomodoroCtx = useContext(PomodoroContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60} 
      colors={[
        ['#D1D5DB', 0.33],
        ['#D1D5DB', 0.33],
        ['#D1D5DB', 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#60A5FA"
      onComplete={() => {
        pomodoroCtx.stopTimer();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
