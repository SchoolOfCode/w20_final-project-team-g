//  import { DUMMY_DATA } from "./Moodtracker";

// //   // current object in the original array is destructured immediately ({ date, hour, score }) so we can work with the values directly.
// // const distinctHours = DUMMY_DATA.reduce(
// //     (specificHour, { day, time, mood }) => {
// //     const distinctHour = specificHour[time];  // dont understand 

// //     //If distinctHour exists it will be nicknamed currentIteration, otherwise currentIteration will become an object with the day, time, and mood
// //     const currentIteration = distinctHour || { day, time, moods: [+mood] }; // either undefined or an object 
    
// //     // if distinctHour is true will sum mood with currentIteration.mood  and push to array (otherwise just returns the updated distinctHours object.
// //     if (distinctHour) currentIteration.mood = distinctHour.moods.push(+mood); // if [time] property exists add up all the moods and push them to the array

// //     // return the distinctHour object after updating it with the summed score for the current hour.
// //       return Object.assign(specificHour, { [time]: current });
// //     },
// //     {}
// // );
  
// //   const avgMoodForEachHour = Object.values(specificHour).map(
// //     ({ day, time, moods }) => ({
// //       day,
// //       time,
// //       mood: moods.reduce((a, b) => a + b) / moods.length,
// //     })
// //   );

//  // nadeem

// let results;
//  function computeAverage(data) {
//    for (let eachObj of data) {
//      let time = eachObj.time;
//      let day = eachObj.day;
//      let currentMood = +eachObj.mood;

//        if (!results[time]) {
//          // if results doesnt have this time put it up and create it
//          results[time] = {
//            totalMood: 0,
//            numOccurrances: 0,
//            average: 0,
//          };
//        }

//        results[time].totalMood = results[time].totalMood + currentMood; // all moods added up // dont fully understand
//        results[time].numOccurrances = results[time].numOccurrances + 1; // log and increment no. of times the same [time] value is shown
//        console.log(results[time]);

//        let average = results[time].totalMood / results[time].numOccurrances;
//        results[time].average = average;
//      }

//      return { day: day, mood: results[time].average, time: time };

//    }
 

//  // Jordan
// let HoursInTheDay = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   22, 23,
// ];
// let ObjectOfDaysAndMood = [];
// HoursInTheDay.forEach((hour) => {
//   let exactDayFromFireBase = '';
//   let savedToatalMood = 0;
//   let ObjsWithSameTime = 0;
//   DUMMY_DATA.forEach((dummyObj) => {
//     if (hour === dummyObj.time) {
//       ObjsWithSameTime += 1;
//       savedToatalMood += parseInt(dummyObj.mood);
//     }
//     exactDayFromFireBase = dummyObj.day;
//   });
//   ObjectOfDaysAndMood.push({
//     hourOfDay: hour,
//     reducedMood: savedToatalMood / ObjsWithSameTime,
//     exactDay: exactDayFromFireBase,
//   });

//   // console.log( "the hour is set to "+hour+ "and the toatal mood is"+savedToatalMood+ "and the a")
//   // console.log("amount of all same time divided by the mood toatal =  "+savedToatalMood/ObjsWithSameTime)
// });
// console.log(ObjectOfDaysAndMood);

// xport const DUMMY_DATA = [
//   {
//     day: 'Mon Aug 30',
//     time: 13,
//     mood: '1',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 13,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 13,
//     mood: '1',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 13,
//     mood: '2',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 13,
//     mood: '4',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 13,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '2',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '2',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '2',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '1',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '1',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '1',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '4',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 17,
//     mood: '2',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 15,
//     mood: '1',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 15,
//     mood: '2',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 15,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 15,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 15,
//     mood: '2',
//   },
// ];

// export const DUMMY_DATA = [
//   {
//     day: 'Sun Aug 29',
//     time: 13,
//     mood: '3',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 13,
//     mood: '1',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 13,
//     mood: '2',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '5',
//   },
//   {
//     day: 'Sun Aug 29',
//     time: 16,
//     mood: '1',
//   },
// ];
