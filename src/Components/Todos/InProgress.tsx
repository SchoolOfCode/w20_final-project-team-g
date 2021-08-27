import React, { Fragment, useContext } from "react";
import styles from "./Todolist.module.css";
import TodoItem from "./TodoItem";
import { TodosContext } from "../../Store/TodosContext";
import { TodoStatus } from "../../Models/TodoClass";

const InProgress: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <Fragment>
      <h3>In Progress</h3>
      <ul className={styles.todos}>
        {todoCtx.items.map(
          (item) =>
            item.status === TodoStatus.inProgress && (
              <TodoItem
                createdBy={item.createdBy}
                key={item.id}
                text={item.todoTitle}
                onStartTodo={todoCtx.startTodo.bind(null, item)}
                onFinish={todoCtx.finishTodo.bind(null, item)}
                onRemoveTodo={todoCtx.removeTodo.bind(null, item)}
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
