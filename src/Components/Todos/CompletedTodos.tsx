import React, { Fragment, useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import { TodoStatus } from '../../Models/TodoClass';

const CompletedTodos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <Fragment>
      <h3 className="text-gray-500 tracking-wide font-medium text-2xl mt-4 mb-4">Complete</h3>
      <ul className="w-72">
        {todoCtx.items.map(
          (item) =>
            item.status === TodoStatus.done && (
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
};

export default CompletedTodos;
