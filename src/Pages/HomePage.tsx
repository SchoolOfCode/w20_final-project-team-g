import { useState } from 'react';
import Modal from '../Layout/Modal';
import Backdrop from '../Layout/Backdrop';
const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function startTaskHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <h1>This is the homepage</h1>
      <button onClick={startTaskHandler}>START TASK: Modal test button</button>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default HomePage;
