import { NewTodo } from '../Components/Todos/NewTodo';
import TodoList from '../Components/Todos/Todolist';
import InProgress from '../Components/Todos/InProgress';
import styles from './HomePage.module.css';
import CompletedTodos from '../Components/Todos/CompletedTodos';
import { Fragment, useState, useContext } from 'react';
import { UserContext } from '../Store/UserContext';
import { auth } from '../utilities/firebase';
import { Link, useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory;

  return (
    <Fragment>
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
