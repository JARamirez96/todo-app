import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import todoReducer from "./todos";

const store = configureStore({
  reducer: { modal: modalReducer, todo: todoReducer },
});

export default store;
