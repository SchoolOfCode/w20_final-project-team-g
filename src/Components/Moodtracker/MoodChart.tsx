import Chart from 'react-apexcharts';
import { useState } from 'react';
import React from 'react';
import { DUMMY_DATA } from './Moodtracker';
const MoodChart = () => {
  const [mood, setMood] = useState({});

  // // to get today's mood
  // let today = DUMMY_DATA.filter((data) => data.day === userSystemDate);

  let moodCollection = DUMMY_DATA.map((data) => data.mood && data.time);
  let timeCollection = DUMMY_DATA.map((data) => data.time);
  console.log(timeCollection)
  console.log(moodCollection);
  function removeRepitiveVals(array: number[]) {
    var newarray = [],
      keys = {};
    for (var i in array) {
      if (!keys[array[i]]) {
        newarray.push(array[i]);
        keys[array[i]] = true;
      }
    }
    return newarray;
  }

  let workTimeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  let filteredTimeCollectiom = removeRepitiveVals(timeCollection);
  console.log('new time collection is', filteredTimeCollectiom);

  const series = [
    {
      name: 'mood',
      data: moodCollection, // put emoji here
    },
  ];
  const options = {
    chart: {
      id: 'line',
      stroke: {
        curve: 'smooth',
      },
    },
    xaxis: {
      categories: workTimeArray, // time of day
    },
  };

  return (
    <div>
      <div>This is the chart </div>
      <Chart options={options} series={series} type="line" width="500" />
    </div>
  );
};

export default MoodChart;
