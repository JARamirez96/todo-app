import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import Image from "../../assets/appLogo.png";
import classes from "./Header.module.css";
import { todoActions } from "../../store/todos";
import { useFilteredTasks } from "../../hooks/useFilteredTasks";

function Header() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todo.filter);
  const list = useSelector((state) => state.todo.tasks);

  const { statusCounts } = useFilteredTasks(activeFilter);

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
        <Box display="flex" alignItems="center">
          {status.map((item) => (
            <div
              key={item}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                display="flex"
                width={140}
                justifyContent="center"
                mb={0.7}
                alignItems="center"
              >
                <Typography
                  className={classes.status}
                  onClick={() => changeFilterHandler(item)}
                  sx={{ cursor: "pointer" }}
                >
                  {item}
                </Typography>
                <span style={{ width: ".5rem" }}></span>
                <span className={classes.totalFilter}>
                  {item === "All Tasks" ? list.length : statusCounts[item] || 0}
                </span>
              </Box>
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
