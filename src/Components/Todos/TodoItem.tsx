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
  urgency: number;
  onRemoveTodo?: () => void;
  onStartTodo?: () => void;
  onFinish?: () => void;
}> = (props) => {
  return (
    <Fragment>
      <li className={styles.todoItem}>
        <h3>{props.text}</h3>
        <h5>Urgency {props.urgency}</h5>
        {props.urgency === 1 && <div className="bg-red-400 h-4 w-4"></div>}
        {props.urgency === 2 && <div className="bg-yellow-300 h-4 w-4"></div>}
        {props.urgency === 3 && <div className="bg-green-400 h-4 w-4"></div>}
        {/* {console.log("urgency", props.urgency.valueOf)} */}
        <p>Created By: {props.createdBy}</p>
        <button onClick={props.onStartTodo}>Start</button>
        <button onClick={props.onRemoveTodo}>Delete</button>
        <button onClick={props.onFinish}>Finish</button>
      </li>
    </Fragment>
  );
};

export default TodoItem;
