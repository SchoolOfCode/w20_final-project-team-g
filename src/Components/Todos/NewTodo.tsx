import React, { useContext, useState } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../../Store/TodosContext";
import { UserContext } from "../../Store/UserContext";
import { useForm } from "react-hook-form";

type FormValues = {
  title: string;
  body: string;
  // urgency: number
};

export const NewTodo: React.FC<{ onCancel: () => void }> = (props: any) => {
  const todoCtx = useContext(TodosContext);
  const [radioValue, setRadioValue] = useState(null);
  const {
    userProfile: { name },
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const submitHandler = (data: FormValues, event: React.FormEvent) => {
    event.preventDefault();
    let { title, body } = data;
    todoCtx.addTodo(title, name, body, radioValue); // saves to firebase
    props.onCancel();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col items-start ">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title (Now set to required)"
          id="title"
          {...register("title", { required: true, maxLength: 60 })}
        />
        {errors?.title?.type === "required" && <p>This field is required</p>}
        <p className="">Priority</p>
        <button
          className="h-10 w-36 bg-red-400 text-white font-bold tracking-wide rounded-2xl shadow-lgp"
          value="1"
          name="urgency"
          onClick={() => setRadioValue(1)}
        >
          High
        </button>
        <button
          className="h-10 w-36 bg-yellow-300 text-white font-bold tracking-wide rounded-2xl shadow-lgp"
          value="2"
          name="urgency"
          onClick={() => setRadioValue(2)}
        >
          Mid
        </button>
        <button
          className="h-10 w-36 bg-green-400 text-white font-bold tracking-wide rounded-2xl shadow-lgp"
          value="3"
          name="urgency"
          onClick={() => setRadioValue(3)}
        >
          Low
        </button>
        <label htmlFor="body">Info</label>

        <input
          type="text"
          placeholder="Body (not set to required)"
          id="body"
          {...register("body", { required: false, maxLength: 1000 })}
        />
        {errors?.body?.type === "required" && <p>this field is required</p>}
        <button
          className="h-10 w-36 bg-blue-400 text-white font-bold tracking-wide rounded-2xl shadow-lgp"
          onClick={() => handleSubmit}
        >
          Save Task
        </button>
    </div>
      </form>
  );
};

//OLD FORM//
// return (
//   <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
//     <input type="text" {...register('example', { required: true })} />
//     <label htmlFor="text">Enter todo</label>
//     <input ref={todoInputRef} type="text" id="text" placeholder={'Title '} />
//     {errors.example && <span>Field required</span>}
//     <input
//       ref={todoBodyInputRef}
//       type="text"
//       name="body"
//       id="body"
//       placeholder={'Body/notes goes here'}
//     />
//     <div className="radio-buttons">
//       <p>Urgency: Default is 3</p>
//       1
//       <input
//         value="1"
//         name="urgency"
//         type="radio"
//         onChange={(e) => setRadioValue(Number(e.target.value))}
//       />
//       2
//       <input
//         value="2"
//         name="urgency"
//         type="radio"
//         onChange={(e) => setRadioValue(Number(e.target.value))}
//       />
//       3
//       <input
//         value="3"
//         defaultChecked
//         name="urgency"
//         type="radio"
//         onChange={(e) => setRadioValue(Number(e.target.value))}
//       />
//     </div>
//     <button onClick={submitHandler}>Add todo</button>
//   </form>
// );
