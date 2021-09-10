import PomodoroTimer from "../Components/PomodoroTimer/PomodoroTimer";
import styles from "./Modal.module.css";
import { NewTodo } from "../Components/Todos/NewTodo";
const Modal = (props: any) => {
  return (
    <div 
      className='h-560 w-640 fixed z-20 rounded-2xl shadow-2xl bg-white text-center' 
      style={{top:'50%', left:'50%', marginRight:'-50%', transform:'translate(-50%, -50%)'}}>
        <button 
          onClick={props.onCancel}
          className='cursor-pointer text-gray-600 hover:opacity-100 text-4xl align-middle opacity-75 font-mono float-right mt-6 mr-6 transform hover:scale-110'
          >x
        </button>
        {props.children}
    </div>
  );
};

export default Modal;
