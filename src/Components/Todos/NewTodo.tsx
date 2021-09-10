import React, { useContext, useState } from "react";
import { TodosContext } from "../../Store/TodosContext";
import { UserContext } from "../../Store/UserContext";
import { useForm } from "react-hook-form";

type FormValues = {
  title: string;
  body: string;
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
          Task
        </label>
        <input
          type="text"
          id="title"
          className="mt-2 h-10 px-4 w-full border-2 border-blue-400 rounded-lg focus:outline-none ring-4 ring-transparent focus:ring-blue-100"
          {...register("title", { required: true, maxLength: 60 })}
        />
        <p className="mt-6 text-2xl font-semibold tracking-wide text-gray-600">
          Priority
        </p>
        <section className="mt-2">
          <button
            className="h-8 w-20 bg-red-400 text-white font-normal tracking-wide rounded-lg mr-4 shadow-lg transform focus:scale-110 ring-4 ring-transparent focus:ring-red-100  hover:scale-110"
            type="button"
            value="1"
            name="urgency"
            onClick={() => setRadioValue(1)}
          >
            High
          </button>
          <button
            className="h-8 w-20 bg-yellow-300 text-white font-normal tracking-wide rounded-lg mr-4 shadow-lg transform focus:scale-110 ring-4 ring-transparent focus:ring-yellow-100 hover:scale-110"
            value="2"
            name="urgency"
            onClick={() => setRadioValue(2)}
            type="button"
          >
            Mid
          </button>
          <button
            className="h-8 w-20 bg-green-400 text-white font-normal tracking-wide rounded-lg mr-4 shadow-lg transform focus:scale-110 ring-4 ring-transparent focus:ring-green-100 hover:scale-110"
            value="3"
            name="urgency"
            onClick={() => setRadioValue(3)}
            type="button"
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

        <textarea
          id="body"
          className="mt-2 h-32 px-4 py-2 w-full border-2 border-blue-400 rounded-lg focus:outline-none ring-4 ring-transparent focus:ring-blue-100"
          style={{resize:'none'}}
          {...register("body", { required: false, maxLength: 1000 })}
        />
      </div>
      <button
        className="h-14 w-52 bg-blue-400 text-white text-2xl font-bold tracking-wide rounded-lg shadow-lg ring-4 ring-transparent hover:ring-blue-100"
        type="submit"
      >
        Save Task
      </button>
    </form>
  );
};
