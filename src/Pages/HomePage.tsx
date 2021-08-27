import { NewTodo } from '../Components/Todos/NewTodo';
import TodoList from '../Components/Todos/Todolist';
import InProgress from '../Components/Todos/InProgress';
import styles from './HomePage.module.css';
import CompletedTodos from '../Components/Todos/CompletedTodos';
import { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
      <NewTodo />

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
