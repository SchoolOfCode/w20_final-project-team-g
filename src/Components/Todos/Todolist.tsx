import React, { Fragment, useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import { TodoStatus } from '../../Models/TodoClass';
import Modal from '../../Layout/Modal';
import Backdrop from '../../Layout/Backdrop';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';
import styles from "./Todolist.module.css";

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
      <h3>Backlog</h3>
      <ul className="w-72">
        {todoCtx.items &&
          todoCtx.items.map(
            (item) =>
              item.status === TodoStatus.todo && (
                <TodoItem
                  urgency={item.urgency}
                  key={item.id}
                  text={item.todoTitle}
                  createdBy={item.createdBy}
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
