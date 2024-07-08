import { createSlice } from "@reduxjs/toolkit";

const initialModalState = { isOpen: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    toggleShowModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
