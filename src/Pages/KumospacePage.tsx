import React, { useEffect, useState, useContext } from 'react';

import MoodChart from '../Components/Moodtracker/MoodChart';
import Moodtracker from '../Components/Moodtracker/Moodtracker';
import { UserContext } from '../Store/UserContext';

const KumospacePage = () => {
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);
  // const { name, email, uniqueID } = userProfile
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1> ID : {uniqueID}</h1>
      <h1>KumospacePage</h1>;<div>{/* <Moodtracker /> */}</div>
      <div>
        <MoodChart />
      </div>
    </div>
  );
};

export default KumospacePage;
