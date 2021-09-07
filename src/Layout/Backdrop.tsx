import styles from './Modal.module.css';

const Backdrop = (props: any) => {
  return <div 
  className="fixed z-10 w-screen h-screen inset-0 backdrop-filter backdrop-blur" 
  onClick={props.onCancel} />;
};

export default Backdrop;
