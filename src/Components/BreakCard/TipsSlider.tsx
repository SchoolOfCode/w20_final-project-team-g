import CardWrapper from '../../Layout/CardWrapper';
import { PomodoroContext } from '../../Store/PomodoroContext';
import { useContext, useState, useEffect } from 'react';

const TipsSlider = () => {
  const pomodoroCtx = useContext(PomodoroContext);

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (messageIndex < pomodoroCtx.wellnessQuotes.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [pomodoroCtx.wellnessQuotes, messageIndex]);

  return <div>{pomodoroCtx.wellnessQuotes[messageIndex]}</div>;
};

export default TipsSlider;

//   return (
//     <div>
//       <CardWrapper>
//         <h2>Hello there </h2>
//       </CardWrapper>
//     </div>
//   );

// Default to the first message passed
