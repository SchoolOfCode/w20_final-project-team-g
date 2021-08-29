import styles from './MoodTracker.module.css';
import emoji1 from './images/emoji1.png';
import emoji2 from './images/emoji2.png';
import emoji3 from './images/emoji3.png';
import emoji4 from './images/emoji4.png';
import emoji5 from './images/emoji5.png';

//https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/

export const DUMMY_DATA = [
  {
    day: 'Sun Aug 29',
    time: 13,
    mood: '4',
    id: '0.6565343548044056',
  },
  {
    day: 'Sun Aug 29',
    time: 13,
    mood: '4',
    id: '0.4939088636665043',
  },
  {
    day: 'Sun Aug 29',
    time: 13,
    mood: '4',
    id: '0.19334076676160783',
  },
  {
    day: 'Sun Aug 29',
    time: 13,
    mood: '4',
    id: '0.45948329320274794',
  },
  {
    day: 'Sun Aug 29',
    time: 13,
    mood: '4',
    id: '0.45055524849430295',
  },
  {
    day: 'Sun Aug 29',
    time: 13,
    mood: '5',
    id: '0.8743548056484951',
  },
  {
    day: 'Sun Aug 29',
    time: 16,
    mood: '5',
    id: '0.45631383001918424',
  },
  {
    day: 'Sun Aug 29',
    time: 16,
    mood: '5',
    id: '0.6523546036436254',
  },
  {
    day: 'Sun Aug 29',
    time: 16,
    mood: '5',
    id: '0.05252908106683529',
  },
  {
    day: 'Sun Aug 29',
    time: 16,
    mood: '5',
    id: '0.9875659153976115',
  },
  {
    day: 'Sun Aug 29',
    time: 16,
    mood: '3',
    id: '0.8090043360007648',
  },
  {
    day: 'Sun Aug 29',
    time: 16,
    mood: '3',
    id: '0.18475724595134024',
  },
  {
    day: 'Sun Aug 29',
    time: 16,
    mood: '3',
    id: '0.09260773281127066',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '2',
    id: '0.4708464445722822',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '2',
    id: '0.8952412056150363',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '2',
    id: '0.948735169731461',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '1',
    id: '0.9418694855714438',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '1',
    id: '0.8963366628309266',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '1',
    id: '0.824624392878075',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '4',
    id: '0.6660927072695306',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '3',
    id: '0.21239987749222267',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '5',
    id: '0.6134413489215529',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '5',
    id: '0.4548444594935479',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '3',
    id: '0.6153878518101403',
  },
  {
    day: 'Sun Aug 29',
    time: 17,
    mood: '2',
    id: '0.8439072603079858',
  },
];

const Moodtracker = () => {
  const captureMood = (e) => {
    let selectedMood = e.target.id; 

    // Getting the computer date
    let day = String(new Date());
    let split = day.split(' ');
    let splice = split.splice(0, 3);
    let fullDate = splice.join(' ');
    // "Sun Aug 29"

    let dayInt = new Date();
    // let userSystemDay = weekday[dayInt.getDay()];
    let userSystemTime = dayInt.getHours();

    const moodData = {
      day: fullDate,
      time: userSystemTime,
      mood: selectedMood,
      id: String(Math.random()),
    };

    DUMMY_DATA.push(moodData);
    console.log(DUMMY_DATA);
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
