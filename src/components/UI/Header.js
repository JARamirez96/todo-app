import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import Image from "../../assets/appLogo.png";
import classes from "./Header.module.css";
import { todoActions } from "../../store/todos";

function Header() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todo.filter);
  const newTask = () => {
    dispatch(modalActions.toggleShowModal());
  };

  const changeFilterHandler = (filter) => {
    dispatch(todoActions.listFilter(filter));
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
            <div
              key={item}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                className={classes.status}
                onClick={() => changeFilterHandler(item)}
                sx={{ cursor: "pointer" }}
              >
                {item}
              </Typography>
              <span
                className={
                  item === activeFilter ? classes.active : classes.inactive
                }
              ></span>
            </div>
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
