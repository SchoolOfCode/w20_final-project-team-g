import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2'; // chart js
import firebase from 'firebase';

const DoughnutChart = () => {
  const moodRef = firebase.firestore().collection('moods');
  const [moodArrayData, setMoodArrayData] = useState(null);

  // useEffect(() => {
  //   const getMoodData = async () => {
  //     // function to count each occurence of a number in databases
  //     const countOccurrences = (arr, val) =>
  //       arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  //     let fetchedMoodsNumbersOnly = [];
  //     const data: any = await moodRef.get();
  //     data.forEach((doc) => {
  //       //Only mapping the 'mood' NUMBER to fetchedMoods.
  //       fetchedMoodsNumbersOnly.push(Number(doc.data().moodData.mood));
  //       console.log('fetchedMoodsNumbersOnly', fetchedMoodsNumbersOnly);
  //     });
  //     // get number of occurances for each mood (1-5)
  //     const num1Ocs = countOccurrences(fetchedMoodsNumbersOnly, 1);
  //     console.log(num1Ocs);
  //     const num2Ocs = countOccurrences(fetchedMoodsNumbersOnly, 2);
  //     const num3Ocs = countOccurrences(fetchedMoodsNumbersOnly, 3);
  //     const num4Ocs = countOccurrences(fetchedMoodsNumbersOnly, 4);
  //     const num5Ocs = countOccurrences(fetchedMoodsNumbersOnly, 5);
  //     console.log(num5Ocs);

  //     setMoodArrayData([num1Ocs, num2Ocs, num3Ocs, num4Ocs, num5Ocs]);
  //   };

  //   getMoodData();
  // }, []);

  const data = {
    labels: ['1 Very Sad', '2 Sad', '3 Ok', '4 Happy', '5 Very Happy'], // hover effect
    datasets: [
      {
        label: '# of Votes',
        data: [5,4,7,8,6], //moodArrayData,

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
        <h1 className="text-gray-500 tracking-wide font-medium text-2xl mt-8 mb-14">This Week's Mood</h1>
      </div>
      <Doughnut data={data} />
    </>
  );
};

export default DoughnutChart;
