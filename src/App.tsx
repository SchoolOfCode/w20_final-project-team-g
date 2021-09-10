import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { Suspense } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import TodosContextProvider from './Store/TodosContext';
import 'firebase/auth';
import { auth, db } from './utilities/firebase';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Reset from './Components/Login/Reset';
import { UserContext } from './Store/UserContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import PomodoroContextProvider from './Store/PomodoroContext';

import Loading from './Components/Loading/Loading';
const MyTasksPage = React.lazy(() => import('./Pages/MyTasksPage'));
const KumospacePage = React.lazy(() => import('./Pages/KumospacePage'));
const ProfilePage = React.lazy(() => import('./Pages/ProfilePage'));
const TeamBoardPage = React.lazy(() => import('./Pages/TeamBoardPage'));

function App() {
  //
  //GET USER INFO FOR USER CONTEXT--> can this be put in its own context file like the Todo list?
  const [user, loading, error] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState({});
  const history = useHistory();

  // name does not exist on 'user' so it needs an async fetch to get it.
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection('users')
        .where('uid', '==', user?.uid)
        .get();
      const data = await query.docs[0].data();
      setUserProfile({
        name: data.name,
        email: user.email,
        uniqueID: user.uid,
      }); // get user info for the userContext
    } catch (err) {
      console.error(err);
      console.log('An error occured while fetching user data');
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace('/login'); // Send you to register rather than home if no user is logged n
    fetchUserName();
  }, [user, loading]);

  console.log(user ? 'Yes logged in' : 'No user logged in'); // user returns true if someone is logged in
  return (
    <UserContext.Provider value={{ userProfile }}>
      <PomodoroContextProvider>
        <TodosContextProvider>
          <Layout>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/passwordreset" exact>
                  <Reset />
                </Route>
                <Route path="/register" exact>
                  <Register />
                </Route>
                <Route path="/" exact>
                  <TeamBoardPage />
                </Route>
                <Route path="/mytasks" exact>
                  <MyTasksPage />
                </Route>
                <Route path="/profile" exact>
                  <ProfilePage />
                </Route>
                <Route path="/kumospace" exact>
                  <KumospacePage />
                </Route>
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              </Switch>
            </Suspense>
          </Layout>
        </TodosContextProvider>
      </PomodoroContextProvider>
    </UserContext.Provider>
  );
}

export default App;
