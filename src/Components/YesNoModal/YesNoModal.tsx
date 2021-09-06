import React, { useState, useContext } from "react";
import Modal from "../../Layout/Modal";
import { TodosContext } from "../../Store/TodosContext";
import yes from "../../images/yes-no/yes.png";
import no from "../../images/yes-no/no.png";
import helpIcon from "../../images/modal-buttons/help.png";
import styles from "./YesNoModal.module.css";
import closeTabIcon from "../../images/modal-buttons/close.png";
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
    <div className="m-2">
      {!isPresentingMoodCard && (
        <section>
          <div className={styles.closeIcon}>
            <img
              src={closeTabIcon}
              alt="close tab"
              onClick={closeModalHandler}
            />
          </div>
          <span className="flex mt-20 justify-center text-2xl font-semibold tracking-wide text-gray-600">
            Did you finish the task?
          </span>
          <div className="flex justify-center mt-20">
            <section>
              <img src={yes} alt="yes" onClick={presentBreakCardUpdateTodo} />
              <p className="text-xl font-semibold tracking-wide text-gray-600">
                {' '}
                All done!
              </p>
            </section>
            <section>
              <img src={no} alt="no" onClick={presentMoodCard} />
              <p className="text-xl font-semibold tracking-wide text-gray-600">
                Not yet...
              </p>
            </section>
          </div>
          <div className={styles.tooltip}>
            <img src={helpIcon} alt="help tool" />
            <p className={styles.tooltiptext}>Don't touch me</p>
          </div>
        </section>
      )}

      {isPresentingMoodCard && (
        <Modal>
          <Moodtracker />
        </Modal>
      )}
    </div>
  );
};

export default YesNoModal;
