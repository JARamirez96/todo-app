import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal";

function Header() {
  const dispatch = useDispatch();
  const newTask = () => {
    dispatch(modalActions.toggleShowModal());
  };

  return (
    <div>
      <Typography variant="h3" align="center" style={{ color: "white" }}>
        Todo App
      </Typography>
      <hr />
      <Box textAlign="end">
        <Button variant="contained" color="secondary" onClick={newTask}>
          New Task
        </Button>
      </Box>
    </div>
  );
}

export default Header;
