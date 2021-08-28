import React, { useContext } from "react";
import { TodosContext } from "../Store/TodosContext";

const AddTodoButton = () => {
  const todoCtx = useContext(TodosContext);
  //Probably add to tjhe foprm to close when its submitted? or an X in the form
  function closeModalHandler() {
    todoCtx.closeModal();
  }
  function openModalHandler() {
    todoCtx.openModal();
  }

  return (
    <div>
      <button onClick={openModalHandler}>Add todo modal</button>
    </div>
  );
};

export default AddTodoButton;
