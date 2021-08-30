import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import KumospacePage from './Pages/KumospacePage';
import ProfilePage from './Pages/ProfilePage';
import Layout from './Layout/Layout';
import TodosContextProvider from './Store/TodosContext';
import 'firebase/auth';
import { auth, db } from './utilities/firebase';
import { UserContext } from './Store/UserContext';
import PomodoroContextProvider from './Store/PomodoroContext';

function App() {
  //
  //GET USER INFO FOR USER CONTEXT--> can this be put in its own context file like the Todo list?

  //
  const [userProfile, setUserProfile] = useState({});
  const history = useHistory();
  // name does not exist on 'user' so it needs an async fetch to get it.
  // user returns true if someone is logged in
  return (
    <UserContext.Provider value={{ userProfile }}>
      <PomodoroContextProvider>
        <TodosContextProvider>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <HomePage />
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
          </Layout>
        </TodosContextProvider>
      </PomodoroContextProvider>
    </UserContext.Provider>
  );
}

export default App;

// for later
// {
//   !authCtx.isLoggedIn && (
//     <Route path="/auth">
//       <AuthPage />
//     </Route>
//   );
// }
// {
//   authCtx.isLoggedIn && (
//     <Route path="/profile">
//       <UserProfile />
//     </Route>
//   );
// }
