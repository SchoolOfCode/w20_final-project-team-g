import React, { useState, useContext } from 'react';
import Modal from '../../Layout/Modal';
import BreakCard from '../BreakCard/BreakCard';
import { TodosContext } from '../../Store/TodosContext';

const YesNoModal = () => {
  const [presentBreak, setPresentBreak] = useState(false);
  const todoCtx = useContext(TodosContext);

  const presentBreakCard = () => {
      setPresentBreak(true);
      
  };

  const presentBreakCardUpdateTodo = () => {
    setPresentBreak(true);
    // todoCtx.finishTodo(); // the selected class needs to be passed here but idk how
   //todoCtx.finishTodo(todoCtx.items); // the selected class needs to be passed here but idk how
  };
  return (
    <div>
      <span>Did you finish?</span>
      <button onClick={presentBreakCardUpdateTodo}>Yes</button>
      <button onClick={presentBreakCard}>No</button>
      {presentBreak && (
        <Modal>
          <BreakCard />
        </Modal>
      )}
    </div>
  );
};

export default YesNoModal;
