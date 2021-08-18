import TodoClass from '../Models/TodoClass';
import React, { useState, useContext } from 'react';

type TodosContextObj = {
  items: TodoClass[];
  reloadRequired: boolean;
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  startTodo: (id: string) => void; // changes status to "1"
  finishTodo: (id: string) => void; // changes status to "Done"
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  reloadRequired: false,
  addTodo: () => {},
  removeTodo: (id: string) => {},
  startTodo: (id: string) => {},
  finishTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);

  console.log(todos);

  function addTodoHandler(todoText: string) {
    const newTodo = new TodoClass(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });

    // send to firebase
  }

  function removeTodoHandler(todoId: string) {
    // setTodos((prevTodos) => {
    //   return prevTodos.filter((todo) => todo.id !== todoId);
    // });
    const change = new TodoClass(todoId);
    setTodos((prevTodos) => {
      change.status = 'inprogress';
      return prevTodos.concat(change);
    });
    //       const o = setTodos((todoId) => {
    //       return todos.map((todo => todo.status = "hi");
    //       });

    // console.log('changed status:', InProgressTodos);
  }

  function startTodoHandler(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.status === 'in_progress');
    });
  }

  function finishTodoHandler(todoId: string) {
    //change status here to "done"
    // setTodos((prevTodos) => {
    //     return prevTodos.filter((todo) => todo.id === todoId) { todo.status === 'done' } });
    // });
  }

  const contextValue: TodosContextObj = {
    items: todos,
    reloadRequired: false,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    startTodo: startTodoHandler,
    finishTodo: finishTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
