import styles from './MoodTracker.module.css';
import emoji1 from './images/emoji1.png';
import emoji2 from './images/emoji2.png';
import emoji3 from './images/emoji3.png';
import emoji4 from './images/emoji4.png';
import emoji5 from './images/emoji5.png';

const Moodtracker = () => {
  const captureMood = () => {
    console.log('mood captured');
  };
  return (
    <div className={styles.parentFlex}>
      <span className={styles.textDiv}>How are you feeling right now?</span>
      <div className={styles.emojiDiv}>
        <img src={emoji1} alt="vsad" onClick={captureMood} />
        <img src={emoji2} alt="sad" />
        <img src={emoji3} alt="ok" />
        <img src={emoji4} alt="happy" />
        <img src={emoji5} alt="vhappy" />
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
