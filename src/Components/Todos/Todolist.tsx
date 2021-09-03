import React, { Fragment, useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import { TodoStatus } from '../../Models/TodoClass';
import Modal from '../../Layout/Modal';
import Backdrop from '../../Layout/Backdrop';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';
import styles from './Todolist.module.css';

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  useEffect(() => {
    todoCtx.retrieveCurrentTodo();
  }, []);
  todoCtx.items.sort((a, b) => (b.urgency > a.urgency ? -1 : 1));
  return (
    <Fragment>
      <h3 className="text-gray-500 tracking-wide font-medium text-2xl mt-4 mb-4">Backlog</h3>
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
                  todoBody={item.todoBody}
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
