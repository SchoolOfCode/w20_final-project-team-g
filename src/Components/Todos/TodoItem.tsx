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
      <li onClick={props.onStartTodo} className="mb-10 p-6 shadow-lg rounded-2xl cursor-pointer">
        {props.urgency === 1 && <div className="bg-red-400 h-2 w-14 rounded-full"></div>}
        {props.urgency === 2 && <div className="bg-yellow-300 h-2 w-14 rounded-full"></div>}
        {props.urgency === 3 && <div className="bg-green-400 h-2 w-14 rounded-full"></div>}
        <h3 className="text-base text-gray-600 font-semibold mt-2">{props.text}</h3>
        <p>Can't get the notes to render :(</p>
        <div className="flex justify-center bg-blue-400 h-10 w-10 rounded-full">
          <p className="text-white self-center text-base font-semibold tracking-wider">{props.createdBy.match(/\b(\w)/g).join('')}</p>
        </div>
        {/* <button onClick={props.onStartTodo}>Start</button> */}
        <button onClick={props.onRemoveTodo}>Delete</button>
        <button onClick={props.onFinish}>Finish</button>
      </li>
    </Fragment>
  );
};

export default TodoItem;
