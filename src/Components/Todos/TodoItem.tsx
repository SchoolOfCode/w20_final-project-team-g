
import { Fragment } from 'react';
import close from '../../images/modal-buttons/close.png';

const TodoItem: React.FC<{
  text: string;
  createdBy: string;
  urgency: number;
  todoBody: string;
  onRemoveTodo: () => void;
  onStartTodo: () => void;
  onFinish: () => void;
}> = (props) => {
let elipsesAdded = ""
if(props.todoBody.split(" ").length > 10){
  elipsesAdded = props.todoBody.split(" ").slice(0,10).join(" ") + "..."
} else{elipsesAdded = props.todoBody}

  return (
    <Fragment>
      <li className="mb-10 shadow-lg rounded-2xl transform hover:scale-105">
        <div className="flex justify-between">
          {props.urgency === 1 && (
            <div className="bg-red-400 h-2 w-14 rounded-full mt-6 ml-6"></div>
          )}
          {props.urgency === 2 && (
            <div className="bg-yellow-300 h-2 w-14 rounded-full mt-6 ml-6"></div>
          )}
          {props.urgency === 3 && (
            <div className="bg-green-400 h-2 w-14 rounded-full mt-6 ml-6"></div>
          )}
          <button
            onClick={props.onRemoveTodo}
            className="w-6 h-6 rounded-full cursor-pointer mt-4 mr-2 transform hover:scale-110 opacity-75 hover:opacity-100 ring-4 ring-transparent hover:ring-red-100"
          >
            <img src={close} className="w-6 h-6"/>
          </button>
        </div>
        <div onClick={props.onStartTodo} className=" px-6 pb-6 cursor-pointer">
          <h3 className="mt-2 text-base text-gray-600 font-bold">{props.text}</h3>
          <p className="mt-4 text-gray">{elipsesAdded}</p>
          <div className="mt-6 flex justify-center bg-blue-400 h-10 w-10 rounded-full">
            <p className="text-white self-center text-base font-semibold tracking-wider">
              {props.createdBy.match(/\b(\w)/g).join('')}
            </p>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default TodoItem;
