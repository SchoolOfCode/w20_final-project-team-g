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
      <div className="flex flex-col items-start m-12">
        <label
          htmlFor="title"
          className="text-2xl font-semibold tracking-wide text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="mt-2 h-10 w-full border-2 border-blue-400 rounded-lg"
          {...register("title", { required: true, maxLength: 60 })}
        />
        {/* {errors?.title?.type === "required" && <p>This field is required</p>} */}
        <p className="mt-6 text-2xl font-semibold tracking-wide text-gray-600">
          Priority
        </p>
        <section className="mt-2">
          <button
            className="h-8 w-20 bg-red-400 text-white font-normal tracking-wide rounded-lg mr-4 shadow-lgp"
            value="1"
            name="urgency"
            onClick={() => setRadioValue(1)}
          >
            High
          </button>
          <button
            className="h-8 w-20 bg-yellow-300 text-white font-normal tracking-wide rounded-lg mr-4 shadow-lgp"
            value="2"
            name="urgency"
            onClick={() => setRadioValue(2)}
          >
            Mid
          </button>
          <button
            className="h-8 w-20 bg-green-400 text-white font-normal tracking-wide rounded-lg mr-4 shadow-lgp"
            value="3"
            name="urgency"
            onClick={() => setRadioValue(3)}
          >
            Low
          </button>
        </section>

        <label
          htmlFor="body"
          className="mt-6 text-2xl font-semibold tracking-wide text-gray-600"
        >
          Info
        </label>

        <input
          type="text"
          id="body"
          className="mt-2 h-36 w-full border-2 border-blue-400 rounded-lg"
          {...register("body", { required: false, maxLength: 1000 })}
        />
        {/* {errors?.body?.type === "required" && <p>this field is required</p>} */}
      </div>
      <button
        className="h-14 w-52 bg-blue-400 text-white text-2xl font-bold tracking-wide rounded-lg shadow-lgp"
        onClick={() => handleSubmit}
      >
        Save Task
      </button>
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
