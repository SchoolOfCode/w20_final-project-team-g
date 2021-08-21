import React, { Fragment, useContext, useEffect } from "react";
import styles from "./Todolist.module.css";
import TodoItem from "./TodoItem";
import { TodosContext } from "../../Store/TodosContext";

const InProgress: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  useEffect(() => {
    console.log("InProgress useEffect rerun due to status change");
    todoCtx.retrieveCurrentTodo();
  }, []);

  return (
    <Fragment>
      <h3>In Progress</h3>
      <ul className={styles.todos}>
        {todoCtx.items.map(
          (item) =>
            item.status === 1 && (
              <TodoItem
                key={item.id}
                text={item.todoTitle}
                onFinish={todoCtx.finishTodo.bind(null, item)}
              >
                {item.todoTitle}
              </TodoItem>
            )
        )}
      </ul>
    </Fragment>
  );
};

export default InProgress;

// const InProgress: React.FC = (props) => {
//   const todoCtx = useContext(TodosContext);

//   return (
//     <Fragment>
//       <h3>In Progress</h3>
//       <ul className={styles.todos}>
//         {props.children}
//       </ul>
//     </Fragment>
//   );
// };

// export default InProgress;

//
