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
    selectedTime.preventDefault();

    const { name, value } = selectedTime.target; // extract name and value property of button
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case 'break':
        setNewTimer({
          ...newTimer,
          break: parseInt(value),
        });
        break;
    }

    console.log(selectedTime.target.value);
    pomodoroCtx.updateSettings(newTimer); // passes object back to useCOntext
    console.log(newTimer);

  };

  return (
    <div className={styles.formContainer}>
      <CardWrapper>
        <button name="work" value="25" onClick={handleClick}>
          25 minutes
        </button>
      </CardWrapper>
      <CardWrapper>
        <button name="work" value="50" onClick={handleClick}>
          50 minutes
        </button>
      </CardWrapper>
      <CardWrapper>
        <button name="work" value="1" onClick={handleClick}>
          for quick test
        </button>
      </CardWrapper>
    </div>
  );
};

export default PomodoroSettings;
