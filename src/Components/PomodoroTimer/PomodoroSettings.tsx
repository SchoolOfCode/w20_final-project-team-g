import { useState, useContext } from 'react';
import styles from './Pomodoro.module.css';
import { PomodoroContext } from '../../Store/PomodoroContext';
import CardWrapper from '../../Layout/CardWrapper';

const PomodoroSettings = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0,
    break: 0,
    session: 'work',
  });

  const pomodoroCtx = useContext(PomodoroContext);

  const handleClick = (selectedTime) => {
    // console.log(selectedTime);
    // selectedTime.preventDefault();
    pomodoroCtx.resetSettings();
    let breakTime;

    if (selectedTime === '25') {
      breakTime = '5';
    } else {
      breakTime = '10';
    }

    let a = 0 + breakTime;

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
    pomodoroCtx.updateSettings(newVal); // passes object back to useContext
  };

  return (
    <div className={styles.formContainer}>
      <CardWrapper>
        <button name="work" value="25" onClick={() => handleClick('25')}>
          25 minutes
        </button>
      </CardWrapper>
      <CardWrapper>
        <button name="work" value="50" onClick={() => handleClick('50')}>
          50 minutes
        </button>
      </CardWrapper>
      <CardWrapper>
        <button name="work" value="0.04" onClick={() => handleClick('0.04')}>
          for quick test
        </button>
      </CardWrapper>
    </div>
  );
};

export default PomodoroSettings;
