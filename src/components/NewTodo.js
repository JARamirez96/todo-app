import { useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todos";
import { modalActions } from "../store/modal";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./NewTodo.module.css";
import { v4 as uuidv4 } from "uuid";

function NewTodo() {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.isOpen);

  const inputRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const newTodoHandler = () => {
    if (inputRef.current.value.trim() !== "" && dateRef.current.value !== "") {
      dispatch(
        todoActions.addToList({
          id: uuidv4(),
          title: inputRef.current.value.trim(),
          description: descriptionRef.current.value.trim(),
          date: dateRef.current.value,
          status: "In Process",
        })
      );
      handleClose();
    } else {
      setShowAlert(true);
    }
  };

  const handleClose = () => {
    dispatch(modalActions.toggleShowModal());
    setShowAlert(false);
  };

  return (
    <Modal open={showModal} onClose={handleClose}>
      <Box
        p={3}
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
        <Typography variant="h4">New Task</Typography>
        <TextField label="Title" variant="outlined" inputRef={inputRef} />
        <TextField
          label="Description"
          variant="outlined"
          inputRef={descriptionRef}
          multiline
          rows={4}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem>
            <DesktopDatePicker label="Choose Date" inputRef={dateRef} />
          </DemoItem>
        </LocalizationProvider>
        {showAlert && (
          <Alert variant="outlined" severity="error">
            The Task must have a Title and Date. Please add the missing
            information.
          </Alert>
        )}
        <div className={classes.buttons}>
          <Button
            sx={{ width: "45%" }}
            color="error"
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{ width: "45%" }}
            color="primary"
            variant="contained"
            onClick={newTodoHandler}
          >
            Add Task
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default NewTodo;
