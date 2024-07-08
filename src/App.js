import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const listOfTodos = useSelector((state) => state.todo.tasks);

  return (
    <Box sx={{ margin: "2rem 0 auto" }}>
      <Header />
      <NewTodo />
      <TodoList list={listOfTodos} />
    </Box>
  );
}

export default App;
