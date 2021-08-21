import React, { Fragment, useContext, useEffect } from 'react';
import styles from './Todolist.module.css';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';

const CompletedTodos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  // let change = todoCtx.items.map((item) => {
  //   return item.status === 1;
  // });
  // useEffect(() => {
  //   console.log('InProgress useEffect rerun due to status change');
  //   // todoCtx.retrieveTodo();
  //   // console.log(todoCtx.items);
  // }, [change]);

  return (
    <Fragment>
      <h3>DONE </h3>
      <ul className={styles.todos}>
        {todoCtx.items.map((item) =>
          item.status === 2 ? (
            <TodoItem
              key={item.id}
              text={item.todoTitle}
              onFinish={todoCtx.finishTodo.bind(null, item)}
            >
              {item.todoTitle}
            </TodoItem>
          ) : (
            <h4 key={item.id}>Nothing completed</h4>
          )
        )}
      </ul>
    </Fragment>
  );
};

export default CompletedTodos;

