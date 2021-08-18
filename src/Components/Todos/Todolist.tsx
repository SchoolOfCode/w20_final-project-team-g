import React, { Fragment, useContext, useState, useEffect } from 'react';
import styles from './Todolist.module.css';
import TodoItem from './TodoItem';
import { TodosContext } from '../../Store/TodosContext';
import TodoClass from '../../Models/TodoClass';

const TodoList: React.FC = () => {
  //const todoCtx = useContext(TodosContext);
  //const [isLoading, setIsLoading] = useState(true);
  const [currentTodos, setCurrentTodos] = useState<TodoClass[]>([]);
  const [newTodoAdded, setNewTodoAdded] = useState(false);

  console.log('current todos are', currentTodos);
  // retrieve todos
  useEffect(() => {
    //setIsLoading(true);
    fetch(
      'https://kaizenpractice-db496-default-rtdb.europe-west1.firebasedatabase.app/currenttodos.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          const newTodo = {
            id: key,
            ...data[key],
          };
          setCurrentTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
          });
        }

        setNewTodoAdded(true)
      });
  }, []);



  return (
    <Fragment>
      <h3>TO DO</h3>
      <ul className={styles.todos}>
        {currentTodos.map((item) => (
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
