import React, { Fragment, useContext } from "react";
import styles from "./Todolist.module.css";
import TodoItem from "./TodoItem";
import { TodosContext } from "../../Store/TodosContext";
import { TodoStatus } from "../../Models/TodoClass";

const CompletedTodos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <Fragment>
      <h3>DONE </h3>
      <ul className={styles.todos}>
        {todoCtx.items.map(
          (item) =>
            item.status === TodoStatus.done && (
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

export default CompletedTodos;
