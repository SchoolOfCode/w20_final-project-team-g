import { useEffect, useState } from 'react';
import styles from './Pomodoro.module.css';
import CountdownAnimation from './CountDownAnimation';
import { PomodoroContext } from '../../Store/PomodoroContext';
import PomodoroSettings from './PomodoroSettings';
import { useContext } from 'react';
import { PomoStatus } from '../../Store/PomodoroContext';

const PomodoroTimer = () => {
  const pomodoroCtx = useContext(PomodoroContext);

  return (
    <div className={styles.container}>
      <small>You got this</small>
      {pomodoroCtx.pomodoro !== 0 ? (
        <>
          <ul className={styles.labels}>
            <li>
              <button
                className={
                  pomodoroCtx.settings === PomoStatus.work
                    ? styles.activeLabel
                    : undefined
                }
                onClick={() => pomodoroCtx.setSession(PomoStatus.work)}
              >
                Work
              </button>
            </li>
            <li>
              <button
                className={
                  pomodoroCtx.settings === PomoStatus.short
                    ? styles.activeLabel && styles.specialButton
                    : undefined
                }
                onClick={() => pomodoroCtx.setSession(PomoStatus.short)}
              >
                Short Break
              </button>
            </li>
            <li>
              <button
                className={
                  pomodoroCtx.settings === PomoStatus.long
                    ? styles.activeLabel && styles.specialButton
                    : undefined
                }
                onClick={() => pomodoroCtx.setSession(PomoStatus.long)}
              >
                Long Break
              </button>
            </li>
          </ul>
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
