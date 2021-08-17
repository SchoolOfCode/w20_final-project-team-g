 import TodoClass from '../Models/TodoClass';
import React, { useState, useContext } from 'react';
import { isTemplateSpan } from 'typescript';

type TodosContextObj = {
  items: TodoClass[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  startTodo: (id: string) => void; // changes status to "in progress"
  finishTodo: (id: string) => void; // changes status to "Done"
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
  startTodo: (id: string) => {},
  finishTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);

  function addTodoHandler(todoText: string) {
    const newTodo = new TodoClass(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  function removeTodoHandler(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

  function startTodoHandler(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.status === 'in_progress');
    });
  }

  function finishTodoHandler() {
    //change status here to "done"
  }

  const context = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    startTodo: startTodoHandler,
    finishTodo: finishTodoHandler,
  };
};
export default TodosContextProvider;
