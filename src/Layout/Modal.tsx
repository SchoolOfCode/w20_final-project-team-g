import PomodoroTimer from "../Components/PomodoroTimer/PomodoroTimer";
import styles from "./Modal.module.css";
import { NewTodo } from "../Components/Todos/NewTodo";
const Modal = (props: any) => {
  return (
    <div className={styles.modal}>
      <NewTodo />
      <PomodoroTimer />
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default Modal;
