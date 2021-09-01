import React, { useCallback, useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import firebase from 'firebase';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

//const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

// Kates colours 
const COLORS = [
  'rgba(96, 165, 250, 1)',
  'rgba(167, 139, 250, 1)',
  'rgba(248, 113, 113, 1)',
  '#FCD34D',
  '#34D399',
];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Example() {
const moodRef = firebase.firestore().collection('moods');

const [weeklyMoods, setWeeklyMoods] = useState();

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

    setWeeklyMoods(editedObj);
  });
};

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

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
