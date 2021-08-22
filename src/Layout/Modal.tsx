import PomodoroTimer from '../Components/PomodoroTimer/PomodoroTimer';
import styles from './Modal.module.css';
const Modal = (props: any) => {
  return (
    <div className={styles.modal}>
      <PomodoroTimer />
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default Modal;
