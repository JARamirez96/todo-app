import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

const store = configureStore({
  reducer: { modal: modalSlice.reducer },
});

export const modalActions = modalSlice.actions;
export default store;
