import styles from './MoodTracker.module.css';
import emoji1 from '../../images/mood-tracker/emoji1.png'
import emoji2 from '../../images/mood-tracker/emoji2.png'
import emoji3 from '../../images/mood-tracker/emoji3.png'
import emoji4 from '../../images/mood-tracker/emoji4.png'
import emoji5 from '../../images/mood-tracker/emoji5.png'
import helpIcon from '../../images/modal-buttons/help.png';

import { db } from '../../utilities/firebase';
import { useState, useContext } from 'react';
import { PomodoroContext } from '../../Store/PomodoroContext';
import { TodosContext } from '../../Store/TodosContext';
import Modal from '../../Layout/Modal';
import BreakCard from '../BreakCard/BreakCard';
const Moodtracker = () => {
  const [isPresentingBreakCard, setIsPresentingBreakCard] = useState(false);
  const todoCtx = useContext(TodosContext);
  const pomodoroCtx = useContext(PomodoroContext);

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  const presentBreakCard = () => {
    setIsPresentingBreakCard(true);
  };

  const captureMood = (e) => {
    let selectedMood = e.target.id;
    // Getting the computer date
    let day = String(new Date());
    let split = day.split(' ');
    let splice = split.splice(0, 3);
    let fullDate = splice.join(' ');
    // comes up as: "Sun Aug 29"

    // system time as two digits i.e 14, 15 etc
    let dayInt = new Date();
    let userSystemTime = dayInt.getHours();

    // create data
    const moodData = {
      day: fullDate,
      time: String(userSystemTime),
      mood: selectedMood,
    };

    // push to firestore
    db.collection('moods')
      .doc()
      .set({
        moodData,
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });

    presentBreakCard();
  };

  return (
    <div className="flex flex-col w-full h-full m-0 p-0 items-center">
      {!isPresentingBreakCard && (
        <>
          <h2 className="mb-10 text-2xl font-semibold tracking-wide text-gray-600">
            How are you feeling right now?
          </h2>
          <div className="mt-24 flex flex-row justify-evenly">
            <img
              className="rounded-full shadow-lg mx-2 cursor-pointer transform hover:scale-110 ring-4 ring-transparent hover:ring-red-100"
              src={emoji1}
              alt="vsad"
              onClick={captureMood}
              id="1"
            />
            <img 
              className="rounded-full shadow-lg mx-2 cursor-pointer transform hover:scale-110 ring-4 ring-transparent hover:ring-purple-100"
              src={emoji2} 
              alt="sad" 
              onClick={captureMood} 
              id="2" />
            <img 
              className="rounded-full shadow-lg mx-2 cursor-pointer transform hover:scale-110 ring-4 ring-transparent hover:ring-blue-100"
              src={emoji3} 
              alt="ok" 
              onClick={captureMood} 
              id="3" />
            <img 
              className="rounded-full shadow-lg mx-2 cursor-pointer transform hover:scale-110 ring-4 ring-transparent hover:ring-yellow-100"
              src={emoji4} 
              alt="happy" 
              onClick={captureMood} 
              id="4" />
            <img 
              className="rounded-full shadow-lg mx-2 cursor-pointer transform hover:scale-110 ring-4 ring-transparent hover:ring-green-100"
              src={emoji5} 
              alt="vhappy" 
              onClick={captureMood} 
              id="5" />
          </div>
          <p className="mt-20 text-xl tracking-wide text-gray-600">
            Please rate your mood to continue
          </p>

          <div className="has-tooltip self-start ml-10 mt-12">
            <img src={helpIcon} alt="help tool" className="transform h-8 w-8 hover:scale-110 cursor-pointer opacity-75 hover:opacity-100"/>
            <p className="tooltip -mt-8 ml-14 text-lg tracking-wide text-gray-600">This data is submitted anonymously</p>
          </div>
        </>
      )}

      {isPresentingBreakCard && (
        <Modal onCancel={closeModalHandler}>
          <BreakCard />
        </Modal>
      )}
    </div>
  );
};

export default Moodtracker;
