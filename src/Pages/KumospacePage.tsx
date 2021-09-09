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
        src="https://www.kumospace.com/kaizensocial"
        height="800"
        width="100%"
        frameBorder="0"
        title="kumospace"
        // scrolling="no"
        style={{ display: 'flex' }}
      ></iframe>
    </div>
  );
};

export default KumospacePage;
