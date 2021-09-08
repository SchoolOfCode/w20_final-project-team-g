import styles from './Pomodoro.module.css';
import { useState, useEffect } from 'react';
import CountdownAnimation from './CountDownAnimation';
import { PomodoroContext } from '../../Store/PomodoroContext';
import { TodosContext } from '../../Store/TodosContext';

import PomodoroSettings from './PomodoroSettings';
import { useContext } from 'react';
import Modal from '../../Layout/Modal';
import YesNoModal from '../YesNoModal/YesNoModal';
import TipsSlider from '../BreakCard/TipsSlider';
import bell from './Bell/meditation-bell.m4a';

const PomodoroTimer = () => {
  const pomodoroCtx = useContext(PomodoroContext);
  const todoCtx = useContext(TodosContext);

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  useEffect(() => {
    document.title = pomodoroCtx.doctitle;
  }, [pomodoroCtx.doctitle]);

  return (
    <div className="flex mt-24">
      <div className={styles.container}>
        {/* SHOW SETTINGS IF NO POMODORO VALUE IS SELECTED */}
        {pomodoroCtx.pomodoro === 0 && <PomodoroSettings />}

        {/* SHOW WORK CLOCK IF VALUE IS CHOSEN AND ONWORKTIMER  */}
        {pomodoroCtx.pomodoro !== 0 && pomodoroCtx.isOnWorkTimer && (
          <>
            <small>You got this</small>

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
        )}

        {/* IF WORK TIMER FINISHED SWITCH TO NEW MODAL*/}
        {pomodoroCtx.isWorkTimerFinished && (
          <Modal onCancel={closeModalHandler}>
            <YesNoModal />
          </Modal>
        )}

        {/* SHOW WORK CLOCK IF VALUE IS CHOSEN AND ON BREAK TIMER  */}
        {pomodoroCtx.pomodoro !== 0 && pomodoroCtx.isOnBreakTimer && (
          <>
            {pomodoroCtx.startAnimate && (
              <div>
                <TipsSlider />
              </div>
            )}

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
        )}

        {pomodoroCtx.isBreakTimerFinished && console.log('finished')}

        <audio id="beep" ref={pomodoroCtx.audioForEndOfPomodoro}>
          <source src={bell} type="audio/ogg" />
        </audio>
      </div>
    </div>
  );
};

export default PomodoroTimer;
