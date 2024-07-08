import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  const [listOfTodos, setListOfTodos] = useState([]);

  const addTodoHandler = (value) => {
    setListOfTodos((prevState) => [...prevState, value]);
  };

  return (
    <Box sx={{ margin: "2rem 0 auto" }}>
      <Header />
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList list={listOfTodos} />;
    </Box>
  );
}

export default App;
