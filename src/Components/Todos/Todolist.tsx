import React, { Fragment, useContext, useEffect } from 'react';
import styles from './Todolist.module.css';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import { TodoStatus } from '../../Models/TodoClass';
import Modal from '../../Layout/Modal';
import Backdrop from '../../Layout/Backdrop';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  useEffect(() => {
    todoCtx.retrieveCurrentTodo();
  }, []);

  return (
    <Fragment>
      <h3>TO DO</h3>
      <ul className={styles.todos}>
        {todoCtx.items &&
          todoCtx.items.map(
            (item) =>
              item.status === TodoStatus.todo && (
                <TodoItem
                  key={item.id}
                  text={item.todoTitle}
                  onStartTodo={todoCtx.startTodo.bind(null, item)}
                  onFinish={todoCtx.finishTodo.bind(null, item)}
                  onRemoveTodo={todoCtx.removeTodo.bind(null, item)}
                >
                  {item.todoTitle}
                </TodoItem>
              )
          )}

        {todoCtx.modal && (
          <Modal>
            <PomodoroTimer />
          </Modal>
        )}

        {todoCtx.modal && <Backdrop onCancel={closeModalHandler} />}
      </ul>
    </Fragment>
  );
};

export default TodoList;
