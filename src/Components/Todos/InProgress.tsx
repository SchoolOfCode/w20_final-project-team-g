import React, { Fragment, useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import { TodoStatus } from '../../Models/TodoClass';

const InProgress: React.FC<{ userFilter?: string }> = (props) => {
  const todoCtx = useContext(TodosContext);

  if (props.userFilter) {
    return (
      <Fragment>
        <h3 className="text-gray-500 tracking-wide font-medium text-2xl mt-4 mb-4">
          In Progress
        </h3>
        <ul className="w-72">
          {todoCtx.items.map(
            (item) =>
              item.status === TodoStatus.inProgress &&
              item.createdBy === props.userFilter && (
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
        </ul>
      </Fragment>
    );
  }

  if (!props.userFilter) {
    return (
      <Fragment>
        <h3 className="text-gray-500 tracking-wide font-medium text-2xl mt-4 mb-4">
          In Progress
        </h3>
        <ul className="w-72">
          {todoCtx.items.map(
            (item) =>
              item.status === TodoStatus.inProgress && (
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
        </ul>
      </Fragment>
    );
  }
};

export default InProgress;
