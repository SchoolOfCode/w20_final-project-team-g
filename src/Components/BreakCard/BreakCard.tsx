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
import {
  mindfullData,
  activeData,
  socialData,
} from '../BreakCard/WellnessTips';

const BreakCard = () => {
  const pomodoroCtx = useContext(PomodoroContext);
  const todoCtx = useContext(TodosContext);
  const [isPresentingBreakTimer, setIsPresentingBreakTimer] = useState(false);

  const [breakTime, setBreakTime] = useState({
    work: 1,
    break: 0.05,
    session: 'work',
  });

  const presentBreakTimer = (id: string) => {
    //pomodoroCtx.resetSettings(); // makes break timer show up!
    pomodoroCtx.updateBreakTimer(breakTime); // passes object back to useContext
    setIsPresentingBreakTimer(true);
    console.log('id is', id);

    if (id === 'social') {
      pomodoroCtx.wellnessQuoteHandler(socialData);
    }
    if (id === 'active') {
      pomodoroCtx.wellnessQuoteHandler(activeData);
    }
    if (id === 'mindful') {
      pomodoroCtx.wellnessQuoteHandler(mindfullData);
    }
  };

  // function handleClick(e) {
  //   let selectedFlow = e.target.id;
  //   console.log('selectedFlow', selectedFlow);

  //   pomodoroCtx.updateBreakTimer(breakTime); // passes object back to useContext
  //   setIsPresentingBreakTimer(true);
  //   //presentBreakTimer();
  //   // if (selectedFlow === 'social') {
  //   //   //
  //   //   pomodoroCtx.wellnessQuoteHandler(socialData);
  //   // }
  // }

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  return (
    <div className={styles.parentFlex}>
      <div className={styles.closeIcon}>
        <img src={closeTabIcon} alt="close tab" onClick={closeModalHandler} />
      </div>

      {!isPresentingBreakTimer && (
        <>
          <span className={styles.textDiv}>Time for a break!</span>
          <span className={styles.textDiv}>
            How would you like to spend the next 5 minutes?
          </span>
          <div className={styles.iconDiv}>
            <img
              src={socialIcon}
              alt="social icon"
              id="social"
              onClick={() => presentBreakTimer('social')}
            />
            <img
              src={mindfulicon}
              alt="mindful icon"
              id="mindful"
              onClick={() => presentBreakTimer('mindful')}
            />
            <img
              src={activeIcon}
              alt="active icon"
              id="active"
              onClick={() => presentBreakTimer('active')}
            />
          </div>

          <div className={styles.tooltip}>
            <img src={helpIcon} alt="help tool" />
            <p className={styles.tooltiptext}>Don't touch me</p>
          </div>
        </>
      )}

      {/* {isPresentingBreakTimer && <>
        

      </>} */}
    </div>
  );
};

export default BreakCard;
