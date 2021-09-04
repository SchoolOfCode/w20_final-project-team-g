import { useState } from 'react';
import firebase from 'firebase';
import { Line } from 'react-chartjs-2';

import { useEffect } from 'react';

const MoodChart = () => {
  const moodRef = firebase.firestore().collection('moods');
  const [mood, setMood] = useState([]);

  useEffect(() => {
    fetchAndModifyData();
  }, []);

  const fetchAndModifyData = () => {
    moodRef.onSnapshot((querySnapshot) => {
      const newObj = [];
      querySnapshot.forEach((doc) => {
        newObj.push(doc.data());
      });
      const editedObj = removeJSONString(newObj);

      setMood(editedObj);
    });
  };

  function removeJSONString(obj) {
    // store all keys of this object for later use
    let keys = Object.keys(obj);
    // for each key update the "json" key
    keys.map((key) => {
      // updates only if it has "json"
      if (obj[key].hasOwnProperty('moodData')) {
        // assign the current obj a new field with "json" value pair
        Object.assign(obj[key], obj[key]['moodData']);
        // delete "json" key from this object
        delete obj[key]['moodData'];
      }
    });
    // updated all fields of obj
    return obj;
  }

  // filter today's mood via system date; 1- get system date
  let day = String(new Date());
  let split = day.split(' ');
  let splice = split.splice(0, 3);
  let userSystemDate = splice.join(' ');
  // console.log('userSystem date', userSystemDate);
  // 2 compare and get array matching today's date (currently ! since no data for Tuesday)
  let todaysData = mood.filter((item) => item.day === userSystemDate);
  // console.log('today data:', todaysData);
  // 3 for each mood entry, remove duplicate hour value but combine their score values
  const specificHour = todaysData.reduce((specificHour, { day, time, mood }) => {
    const eachHour = specificHour[time];
    const current = eachHour || { day, time, moods: [+mood] };
    if (eachHour) current.mood = eachHour.moods.push(+mood); // if [time] property exists add up scores

    return Object.assign(specificHour, { [time]: current });
  }, {});

  const avgMoodForEachHour = Object.values(specificHour).map(({ day, time, moods }) => ({
    day,
    time,
    mood: moods.reduce((a, b) => a + b) / moods.length,
  }));

  let averageMood = avgMoodForEachHour.map((data) => +data.mood.toFixed());
  let timeCollection = avgMoodForEachHour.map((data) => data.time);

  const data = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 90, 100, 0);
    gradient.addColorStop(1, 'rgba(96, 165, 250, 1)');
    gradient.addColorStop(0.8, 'rgba(96, 165, 250, 1)');
    gradient.addColorStop(0.6, 'rgba(167, 139, 250, 1)');
    gradient.addColorStop(0.4, 'rgba(248, 113, 113, 1)');
    gradient.addColorStop(0.2, '#FCD34D');
    gradient.addColorStop(0, 'rgb(20, 1, 1)');

    return {
      labels: timeCollection, // x-axis
      datasets: [
        {
          label: 'Average mood for today',
          data: averageMood,
          fill: false,
          tension: 0.4,
          borderColor: gradient,
          borderWidth: 2,
        },
      ],
    };
  };

  const options = {
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  };

  return (
    <>
      <div>
        <h1 className="title">Today's Moods</h1>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default MoodChart;

// working graph options in case needed for future use
// const options = {
//   scales: {
//     y: {
//       suggestedMin: 0,
//       suggestedMax: 5,
//     },
//   },
// };

// const data = {
//   labels: timeCollection, // x-axis
//   datasets: [
//     {
//       label: 'Average mood for today',
//       data: averageMood,
//       fill: false,
//       tension: 0.4,
//       backgroundColor: ['rgba(167, 139, 250, 1)'], // The line fill color/ dots
//       borderColor: ['rgba(248, 113, 113, 1)'], // The line color.
//     },
//   ],
// };
