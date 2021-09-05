import styles from './MoodTracker.module.css';
import emoji1 from './images/emoji1.png';
import emoji2 from './images/emoji2.png';
import emoji3 from './images/emoji3.png';
import emoji4 from './images/emoji4.png';
import emoji5 from './images/emoji5.png';
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
    <div className="flex flex-col">
      {!isPresentingBreakCard && (
        <>
          <span className="mt-20 text-2xl font-semibold tracking-wide text-gray-600">
            How are you feeling right now?
          </span>
          <div className="mt-24 flex flex-row justify-evenly">
            <img
              src={emoji1}
              alt="vsad"
              onClick={captureMood}
              id="1"
              className=""
            />
            <img src={emoji2} alt="sad" onClick={captureMood} id="2" />
            <img src={emoji3} alt="ok" onClick={captureMood} id="3" />
            <img src={emoji4} alt="happy" onClick={captureMood} id="4" />
            <img src={emoji5} alt="vhappy" onClick={captureMood} id="5" />
          </div>
          <span className="mt-20 text-xl font-semibold tracking-wide text-gray-600">
            Please rate your mood to continue
          </span>
          {/* <div className={styles.tooltip}>
            Hover over me
            <span className={styles.tooltiptext}>Tooltip text</span>
          </div> */}
        </>
      )}

      {isPresentingBreakCard && (
        <Modal>
          <BreakCard />
        </Modal>
      )}
    </div>
  );
};

export default Moodtracker;
