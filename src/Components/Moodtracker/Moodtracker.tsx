import styles from './MoodTracker.module.css';
import emoji1 from './images/emoji1.png';
import emoji2 from './images/emoji2.png';
import emoji3 from './images/emoji3.png';
import emoji4 from './images/emoji4.png';
import emoji5 from './images/emoji5.png';
import firebase from '../../utilities/firebase';
import { auth, db } from '../../utilities/firebase';


const Moodtracker = () => {
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
  };

  return (
    <div className={styles.parentFlex}>
      <span className={styles.textDiv}>How are you feeling right now?</span>
      <div className={styles.emojiDiv}>
        <img src={emoji1} alt="vsad" onClick={captureMood} id="1" />
        <img src={emoji2} alt="sad" onClick={captureMood} id="2" />
        <img src={emoji3} alt="ok" onClick={captureMood} id="3" />
        <img src={emoji4} alt="happy" onClick={captureMood} id="4" />
        <img src={emoji5} alt="vhappy" onClick={captureMood} id="5" />
      </div>
      <span className={styles.textDiv}>Please rate your mood to continue</span>
      <div className={styles.tooltip}>
        Hover over me
        <span className={styles.tooltiptext}>Tooltip text</span>
      </div>
    </div>
  );
};

export default Moodtracker;
//https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/
