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
        ['#34D399', 0.33],
        ['#FCD34D', 0.33],
        ['#F87171', 0.33],
      ]}
      strokeWidth={10}
      trailStrokeWidth={6}
      size={296}
      trailColor="#D1D5DB"
      onComplete={() => {
        pomodoroCtx.stopTimer();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
