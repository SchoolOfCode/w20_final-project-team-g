// // filter today's mood via system date; 1- get system date
// let day = String(new Date());
// let split = day.split(' ');
// let splice = split.splice(0, 3);
// let userSystemDate = splice.join(' ');

// // 2 compare and get array matching today's date (currently ! since no data for Monday)
// let todaysData = DUMMY_DATA.filter((data) => data.day !== userSystemDate);

  // const averageMoodToday = Object.values(distinctHours).map((object) =>
  //   Object.assign(object, { mood: object.mood / todaysData.length })
  // );

  //console.log(distinctHours);
  //console.log('average is:', averageMoodToday);

  // console.log('distinct hours are', distinctHours);
  //   {
  //     "day": "Mon Aug 30",
  //     "time": 13,
  //     "mood": 16
  // }


  // 4

// function removeRepitiveVals(array: number[]) {
//   var newarray = [],
//     keys = {};
//   for (var i in array) {
//     if (!keys[array[i]]) {
//       newarray.push(array[i]);
//       keys[array[i]] = true;
//     }
//   }
//   return newarray;
// }
