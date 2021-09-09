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
      {/* <img src={kumoSpace} alt="team in kumospace" /> */}
      <iframe
        src="https://www.kumospace.com/adadsfaa"
        height="900"
        width="100%"
        title="kumospace"
      ></iframe>
    </div>
  );
};

export default KumospacePage;
