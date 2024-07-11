import { Typography } from "@mui/material";
import TodoInfo from "./TodoInfo";
import classes from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { todoActions } from "../store/todos";

function TodoList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("ListOfTodos")) || [];
    if (storedTasks.length > 0 && list.length === 0) {
      dispatch(todoActions.loadTasks(storedTasks));
    }
    localStorage.setItem("ListOfTodos", JSON.stringify(list));
  }, [list, dispatch]);

  return (
    <div>
      {list.length === 0 && (
        <Typography variant="h6" color={{ color: "white" }} align="center">
          The List is empty. Please add a new task.
        </Typography>
      )}
      {list.length > 0 && (
        <ul className={classes.list}>
          {list.map((todo) => (
            <TodoInfo key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
