import styles from './Modal.module.css';

const Backdrop = (props: any) => {
  return <div className={styles.backdrop} onClick={props.onCancel} />;
};

export default Backdrop;
