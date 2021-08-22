import React, { Fragment, useContext, useEffect } from 'react';
import styles from './Todolist.module.css';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import { TodoStatus } from '../../Models/TodoClass';

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  useEffect(() => {
    // const todoref = firebase.database().ref('currentTodo');
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
      </ul>
    </Fragment>
  );
};

export default TodoList;
