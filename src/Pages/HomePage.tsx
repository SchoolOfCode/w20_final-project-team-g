import { NewTodo } from '../Components/Todos/NewTodo';
import TodoList from '../Components/Todos/Todolist';
import InProgress from '../Components/Todos/InProgress';
import styles from './HomePage.module.css';
const HomePage = () => {
  return (
    <div>
      <h1>This is the homepage</h1>
      <NewTodo />

      <div className={styles.flex}>
        <div className={styles.column1}>
          <TodoList />
        </div>
        <div className={styles.column2}>
          <InProgress />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
