import TodoClass from '../Models/TodoClass';
import React, { useState, useContext } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import firebase from '../utilities/firebase';

type TodosContextObj = {
  items: TodoClass[];
  reloadRequired: boolean;
  addTodo: (text: string) => void;
  removeTodo: (selectedTodo: TodoClass) => void;
  startTodo: (selectedTodo: TodoClass) => void; // changes status to "1"
  finishTodo: (selectedTodo: TodoClass) => void; // changes status to "Done"
  retrieveCurrentTodo: () => void;
  // retrieveInProgressTodo: () => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  reloadRequired: false,
  addTodo: () => {},
  removeTodo: (selectedTodo: TodoClass) => {},
  startTodo: (selectedTodo: TodoClass) => {},
  finishTodo: (selectedTodo: TodoClass) => {},
  retrieveCurrentTodo: () => {},
  // retrieveInProgressTodo: () => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const newTodoRef = firebase.firestore().collection('todos');

  console.log('ALL TODO STATE', todos);
  function addTodoHandler(newTodoInput: string) {
    const newTodo = new TodoClass(newTodoInput);
    newTodoRef
      .doc(newTodo.id)
      .set(Object.assign({}, newTodo))
      .catch((err) => {
        console.log(err);
      });
  }

  // all good
  function retrieveCurrentTodoHandler() {
    setIsLoading(true);
    newTodoRef.onSnapshot((querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTodos(items);
      setIsLoading(false);
    });
  }

  // all good
  function deleteTodoHandler(selectedTodo: TodoClass) {
    newTodoRef
      .doc(selectedTodo.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });

    console.log('todo deleted from database');
  }

  function startTodoHandler(selectedTodo: TodoClass) {
    console.log('STARTED TODO IS', selectedTodo);
    selectedTodo.status = 1;
  }

  // function retrieveInProgressTodoHandler() {
  //   inProgressTodoRef.onSnapshot((querySnapshot) => {
  //     const items: any = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     // setIsLoading(false);
  //   });
  // }

  function finishTodoHandler(selectedTodo: TodoClass) {
    console.log('FINISHED TODO IS', selectedTodo);
    return (selectedTodo.status = 2);
  }

  const contextValue: TodosContextObj = {
    items: todos,
    reloadRequired: false,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
    startTodo: startTodoHandler,
    finishTodo: finishTodoHandler,
    retrieveCurrentTodo: retrieveCurrentTodoHandler,
    // retrieveInProgressTodo: retrieveInProgressTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
