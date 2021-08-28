import PomodoroTimer from "../Components/PomodoroTimer/PomodoroTimer";
import styles from "./Modal.module.css";
import { NewTodo } from "../Components/Todos/NewTodo";
const Modal = (props: any) => {
  return (
    <div className={styles.modal}>
      {props.children}
      {/* <NewTodo /> */}
      {/* <PomodoroTimer /> */}
      <button className="btn btn--alt" onClick={props.onCancel}>
        CANCEL
      </button>
    </div>
  );
};

export default Modal;
