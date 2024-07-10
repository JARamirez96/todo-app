import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
  tasks: [],
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
    // removeFromList(state, action) {},
    // changeStatus(state, action){}
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
