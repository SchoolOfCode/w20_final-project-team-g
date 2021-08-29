import React, { useState, useContext } from 'react';
import Modal from '../../Layout/Modal';
import BreakCard from '../BreakCard/BreakCard';
import { TodosContext } from '../../Store/TodosContext';
import yes from '../../images/yes-no/yes.png';
import no from '../../images/yes-no/no.png';
import helpIcon from '../../images/modal-buttons/help.png';
import styles from './YesNoModal.module.css';
import closeTabIcon from '../../images/modal-buttons/close.png';
import { PomodoroContext } from '../../Store/PomodoroContext';
import { useEffect } from 'react';
const YesNoModal = () => {
  const [presentBreak, setPresentBreak] = useState(false);
  const todoCtx = useContext(TodosContext);
  const pomodoroCtx = useContext(PomodoroContext);

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  const presentBreakCard = () => {
    setPresentBreak(true);
  };

  const presentBreakCardUpdateTodo = () => {
    setPresentBreak(true);
    todoCtx.finishTodo(todoCtx.inProgressTodo);
    // the selected class needs to be passed here but idk how
  };
  return (
    <div className={styles.parentFlex}>
      <div className={styles.closeIcon}>
        <img src={closeTabIcon} alt="close tab" onClick={closeModalHandler} />
      </div>
      <span className={styles.textDiv}>Did you finish the task?</span>
      <div className={styles.iconDiv}>
        <img src={yes} alt="yes" onClick={presentBreakCardUpdateTodo} />
        <img src={no} alt="no" onClick={presentBreakCard} />
      </div>
      <span className={styles.textDiv}>
        Don’t worry if you didn’t, sometimes things take longer than we expect
        them to
      </span>
      <div className={styles.tooltip}>
        <img src={helpIcon} alt="help tool" />
        <p className={styles.tooltiptext}>Don't touch me</p>
      </div>

      {presentBreak && (
        <Modal>
          <BreakCard />
        </Modal>
      )}
    </div>
  );
};

export default YesNoModal;
