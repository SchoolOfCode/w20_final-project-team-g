import { useState, useContext } from 'react';
import styles from './Pomodoro.module.css';
import { PomodoroContext } from '../../Store/PomodoroContext';
// import CardWrapper from '../../Layout/CardWrapper';

const PomodoroSettings = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0,
    break: 0,
    session: 'work',
  });

  const pomodoroCtx = useContext(PomodoroContext);

  const handleClick = (selectedTime) => {
    let breakTime;

    if (selectedTime === '25') {
      breakTime = '5';
    } else {
      breakTime = '10';
    }
    const newVal = {
      ...newTimer,
      work: +selectedTime,
      break: +breakTime,
    };

    switch (selectedTime) {
      case 'work':
        setNewTimer(newVal);
        break;
      case 'break':
        setNewTimer({
          ...newTimer,
          break: +breakTime, // needs to be auto value depending on work session chosen
        });
        break;
    }
    pomodoroCtx.updateWorkTimer(newVal); // passes object back to useContext
    console.log(newVal);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Task Title</h2>
      <p>Task body would go here blah blah blah blah blah</p>
      {/* <CardWrapper> */}
        <button name="work" value="25" onClick={() => handleClick('25')}>
          25 minutes
        </button>
      {/* </CardWrapper> */}
      {/* <CardWrapper> */}
        <button name="work" value="50" onClick={() => handleClick('50')}>
          50 minutes
        </button>
      {/* </CardWrapper> */}
      {/* <CardWrapper> */}
        <button name="work" value="0.04" onClick={() => handleClick('0.04')}>
          for quick test
        </button>
      {/* </CardWrapper> */}
    </div>
  );
};

export default PomodoroSettings;
