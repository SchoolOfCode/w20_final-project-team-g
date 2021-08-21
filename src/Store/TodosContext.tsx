import TodoClass from '../Models/TodoClass';
import React, { useState, useContext } from 'react';
import firebase from '../utilities/firebase';

type TodosContextObj = {
  items: TodoClass[];
  reloadRequired: boolean;
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  startTodo: (id: string) => void; // changes status to "1"
  finishTodo: (id: string) => void; // changes status to "Done"
  retrieveTodo: (todoref: any) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  reloadRequired: false,
  addTodo: () => {},
  removeTodo: (todo: string) => {},
  startTodo: (id: string) => {},
  finishTodo: (id: string) => {},
  retrieveTodo: (todoref: any) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);

  console.log(todos);

  function addTodoHandler(todoText: string) {
    const newTodo = new TodoClass(todoText);
    const todoref = firebase.database().ref('currentTodo');
    todoref.push(newTodo);
    console.log('im being called from context woohoo');

    // todoref.on('value', (snapshot: any) => {
    //   const todos = snapshot.val();

    //   const todolist = [];
    //   for (const key in todos) {
    //     todolist.push(todos[key]);

    //     setTodos(todolist);
    // }
    //});
  }

  function retrieveCurrentTodoHandler(todoref: any) {
    todoref.on('value', (snapshot: any) => {
      const todos = snapshot.val();

      const todolist = [];
      for (const key in todos) {
        todolist.push(todos[key]);

        setTodos(todolist);
      }
    });
  }

  function removeTodoHandler(todosID: string) {
    // to delete from state & firebase
    // setTodos((prev) => {
    //   return prev.filter((todo) => {
    //     // const todoRef = firebase.database().ref('currentTodo').child(todosID);
    //     // todoRef.remove();
    //     return todo.id !== todosID;
    //   });
    // });

    const todoRef = firebase.database().ref('currentTodo').child(todosID);
    todoRef.remove();
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
    retrieveTodo: retrieveCurrentTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;

// const change = new TodoClass(todoId);
// setTodos((prevTodos) => {
//   change.status = 'inprogress';
//   return prevTodos.concat(change);
// });
