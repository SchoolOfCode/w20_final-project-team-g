import TodoClass from "../Models/TodoClass";
import React, { useState } from "react";
//import { v4 as uuidv4 } from 'uuid';
import firebase from "../utilities/firebase";
import { TodoStatus } from "../Models/TodoClass";
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
  const todoRef = firebase.firestore().collection("todos");

  console.log("ALL TODO STATE", todos);

  function addTodoHandler(newTodoInput: string) {
    const newTodo = new TodoClass(newTodoInput);
    todoRef
      .doc(newTodo.id)
      .set(Object.assign({}, newTodo))
      .catch((err) => {
        console.log(err);
      });
  }

  // all good
  function retrieveCurrentTodoHandler() {
    setIsLoading(true);
    todoRef.onSnapshot((querySnapshot) => {
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
    todoRef
      .doc(selectedTodo.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });

    console.log("todo deleted from database");
  }

  function startTodoHandler(selectedTodo: TodoClass) {
    console.log("STARTED TODO IS", selectedTodo);

    // Need to update database
    todoRef
      .doc(selectedTodo.id) // inserted the todo id into here so firebase finds the correct Doc to update
      .update({ status: 1 }); //

    // sucessfully updates todos  in state, but since in "retrieveCurrentTodoHandler" we are retrieving the data from the
    // firebase, we also need to update the database here with the latest todos which I can't seem to do
    setTodos((prev) => {
      const indexToUpdate = prev.findIndex((todo) => todo.id === selectedTodo.id);
      const oldValue = prev[indexToUpdate];
      const newValue = Object.assign({}, oldValue, {
        status: TodoStatus.inProgress,
      });
      const updatedTodos = [
        // all items to left of what we are updating
        ...prev.slice(0, indexToUpdate),
        // the updated value
        newValue,
        // all the items to the right of what we are updating
        ...prev.slice(indexToUpdate + 1),
        // skip what was updated
      ];

      return updatedTodos;
    });
  }

  function finishTodoHandler(selectedTodo: TodoClass) {
    console.log("FINISHED TODO IS", selectedTodo);
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

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};
export default TodosContextProvider;