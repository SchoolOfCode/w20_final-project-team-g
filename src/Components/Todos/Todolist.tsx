import React, { Fragment, useContext, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import { TodoStatus } from '../../Models/TodoClass';
import Modal from '../../Layout/Modal';
import Backdrop from '../../Layout/Backdrop';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';
import { MenuItem, Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

const TodoList: React.FC<{ userFilter?: string }> = ({
  children,
  userFilter,
}) => {
  const todoCtx = useContext(TodosContext);
  const [sortBy, setSortBy] = useState('Urgency');

  function closeModalHandler() {
    todoCtx.closeModal();
  }
  const handleChange = (e) => {
    console.log(e.target.value);
    setSortBy(e.target.value);
    if (e.target.value === 'urgency') {
      todoCtx.items.sort((a, b) => (b.urgency > a.urgency ? -1 : 1));
    }
  };
  useEffect(() => {
    todoCtx.retrieveCurrentTodo();
    // set;
  }, []);
  todoCtx.items.sort((a, b) => (b.urgency > a.urgency ? -1 : 1));

  if (userFilter) {
    return (
      <Fragment>
        <h3 className="text-gray-500 tracking-wide font-medium text-2xl mt-4 mb-4">
          My todos
        </h3>
        <ul className="w-72">
          {todoCtx.items.map(
            (item) =>
              item.status === TodoStatus.todo &&
              item.createdBy === userFilter && (
                <TodoItem
                  createdBy={item.createdBy}
                  key={item.id}
                  text={item.todoTitle}
                  todoBody={item.todoBody}
                  urgency={item.urgency}
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
  }

  if (!userFilter) {
    return (
      <Fragment>
        <h3 className="text-gray-500 tracking-wide font-medium text-2xl mt-4 mb-4">
          Team Todos
        </h3>
        <ul className="w-72">
          {todoCtx.items.map(
            (item) =>
              item.status === TodoStatus.todo && (
                <TodoItem
                  createdBy={item.createdBy}
                  key={item.id}
                  text={item.todoTitle}
                  todoBody={item.todoBody}
                  urgency={item.urgency}
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
  }
};

export default TodoList;
