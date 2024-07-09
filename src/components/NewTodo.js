import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { Box, Button, Input, Modal, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todos";
import { modalActions } from "../store/modal";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function NewTodo() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.isOpen);

  const inputRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const newTodoHandler = () => {
    dispatch(
      todoActions.addToList({
        title: inputRef.current.value.trim(),
        description: descriptionRef.current.value.trim(),
        date: dateRef.current.value,
        status: "In Process",
      })
    );
    handleClose();
  };

  const handleClose = () => {
    dispatch(modalActions.toggleShowModal());
  };

  return (
    <Modal open={showModal} onClose={handleClose}>
      <Box
        p={2}
        gap={3}
        width={400}
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          margin: "auto",
          position: "relative",
          top: "7rem",
        }}
      >
        <Input placeholder="Title" type="text" inputRef={inputRef} />
        <TextField
          placeholder="Additional Notes"
          inputRef={descriptionRef}
          multiline
          rows={4}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem>
            <DesktopDatePicker label="Choose Date" inputRef={dateRef} />
          </DemoItem>
        </LocalizationProvider>
        <Button color="primary" variant="contained" onClick={newTodoHandler}>
          Add Task
        </Button>
      </Box>
    </Modal>
  );
}

export default NewTodo;
