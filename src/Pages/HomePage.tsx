import { NewTodo } from '../Components/Todos/NewTodo';
import TodoList from '../Components/Todos/Todolist';
import InProgress from '../Components/Todos/InProgress';
import styles from './HomePage.module.css';
import CompletedTodos from '../Components/Todos/CompletedTodos';
import { Fragment, useState } from 'react';
import Modal from '../Layout/Modal';
import Backdrop from '../Layout/Backdrop';
import CardWrapper from '../Layout/CardWrapper';

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function startTaskHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <Fragment>
      <div>
        <CardWrapper>
          <button onClick={startTaskHandler}>START TIMER</button>
        </CardWrapper>

        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>

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
