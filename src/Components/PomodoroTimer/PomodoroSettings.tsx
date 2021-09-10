import { useState, useContext } from 'react';
import styles from './Pomodoro.module.css';
import { PomodoroContext } from '../../Store/PomodoroContext';
// import CardWrapper from '../../Layout/CardWrapper';

const PomodoroSettings = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0,
    break: 0,
    session: 'work',
  });

  const pomodoroCtx = useContext(PomodoroContext);

  const handleClick = (selectedTime) => {
    let breakTime;

    if (selectedTime === '25') {
      breakTime = '5';
    } else {
      breakTime = '10';
    }
    const newVal = {
      ...newTimer,
      work: +selectedTime,
      break: +breakTime,
    };

    switch (selectedTime) {
      case 'work':
        setNewTimer(newVal);
        break;
      case 'break':
        setNewTimer({
          ...newTimer,
          break: +breakTime, // needs to be auto value depending on work session chosen
        });
        break;
    }
    pomodoroCtx.updateWorkTimer(newVal); // passes object back to useContext
    console.log(newVal);
  };

  return (
    <div className="flex flex-col w-full h-full m-0 p-0 items-center">
      <h2
        className="mb-10 text-2xl font-semibold tracking-wide text-gray-600">
          Task Title</h2>
      <p
      className="mb-20 px-12 h-48 overflow-auto text-lg tracking wide text-gray-600 text-left">
        Task body would go here blah blah blah blah blah blah blah blah blah</p>

      <div className="flex w-56 justify-evenly">
        <button 
          className="h-20 w-20 rounded-full shadow-lg transform hover:scale-110 border-4 border-blue-400 text-blue-400 text-4xl font-semibold hover:text-white hover:bg-blue-400 ring-4 ring-transparent hover:ring-blue-100"
          name="work" 
          value="25" 
          onClick={() => handleClick('25')}>
            25  
        </button>

        <button 
          className="h-20 w-20 rounded-full shadow-lg transform hover:scale-110 border-4 border-blue-400 text-blue-400 text-4xl font-semibold hover:text-white hover:bg-blue-400 ring-4 ring-transparent hover:ring-blue-100"
          name="work" 
          value="50" 
          onClick={() => handleClick('50')}>
            50
        </button>

      </div>
        <button 
          className="h-4 w-4 hover:bg-gray-400 bg-gray-100 text-gray-400 hover:text-white rounded-full shadow-lg transform hover:scale-110 ring-4 ring-transparent hover:ring-gray-100"
          name="work" 
          value="0.04" 
          onClick={() => handleClick('0.04')}>
        </button>
    </div>
  );
};

export default PomodoroSettings;
