import styles from './Pomodoro.module.css';
import { useState } from 'react';
import CountdownAnimation from './CountDownAnimation';
import { PomodoroContext } from '../../Store/PomodoroContext';
import PomodoroSettings from './PomodoroSettings';
import { useContext } from 'react';
import { PomoStatus } from '../../Store/PomodoroContext';
import Modal from '../../Layout/Modal';
import { NewTodo } from '../Todos/NewTodo';
import YesNoModal from '../YesNoModal/YesNoModal';

const PomodoroTimer = () => {
  const pomodoroCtx = useContext(PomodoroContext);
  const [showButtons, setShowButtons] = useState(true);
  const [fetchModal, setFetchModal] = useState(false);

  const presentModal = () => {
    setFetchModal(true);
  };

  return (
    <div className={styles.container}>
      <small>You got this</small>
      {pomodoroCtx.pomodoro !== 0 ? (
        <>
          <div className={styles.timeContainer}>
            <div className={styles.timeWrapper}>
              <CountdownAnimation
                key={pomodoroCtx.pomodoro}
                timer={pomodoroCtx.pomodoro}
                animate={pomodoroCtx.startAnimate}
              >
                {pomodoroCtx.children}
              </CountdownAnimation>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              className={
                !pomodoroCtx.startAnimate
                  ? styles.active && styles.specialButton
                  : undefined
              }
              onClick={pomodoroCtx.startTimer}
            >
              Start
            </button>

            <button
              className={
                pomodoroCtx.startAnimate
                  ? styles.active && styles.specialButton
                  : undefined
              }
              onClick={pomodoroCtx.pauseTimer}
            >
              Pause
            </button>
            <button onClick={pomodoroCtx.resetSettings}> Reset </button>
          </div>
        </>
      ) : (
        <PomodoroSettings />
      )}
    </div>
  );
};

export default PomodoroTimer;

//   {pomodoroCtx.isTimerFinished && !fetchModal && (
//     <button onClick={presentModal}>Click here to continue</button>
//   )}
//   {fetchModal && <Modal><YesNoModal/></Modal>}
// </div>
