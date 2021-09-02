import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2'; // chart js
import firebase from 'firebase';
// import 'rxjs/add/operator/map';

const DoughnutChart = () => {
  const moodRef = firebase.firestore().collection('moods');
  // const [allMoods, setAllMoods] = useState([]);
  const [moodArrayNumbers, setMoodArrayNumbers] = useState([]);
  const [moodArrayData, setMoodArrayData] = useState(null);
  const allMoodsObj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  useEffect(() => {
    const getMoodData = async () => {
      let fetchedMoodsNumbersOnly = [];
      let fetchedMoodsAllData = [];
      const data: any = await moodRef.get();
      data.forEach((doc) => {
        //Only mapping the 'mood' NUMBER to fetchedMoods.
        fetchedMoodsNumbersOnly.push(Number(doc.data().moodData.mood));
        //All data in an array if we want to use other data in future
        fetchedMoodsAllData.push(doc.data().moodData);
      });
      const sortedMoods = fetchedMoodsNumbersOnly.sort((a, b) => a - b);
      setMoodArrayNumbers(sortedMoods);
      console.log(moodArrayNumbers);
    };
    getMoodData();
    // console.log(moodArray);
    // const allMoodsFromDB = mjMoodArray.map((item) => item.moodData.mood).sort((a, b) => a - b);

    // console.log(mjMoodArray[0].moodData.mood); // <== just get mood example
  }, []);

  // const fetchAndModifyData = () => {
  // fetch
  // moodRef.onSnapshot((querySnapshot) => {
  //   const newObj = [];
  //   querySnapshot.forEach((doc) => {
  //     newObj.push(doc.data());
  //   });
  //   // remove parent key
  //   const editedObj = removeJSONString(newObj);
  //   setAllMoods(editedObj);
  // });
  // extract all moods
  // console.log(allMoodsFromDB);
  // create the new mood object
  // allMoodsFromDB.forEach(function (item) {
  //   allMoodsObj[item] = (allMoodsObj[item] || 0) + 1;
  // });
  // convert object to array
  // let converted = Object.keys(allMoodsObj).map(function (key) {
  //   return allMoodsObj[key];
  // });
  // console.log('NEW MOOD ARRAY FROM ASYNC: ' + moodArray);
  // console.log(moodArray);
  // console.log('moodArray inside fetchAndModifyData', moodArray);
  // console.log('allMoodsObj after method', allMoodsObj);
  // };
  // console.log('moodArray outside function', moodArray);

  // console.log('moodArray', moodArray);
  // function removeJSONString(obj) {
  //   // store all keys of this object for later use
  //   let keys = Object.keys(obj);
  //   // for each key update the "json" key
  //   keys.map((key) => {
  //     // updates only if it has "json"
  //     if (obj[key].hasOwnProperty('moodData')) {
  //       // assign the current obj a new field with "json" value pair
  //       Object.assign(obj[key], obj[key]['moodData']);
  //       // delete "json" key from this object
  //       delete obj[key]['moodData'];
  //     }
  //   });
  //   // updated all fields of obj
  //   return obj;
  // }

  const data = {
    labels: ['Very Sad', 'Sad', 'Ok', 'Happy', 'Very Happy'], // hover effect
    datasets: [
      {
        label: '# of Votes',
        data: moodArrayNumbers,

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
