import { Button, Typography } from "@mui/material";
import { modalActions } from "../store";
import { useDispatch } from "react-redux";

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
      <Button variant="contained" color="secondary" onClick={newTask}>
        New Task
      </Button>
    </div>
  );
}

export default Header;
