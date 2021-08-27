import React, { useRef, useContext } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../../Store/TodosContext";
import { UserContext } from "../../Store/UserContext";

export const NewTodo: React.FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  // const todoInputRef = useRef<HTMLInputElement>(null); one for body etc
  const todoCtx = useContext(TodosContext);
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let toDoData = todoInputRef.current!.value;
    console.log(toDoData);
    // let nameInput = name;

    todoCtx.addTodo(toDoData); // saves to firebase
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Enter todo</label>
      <input ref={todoInputRef} type="text" id="text" />
      <button>Add todo</button>
    </form>
  );
};
