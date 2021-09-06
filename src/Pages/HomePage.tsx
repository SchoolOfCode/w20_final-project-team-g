import { NewTodo } from '../Components/Todos/NewTodo';
import TodoList from '../Components/Todos/Todolist';
import InProgress from '../Components/Todos/InProgress';
import styles from './HomePage.module.css';
import CompletedTodos from '../Components/Todos/CompletedTodos';
import { Fragment, useState, useContext } from 'react';
import { UserContext } from '../Store/UserContext';
import { auth } from '../utilities/firebase';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

const HomePage = () => {
  const history = useHistory;
  const [user, loading, error] = useAuthState(auth);
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);
  if (!user) {
    return (
      <div
        style={{
          padding: '50px',
          height: '100%',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          // alignContent: 'center',
        }}
      >
        <CircularProgress></CircularProgress>
      </div>
    );
  }
  return (
    <Fragment>
      {/* RICK SAYS BYE */}
      <div className={styles.flex}>
        <div className={styles.column}>
          <TodoList />
        </div>
        <div className={styles.column}>
          <InProgress />
        </div>
        <div className={styles.column}>
          <CompletedTodos />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
