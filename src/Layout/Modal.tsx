import styles from './Modal.module.css';
const Modal = (props: any) => {


  // add pomodoro here inside jsx

  return (
    <div className={styles.modal}>
      <p>Presenting the amazing pomodoro 🕙</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        start
      </button>
    </div>
  );
};

export default Modal;
