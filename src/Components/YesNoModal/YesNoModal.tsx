import React, { useState, useContext } from "react";
import Modal from "../../Layout/Modal";
import { TodosContext } from "../../Store/TodosContext";
import yes from "../../images/yes-no/yes.png";
import no from "../../images/yes-no/no.png";
import helpIcon from "../../images/modal-buttons/help.png";
import styles from "./YesNoModal.module.css";
import Moodtracker from "../Moodtracker/Moodtracker";
const YesNoModal = () => {
  const [isPresentingMoodCard, setIsPresentingMoodCard] = useState(false);
  const todoCtx = useContext(TodosContext);

  function closeModalHandler() {
    todoCtx.closeModal();
  }

  const presentMoodCard = () => {
    setIsPresentingMoodCard(true);
  };

  const presentBreakCardUpdateTodo = () => {

    setIsPresentingMoodCard(true);
    todoCtx.finishTodo(todoCtx.inProgressTodo);
  };

  return (
    <div className="flex flex-col w-full h-full m-0 p-0 items-center">
      {!isPresentingMoodCard && (
        <section>
          <h2 className="mb-28 text-2xl font-semibold tracking-wide text-gray-600">
            Did you finish the task?
          </h2>
          <div className="flex mt-20">
            <section className="px-6">
              <button
              className="w-40 h-40 rounded-full border-8 border-green-400 p-6 shadow-lg ring-8 ring-transparent hover:ring-green-100 transform hover:scale-110"
              onClick={presentBreakCardUpdateTodo}>
                <img 
                  className="w-24 h-24"
                  src={yes} alt="yes" />
              </button>
              <p className="text-xl font-semibold tracking-wide text-gray-600 mt-6">
                All done!
              </p>
            </section>

            <section className="px-6">
              <button
               className="w-40 h-40 rounded-full border-8 border-yellow-300 p-6 shadow-lg ring-8 ring-transparent hover:ring-yellow-100 transform hover:scale-110" 
               onClick={presentMoodCard}>
                <img 
                  className="w-24 h-24"
                  src={no} alt="no" />
              </button>
              <p className="text-xl font-semibold tracking-wide text-gray-600 mt-6">
                Not yet...
              </p>
            </section>
          </div>
          {/* <div className={styles.tooltip}>
            <img src={helpIcon} alt="help tool" />
            <p className={styles.tooltiptext}>Don't touch me</p>
          </div> */}
        </section>
      )}

      {isPresentingMoodCard && (
        <Modal onCancel={closeModalHandler}>
          <Moodtracker />
        </Modal>
      )}
    </div>
  );
};

export default YesNoModal;
