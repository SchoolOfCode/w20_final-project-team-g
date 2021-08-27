import PomodoroTimer from '../Components/PomodoroTimer/PomodoroTimer';
import styles from './Modal.module.css';
const Modal = (props: any) => {
  return (
    <div className={styles.modal}>
      {props.children}
    </div>
  );
};

export default Modal;
