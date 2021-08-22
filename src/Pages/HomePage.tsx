import { useState } from 'react';
import Modal from '../Layout/Modal';
import Backdrop from '../Layout/Backdrop';
import CardWrapper from '../Layout/CardWrapper';
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
      <CardWrapper>
        <button onClick={startTaskHandler}>
          START TASK: Modal test button
        </button>
      </CardWrapper>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default HomePage;
