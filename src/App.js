import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Header from "./components/UI/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ margin: "2rem auto auto", width: "50rem" }}>
      <Header />
      <NewTodo />
      <TodoList />
    </Box>
  );
}

export default App;
