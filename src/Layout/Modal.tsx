import PomodoroTimer from "../Components/PomodoroTimer/PomodoroTimer";
import styles from "./Modal.module.css";
import { NewTodo } from "../Components/Todos/NewTodo";

import close from '../images/modal-buttons/close.png'
const Modal = (props: any) => {
  return (
    <div 
      className='h-560 w-640 fixed z-20 rounded-2xl shadow-2xl bg-white text-center' 
      style={{top:'50%', left:'50%', marginRight:'-50%', transform:'translate(-50%, -50%)'}}>
        <button 
          onClick={props.onCancel}
          className='cursor-pointer hover:opacity-100 opacity-75 float-right mt-6 mr-6 mb-4 transform hover:scale-110'
          >
            <img src={close} className="w-8 h-8"/>
        </button>
        {props.children}
    </div>
  );
};

export default Modal;
