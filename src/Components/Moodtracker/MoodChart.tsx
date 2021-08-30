import Chart from 'react-apexcharts';
import { useState } from 'react';
import React from 'react';
import { DUMMY_DATA } from './Moodtracker';
const MoodChart = () => {
  const [mood, setMood] = useState({});

  // filter today's mood via system date
  //1- get system date
  let day = String(new Date());
  let split = day.split(' ');
  let splice = split.splice(0, 3);
  let userSystemDate = splice.join(' ');
  console.log("today's date is", userSystemDate);

  // 2 compare and get array matching today's date (currently ! since no data for Monday)
  let todaysData = DUMMY_DATA.filter((data) => data.day !== userSystemDate);

  // 3 for each object, get average mood score & attach it to each hour
  // todaysData.forEach((obj) => {
  //   let averageMood = +obj.mood;
  //   let calc =
  //     averageMood.reduce((total, count) => total + count.mood, 0) /
  //     todaysData.length;
  // });

  const averageMoodToday =
    todaysData.reduce((total, count) => total + +count.mood, 0) /
    todaysData.length;
  console.log('average is:', averageMoodToday)

  // 4
  let moodCollection = DUMMY_DATA.map((data) => data.mood);
  let timeCollection = DUMMY_DATA.map((data) => data.time);
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

  let workTimeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
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
