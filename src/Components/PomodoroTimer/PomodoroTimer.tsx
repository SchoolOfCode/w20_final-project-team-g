import styles from "./Pomodoro.module.css";
import { useState } from "react";
import CountdownAnimation from "./CountDownAnimation";
import { PomodoroContext } from "../../Store/PomodoroContext";
import PomodoroSettings from "./PomodoroSettings";
import { useContext } from "react";
import Modal from "../../Layout/Modal";
import YesNoModal from "../YesNoModal/YesNoModal";
// import closeTabIcon from '../../images/modal-buttons/close.png';
// import { TodosContext } from '../../Store/TodosContext';
const PomodoroTimer = () => {
  const pomodoroCtx = useContext(PomodoroContext);
  const [fetchModal, setFetchModal] = useState(false);
  // const todoCtx = useContext(TodosContext);

  // function closeModalHandler() {
  //   todoCtx.closeModal();
  // }
  const presentModal = () => {
    setFetchModal(true);
  };

  // removed the close icon from here due to lack of CSS knowledge
  return (
    <div className="flex mt-24">

    <div className={styles.container}>
      {/* <div className={styles.closeIcon}>
        <img src={closeTabIcon} alt="close tab" onClick={closeModalHandler} />
      </div> */}
      <small>You got this</small>
      {/* here! do break logic? */}
      {pomodoroCtx.pomodoro === 0 && !pomodoroCtx.isWorkTimerFinished && (
        <PomodoroSettings />
      )}

      {pomodoroCtx.pomodoro !== 0 && (
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
        </>
      )}

      {/* new extra conditional rendering*/}
      {pomodoroCtx.pomodoro !== 0 && (
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
      )}

      {/* {pomodoroCtx.isWorkTimerFinished && (
        <button onClick={presentModal}>Click here to continue</button>
      )} */}
      {pomodoroCtx.isWorkTimerFinished && (
        <Modal>
          <YesNoModal />
        </Modal>
      )}
      <audio id="beep" ref={pomodoroCtx.audioForEndOfPomodoro}>
        <source src="https://onlineclock.net/audio/options/default.mp3" />
      </audio>
    </div>
        </div>
  );
};

export default PomodoroTimer;
