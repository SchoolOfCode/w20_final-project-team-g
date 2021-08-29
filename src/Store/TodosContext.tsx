import TodoClass from '../Models/TodoClass';
import React, { useState, useContext } from 'react';
import firebase from '../utilities/firebase';
import { TodoStatus } from '../Models/TodoClass';
import { PomodoroContext } from './PomodoroContext';
import { UserContext } from '../Store/UserContext';

type TodosContextObj = {
  items: TodoClass[];
  reloadRequired: boolean;
  modal: boolean;
  addTodo: (
    text: string,
    createdBy: string,
    todoBody: string,
    todoUrgency: number
  ) => void;
  removeTodo: (selectedTodo: TodoClass) => void;
  startTodo: (selectedTodo: TodoClass) => void;
  finishTodo: (selectedTodo: TodoClass) => void;
  retrieveCurrentTodo: () => void;
  closeModal: () => void;
  inProgressTodo: TodoClass;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  reloadRequired: false,
  addTodo: () => {},
  removeTodo: (selectedTodo: TodoClass) => {},
  startTodo: (selectedTodo: TodoClass) => {},
  finishTodo: (selectedTodo: TodoClass) => {},
  retrieveCurrentTodo: () => {},
  modal: false,
  closeModal: () => {},
  inProgressTodo: { todoTitle: '', id: '', date: '' },
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const todoRef = firebase.firestore().collection('todos');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const pomodoroCtx = useContext(PomodoroContext);
  const [inProgressTodo, setInProgressTodo] = useState<TodoClass>();

  function addTodoHandler(
    newTodoInput: string,
    createdBy: string,
    todoBody: string,
    todoUrgency
  ) {
    const newTodo = new TodoClass(
      newTodoInput,
      createdBy,
      todoBody,
      todoUrgency
    );
    todoRef
      .doc(newTodo.id)
      .set(Object.assign({}, newTodo))
      .catch((err) => {
        console.log(err);
      });
  }

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

  function deleteTodoHandler(selectedTodo: TodoClass) {
    todoRef
      .doc(selectedTodo.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });

    console.log('todo deleted from database');
  }

  function startTodoHandler(selectedTodo: TodoClass) {
    console.log('STARTED TODO IS', selectedTodo);
    setInProgressTodo(selectedTodo);
    console.log('moved to in progress is', inProgressTodo);

    todoRef.doc(selectedTodo.id).update({ status: TodoStatus.inProgress });
    setModalIsOpen(true);
    pomodoroCtx.resetSettings();
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function finishTodoHandler(selectedTodo: TodoClass) {
    todoRef.doc(selectedTodo.id).update({ status: TodoStatus.done }); //
  }

  const contextValue: TodosContextObj = {
    items: todos,
    reloadRequired: false,
    modal: modalIsOpen,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
    startTodo: startTodoHandler,
    finishTodo: finishTodoHandler,
    retrieveCurrentTodo: retrieveCurrentTodoHandler,
    closeModal: closeModalHandler,
    inProgressTodo: inProgressTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
