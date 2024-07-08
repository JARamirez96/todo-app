import { useRef } from "react";
// import classes from "./NewTodo.module.css";
import { Box, Button, Input, Modal, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store";

function NewTodo({ onAddTodo }) {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.isOpen);

  const inputRef = useRef();
  const descriptionRef = useRef();

  const newTodoHandler = () => {
    onAddTodo({
      title: inputRef.current.value,
      description: descriptionRef.current.value,
      status: "In Process",
    });
    inputRef.current.value = "";
    descriptionRef.current.value = "";
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
        sx={{ bgcolor: "white", borderRadius: 2, margin: "auto" }}
      >
        <Input placeholder="Title" type="text" inputRef={inputRef} />
        <TextField
          placeholder="Additional Notes"
          inputRef={descriptionRef}
          multiline
          rows={4}
        />
        <Button color="primary" variant="contained" onClick={newTodoHandler}>
          Add Task
        </Button>
      </Box>
    </Modal>
  );
}

export default NewTodo;
