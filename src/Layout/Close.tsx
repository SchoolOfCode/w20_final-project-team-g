import styles from './Modal.module.css';

const Close = (props: any) => {
  return <div className={styles.close} onClick={props.onCancel} />;
};

export default Close;