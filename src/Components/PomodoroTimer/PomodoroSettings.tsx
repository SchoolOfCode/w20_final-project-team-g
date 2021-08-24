import { useState, useContext } from 'react';
import styles from './Pomodoro.module.css';
import { PomodoroContext } from '../../Store/PomodoroContext';
import { PomoStatus } from '../../Store/PomodoroContext';
const PomodoroSettings = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    short: 0.2,
    long: 1,
    active: PomoStatus.work, // which timer is being used
  });

  const pomodoroCtx = useContext(PomodoroContext);

  const handleChange = (event: React.FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    switch (name) {
      case PomoStatus.work:
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
    pomodoroCtx.updateExecute(newTimer);
  };

  return (
    <div className={styles.formContainer}>
      <form noValidate onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className={styles.input}
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className={styles.input}
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default PomodoroSettings;
