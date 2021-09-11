import CountdownAnimation from './CountDownAnimation';
import { PomodoroContext } from '../../Store/PomodoroContext';
import { TodosContext } from '../../Store/TodosContext';
import PomodoroSettings from './PomodoroSettings';
import { useContext } from 'react';
import Modal from '../../Layout/Modal';
import YesNoModal from '../YesNoModal/YesNoModal';
import TipsSlider from '../BreakCard/TipsSlider';
import bell from './Bell/meditation-bell.m4a';

import play from '../../images/timer/play.png';
import pause from '../../images/timer/pause.png';
import stop from '../../images/timer/stop.png';

const PomodoroTimer = () => {
  const pomodoroCtx = useContext(PomodoroContext);
  const todoCtx = useContext(TodosContext);

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  return (
    <div>
      <div className="flex flex-col w-full h-full m-0 p-0 items-center">
        {/* SHOW SETTINGS IF NO POMODORO VALUE IS SELECTED */}
        {pomodoroCtx.pomodoro === 0 && <PomodoroSettings />}

        {/* SHOW WORK CLOCK IF VALUE IS CHOSEN AND ONWORKTIMER  */}
        {pomodoroCtx.pomodoro !== 0 && pomodoroCtx.isOnWorkTimer && (
          <>
            <h2 className="mb-4 text-2xl font-semibold tracking-wide text-gray-600">
              {todoCtx.inProgressTodo.todoTitle}
            </h2>
            <div className="mb-4">
              <div className="flex justify-center items-center text-6xl font-medium h-80 w-80 rounded-full shadow-lg">
                <CountdownAnimation
                  key={pomodoroCtx.pomodoro}
                  timer={pomodoroCtx.pomodoro}
                  animate={pomodoroCtx.startAnimate}
                >
                  {pomodoroCtx.children}
                </CountdownAnimation>
              </div>
            </div>

            <div className="flex w-48 justify-evenly">
              <button className="" onClick={pomodoroCtx.startTimer}>
                <img
                  src={play}
                  alt="play"
                  className="h-12 w-12 rounded-full shadow-lg opacity-75 hover:opacity-100 transform hover:scale-110"
                />
              </button>

              <button className="" onClick={pomodoroCtx.pauseTimer}>
                <img
                  src={pause}
                  alt="pause"
                  className="h-12 w-12 rounded-full shadow-lg opacity-75 hover:opacity-100 transform hover:scale-110"
                />
              </button>

              <button className="" onClick={pomodoroCtx.resetSettings}>
                <img
                  src={stop}
                  alt="stop"
                  className="h-12 w-12 rounded-full shadow-lg opacity-75 hover:opacity-100 transform hover:scale-110"
                />
              </button>
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
            <div>
              {!pomodoroCtx.startAnimate && (
                <div className="mb-4 text-2xl font-semibold tracking-wide text-gray-600">
                  Enjoy your {pomodoroCtx.breakType} break...
                </div>
              )}
            </div>
            <div>{pomodoroCtx.startAnimate && <TipsSlider />}</div>
            <div className="mb-4">
              <div className="flex justify-center items-center text-6xl font-medium h-80 w-80 rounded-full shadow-lg">
                <CountdownAnimation
                  key={pomodoroCtx.pomodoro}
                  timer={pomodoroCtx.pomodoro}
                  animate={pomodoroCtx.startAnimate}
                >
                  {pomodoroCtx.children}
                </CountdownAnimation>
              </div>
            </div>
            <div className="flex w-48 justify-evenly">
              <button className="" onClick={pomodoroCtx.startTimer}>
                <img
                  src={play}
                  alt="start"
                  className="h-12 w-12 rounded-full shadow-lg opacity-75 hover:opacity-100 transform hover:scale-110"
                />
              </button>

              <button className="" onClick={pomodoroCtx.pauseTimer}>
                <img
                  src={pause}
                  alt="pause"
                  className="h-12 w-12 rounded-full shadow-lg opacity-75 hover:opacity-100 transform hover:scale-110"
                />
              </button>

              <button className="" onClick={pomodoroCtx.resetSettings}>
                <img
                  src={stop}
                  alt="stop"
                  className="h-12 w-12 rounded-full shadow-lg opacity-75 hover:opacity-100 transform hover:scale-110"
                />
              </button>
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
