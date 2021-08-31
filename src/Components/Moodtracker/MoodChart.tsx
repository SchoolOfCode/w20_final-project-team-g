import Chart from 'react-apexcharts';
import { useState } from 'react';
import React from 'react';
import { db } from '../../utilities/firebase';
import firebase from '../../utilities/firebase';

import { DUMMY_DATA } from './Moodtracker';
import { useEffect } from 'react';

const MoodChart = () => {
  const [mood, setMood] = useState({});
  const moodRef = firebase.firestore().collection('moods');

  useEffect(() => {
    moodRef.onSnapshot((querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log("items are", items);
      });

      
    });
  }, []);

  
  // 3 for each mood entry, remove duplicate hour value but combine their score values
  const distinctHours = DUMMY_DATA.reduce(
    (distinctHours, { day, time, mood }) => {
      const distinct = distinctHours[time];
      const current = distinct || { day, time, mood: +mood };

      if (distinct) current.mood = distinct.mood + +mood; // adds up all the moods

      return Object.assign(distinctHours, { [time]: current }); // new object
    },
    {}
  );



  // plot chart
  const series = [
    {
      name: 'mood',
      data: 0, // put emoji here
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
      categories: 0, // time of day
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

