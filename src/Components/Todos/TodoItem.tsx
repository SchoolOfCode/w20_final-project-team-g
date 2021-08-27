// const TodoItem: React.FC<{
//   text: string;
// }> = (props) => {
//   return <li>{props.text}</li>;
// };
import { Fragment } from "react";
import styles from "./Todolist.module.css";

const TodoItem: React.FC<{
  text: string;
  createdBy: string;
  onRemoveTodo?: () => void;
  onStartTodo?: () => void;
  onFinish?: () => void;
}> = (props) => {
  return (
    <Fragment>
      <li className={styles.todoItem}>
        <h3>{props.text}</h3>

        <p>Created By: {props.createdBy}</p>
        <button onClick={props.onStartTodo}>Start</button>
        <button onClick={props.onRemoveTodo}>Delete</button>
        <button onClick={props.onFinish}>Finish</button>
      </li>
    </Fragment>
  );
};

export default TodoItem;
