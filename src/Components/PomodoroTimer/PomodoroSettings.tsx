import { useState, useContext } from 'react';
import styles from './Pomodoro.module.css';
import { PomodoroContext } from '../../Store/PomodoroContext';
import { PomoStatus } from '../../Store/PomodoroContext';
const PomodoroSettings = () => {
  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 10,
    session: 'work',
  });

  const { updateSettings } = useContext(PomodoroContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(newTimer); // passes object back to useCOntext
    console.log(newTimer);
  };

  return (
    <div className={styles.formContainer}>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <button className={styles.Specialbutton} type="submit">
          Set Timer
        </button>
      </form>
    </div>
  );
};

export default PomodoroSettings;
