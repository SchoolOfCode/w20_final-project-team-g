import styles from '../YesNoModal/YesNoModal.module.css';

import activeIcon from '../../images/rest-flows/active.png';
import mindfulicon from '../../images/rest-flows/mindful.png';
import socialIcon from '../../images/rest-flows/social.png';
import helpIcon from '../../images/modal-buttons/help.png';
import closeTabIcon from '../../images/modal-buttons/close.png';
import { TodosContext } from '../../Store/TodosContext';
import { useContext, useState } from 'react';
import { PomodoroContext } from '../../Store/PomodoroContext';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';
const BreakCard = () => {
  const pomodoroCtx = useContext(PomodoroContext);
  const todoCtx = useContext(TodosContext);
  const [breakTime, setBreakTime] = useState({
    //Change to 5 after fixed
    //currently setting break as 'work' in order to make it work
    work: 0.08,
    break: 0.05,
    session: 'work',
  });

  const presentBreakTimer = (selectedTime) => {
    // here be thy magic

    // pomodoroCtx.resetSettings(); //reset timer
    pomodoroCtx.resetAfterBreakSettings();
    pomodoroCtx.updateSettings(breakTime); // passes object back to useContext
  };

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  return (
    <div className={styles.parentFlex}>
      <div className={styles.closeIcon}>
        <img src={closeTabIcon} alt="close tab" onClick={closeModalHandler} />
      </div>

      <span className={styles.textDiv}>Time for a break!</span>
      <span className={styles.textDiv}>How would you like to spend the next 5 minutes?</span>
      <div className={styles.iconDiv}>
        <img src={socialIcon} alt="social icon" onClick={() => presentBreakTimer('5')} />
        <img src={mindfulicon} alt="mindful icon" onClick={() => presentBreakTimer('5')} />
        <img src={activeIcon} alt="active icon" onClick={() => presentBreakTimer('5')} />
      </div>

      <div className={styles.tooltip}>
        <img src={helpIcon} alt="help tool" />
        <p className={styles.tooltiptext}>Don't touch me</p>
      </div>
    </div>
  );
};

export default BreakCard;
