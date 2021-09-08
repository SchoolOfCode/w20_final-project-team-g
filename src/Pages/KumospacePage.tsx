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
      <img src={kumoSpace} alt="team in kumospace" />
    </div>
  );
};

export default KumospacePage;
