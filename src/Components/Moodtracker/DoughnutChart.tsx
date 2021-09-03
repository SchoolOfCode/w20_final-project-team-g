import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2'; // chart js
import firebase from 'firebase';
// import 'rxjs/add/operator/map';

const DoughnutChart = () => {
  const moodRef = firebase.firestore().collection('moods');
  // const [allMoods, setAllMoods] = useState([]);
  // const [moodArrayNumbers, setMoodArrayNumbers] = useState([]);
  // const [moodOccurencesObj, setMoodOccurencesObj] = useState([]);
  const [moodArrayData, setMoodArrayData] = useState(null);
  // const allMoodsObj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  useEffect(() => {
    const getMoodData = async () => {
      const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0); // funciton to count each occurence of a number in database
      //.map does not work in objects in TS? so pushing all items to an empty array first (unless we specify type in TS??)
      let fetchedMoodsNumbersOnly = [];
      let fetchedMoodsAllData = [];
      const data: any = await moodRef.get();
      data.forEach((doc) => {
        //Only mapping the 'mood' NUMBER to fetchedMoods.
        //I tried converting the data to numbers to fix the pie chart issue but it didnt work so Number() could be removed?
        fetchedMoodsNumbersOnly.push(Number(doc.data().moodData.mood));
        //All data in an array if we want to use other data in future
        fetchedMoodsAllData.push(doc.data().moodData);
      });
      // const sortedMoods = fetchedMoodsNumbersOnly.sort((a, b) => a - b); // not using this state
      // setMoodArrayNumbers(sortedMoods); not usin this state
      const num1Ocs = countOccurrences(fetchedMoodsNumbersOnly, 1);
      const num2Ocs = countOccurrences(fetchedMoodsNumbersOnly, 2);
      const num3Ocs = countOccurrences(fetchedMoodsNumbersOnly, 3);
      const num4Ocs = countOccurrences(fetchedMoodsNumbersOnly, 4);
      const num5Ocs = countOccurrences(fetchedMoodsNumbersOnly, 5);
      setMoodArrayData([num1Ocs, num2Ocs, num3Ocs, num4Ocs, num5Ocs]);
      console.log(moodArrayData);
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
        data: moodArrayData,

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
