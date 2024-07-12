import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
  tasks: [],
  filter: "All Tasks",
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodoState,
  reducers: {
    loadTasks(state, action) {
      state.tasks = action.payload;
    },
    addToList(state, action) {
      state.tasks = [...state.tasks, action.payload];
    },
    changeStatus(state, action) {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    listFilter(state, action) {
      state.filter = action.payload;
    },
    removeFromList(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
