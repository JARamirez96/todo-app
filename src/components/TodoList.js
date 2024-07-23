import { Typography } from "@mui/material";
import TodoInfo from "./TodoInfo";
import classes from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { todoActions } from "../store/todos";
import { useFilteredTasks } from "../hooks/useFilteredTasks";
import { AnimatePresence, motion } from "framer-motion";

function TodoList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.tasks);
  const filter = useSelector((state) => state.todo.filter);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("ListOfTodos")) || [];
    if (storedTasks.length > 0) {
      dispatch(todoActions.loadTasks(storedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("ListOfTodos", JSON.stringify(list));
    } else {
      localStorage.removeItem("ListOfTodos");
    }
  }, [list]);

  const { filteredTasks } = useFilteredTasks(filter);

  return (
    <div>
      {filteredTasks.length === 0 && (
        <Typography variant="h6" mt={4} color="white" align="center">
          {filter === "All Tasks"
            ? `The List is empty. Please add a new task.`
            : `There are no tasks that have the status ${filter}`}
        </Typography>
      )}
      {filteredTasks.length > 0 && (
        <motion.ul className={classes.list}>
          <AnimatePresence>
            {filteredTasks.map((todo) => (
              <TodoInfo key={todo.id} {...todo} />
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  );
}

export default TodoList;
