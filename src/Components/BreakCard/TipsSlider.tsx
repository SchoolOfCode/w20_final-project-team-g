// import CardWrapper from '../../Layout/CardWrapper';
import { PomodoroContext } from '../../Store/PomodoroContext';
import { useContext, useState, useEffect } from 'react';

const TipsSlider = () => {
  const pomodoroCtx = useContext(PomodoroContext);

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (messageIndex < pomodoroCtx.wellnessQuotes.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageIndex]);

  //pomodoroCtx.wellnessQuotes, messageIndex
  return <div className="mb-4 text-2xl font-semibold tracking-wide text-gray-600">{pomodoroCtx.wellnessQuotes[messageIndex]}</div>;
};

export default TipsSlider;

