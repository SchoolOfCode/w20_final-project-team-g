import React, { useContext } from 'react';
import { UserContext } from '../Store/UserContext';
import kumoSpace from '../images/kumoSpace.png';
const KumospacePage = () => {
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1> ID : {uniqueID}</h1>
      <h1>KumospacePage</h1>;
      <div>
        <img src={kumoSpace} alt="team in kumospace" />
      </div>
    </div>
  );
};

export default KumospacePage;
