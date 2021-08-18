import React, { useContext, Fragment } from 'react';
import styles from './Todolist.module.css';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';

const InProgress: React.FC = (props) => {
  const todoCtx = useContext(TodosContext);

  return (
      <Fragment>
          <h3>In Progress</h3>
      <ul className={styles.todos}>
        {todoCtx.items.map((item) => (
          //   item.status === 'todo' && (
          <TodoItem
            key={item.id}
            text={item.todoTitle}
            //onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
            // add onstart to move to
          >
            {item.todoTitle}
          </TodoItem>
        ))}
        ;
      </ul>
    </Fragment>
  );
};

export default InProgress;

//
