import React, { useContext } from 'react';
import { UserContext } from '../Store/UserContext';
import kumoSpace from '../images/kumoSpace.png';
const KumospacePage = () => {
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);
  console.log(name);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <img src={kumoSpace} alt="team in kumospace" /> */}
      <iframe
        src="https://www.kumospace.com/kaizensocial"
        height="820"
        width="95%"
        frameBorder="0"
        title="kumospace"
        allow="camera;microphone"
        style={{ border: '3px solid lightblue', margin: '20px' }}
        // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      ></iframe>
      {Error && alert('Please enable cookies to gain access to Kumospace 🍪')}
    </div>
  );
};

export default KumospacePage;
