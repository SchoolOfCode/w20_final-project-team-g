import React, { useEffect, useState, useContext } from 'react';
import Moodtracker from '../Components/Moodtracker/Moodtracker';

import { UserContext } from '../Store/UserContext';

const KumospacePage = () => {
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);
  // const { name, email, uniqueID } = userProfile
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1> ID : {uniqueID}</h1>
      <h1>KumospacePage</h1>
      <div>
        <Moodtracker />
      </div>
    </div>
  );
};

export default KumospacePage;
