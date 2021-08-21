import TodoClass from '../Models/TodoClass';
import React, { useState, useContext } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import firebase from '../utilities/firebase';

type TodosContextObj = {
  items: TodoClass[];
  reloadRequired: boolean;
  addTodo: (text: string) => void;
  removeTodo: (selectedTodo: TodoClass) => void;
  startTodo: (id: string) => void; // changes status to "1"
  finishTodo: (id: string) => void; // changes status to "Done"
  retrieveTodo: () => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  reloadRequired: false,
  addTodo: () => {},
  removeTodo: (selectedTodo: TodoClass) => {},
  startTodo: (id: string) => {},
  finishTodo: (id: string) => {},
  retrieveTodo: () => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const ref = firebase.firestore().collection('todos');

  function addTodoHandler(newTodoInput: string) {
    const newTodo = new TodoClass(newTodoInput);
    ref
      .doc(newTodo.id)
      .set(Object.assign({}, newTodo))
      .catch((err) => {
        console.log(err);
      });
  }

  function retrieveCurrentTodoHandler() {
    setIsLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTodos(items);
      setIsLoading(false);
    });
  }

  function removeTodoHandler(selectedTodo: TodoClass) {

    ref
      .doc(selectedTodo.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
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
