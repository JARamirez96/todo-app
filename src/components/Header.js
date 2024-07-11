import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal";
import Image from "../assets/appLogo.png";
import classes from "./Header.module.css";

function Header() {
  const dispatch = useDispatch();
  const newTask = () => {
    dispatch(modalActions.toggleShowModal());
  };

  const status = ["All Tasks", "In Process", "Completed", "Failed"];

  return (
    <div>
      <div className={classes.header}>
        <img src={Image} alt="taskImage" height="50" />
        <span className={classes.space}></span>
        <Typography variant="h3" align="center" style={{ color: "white" }}>
          Todo App
        </Typography>
      </div>
      <hr />
      <Box
        textAlign="center"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {status.map((item) => (
            <Typography key={item} className={classes.status}>
              {item}
            </Typography>
          ))}
        </Box>
        <Box>
          <Button variant="contained" color="secondary" onClick={newTask}>
            New Task
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
