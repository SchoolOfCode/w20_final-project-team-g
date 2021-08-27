import styles from '../YesNoModal/YesNoModal.module.css';

import activeIcon from '../../images/rest-flows/active.png';
import mindfulicon from '../../images/rest-flows/mindful.png';
import socialIcon from '../../images/rest-flows/social.png';
import helpIcon from '../../images/modal-buttons/help.png';
import closeTabIcon from '../../images/modal-buttons/close.png';
import { TodosContext } from '../../Store/TodosContext';
import { useContext } from 'react';

const BreakCard = () => {
  const todoCtx = useContext(TodosContext);
  
  const presentBreakTimer = () => {
    console.log('should render the timer, not sure how. Magic?');
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
      <span className={styles.textDiv}>
        How would you like to spend the next 5 minutes?
      </span>
      <div className={styles.iconDiv}>
        <img src={socialIcon} alt="social icon" onClick={presentBreakTimer} />
        <img src={mindfulicon} alt="mindful icon" onClick={presentBreakTimer} />
        <img src={activeIcon} alt="active icon" onClick={presentBreakTimer} />
      </div>

      <div className={styles.tooltip}>
        <img src={helpIcon} alt="help tool" />
        <p className={styles.tooltiptext}>Don't touch me</p>
      </div>
    </div>
  );
};

export default BreakCard;
