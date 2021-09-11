// import Login from "../Components/Login/Login";
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { UserContext } from '../Store/UserContext';
import { auth, db } from '../utilities/firebase';
import MoodChart from '../Components/Moodtracker/MoodChart';
import DoughnutChart from '../Components/Moodtracker/DoughnutChart';
import styles from './HomePage.module.css';
import Moodtracker from '../Components/Moodtracker/Moodtracker';
import Loading from '../Components/Loading/Loading';
const Profile = () => {
  const history = useHistory();
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);
  return (
    <div className="">
      {/* <h1>PROFILE PAGE</h1>
      <h1>Hello {name}</h1>
      <h2>Your logged in email is: {email}</h2>
      <h2>Your ID is: {uniqueID}</h2> */}
      <div className={styles.flex}>
        <div className={styles.colum}>
          <MoodChart />
        </div>
        <div className={styles.colum}>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default Profile;
