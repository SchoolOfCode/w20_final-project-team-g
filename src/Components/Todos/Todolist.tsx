import React, { Fragment, useContext, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import { TodoStatus } from '../../Models/TodoClass';
import Modal from '../../Layout/Modal';
import Backdrop from '../../Layout/Backdrop';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';
import styles from './Todolist.module.css';
import { MenuItem, Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

const TodoList: React.FC = () => {
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
    if (e.target.value === 'createdBy') {
      todoCtx.items.sort((a, b) => (b.createdBy > a.createdBy ? -1 : 1));
    }
  };
  useEffect(() => {
    todoCtx.retrieveCurrentTodo();
    // set;
  }, []);
  // todoCtx.items.sort((a, b) => (b.urgency > a.urgency ? -1 : 1));
  return (
    <Fragment>
      <InputLabel id="sort-by-label">Sort By</InputLabel>

      <Select labelId="select-label" id="select-label" value={sortBy} onChange={handleChange}>
        <MenuItem value={'urgency'}>Urgency</MenuItem>
        <MenuItem value={'createdBy'}>Created By</MenuItem>
      </Select>
      {/* <button
        onClick={() => {
          setSorted(todoCtx.items.sort((a, b) => (b.urgency > a.urgency ? -1 : 1)));
        }}
      >
        Sort
      </button> */}
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
