
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
        className="h-10 w-36 bg-blue-400 text-white font-bold tracking-wide rounded-lg shadow-lg ring-4 ring-transparent hover:ring-blue-100 transform hover:scale-105"
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
