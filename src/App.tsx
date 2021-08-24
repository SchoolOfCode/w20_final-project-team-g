import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import KumospacePage from './Pages/KumospacePage';
import ProfilePage from './Pages/ProfilePage';
import Layout from './Layout/Layout';
import TodosContextProvider from './Store/TodosContext';
import PomodoroContextProvider from './Store/PomodoroContext';

function App() {
  return (
    <PomodoroContextProvider>
      <TodosContextProvider>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/kumospace" exact>
              <KumospacePage />
            </Route>
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
      </TodosContextProvider>
    </PomodoroContextProvider>
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
