import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2'; // chart js
import firebase from 'firebase';

const DoughnutChart = () => {
  const moodRef = firebase.firestore().collection('moods');
  const [allMoods, setAllMoods] = useState([]);
  const [moodArray, setMoodArray] = useState([]);
  const allMoodsObj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  useEffect(() => {
    fetchAndModifyData();
  }, []);

  const fetchAndModifyData = () => {
    // fetch
    moodRef.onSnapshot((querySnapshot) => {
      const newObj = [];
      querySnapshot.forEach((doc) => {
        newObj.push(doc.data());
      });

      // remove parent key
      const editedObj = removeJSONString(newObj);
      setAllMoods(editedObj);
    });
    // extract all moods
    const allMoodsFromDB = allMoods
      .map((item) => item.mood)
      .sort((a, b) => a - b);

    // create the new mood object
    allMoodsFromDB.forEach(function (item) {
      allMoodsObj[item] = (allMoodsObj[item] || 0) + 1;
    });

    // convert object to array
    let converted = Object.keys(allMoodsObj).map(function (key) {
      return allMoodsObj[key];
    });
    setMoodArray(converted);
    console.log('moodArray inside fetchAndModifyData', moodArray);
    console.log('allMoodsObj after method', allMoodsObj);
  };
  console.log('moodArray outside function', moodArray);

  console.log('moodArray', moodArray);
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

  const data = {
    labels: ['Very Sad', 'Sad', 'Ok', 'Happy', 'Very Happy'], // hover effect
    datasets: [
      {
        label: '# of Votes',
        data: moodArray,

        backgroundColor: [
          'rgba(96, 165, 250, 1)',
          'rgba(167, 139, 250, 1)',
          'rgba(248, 113, 113, 1)',
          '#FCD34D',
          '#34D399',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div>
        <h1 className="title">This Week's Mood</h1>
      </div>
      <Doughnut data={data} />
    </>
  );
};

export default DoughnutChart;
