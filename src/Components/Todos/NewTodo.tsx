import React, { useRef, useContext } from 'react';
import styles from './NewTodo.module.css';
import { TodosContext } from '../../Store/TodosContext';
import TodoClass from '../../Models/TodoClass';

export const NewTodo: React.FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let toDoData = todoInputRef.current!.value;
    const change = new TodoClass(toDoData);

    fetch(
      'https://kaizenpractice-db496-default-rtdb.europe-west1.firebasedatabase.app/currenttodos.json',
      {
        method: 'POST',
        body: JSON.stringify(change),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      
      // prop to TodoList to rerender?
      console.log('Tododata posted was:', change);
    });
    // catch any errors here
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Enter todo</label>
      <input ref={todoInputRef} type="text" id="text" />
      <button>Add todo</button>
    </form>
  );
};

// export const NewTodo: React.FC = () => {
//   const todoInputRef = useRef<HTMLInputElement>(null);

//   const todoCtx = useContext(TodosContext);

//   const submitHandler = (event: React.FormEvent) => {
//     event.preventDefault();
//     let todoText = todoInputRef.current!.value;
//     todoCtx.addTodo(todoText);
//   };
//   return (
//     <form onSubmit={submitHandler} className={styles.form}>
//       <label htmlFor="text">Enter todo</label>
//       <input ref={todoInputRef} type="text" id="text" />
//       <button>Add todo</button>
//     </form>
//   );
// return (
//   <section>
//     <h1>Add New Meetup</h1>
//     <NewMeetupForm onAddMeetup={addMeetupHandler} />
//   </section>
// };
