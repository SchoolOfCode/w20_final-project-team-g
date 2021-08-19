import React, { Fragment, useContext, useEffect } from 'react';
import styles from './Todolist.module.css';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import firebase from '../../utilities/firebase';

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  useEffect(() => {
    const todoref = firebase.database().ref('currentTodo');
    todoCtx.retrieveTodo(todoref);
  }, []);

  return (
    <Fragment>
      <h3>TO DO</h3>
      <ul className={styles.todos}>
        {todoCtx.items &&
          todoCtx.items.map((item) => (
            <TodoItem
              key={item.id}
              text={item.todoTitle}
              //onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
              // add onstart to move to
            >
              {item.todoTitle}
            </TodoItem>
          ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
