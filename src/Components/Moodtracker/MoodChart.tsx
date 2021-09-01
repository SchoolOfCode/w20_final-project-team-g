import { useState } from 'react';
import firebase from 'firebase';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';

const MoodChart = () => {
  const moodRef = firebase.firestore().collection('moods');
  const [mood, setMood] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    moodRef.onSnapshot((querySnapshot) => {
      const newObj = [];
      querySnapshot.forEach((doc) => {
        newObj.push(doc.data());
      });
      const editedObj = removeJSONString(newObj);

      setMood(editedObj);
    });
  };
  console.log('state moods', mood);

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
  console.log(userSystemDate);
  console.log('mood', mood);
  // 2 compare and get array matching today's date (currently ! since no data for Tuesday)
  let todaysData = mood.filter((item) => item.day === userSystemDate);
  console.log('today data:', todaysData);
  // 3 for each mood entry, remove duplicate hour value but combine their score values
  const specificHour = todaysData.reduce(
    (specificHour, { day, time, mood }) => {
      const eachHour = specificHour[time];
      const current = eachHour || { day, time, moods: [+mood] };
      if (eachHour) current.mood = eachHour.moods.push(+mood); // if [time] property exists add up scores

      return Object.assign(specificHour, { [time]: current });
    },
    {}
  );
  console.log(specificHour);

  const avgMoodForEachHour = Object.values(specificHour).map(
    ({ day, time, moods }) => ({
      day,
      time,
      mood: moods.reduce((a, b) => a + b) / moods.length,
    })
  );
  console.log(avgMoodForEachHour);

  let averageMood = avgMoodForEachHour.map((data) => +data.mood.toFixed());
  console.log('averageMood', averageMood);
  let timeCollection = avgMoodForEachHour.map((data) => data.time);
  console.log('all times', timeCollection);

  const allMoodsEver = mood.map((item) => item.mood).sort((a, b) => a - b);
  console.log('all moods ever', allMoodsEver);

  // NEXT STEP: Get the number of occurances for each mood, so we get an object like this:
  // {
  //   mood: 1,
  //     numOfOc: 56,

  // }, 
  //{
  //   mood: 2,
  //     numOfOc: 23,

  // }

// POTENTIAL CODE 
  allMoodsEver.forEach((entry) => {
    console.log(entry);
    // let count;
    // if (entry)
    //   const newObj = { mood: entry, numOfOccurances: count + 1 }
  });

  const data = {
    labels: timeCollection, // x-axis
    datasets: [
      {
        label: 'Average mood for today',
        data: averageMood,
        fill: false,
        tension: 0.4,
        backgroundColor: ['rgba(248, 113, 113, 1)'], // The line fill color/ dots
        borderColor: ['rgba(248, 113, 113, 1)'], // The line color.
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            precision: 0,
            stepSize: 0,
            beginAtZero: true,
            userCallback: function (label, index, labels) {
              // when the floored value is the same as the value we have a whole number
              if (Math.floor(label) === label) {
                return label;
              }
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Line Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default MoodChart;

// Apex charts. wont use 
//import Chart from 'react-apexcharts';
// const series = [
//   {
//     name: 'mood',
//     data: averageMood, // put emojis here T_T
//   },
// ];
// const options = {
//   chart: {
//     id: 'line',
//     stroke: {
//       curve: 'smooth',
//     },
//     colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
//   },
//   xaxis: {
//     categories: timeCollection, // time of day
//   },
// };

// return (
//   <>
//     <div>This is the chart </div>
//     <Chart options={options} series={series} type="line" width="500" />
//   </>
// );

// chart js
