import React, { useRef, useContext, useState } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../../Store/TodosContext";
import { UserContext } from "../../Store/UserContext";

export const NewTodo: React.FC<{ onCancel: () => void }> = (props: any) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todoBodyInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);
  const [radioValue, setRadioValue] = useState(null);
  const {
    userProfile: { name },
  } = useContext(UserContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let toDoData = todoInputRef.current!.value;
    let todoBody = todoBodyInputRef.current!.value;
    todoCtx.addTodo(toDoData, name, todoBody, radioValue); // saves to firebase
    todoCtx.closeModal();
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Enter todo</label>
      <input ref={todoInputRef} type="text" id="text" placeholder={"Title "} />
      <input
        ref={todoBodyInputRef}
        type="text"
        name="body"
        id="body"
        placeholder={"Body/notes goes here"}
      />
      <div className="radio-buttons">
        <p>Urgency: Default is 3</p>
        1
        <input
          value="1"
          name="urgency"
          type="radio"
          onChange={(e) => setRadioValue(Number(e.target.value))}
        />
        2
        <input
          value="2"
          name="urgency"
          type="radio"
          onChange={(e) => setRadioValue(Number(e.target.value))}
        />
        3
        <input
          value="3"
          defaultChecked
          name="urgency"
          type="radio"
          onChange={(e) => setRadioValue(Number(e.target.value))}
        />
      </div>
      <button onClick={props.onCancel && submitHandler}>Add todo</button>
    </form>
  );
};
