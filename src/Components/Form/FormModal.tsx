// import styles from "./Modal.module.css";
// import { TodosContext } from '../../Store/TodosContext';
// import styles from "../../Layout/Modal.module.css";
import { NewTodo } from '../../Components/Todos/NewTodo';
import { useState } from 'react';
import Backdrop from '../../Layout/Backdrop';
import Modal from '../../Layout/Modal';

const FormModal = (props: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <button
        className="h-10 w-36 bg-blue-400 text-white font-bold tracking-wide rounded-2xl shadow-lg"
        onClick={() => setModalIsOpen(true)}
      >
        + New Task
      </button>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler}>
          <NewTodo onCancel={closeModalHandler} />
        </Modal>
      )}
      {modalIsOpen && <Backdrop onCancel={() => setModalIsOpen(false)} />}
    </div>
  );
};

export default FormModal;
