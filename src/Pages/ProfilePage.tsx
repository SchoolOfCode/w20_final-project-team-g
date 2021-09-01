// import Login from "../Components/Login/Login";
import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import styles from './HomePage.module.css'
import MoodChart from '../Components/Moodtracker/MoodChart';
import { UserContext } from '../Store/UserContext';
import { auth, db } from '../utilities/firebase';
import { PieChart } from 'recharts';
import Example from '../Components/Moodtracker/Example';
const Profile = () => {
  const history = useHistory();
  // instead of fetching below I am using useContext.
  // const fetchUserName = async () => {
  //   try {
  //     const query = await db.collection("users").where("uid", "==", user?.uid).get();
  //     const data = await query.docs[0].data();
  //     setName(data.name);
  //     setEmail(user.email);
  //     setUniqueID(user.uid);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };
  // useEffect(() => {
  //   // if (loading) return;
  //   // if (!user) return history.replace("/");
  //   // fetchUserName();
  // }, []);
  return (
    <div className={styles.flex}>
      <div className={styles.colum1}>
        <MoodChart />
      </div>
      <div className={styles.colum1}>
        <Example />
      </div>
    </div>
  );
};

export default Profile;
