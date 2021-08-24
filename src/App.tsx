import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import KumospacePage from "./Pages/KumospacePage";
import ProfilePage from "./Pages/ProfilePage";
import Layout from "./Layout/Layout";
import TodosContextProvider from "./Store/TodosContext";
import "firebase/auth";
import { auth, db } from "./utilities/firebase";
// import Login from "./Components/Login/Login";
// import Register from "./Components/Login/Register";
// import Reset from "./Components/Login/Reset";
// import Dashboard from "./Components/Login/Dashboard";
import { UserContext } from "./Store/UserContext";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./Layout/Navbar";
//
function App() {
  //
  //GET USER INFO FOR USER CONTEXT--> can this be put in its own context file like the Todo list?
  const [user, loading, error] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState({});
  const history = useHistory();
  // name does not exist on 'user' so it needs an async fetch to get it.
  const fetchUserName = async () => {
    try {
      const query = await db.collection("users").where("uid", "==", user?.uid).get();
      const data = await query.docs[0].data();
      setUserProfile({ user, name: data.name, email: user.email, uniqueID: user.uid }); // get user info for the userContext
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    // if (!user) return history.replace("/"); // I think this returns you to home if user does not exist?
    fetchUserName();
  }, []);
  ///
  //Router sits on top so its always visible. Bug where when I refresh the router does not render. think its to to with the Router below that has the login components
  console.log(user ? "Yes" : "NO");
  return (
    <UserContext.Provider value={{ userProfile }}>
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
